// @ts-nocheck
declare const ptr: any;
declare const Interceptor: any;
declare const Module: any;
declare const Memory: any;
declare const NativeFunction: any;
declare const Script: any;

const QUEST_PLATFORM = 1;
const SYMBOLS_URL = "https://pastebin.com/raw/0da0c4sr";

function parseUrl(url: string): {
  hostname: string;
  path: string;
  port: number;
} {
  const match = url.match(/^https?:\/\/([^/:]+)(?::(\d+))?(.*)$/);
  if (!match) {
    return { hostname: "", path: "/", port: 443 };
  }
  const hostname = match[1];
  const port = match[2]
    ? parseInt(match[2])
    : url.startsWith("https")
      ? 443 // made by byte
      : 80;
  const path = match[3] || "/";
  return { hostname, path, port };
}

function httpRequest(
  url: string,
  method: string,
  headers: any,
  body?: string, // made by byte
): Promise<{ status: number; data: string }> {
  return new Promise((resolve) => {
    try {
      const winhttp = Module.load("winhttp.dll");

      const WinHttpOpen = new NativeFunction(
        winhttp.getExportByName("WinHttpOpen"),
        "pointer",
        ["pointer", "uint32", "pointer", "pointer", "uint32"],
      );

      const WinHttpConnect = new NativeFunction(
        winhttp.getExportByName("WinHttpConnect"),
        "pointer",
        ["pointer", "pointer", "uint32", "uint32"],
      ); // made by byte

      const WinHttpOpenRequest = new NativeFunction(
        winhttp.getExportByName("WinHttpOpenRequest"),
        "pointer",
        [
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "uint32",
        ],
      );

      const WinHttpSendRequest = new NativeFunction(
        winhttp.getExportByName("WinHttpSendRequest"),
        "bool",
        [
          "pointer",
          "pointer", // made by byte
          "uint32",
          "pointer",
          "uint32",
          "uint32",
          "pointer",
        ],
      );

      const WinHttpReceiveResponse = new NativeFunction(
        winhttp.getExportByName("WinHttpReceiveResponse"),
        "bool",
        ["pointer", "pointer"],
      );

      const WinHttpQueryHeaders = new NativeFunction(
        winhttp.getExportByName("WinHttpQueryHeaders"), // made by byte
        "bool",
        ["pointer", "uint32", "pointer", "pointer", "pointer", "pointer"],
      );

      const WinHttpReadData = new NativeFunction( // made by byte
        winhttp.getExportByName("WinHttpReadData"),
        "bool",
        ["pointer", "pointer", "uint32", "pointer"],
      );

      const WinHttpCloseHandle = new NativeFunction(
        winhttp.getExportByName("WinHttpCloseHandle"), // made by byte
        "bool",
        ["pointer"],
      );

      const WinHttpSetOption = new NativeFunction(
        winhttp.getExportByName("WinHttpSetOption"),
        "bool",
        ["pointer", "uint32", "pointer", "uint32"],
      );

      const WinHttpSetTimeouts = new NativeFunction(
        winhttp.getExportByName("WinHttpSetTimeouts"),
        "bool",
        ["pointer", "int32", "int32", "int32", "int32"],
      );

      const GetLastError = new NativeFunction(
        Module.load("kernel32.dll").getExportByName("GetLastError"),
        "uint32",
        [],
      );

      const urlParts = parseUrl(url);
      const hostname = urlParts.hostname;
      const path = urlParts.path;
      const port = urlParts.port;

      const userAgent = Memory.allocUtf16String(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      );
      const hSession = WinHttpOpen(userAgent, 0, ptr(0), ptr(0), 0);

      if (hSession.isNull()) {
        resolve({
          status: 0,
          data: "WinHttpOpen failed (" + GetLastError() + ")",
        });
        return;
      }

      WinHttpSetTimeouts(hSession, 5000, 5000, 5000, 5000);

      const hostnameW = Memory.allocUtf16String(hostname);
      const hConnect = WinHttpConnect(hSession, hostnameW, port, 0);

      if (hConnect.isNull()) {
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpConnect failed" });
        return;
      }

      const pathW = Memory.allocUtf16String(path);
      const methodW = Memory.allocUtf16String(method);
      const hRequest = WinHttpOpenRequest(
        hConnect,
        methodW,
        pathW,
        ptr(0),
        ptr(0),
        ptr(0),
        url.startsWith("https") ? 0x00800000 : 0,
      );

      if (hRequest.isNull()) {
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpOpenRequest failed" });
        return;
      }

      const flagsBuf = Memory.alloc(4);
      flagsBuf.writeU32(0x00000100 | 0x00000200 | 0x00001000 | 0x00002000);
      WinHttpSetOption(hRequest, 31, flagsBuf, 4);

      let headersStr = "";
      for (const key in headers) {
        headersStr += key + ": " + headers[key] + "\r\n";
      }
      const headersW = Memory.allocUtf16String(headersStr);

      const bodyPtr = body ? Memory.allocUtf8String(body) : ptr(0);
      const bodyLen = body ? body.length : 0;

      if (
        !WinHttpSendRequest(
          hRequest,
          headersW,
          -1,
          bodyPtr,
          bodyLen,
          bodyLen,
          ptr(0),
        )
      ) {
        const err = GetLastError();
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({ status: 0, data: "WinHttpSendRequest failed (" + err + ")" });
        return;
      }

      if (!WinHttpReceiveResponse(hRequest, ptr(0))) {
        const err = GetLastError();
        WinHttpCloseHandle(hRequest);
        WinHttpCloseHandle(hConnect);
        WinHttpCloseHandle(hSession);
        resolve({
          status: 0,
          data: "WinHttpReceiveResponse failed (" + err + ")",
        });
        return;
      }

      const statusBuffer = Memory.alloc(4);
      const statusSize = Memory.alloc(4);
      statusSize.writeU32(4);

      WinHttpQueryHeaders(
        hRequest,
        0x20000013,
        ptr(0),
        statusBuffer,
        statusSize,
        ptr(0),
      );
      const statusCode = statusBuffer.readU32();

      const buffer = Memory.alloc(8192);
      const bytesRead = Memory.alloc(4);
      let responseData = "";

      while (WinHttpReadData(hRequest, buffer, 8192, bytesRead)) {
        const size = bytesRead.readU32();
        if (size === 0) break;
        responseData += buffer.readUtf8String(size);
      }

      WinHttpCloseHandle(hRequest);
      WinHttpCloseHandle(hConnect);
      WinHttpCloseHandle(hSession);

      resolve({ status: statusCode, data: responseData });
    } catch (e) {
      console.log("[-] HTTP request error: " + e);
      resolve({ status: 0, data: "Error: " + e });
    }
  });
}

async function loadQuestServers() {
  console.log("\n");
  console.log("[+] Unpatchable Quest Servers");
  console.log("[+] Made by w2g8 on discord...");

  const symResponse = await httpRequest(SYMBOLS_URL, "GET", {});
  if (symResponse.status === 200) {
    try {
      eval(symResponse.data);

      const mapping: any = {
  "il2cpp_init": "cQRpIwaXyWY",
  "il2cpp_init_utf16": "PxrJLcRoFQg",
  "il2cpp_shutdown": "pCENhDglOBA",
  "il2cpp_set_config_dir": "mFRBDmHiSMX",
  "il2cpp_set_data_dir": "uEFzRjsa_ux",
  "il2cpp_set_temp_dir": "ZRRaIhIJe_T",
  "il2cpp_set_commandline_arguments": "OqYBKfyorBX",
  "il2cpp_set_commandline_arguments_utf16": "xvsimBlpAta",
  "il2cpp_set_config_utf16": "AkVBnDonIGs",
  "il2cpp_set_config": "XGWRijagOqM",
  "il2cpp_set_memory_callbacks": "PlMPFSnnYE_",
  "il2cpp_memory_pool_set_region_size": "ydUluoMktap",
  "il2cpp_memory_pool_get_region_size": "nlRLMjxs_fA",
  "il2cpp_get_corlib": "mwLFOtLXjhV",
  "il2cpp_add_internal_call": "hPDbnWcMlds",
  "il2cpp_resolve_icall": "hBdjWAaxOIf",
  "il2cpp_alloc": "CYiZmnuegYh",
  "il2cpp_free": "iNlQMpiepWq",
  "il2cpp_array_class_get": "ctOeDwwZPS_",
  "il2cpp_array_length": "euMFsfqdDPl",
  "il2cpp_array_get_byte_length": "sBBtG_UJe_S",
  "il2cpp_array_new": "EGduGF_ndRT",
  "il2cpp_array_new_specific": "_cociEqlAqf",
  "il2cpp_array_new_full": "arxKXdpdquf",
  "il2cpp_bounded_array_class_get": "BjvemNNiTjL",
  "il2cpp_array_element_size": "hQtvgfptWpZ",
  "il2cpp_assembly_get_image": "HtYMFpQNSGR",
  "il2cpp_class_for_each": "RgKkgPFxhjQ",
  "il2cpp_class_enum_basetype": "ZtPrLsoiNfx",
  "il2cpp_class_is_inited": "tPIbmMVFCya",
  "il2cpp_class_is_generic": "FogcxelFIqd",
  "il2cpp_class_is_inflated": "CAnWPYH_MWm",
  "il2cpp_class_is_assignable_from": "idorKDspP_G",
  "il2cpp_class_is_subclass_of": "AQLUQyLPuQM",
  "il2cpp_class_has_parent": "LzOYwVcImCu",
  "il2cpp_class_from_il2cpp_type": "DWRWimgNhIb",
  "il2cpp_class_from_name": "cVMLJuHohDc",
  "il2cpp_class_from_system_type": "JOwwQsTMUUp",
  "il2cpp_class_get_element_class": "AcQjKZIvFZH",
  "il2cpp_class_get_events": "qrdZdjgClzF",
  "il2cpp_class_get_fields": "DydLPaceQTf",
  "il2cpp_class_get_nested_types": "NVMVwuuYsGD",
  "il2cpp_class_get_interfaces": "lyGaYzIkjPn",
  "il2cpp_class_get_properties": "yEcBvpMbUI_",
  "il2cpp_class_get_property_from_name": "lsgtPViESIg",
  "il2cpp_class_get_field_from_name": "mBZLjQNox_X",
  "il2cpp_class_get_methods": "NKyQDVQyguS",
  "il2cpp_class_get_method_from_name": "pulmjawJMlO",
  "il2cpp_class_get_name": "FhJgjiYouJW",
  "il2cpp_type_get_name_chunked": "HZsbCOrZmfd",
  "il2cpp_class_get_namespace": "PxlGibxwEyI",
  "il2cpp_class_get_parent": "UPfkvIDUaVQ",
  "il2cpp_class_get_declaring_type": "gaGFnoowcze",
  "il2cpp_class_instance_size": "CRHrzKToxKO",
  "il2cpp_class_num_fields": "lqqMoCexPOM",
  "il2cpp_class_is_valuetype": "tNnLEPSYklK",
  "il2cpp_class_value_size": "GtSEVrJkyHB",
  "il2cpp_class_is_blittable": "byjFsLNTVgT",
  "il2cpp_class_get_flags": "WgZPCkXrgll",
  "il2cpp_class_is_abstract": "wbUoUrxEMOx",
  "il2cpp_class_is_interface": "WUgAXlUbnKn",
  "il2cpp_class_array_element_size": "f__dpqKSpRe",
  "il2cpp_class_from_type": "JgDGzpXopuG",
  "il2cpp_class_get_type": "dQahwNRXSpj",
  "il2cpp_class_get_type_token": "w_CaVTuIFIp",
  "il2cpp_class_has_attribute": "cKtFAnJituy",
  "il2cpp_class_has_references": "oumBHJLDvJh",
  "il2cpp_class_is_enum": "KpNrCvCXyTZ",
  "il2cpp_class_get_image": "DeZZTwbPlNn",
  "il2cpp_class_get_assemblyname": "XdqKJyCnFkE",
  "il2cpp_class_get_rank": "FxCDKRIkVIp",
  "il2cpp_class_get_data_size": "eOFkrqRYqhM",
  "il2cpp_class_get_static_field_data": "GPzEQJYU_jd",
  "il2cpp_stats_dump_to_file": "TsvKdJL_xTY",
  "il2cpp_stats_get_value": "DAuASbJYfbI",
  "il2cpp_domain_get": "gGPpIdWtTo_",
  "il2cpp_domain_assembly_open": "AicLKWmKxgZ",
  "il2cpp_domain_get_assemblies": "bXkRTlhcjP_",
  "il2cpp_raise_exception": "ukEQHfvWFqM",
  "il2cpp_exception_from_name_msg": "ezPlgUe_TjL",
  "il2cpp_get_exception_argument_null": "uQHSilPqZDS",
  "il2cpp_format_exception": "BXTHIOuvEOZ",
  "il2cpp_format_stack_trace": "papjjnlLNjX",
  "il2cpp_unhandled_exception": "hbclHmAFwbV",
  "il2cpp_native_stack_trace": "fwzvVuSbgxA",
  "il2cpp_field_get_flags": "iTKMhnSSmlA",
  "il2cpp_field_get_from_reflection": "CRCfQlLhUYS",
  "il2cpp_field_get_name": "iDpCBMuxaFI",
  "il2cpp_field_get_parent": "PBUASpYrAJG",
  "il2cpp_field_get_object": "fdNPXcKvGlc",
  "il2cpp_field_get_offset": "VZzwgPnpmSB",
  "il2cpp_field_get_type": "TtfvOKzXJIM",
  "il2cpp_field_get_value": "gyJTPptxSRL",
  "il2cpp_field_get_value_object": "DphFdRHCAPG",
  "il2cpp_field_has_attribute": "K_SB_EBQPUp",
  "il2cpp_field_set_value": "jDWiajYNeWn",
  "il2cpp_field_static_get_value": "hynunach_BM",
  "il2cpp_field_static_set_value": "jvCHxFusxAl",
  "il2cpp_field_set_value_object": "bniLPmOJxEV",
  "il2cpp_field_is_literal": "UdlUNrIuTQs",
  "il2cpp_gc_collect": "mnoxKZPuqmF",
  "il2cpp_gc_collect_a_little": "gzkXPhmmHMD",
  "il2cpp_gc_start_incremental_collection": "KKyRjTniXQY",
  "il2cpp_gc_disable": "KRNBkbcjZti",
  "il2cpp_gc_enable": "hXmEwpBLdjo",
  "il2cpp_gc_is_disabled": "gMHQebMlsVg",
  "il2cpp_gc_set_mode": "edKOUxdV_wI",
  "il2cpp_gc_get_max_time_slice_ns": "MIlqpjsKGXe",
  "il2cpp_gc_set_max_time_slice_ns": "LuhSpugXqUu",
  "il2cpp_gc_is_incremental": "SnxibQOionH",
  "il2cpp_gc_get_used_size": "TOmjuPpRfgQ",
  "il2cpp_gc_get_heap_size": "DFpSQulKtcV",
  "il2cpp_gc_wbarrier_set_field": "ODTz_Nn_uQK",
  "il2cpp_gc_has_strict_wbarriers": "oemslgClpGt",
  "il2cpp_gc_set_external_allocation_tracker": "jWA_DvVh_Ld",
  "il2cpp_gc_set_external_wbarrier_tracker": "ERfsKdmdfXx",
  "il2cpp_gc_foreach_heap": "uXKJeTteKBN",
  "il2cpp_stop_gc_world": "HLzgRfoZMRR",
  "il2cpp_start_gc_world": "JjLzIBbSEjO",
  "il2cpp_gc_alloc_fixed": "OiwbCQiHCEr",
  "il2cpp_gc_free_fixed": "ildSrHsKOht",
  "il2cpp_gchandle_new": "qmTZjeoy_IG",
  "il2cpp_gchandle_new_weakref": "ghUVvrWYQyg",
  "il2cpp_gchandle_get_target": "vIdCoOXLNCG",
  "il2cpp_gchandle_free": "_hWCxbOON_K",
  "il2cpp_gchandle_foreach_get_target": "pEcAvLHZCIV",
  "il2cpp_object_header_size": "qrQoSwpQfpN",
  "il2cpp_array_object_header_size": "edBbDswOYSo",
  "il2cpp_offset_of_array_length_in_array_object_header": "UdBzotxseRN",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "fmppbaQZJwO",
  "il2cpp_allocation_granularity": "CKQyevIJrOA",
  "il2cpp_unity_liveness_allocate_struct": "DdRgEoUMNmI",
  "il2cpp_unity_liveness_calculation_from_root": "NpKgr_XSOaW",
  "il2cpp_unity_liveness_calculation_from_statics": "CqolSZrkzpm",
  "il2cpp_unity_liveness_finalize": "LwwwsQNRrld",
  "il2cpp_unity_liveness_free_struct": "LSyROAygqDz",
  "il2cpp_method_get_return_type": "BNXIQvMRlvF",
  "il2cpp_method_get_declaring_type": "BDDWqiaXdoi",
  "il2cpp_method_get_name": "fsJBMxauNxr",
  "il2cpp_method_get_from_reflection": "pYorVsjibEJ",
  "il2cpp_method_get_object": "lXw_hMLEiKS",
  "il2cpp_method_is_generic": "kNpgMDJlpZb",
  "il2cpp_method_is_inflated": "PdTOashcCRq",
  "il2cpp_method_is_instance": "PZresYyPNGk",
  "il2cpp_method_get_param_count": "WrkINaXWaQZ",
  "il2cpp_method_get_param": "wNiVsWidCHo",
  "il2cpp_method_get_class": "VrxGmHMIjvY",
  "il2cpp_method_has_attribute": "VSQUxiZrbFU",
  "il2cpp_method_get_flags": "auZniDBgqX_",
  "il2cpp_method_get_token": "nTQODcToEdy",
  "il2cpp_method_get_param_name": "qDsBVypzPIs",
  "il2cpp_property_get_flags": "GOoEHulfkxJ",
  "il2cpp_property_get_get_method": "KvGBKEgHTeb",
  "il2cpp_property_get_set_method": "suxfqbHpGWm",
  "il2cpp_property_get_name": "kKFZWgrhu_h",
  "il2cpp_property_get_parent": "QHgqgKbcPjg",
  "il2cpp_object_get_class": "wemKuKtPQ_x",
  "il2cpp_object_get_size": "PlvQGQpFFEU",
  "il2cpp_object_get_virtual_method": "IHGbGWWFokY",
  "il2cpp_object_new": "qjmGmOhXaen",
  "il2cpp_object_unbox": "aSalOlek_aU",
  "il2cpp_value_box": "MZVTarrtXTq",
  "il2cpp_monitor_enter": "lsxilQwGRqy",
  "il2cpp_monitor_try_enter": "gntONMrcrE_",
  "il2cpp_monitor_exit": "NprDtfDhveS",
  "il2cpp_monitor_pulse": "fmIWLOpPYfv",
  "il2cpp_monitor_pulse_all": "IlsmixFKvGT",
  "il2cpp_monitor_wait": "vDwPmm_GyHH",
  "il2cpp_monitor_try_wait": "jjYLPvwJRFv",
  "il2cpp_runtime_invoke": "YyKPAbdSYVV",
  "il2cpp_runtime_invoke_convert_args": "IToSJXYcJrR",
  "il2cpp_runtime_class_init": "KSXVhUpQdjG",
  "il2cpp_runtime_object_init": "fs__GuZojHL",
  "il2cpp_runtime_object_init_exception": "xiWaqvvziGC",
  "il2cpp_runtime_unhandled_exception_policy_set": "plVkEXCBjpd",
  "il2cpp_string_length": "jsoknjaCCyQ",
  "il2cpp_string_chars": "AiidCCgYTaN",
  "il2cpp_string_new": "tZ_yxBwwYmX",
  "il2cpp_string_new_len": "h_ZlgZbfhFA",
  "il2cpp_string_new_utf16": "MDQHeNWDaOb",
  "il2cpp_string_new_wrapper": "XVVcCVELCDd",
  "il2cpp_string_intern": "HcBEtjajiWN",
  "il2cpp_string_is_interned": "nGdMuUHgdPX",
  "il2cpp_thread_current": "_BewaDdSWPW",
  "il2cpp_thread_attach": "TizzmDzzgDB",
  "il2cpp_thread_detach": "qkrMxmixIyy",
  "il2cpp_is_vm_thread": "NIskAlIbERJ",
  "il2cpp_current_thread_walk_frame_stack": "rXfhyXbvJGR",
  "il2cpp_thread_walk_frame_stack": "GJrcxPfjFIC",
  "il2cpp_current_thread_get_top_frame": "xpsQTclLTls",
  "il2cpp_thread_get_top_frame": "yRFdsrOm_qX",
  "il2cpp_current_thread_get_frame_at": "TnSnomscSrj",
  "il2cpp_thread_get_frame_at": "clIPigsfX_N",
  "il2cpp_current_thread_get_stack_depth": "_kZCyaCiCWw",
  "il2cpp_thread_get_stack_depth": "tZBLVXLfyfm",
  "il2cpp_override_stack_backtrace": "jTCJ_QEojtM",
  "il2cpp_type_get_object": "QbybSxjSnjZ",
  "il2cpp_type_get_type": "PevzulRKTB_",
  "il2cpp_type_get_class_or_element_class": "XpNMWqPIqjp",
  "il2cpp_type_get_name": "cuW_cQoPHPc",
  "il2cpp_type_is_byref": "HsWfEZzueuM",
  "il2cpp_type_get_attrs": "onzBKxESzey",
  "il2cpp_type_equals": "xUAeLDFvxHT",
  "il2cpp_type_get_assembly_qualified_name": "MMwFwkcZUyE",
  "il2cpp_type_get_reflection_name": "nHpSArXyxqQ",
  "il2cpp_type_is_static": "acNyeUWkbBV",
  "il2cpp_type_is_pointer_type": "AuTPZRfAnXM",
  "il2cpp_image_get_assembly": "hPwYLZDiPwG",
  "il2cpp_image_get_name": "qXrsufilbZm",
  "il2cpp_image_get_filename": "LfmcvqwyYAe",
  "il2cpp_image_get_entry_point": "wcTYMbChqan",
  "il2cpp_image_get_class_count": "yhFnzM_zyhW",
  "il2cpp_image_get_class": "cCHzBakhSLq",
  "il2cpp_capture_memory_snapshot": "mJSodrAKtub",
  "il2cpp_free_captured_memory_snapshot": "dAExchBljVK",
  "il2cpp_set_find_plugin_callback": "TsTGwiolcpH",
  "il2cpp_register_log_callback": "DObbunniHcM",
  "il2cpp_debugger_set_agent_options": "vXXpWfEahIR",
  "il2cpp_is_debugger_attached": "vOXEcopsiTI",
  "il2cpp_register_debugger_agent_transport": "bpmpZfWqEaO",
  "il2cpp_debug_foreach_method": "HjNHbbOrfCE",
  "il2cpp_debug_get_method_info": "esLnaxnyKkh",
  "il2cpp_unity_install_unitytls_interface": "AqidfQzMQWY",
  "il2cpp_custom_attrs_from_class": "gRuKT_tBH__",
  "il2cpp_custom_attrs_from_method": "NVYnyiCpY_U",
  "il2cpp_custom_attrs_from_field": "fWNAx_dlWTZ",
  "il2cpp_custom_attrs_get_attr": "SjhiNnuu_lu",
  "il2cpp_custom_attrs_has_attr": "gIHfmSpOVqn",
  "il2cpp_custom_attrs_construct": "MW_XKyRYeAn",
  "il2cpp_custom_attrs_free": "WqEdnZLRLxR",
  "il2cpp_class_set_userdata": "weXOrWGCAeZ",
  "il2cpp_class_get_userdata_offset": "qzQTNhbLt_A",
  "il2cpp_set_default_thread_affinity": "XccrsghusMb",
  "il2cpp_unity_set_android_network_up_state_func": "BsTwiNaGHRD"
};

      const symbols = (Il2Cpp as any).$config.exports;
      if (symbols) {
        for (const key in symbols) {
          if (mapping[key]) {
            symbols[mapping[key]] = symbols[key];
          }
        }
      }

  Il2Cpp.perform(() => {
    const findClass = (n: string) => {
      for (const a of Il2Cpp.domain.assemblies) {
        try {
          const k = a.image.tryClass(n);
          if (k) return k;
        } catch (_) {}
      }
      return null;
    };

    const AppUtils = findClass("AnimalCompany.AppUtils");
    if (!AppUtils) {
      console.log("[-] AppUtils not found");
      return;
    }

    let method: any = null;
    for (const m of AppUtils.methods) {
      if (
        /CalculatePhotonAppVersion/i.test(m.name) &&
        (m.returnType?.name || "") === "System.String"
      ) {
        method = m;
        break;
      }
    }

    if (!method) {
      console.log("[-] CalculatePhotonAppVersion not found");
      return;
    }

    Interceptor.attach(method.virtualAddress, {
      onEnter(args: any) {
        try {
          args[2] = ptr(QUEST_PLATFORM);
        } catch (_) {}
      },
    });
  });
    } catch (e) {
      console.log("[-] Error: " + e);
    }
  }
}

loadQuestServers();
