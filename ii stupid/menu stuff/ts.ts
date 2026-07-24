// By That1dev

declare const Il2Cpp: any;

declare const XRNode: any;
declare const AnimalCompany: any;

declare var console: any;

declare var Vector3: any;
declare var Quaternion: any;
declare var Time: any;

declare var NULL2: any;

declare function getInstance(): any;
declare function getGTPlayer(): any;
declare function getTransform(obj: any): any;
declare function getComponent(obj: any, type: any): any;
declare function safeField(obj: any, field: string): any;
declare function Destroy(obj: any): void;

declare var AssemblyCSharp: any;
declare var GBOClass: any;
declare var PrefabGen: any;
declare var NetPlayer: any;

Il2Cpp.$config.exports = {
	il2cpp_init: () => Il2Cpp.module.findExportByName("xCDPJp_mzeS"),
	il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("ZqbXCVjOfjp"),
	il2cpp_shutdown: () => Il2Cpp.module.findExportByName("AaFj_FHKudI"),
	il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("QWQedEgddFi"),
	il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("tBQbdjbhTnh"),
	il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("rMCuOKP_EvH"),
	il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("jJGXLQGlGcl"),
	il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("ytrbfsCtOFH"),
	il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("OSLVcqAjjGg"),
	il2cpp_set_config: () => Il2Cpp.module.findExportByName("ZEsAwVRbLGQ"),
	il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("qEZlbwRBnvD"),
	il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("ZN_l_dtjQtw"),
	il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("nEAqbKLyvcz"),
	il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("IOusicmQMEB"),
	il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("knKeOmPkPFu"),
	il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("QEqUHFkCGBP"),
	il2cpp_alloc: () => Il2Cpp.module.findExportByName("AzvdAiTUtOK"),
	il2cpp_free: () => Il2Cpp.module.findExportByName("BQCsCqwLmDN"),
	il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("klQCLLgsDlu"),
	il2cpp_array_length: () => Il2Cpp.module.findExportByName("cIhaTpovMji"),
	il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("HyaujMBtwtt"),
	il2cpp_array_new: () => Il2Cpp.module.findExportByName("hyssMqkRmf_"),
	il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("gNblELtgcNc"),
	il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("DZvNpefSnzx"),
	il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("octXFmkeHOi"),
	il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("SUpHqQSgWOX"),
	il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("MyRlzDyltOd"),
	il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("XZPYHzJSgah"),
	il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("XjtnskqKVUr"),
	il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("tklVWUKxaJn"),
	il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("ktNxjTMasJM"),
	il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("zPClcdwnARt"),
	il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("BuTeBzFsVze"),
	il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("KoFlWlxVHtU"),
	il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("zMNOkdKVEIY"),
	il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("aW_yXt_Ffus"),
	il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("blVnIJnzVVL"),
	il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("OlenWmqDvgw"),
	il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("VTwPlcNQVzK"),
	il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("b_rW_KZHmiz"),
	il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("vSIhWZQsRnX"),
	il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("EKlvxYUxwdU"),
	il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("lSXRrEylKoi"),
	il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("koejzmhGwjn"),
	il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("tIm_XJXEDfJ"),
	il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("_UWEpsjSZYw"),
	il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("ubUHIeYuVrf"),
	il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("MPPHTPLMF_Y"),
	il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("sRGpBOHuNaf"),
	il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("jEYlDNHXCmx"),
	il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("kgbeobvUXbC"),
	il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("FAWrOGkQtH_"),
	il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("ufFtNJvyanb"),
	il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("pHtFKSE_ors"),
	il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("jzrcPvtNmuP"),
	il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("EJLiPJExPpK"),
	il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("ZDpNRRi_PmD"),
	il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("lpTdNKzgedg"),
	il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("zQMAyFZSnTi"),
	il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("CcyQCTySBRG"),
	il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("GVeJnHPGmwJ"),
	il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("tsokykYhDJM"),
	il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("dXUZcSZh_cf"),
	il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("zWBVAnOvBVc"),
	il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("bc_kJCvvdhn"),
	il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("xPbYwZEbXMX"),
	il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("MUbKvMPrROI"),
	il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("tU_olJxtOlw"),
	il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("KI_x_GjRvst"),
	il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("dkiPtdVzFXd"),
	il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("XOUiyIAkYDg"),
	il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("lzXdecvgfDO"),
	il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("cJGgwdJsDwS"),
	il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("cxJSqUeEpgs"),
	il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("mutbtogsADF"),
	il2cpp_domain_get: () => Il2Cpp.module.findExportByName("TePOWiJYCok"),
	il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("kEaKQRTnpgj"),
	il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("Uv_hdDcWIQo"),
	il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("TvWzGWcSJHI"),
	il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("JPzoCcfZKNB"),
	il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("woOPyBANdzU"),
	il2cpp_format_exception: () => Il2Cpp.module.findExportByName("YlFMOFvcFxH"),
	il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("aCcgkapPTNy"),
	il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("tFDMvnpznIk"),
	il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("KW_ZpWCLTPS"),
	il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("QXQUthLIhLG"),
	il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("HNLtKcVGOuK"),
	il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("aKmznHggaKm"),
	il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("OlixqUaPHfi"),
	il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("IDtZAkSfAwl"),
	il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("aFGBbDRFjtr"),
	il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("TUvTj_izTIS"),
	il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("IvwAcbuROYe"),
	il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("HBIboxJUuhf"),
	il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("EOdVXDqQ_iJ"),
	il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("wCxJmKnhFiN"),
	il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("KmGlHwQHJJW"),
	il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("MwKaQtlaJZL"),
	il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("yrAiciIZVYf"),
	il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("JsfzVppGNYt"),
	il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("YiwtMPVZwDm"),
	il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("plXriRPHpve"),
	il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("TNcJrkKnuKl"),
	il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("bcRDgxAGPgd"),
	il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("AayXCBRdkWW"),
	il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("XgkoCUUjuyh"),
	il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("ekqYnOokWNV"),
	il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("zHhjLRfAHtw"),
	il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("tWdrFlOCFfA"),
	il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("nvyO_jrha_q"),
	il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("FcANNsOgXXu"),
	il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("QMMderjpggT"),
	il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("VBefCBvEDBF"),
	il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("arqkqHFdkyK"),
	il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("qDJzXPFgIbm"),
	il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("XKtCPZLQjVr"),
	il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("XtjBmxURALb"),
	il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("NqDDTahIap_"),
	il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("gvWaUYvVQWC"),
	il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("cDSlEMdELUx"),
	il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("HsOVlPhUH_G"),
	il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("IRXrpRLnZuH"),
	il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("ntsrgtE_gmq"),
	il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("RLikk_EnIAG"),
	il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("onRQxxCSLFA"),
	il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("pnDlduSuOKk"),
	il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("LekeWrTFScy"),
	il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("rAAImqjcbda"),
	il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("mLloeCrWpvu"),
	il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("zhRdhCZKeff"),
	il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("jyKoULDRlpZ"),
	il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("ulPxSlEUvZH"),
	il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("cxhmHmcINCG"),
	il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("mGOJbwSvVav"),
	il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("ytCAuoGRrhz"),
	il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("iMItnEgCrfS"),
	il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("HcqEPaJBoCO"),
	il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("fhUctJAvLaL"),
	il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("TyPCyMAhlG_"),
	il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("pfulaKgFtoJ"),
	il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("OewewtUiUWx"),
	il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("UCJjTEKvUFc"),
	il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("wG_WACTzXNx"),
	il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("SkUxoHJHsuS"),
	il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("an_HGvXfQLu"),
	il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("FgayXDFDIpI"),
	il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("axMoEEmckFA"),
	il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("IIsnw__KKrO"),
	il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("WhUsujwHcdW"),
	il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("RJOJBfkrLid"),
	il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("Qv_Lymcbvkr"),
	il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("vnYGnnrJ_lf"),
	il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("hWCNUcLaEsi"),
	il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("QdXlfKyFEfa"),
	il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("dpgfxqvhHEu"),
	il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("rzHjIXbuWtl"),
	il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("hVrBwdNCwuI"),
	il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("fUdjDiUUFY_"),
	il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("QuqafDpIvuc"),
	il2cpp_object_new: () => Il2Cpp.module.findExportByName("aPSJyQnIbAO"),
	il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("FxIxqSBRXHB"),
	il2cpp_value_box: () => Il2Cpp.module.findExportByName("mIgoLXOpnnJ"),
	il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("wcDzQpNfhdE"),
	il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("n_OqotbNMro"),
	il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("VbziibSQxBx"),
	il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("hevCYcUmOML"),
	il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("HEROEtzlsYp"),
	il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("PYmwlltlPWF"),
	il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("hqdaXxP_UCq"),
	il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("LntpjkZasaf"),
	il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("vRBIyVznVGo"),
	il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("eGxBZFieEyc"),
	il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("dMFhwnOsYBc"),
	il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("ZkaLJGDDFwL"),
	il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("eRkLDDEmdDf"),
	il2cpp_string_length: () => Il2Cpp.module.findExportByName("XsCqiguhMOH"),
	il2cpp_string_chars: () => Il2Cpp.module.findExportByName("KoS_BpgbTak"),
	il2cpp_string_new: () => Il2Cpp.module.findExportByName("AExBXYCiFGe"),
	il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("kNTRttbsnWZ"),
	il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("AMeNDMLAIsV"),
	il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("hrexVJmWSLR"),
	il2cpp_string_intern: () => Il2Cpp.module.findExportByName("BxWgMYThxdi"),
	il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("XEHiQJKSLtV"),
	il2cpp_thread_current: () => Il2Cpp.module.findExportByName("pFgkLOJl_FY"),
	il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("dhDzaQfwysn"),
	il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("nYTfgdzWfxx"),
	il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("AhBnUZ_WKBr"),
	il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("yRJzZUHWunq"),
	il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("vkDLObbvr_o"),
	il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("EoKydq_pfDJ"),
	il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("hJTHdEZdxqK"),
	il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XzzDZJWkSlo"),
	il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XTvZokovhlG"),
	il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("FdFeXcbzcHa"),
	il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("dekmbDdgOMd"),
	il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("jrjOmmZqJqx"),
	il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("xczllKdxClr"),
	il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("fdVJYqNUc_w"),
	il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("ZyPukpQiKfF"),
	il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("dsUWIUQhKAG"),
	il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("zzQeIVsiLGu"),
	il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("ByvGmmQGHOG"),
	il2cpp_type_equals: () => Il2Cpp.module.findExportByName("KyQDrHlskeZ"),
	il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("lvxtcieVoQB"),
	il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("cWhUBwYnAcU"),
	il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("bScpd_EmXLp"),
	il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("fdvFlvUyQHf"),
	il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("bjGrrFSzkl_"),
	il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("DjqPLsMfjjm"),
	il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("sLbhZgBZvSW"),
	il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("IdotqQlSwUi"),
	il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("roRKbmFTcPM"),
	il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("DxBIJtoqWDE"),
	il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("KhiWsPmBRXW"),
	il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("FfekQygnJOr"),
	il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("VHIXIMeHdbU"),
	il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("JbjKRLVfnjX"),
	il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("lKurOH_fsOb"),
	il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("fwwiiOgnafK"),
	il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("uDzNAwaEtSw"),
	il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("_smBemAYaQc"),
	il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("PnydcRRsmRk"),
	il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("A_UWYxBLgcs"),
	il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("TN_BVjO_CUL"),
	il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("mZudfyxoPyI"),
	il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("eReNCAOCeZI"),
	il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("OiBlYkaMLVQ"),
	il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("JtwUJlLotOt"),
	il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("XQLCEz_yRtI"),
	il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("p_gWLSGMdyA"),
	il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("BuMyQxePUCQ"),
	il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("MNByCP_XvC_"),
	il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("oJvnZgAvEfe"),
	il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("NkAUpWcQZmp"),
};
const API_URL = "https://moonylabs.org"

const version = "1.5.1.2";
let boardMaterial = null;
let buttonClickDelay = 0.0;
let menu: any = null;
let reference: any = null;
let referenceCollider: any = null;

let leftPrimary = false;
let leftSecondary = false;

let rightPrimary = false;
let rightSecondary = false;

let leftGrab = false;
let rightGrab = false;

let leftTrigger = false;
let rightTrigger = false;

let leftStick = false;
let rightStick = false;

let leftStickX = 0.0;
let leftStickY = 0.0;
let rightStickX = 0.0;
let rightStickY = 0.0;

let flingNearMachinesEnabled = false;
let flingCooldown = new Map(); // player -> last fling time

let gunRenderedThisFrame = false;
let GunPointer: any = null;
let GunLine: any = null;

let lastFlingCheckTime = 0;
let cachedTargets: any[] = [];
let lastTargetCacheTime = 0;

let devEnabled = false;
let stashDupeEnabled = false;
let backpackDupeEnabled = false;
let flySpeed = 10.0;
let sellingmachineSpawns: any[] = [];
let QuiverClass: any = null;
let BackpackItemClass: any = null;
let stashAllowMoves = false;
let stashQOLFix = false;
let allowPutGBO = false;
let infAmmo = false;
let noShotgunCooldown = false;
let noLaserOverheat = false;
let infiniteLaserRange = false;
let jellyVal = 0;
let rapidFireEnabled = false;
let autoCockEnabled = false;
let gunColor: any = [0.08, 0.08, 0.08, 0.75];
let localButtonSounds = true;
let negativeHeadSize = false;

let deltaTime = 0.0;
let time = 0.0;
let frameCount = 0;
// pending spawns waiting for GBO to initialize
let pendingSpawnApply: Array<{obj: any, hue: number|null, sat: number|null, scale: number|null, frame: number}> = [];

let ejectDupeValues: any = [1, 2, 5, 10, 25, 64, 100, 128]
let ejectDupeAmount = 1;
let ejectDupeIndex = 0;

let buttonSound = 44;
let btnSoundsDisabled = true;
let LerpMenu = false;
let menuscale = 0.9;

let headSizeValues: any = [1, 2, 5, 10, 15, 20, 25, 50, 0]
let headSizeAmount = 1;
let headSizeIndex = 0;

let soundFileFiles = [
    "1/cust2.mp3",
    "1/vineboom.mp3",
    "1/eclipse.mp3",
    "1/do.mp3",
    "1/fart.mp3",
    "1/cust3.mp3",
    "1/daisybell.mp3",
    "1/16m.mp3",
    "1/feelgood.mp3",
    "1/cust1.mp3",
    "1/taunt.mp3",
    "1/stupid.mp3",
    "1/hl2amb.mp3"
]
let soundFileIndex = 0;

// ── Duplicate Own Rig state ──────────────────────────────────────────────────
const DUPE_RIG_RECORD_SECS  = 5;         // seconds to keep in the ring buffer
const DUPE_RIG_MAX_FRAMES   = 900;       // hard cap (180fps × 5s)
type DupeRigFrame = {
    headPos: any; headRot: any;
    lhPos: any;   lhRot: any;
    rhPos: any;   rhRot: any;
    micActive: boolean;
    timestamp: number;
};
let dupeRigBuffer: DupeRigFrame[] = [];  // ring buffer, newest at end
// DummyPlayerTarget is a real networked prefab (the player avatar mesh),
// so all players in the room can see it.
let dupeRigDummy: any        = null;     // the spawned DummyPlayerTarget NetworkObject
let dupeRigFrames: DupeRigFrame[] = [];  // snapshotted playback frames
let dupeRigPlayIdx: number   = 0;
let dupeRigActive: boolean   = false;
// ────────────────────────────────────────────────────────────────────────────

let previousGhostKey = false;

// Whitelist player selection
let whitelistTarget: any = null;
let whitelistTargetName: string = "None";
let whitelistPlayerIndex: number = 0;
let wlPissTarget: any = null;
let wlRpgTarget: any = null;
let wlEggTarget: any = null;
let wlBoomspearTarget: any = null;
let wlItemTarget: any = null;
let goopSpamDelay: number = 0;
let spamKickInterval: any = null;
let spamKickTimer: number = 0;
let roomLockTimer: number = 0;
let roomLockInterval: any = null;
let spawnedGoopObjects: any[] = [];
let rpcMoneyAllLoopDelay: number = 0;
let jellyTimers: Map<any, number> = new Map();
let previousInvisKey = false;
let previousSoundKey = false;
let previousNoclipKey = false;
let perviousTeleportKey = false;
let perviousShootKey = false;
let perviousSpawnKey = false;
let previoussaaakey = false;
let previousASCIIkey = false;

// Ghost follower state
let isGhostFollowingActive = false;
let currentPlayerIndex = 0;
let lastSwitchTime = 0;
let netPlayers: any[] = [];
//let previousGhostKey = false;
let roomJoinAttempted = false;
let waitingForRoom = false;
let roomCheckInterval: any = null;



let walkPos = null;
let walkNormal = null;

let cachedGhostPos = {
    head: null,
    leftHand: null,
    rightHand: null
};

let closePosition: any = null;
let tagGunDelay = 0.0;
let idGunDelay = 0.0;
let splashDelay = 0.0;
let lagGunDelay = 0.0;
let breakingGame = false;

let scaleVal = 0;
let hueVal = 0;
let satVal = 0;
let hue = 0.0;

let jellywowes = 5.0;

let lastTime = 0.0;
let oldSlide = null;

let leftPlatform: any = null;
let rightPlatform: any = null;
let movementPlatformLeft: any = null;
let movementPlatformRight: any = null;

let fullbirhgtobject: any = null;
let lightEnabled = false;

let checkpoint: any = null;

let visualizer: any[] = [];

let audioManager: any = null;

let mylittleSphere = null;

let lineRenderHolder: any = null;
let isLineRenderQueued = false;
let linePool: any[] = [];

let handTextObj: any = null;

let lvT = null;
let rvT = null;

let buttonNotifications: boolean = true;

let highPunchPower = false;

let bgColor = [1.0, 0.5, 0.0, 1.0];
let textColor = [1.0, 0.7450981, 0.4901961, 1.0];
let buttonColor = [0.666, 0.333, 0.0, 1.0];
let buttonPressedColor = [0.333, 0.150, 0.0, 1.0];

let menuName: string = "ii's Stupid Menu";
//let menuName: string = "im <b>moonying</b> it\nversion: " + version;
let themeIndex = 0;
let buttonIndex = 0;

let currentNotification: string = "";
let notifactionResetTime: number = 0;

const itemIDs = [
    "item_ac_cola",
	"item_alien_cube",
	"item_alienblaster",
	"item_alphablade",
	"item_ampbattery",
	"item_ampbattery_mega",
	"item_anti_gravity_grenade",
	"item_apescalibur",
	"item_apple",
	"item_arena_pistol",
	"item_arena_shotgun",
	"item_arrow",
	"item_arrow_bomb",
	"item_arrow_heart",
	"item_arrow_lightbulb",
	"item_arrow_teleport",
	"item_axe",
	"item_backpack",
	"item_backpack_black",
	"item_backpack_dragon",
	"item_backpack_fish",
	"item_backpack_gold",
	"item_backpack_green",
	"item_backpack_large_base",
	"item_backpack_large_basketball",
	"item_backpack_large_clover",
	"item_backpack_monkey",
	"item_backpack_pink",
	"item_backpack_realistic",
	"item_backpack_small_base",
	"item_backpack_space",
	"item_backpack_white",
	"item_backpack_with_flashlight",
	"item_bait_beetle",
	"item_bait_fly",
	"item_bait_glowworm",
	"item_bait_magmar_ball",
	"item_bait_monke",
	"item_bait_mouse_trap",
	"item_bait_sardine",
	"item_bait_shell",
	"item_bait_starfish",
	"item_bait_wallet",
	"item_balloon",
	"item_balloon_heart",
	"item_balloon_smiley",
	"item_bamboo_fishing_rod",
	"item_banana",
	"item_banana_chips",
	"item_baseball_bat",
	"item_basic_fishing_rod",
	"item_batterycell_hydra",
	"item_beans",
	"item_big_cup",
	"item_bighead_larva",
	"item_bloodlust_vial",
	"item_blox_cube",
	"item_blox_moon",
	"item_blox_sphere",
	"item_blox_star",
	"item_blox_triangle",
	"item_boombox",
	"item_boombox_fishing",
	"item_boombox_neon",
	"item_boomerang",
	"item_box_fan",
	"item_brain_chunk",
	"item_brainslug_blue",
	"item_brainslug_green",
	"item_brainslug_pink",
	"item_brick",
	"item_broccoli_grenade",
	"item_broccoli_shrink_grenade",
	"item_broom",
	"item_broom_halloween",
	"item_bubble_gun",
	"item_bubble_staff",
	"item_burrito",
	"item_butcherpipe",
	"item_butcherspear",
	"item_butchersword",
	"item_calculator",
	"item_cardboard_box",
	"item_cardboard_dragon_body",
	"item_cardboard_dragon_head",
	"item_carrot",
	"item_castle_archway",
	"item_castle_awning",
	"item_castle_door",
	"item_castle_roof_topper",
	"item_castle_steps",
	"item_castle_tower",
	"item_castle_turret_topper",
	"item_castle_wall",
	"item_ceo_plaque",
	"item_chakra",
	"item_clapper",
	"item_cluster_grenade",
	"item_coconut_shell",
	"item_cola",
	"item_cola_large",
	"item_company_ration",
	"item_company_ration_heal",
	"item_cracker",
	"item_crate",
	"item_crossbow",
	"item_crossbow_heart",
	"item_crowbar",
	"item_crowbar_gold",
	"item_cube_frame",
	"item_cubetrident",
	"item_cutie_dead",
	"item_d20",
	"item_deadmans_draw",
	"item_deadmans_draw_card",
	"item_deadmans_draw_card_comedy_drama",
	"item_deadmans_draw_comedy_drama",
	"item_deck_of_chances",
	"item_deck_of_chances_card",
	"item_demon_sword",
	"item_disc",
	"item_disposable_camera",
	"item_dna_vial",
	"item_dragons_claw",
	"item_drill",
	"item_drill_fists",
	"item_drill_galaxy",
	"item_drill_neon",
	"item_dwarven_hammer",
	"item_dynamite",
	"item_dynamite_cube",
	"item_easter_egg",
	"item_egg",
	"item_egg_easter_blue",
	"item_egg_easter_red",
	"item_egg_easter_yellow",
	"item_electrical_tape",
	"item_energy_axe",
	"item_energy_sword_dual",
	"item_energy_sword_green",
	"item_energy_sword_red",
	"item_eraser",
	"item_eye_googly",
	"item_film_reel",
	"item_finger_board",
	"item_fish_anglerfish",
	"item_fish_big_shark",
	"item_fish_boomfish",
	"item_fish_boot",
	"item_fish_bottled_message",
	"item_fish_carp",
	"item_fish_chewna",
	"item_fish_clam_hookshot",
	"item_fish_cowfish",
	"item_fish_crappie",
	"item_fish_crispie",
	"item_fish_cube",
	"item_fish_diamond_jade_koi",
	"item_fish_dollar_bill",
	"item_fish_dragonfish",
	"item_fish_fishsword",
	"item_fish_ghost_sword",
	"item_fish_gold_fish",
	"item_fish_hydracarp",
	"item_fish_irontusk",
	"item_fish_kissy",
	"item_fish_license_plate",
	"item_fish_magma_carp",
	"item_fish_nebula_fish",
	"item_fish_nutfish",
	"item_fish_pufferfish",
	"item_fish_rainbow_trout",
	"item_fish_redacted",
	"item_fish_rotten_fish",
	"item_fish_salmon",
	"item_fish_salmonster",
	"item_fish_scaldfish",
	"item_fish_seahorse",
	"item_fish_seamine",
	"item_fish_shellfish_shield",
	"item_fish_spicy_salmon",
	"item_fish_teeth",
	"item_fish_triclops",
	"item_fish_tuna",
	"item_fish_yellowcake",
	"item_fishing_terminal_bait_button",
	"item_flamethrower",
	"item_flamethrower_skull",
	"item_flamethrower_skull_ruby",
	"item_flaregun",
	"item_flashbang",
	"item_flashlight",
	"item_flashlight_galaxy",
	"item_flashlight_mega",
	"item_flashlight_red",
	"item_flipflop_realistic",
	"item_floppy3",
	"item_floppy5",
	"item_football",
	"item_four_leaf_clover",
	"item_four_leaf_clover_gold",
	"item_four_leaf_radar",
	"item_friend_launcher",
	"item_frying_pan",
	"item_fungi_blue",
	"item_fungi_red",
	"item_gameboy",
	"item_glitched_banana",
	"item_glowing_fishing_rod",
	"item_glowstick",
	"item_goldbar",
	"item_goldcoin",
	"item_goop",
	"item_goopfish",
	"item_grappling_hook",
	"item_grapplinghook",
	"item_great_sword",
	"item_great_sword_galaxy",
	"item_grenade",
	"item_grenade_gold",
	"item_grenade_launcher",
	"item_grimstaff",
	"item_guided_boomerang",
	"item_hammer_candy_cane",
	"item_harddrive",
	"item_hatchet",
	"item_hawaiian_drum",
	"item_healpack",
	"item_heart_chunk",
	"item_heart_gun",
	"item_heartchocolatebox",
	"item_hermes_staff",
	"item_hh_key",
	"item_hookshot",
	"item_hookshot_clam",
	"item_hookshot_galaxy",
	"item_hookshot_gold",
	"item_hookshot_sword",
	"item_hot_cocoa",
	"item_hoverpad",
	"item_hoverpad_galaxy",
	"item_hydra",
	"item_impulse_grenade",
	"item_jetpack",
	"item_joystick",
	"item_joystick_inv_y",
	"item_katana_big",
	"item_katana_medium",
	"item_keycard",
	"item_lance",
	"item_landmine",
	"item_landmine_bee",
	"item_lantern_cny",
	"item_large_banana",
	"item_lava_fishing_rod",
	"item_love_grenade",
	"item_mage_pirate_sword",
	"item_mannequin_arm",
	"item_mannequin_arm_left",
	"item_mannequin_arm_right",
	"item_mannequin_head",
	"item_mannequin_leg",
	"item_mannequin_leg_left",
	"item_mannequin_leg_right",
	"item_mannequin_torso",
	"item_marshmallow_bunny_bomb",
	"item_megaphone",
	"item_metal_ball",
	"item_metal_ball_easter",
	"item_metal_ball_xmas",
	"item_metal_plate",
	"item_metal_plate_small",
	"item_metal_plate_xmas",
	"item_metal_rod",
	"item_metal_rod_curved",
	"item_metal_rod_easter",
	"item_metal_rod_small",
	"item_metal_rod_xmas",
	"item_metal_triangle",
	"item_midipad",
	"item_midipad_animal",
	"item_mining_laser",
	"item_mining_laser_orange",
	"item_module_blast_1",
	"item_module_blast_2",
	"item_module_blast_3",
	"item_module_boost_1",
	"item_module_boost_2",
	"item_module_boost_3",
	"item_module_gravity_1",
	"item_module_gun_1",
	"item_module_gun_2",
	"item_module_gun_3",
	"item_module_hull_1",
	"item_module_hull_2",
	"item_module_hull_3",
	"item_module_joust_1",
	"item_module_joust_2",
	"item_module_joust_3",
	"item_module_laser_1",
	"item_module_laser_2",
	"item_module_laser_3",
	"item_module_minigun_1",
	"item_module_minigun_2",
	"item_module_minigun_3",
	"item_module_stasis_1",
	"item_module_tractor_beam_1",
	"item_momboss_box",
	"item_moneygun",
	"item_moonhorror_key",
	"item_moonrock",
	"item_moonrock_cheesy",
	"item_moonrock_friend",
	"item_motor",
	"item_mountain_key",
	"item_mug",
	"item_needle",
	"item_nut",
	"item_nut_drop",
	"item_ogre_hands",
	"item_orange",
	"item_ore_copper_l",
	"item_ore_copper_m",
	"item_ore_copper_s",
	"item_ore_gold_l",
	"item_ore_gold_m",
	"item_ore_gold_s",
	"item_ore_hell",
	"item_ore_silver_l",
	"item_ore_silver_m",
	"item_ore_silver_s",
	"item_painting_canvas",
	"item_paperpack",
	"item_pelican_case",
	"item_pennant_spring",
	"item_pickaxe",
	"item_pickaxe_cny",
	"item_pickaxe_cube",
	"item_pickaxe_realistic",
	"item_pickaxe_realistic_galaxy",
	"item_pickaxe_spacedwarf",
	"item_pinata_bat",
	"item_pineapple",
	"item_pipe",
	"item_pistol_dragon",
	"item_piston",
	"item_plank",
	"item_plank_easter",
	"item_plate_round",
	"item_plunger",
	"item_pogostick",
	"item_police_baton",
	"item_popcorn",
	"item_portable_safe_zone",
	"item_portable_teleporter",
	"item_prop_scanner",
	"item_prune_juice",
	"item_pumpkin_bomb",
	"item_pumpkin_pie",
	"item_pumpkinjack",
	"item_pumpkinjack_small",
	"item_quest_gy_skull",
	"item_quest_gy_skull_special",
	"item_quest_hlal_brain",
	"item_quest_hlal_eyeball",
	"item_quest_hlal_flesh",
	"item_quest_hlal_heart",
	"item_quest_key_graveyard",
	"item_quest_vhs",
	"item_quest_vhs_backlots",
	"item_quest_vhs_basement",
	"item_quest_vhs_cave",
	"item_quest_vhs_circus_day",
	"item_quest_vhs_circus_ext",
	"item_quest_vhs_circus_fac",
	"item_quest_vhs_dam_facility",
	"item_quest_vhs_dam_servers",
	"item_quest_vhs_dark_forest",
	"item_quest_vhs_eden",
	"item_quest_vhs_forest",
	"item_quest_vhs_foundation",
	"item_quest_vhs_graveyard",
	"item_quest_vhs_haunted_house",
	"item_quest_vhs_hell",
	"item_quest_vhs_lab",
	"item_quest_vhs_lake",
	"item_quest_vhs_lobby",
	"item_quest_vhs_megalodon",
	"item_quest_vhs_megalodon_lake",
	"item_quest_vhs_mines",
	"item_quest_vhs_moon",
	"item_quest_vhs_moon_horror_rocket",
	"item_quest_vhs_mountain",
	"item_quest_vhs_mountainbot",
	"item_quest_vhs_mountainshack",
	"item_quest_vhs_mountainvault",
	"item_quest_vhs_obsidianhalls",
	"item_quest_vhs_odd_core",
	"item_quest_vhs_office",
	"item_quest_vhs_office_basement",
	"item_quest_vhs_powerplant_microwave",
	"item_quest_vhs_powerplant_reactorcore",
	"item_quest_vhs_powerplant_security",
	"item_quest_vhs_powerplant_supportfacility",
	"item_quest_vhs_sandbox",
	"item_quest_vhs_sewers",
	"item_quest_vhs_vhs-core",
	"item_quiver",
	"item_quiver_heart",
	"item_radiation_gun",
	"item_radioactive_broccoli",
	"item_radioactive_fishing_rod",
	"item_radioative_fishing_rod",
	"item_randombox_mobloot_big",
	"item_randombox_mobloot_medium",
	"item_randombox_mobloot_small",
	"item_randombox_mobloot_weapons",
	"item_randombox_mobloot_weapons_big",
	"item_randombox_mobloot_zombie",
	"item_randombox_modules",
	"item_rare_card",
	"item_remote_controller",
	"item_repair_wrench",
	"item_revolver",
	"item_revolver_ammo",
	"item_revolver_gold",
	"item_ring_buoy",
	"item_ringmaster_staff",
	"item_robo_monke",
	"item_robot_arm_left",
	"item_robot_arm_left_galaxy",
	"item_robot_arm_right",
	"item_robot_arm_right_galaxy",
	"item_robot_head",
	"item_rope",
	"item_rpg",
	"item_rpg_ammo",
	"item_rpg_ammo_egg",
	"item_rpg_ammo_shoe",
	"item_rpg_ammo_spear",
	"item_rpg_cny",
	"item_rpg_easter",
	"item_rpg_shoe",
	"item_rpg_smshr",
	"item_rpg_spear",
	"item_rubberducky",
	"item_ruby",
	"item_saddle",
	"item_salmoncannon",
	"item_sawblade",
	"item_sawblade_launcher",
	"item_scanner",
	"item_scissors",
	"item_server_pad",
	"item_shadowboss_key",
	"item_shield",
	"item_shield_bones",
	"item_shield_candy_cane",
	"item_shield_galaxy",
	"item_shield_police",
	"item_shield_spartan",
	"item_shield_viking_1",
	"item_shield_viking_2",
	"item_shield_viking_3",
	"item_shield_viking_4",
	"item_shotgun",
	"item_shotgun_ammo",
	"item_shotgun_gold",
	"item_shotgun_sawed",
	"item_shotgun_viper",
	"item_shovel",
	"item_shredder",
	"item_shrinking_broccoli",
	"item_skipole",
	"item_skishoe",
	"item_skishoe_2",
	"item_skishoe_3",
	"item_skishoe_4",
	"item_sludge",
	"item_snail_friend",
	"item_snowball",
	"item_snowboard",
	"item_snowboard_2",
	"item_snowboard_3",
	"item_snowboard_4",
	"item_snowboard_auto",
	"item_snowboard_galaxy",
	"item_soccer_ball",
	"item_soccer_goalposts",
	"item_spear_candy_cane",
	"item_spear_spartan",
	"item_special_fishing_rod",
	"item_special_fishing_rod_radar_part",
	"item_special_fishing_rod_with_radar",
	"item_squishy_angler",
	"item_squishy_armstrong",
	"item_squishy_bighead",
	"item_squishy_bomber",
	"item_squishy_chicken",
	"item_squishy_cutie",
	"item_squishy_edenzombie",
	"item_squishy_giantthrower",
	"item_squishy_gold_angler",
	"item_squishy_gold_armstrong",
	"item_squishy_gold_bighead",
	"item_squishy_gold_bomber",
	"item_squishy_gold_chicken",
	"item_squishy_gold_cutie",
	"item_squishy_gold_edenzombie",
	"item_squishy_gold_giantthrower",
	"item_squishy_gold_murderbunny",
	"item_squishy_gold_puppet",
	"item_squishy_gold_redgreen",
	"item_squishy_gold_segway",
	"item_squishy_gold_smiley",
	"item_squishy_murderbunny",
	"item_squishy_puppet",
	"item_squishy_redgreen",
	"item_squishy_segway",
	"item_squishy_smiley",
	"item_squishy_template",
	"item_stapler",
	"item_stash_grenade",
	"item_steampunk_clip",
	"item_steampunk_coils_00",
	"item_steampunk_coils_01",
	"item_steampunk_coils_big",
	"item_steampunk_coils_small",
	"item_steampunk_gear_00",
	"item_steampunk_gear_big",
	"item_steampunk_gear_open_big",
	"item_steampunk_gear_open_small",
	"item_steampunk_gear_small",
	"item_steampunk_gear_spikes_big",
	"item_steampunk_gear_spikes_small",
	"item_steampunk_gear_wheels",
	"item_steampunk_lamp",
	"item_steampunk_lightbulb",
	"item_steampunk_redgreen_hand",
	"item_steampunk_scaffolding",
	"item_steampunk_smokestack",
	"item_steampunk_wings",
	"item_steel_beam",
	"item_steel_beam_xmas",
	"item_stellarsword_blue",
	"item_stellarsword_gold",
	"item_stick_armbones",
	"item_stick_bone",
	"item_sticker_dispenser",
	"item_sticky_dynamite",
	"item_sticky_dynamite_gold",
	"item_stinky_cheese",
	"item_stopwatch",
	"item_tablet",
	"item_tapedispenser",
	"item_tele_grenade",
	"item_tele_pearl",
	"item_teleport_dagger",
	"item_teleport_gun",
	"item_teleport_gun_galaxy",
	"item_theremin",
	"item_timebomb",
	"item_toilet_paper",
	"item_toilet_paper_mega",
	"item_toilet_paper_roll_empty",
	"item_token_circus",
	"item_tomato",
	"item_trampoline",
	"item_treestick",
	"item_tripwire_explosive",
	"item_trophy",
	"item_truss",
	"item_truss_easter",
	"item_truss_small",
	"item_truss_xmas",
	"item_turkey_leg",
	"item_turkey_whole",
	"item_ukulele",
	"item_ukulele_gold",
	"item_umbrella",
	"item_umbrella_clover",
	"item_umbrella_squirrel",
	"item_unidentified",
	"item_upsidedown_loot",
	"item_uranium_chunk_l",
	"item_uranium_chunk_m",
	"item_uranium_chunk_s",
	"item_viking_hammer",
	"item_viking_hammer_twilight",
	"item_vuvuzela",
	"item_war_fan",
	"item_water_balloon_blue",
	"item_water_balloon_red",
	"item_water_gun_blue",
	"item_water_gun_red",
	"item_water_massive_super_soaker",
	"item_water_supersoaker_blue",
	"item_water_supersoaker_red",
	"item_wheelhandle",
	"item_wheelhandle_big",
	"item_whoopie",
	"item_wireframe_cube",
	"item_wireframe_gun",
	"item_wireframe_gun_ammo",
	"item_wood_log",
	"item_wood_pallet",
	"item_wood_pallet_easter",
	"item_wyrmpiercer",
	"item_zipline_gun",
	"item_zombie_meat"
];

const prefabIDs: string[] = [
    "RPGRocketShoe",
    "InflatedSmileyBalloon",
    "RaceTrack_Circle",
    "RaceTrack_DAA",
    "Vehicle_Spacebike_B",
    "Vehicle_Spaceship_1",
    "Vehicle_Spaceship_2",
    "Vehicle_Spaceship_3",
    "Vehicle_Spaceship_4",
    "Vehicle_Spaceship_5",
    "Vehicle_Spaceship_6",
    "Vehicle_Spaceship_7",
    "UFO_Easy",
    "UFO_Medium",
    "UFO_Hard",
    "SteamJumpScareManager",
    "AnomalySpawner",
    "Blackhole",
    "Shipwheel",
    "TeleportMachine",
    "FourLeafQuest_FourLeafSpawner",
    "EasterEgg_QuestSpawner",
    "RadarPartSpawner",
    "SimpleKeypadDoor",
    "GiantController_GraveyardBoss_backup",
    "MetaCameraControls",
    "GrenadeProjectile",
    "LaserMirror",
    "mom_pillow",
    "RiggedPlank",
    "SharkScareTriggerObject",
    "Uvula",
    "BaitShopButton_Spawner",
    "NetworkedLever_SecretLeft",
    "CoreTeleporter",
    "LaserSource",
    "LaserSink",
    "grababble_fish_paper_message",
    "AutoDestroyItem_OilSplatter",
    "AutoDestroyItem_Splash0",
    "AutoDestroyItem_Splash1",
    "AutoDestroyItem_Splash2",
    "AutoDestroyItem_Splash3",
    "AutoDestroyItem_Splash4",
    "AutoDestroyItem_Splash5",
    "BarrelBeansDynamic",
    "BarrelBeansStatic",
    "BarrelExplodingDynamic",
    "BarrelExplodingStatic",
    "BarrelOilDynamic",
    "BarrelOilStatic",
    "Basketball",
    "BigBanana",
    "BigHatchdoorNetObject",
    "BigWheelhandleSpawner",
    "BonfireController",
    "BrainPowerPlug",
    "ChoppableTreeManager",
    "ChristmasBox",
    "ChristmasBoxManager",
    "ClawMachineNetObject",
    "DiggableGrave",
    "DummyPlayerTarget",
    "DummyTarget",
    "Duplicator",
    "EscherToyBlockObject",
    "ExplosiveEgg",
    "ExplosiveEggClustered",
    "FlareGunProjectile",
    "FortuneTellerNet",
    "FuelCanisterNetObject",
    "FuelCanisterSpawner",
    "GenericWorldItemSpawner",
    "GiantRockObject",
    "GiantRockObject_Fire",
    "GreenscreenNET",
    "HatchdoorGrabHandle",
    "HatchdoorNetObject",
    "HellAltar",
    "HH_LockedDoor",
    "HingedDoorNetworked",
    "HordeMobController",
    "HordeMobLobbyHandler",
    "InflatedBalloon",
    "InflatedHeartBalloon",
    "ItemSellingMachineController",
    "KeypadDoorNetObject",
    "LakePineapple_Spawner",
    "Landmine",
    "LeaderBoardMonsterKill",
    "LockedDoor_KeySpawner",
    "LockedShippingContainer_Quest",
    "LogQuestItemSpawner",
    "LootLantern",
    "Mausoleum_01",
    "MazeManager",
    "MimicSpawner_CemeteryTile1",
    "MimicSpawner_CemeteryTile3",
    "MomToyBlockObject",
    "MomToyBlockObject_DisappearOnDrop",
    "MountainKey_Spawner",
    "MovieTheater",
    "Net",
    "NetGameTimeManager",
    "NetLootSpawnGroup",
    "NetMobSpawnGroup",
    "NetPlayer",
    "NetSpectator",
    "Pillar_Arched_Broken_01",
    "RamEventNet",
    "remote_controller_receiver",
    "RobotDogRPG",
    "RPGRocket",
    "RPGRocketEgg",
    "RPGRocketSpear",
    "RuinTower_FloatingPlatform",
    "RuinTower_FloatingSmall",
    "ScaffoldTrap",
    "SkiRaceController",
    "Snail_Spawner",
    "SpaceshipTeleporter",
    "SpawnableZipline",
    "Spawner_Key",
    "StickyAnchor",
    "TeleportationManager",
    "ThunderController",
    "TubeMonster",
    "Vehicle_Buggy",
    "VHSQuests_VHSSpawner",
    "WinterFilm_ReelSpawner",
    "SpiderController",
];
let prefabListIndex = 0;

const VFXTypes = {
    None: 255,
    MuzzleFlash_Shotgun: 0,
    MuzzleFlash_FlareGun: 1,
    CrateBreak: 2,
    MuzzleFlash_SmallGun: 3,
    MuzzleFlash_GoldRevolver: 4,
    MuzzleFlash_DragonPistol: 5,
    MuzzleFlash_ViperShotgun: 6,
    Explosion_FlareGun: 32,
    Explosion_Coins: 33,
    Explosion_Nuts: 34,
    Explosion_Keys: 35,
    Explosion_Balloon: 36,
    Explosion_TeleGrenadeSrc: 37,
    Player_Touch_Lava: 38,
    Portal_Teleport: 39,
    Explosion_Coins_Vertical: 40,
    Autumn_Leaves_Burst: 41,
    Explosion_Feathers: 42,
    Explosion_Popcorn: 43,
    Electricity_Small: 44,
    Impact_Flaregun: 64,
    Impact_Snowball: 65,
    Impact_GoldRevolver: 66,
    Impact_MeleeHit: 67,
    Impact_BigGroundHit: 68,
    Impact_MeleeHit_CriticalSmall: 69,
    Impact_MeleeHit_CriticalLarge: 70,
    Impact_MeleeHit_AoE: 71,
    Research_ZiplineAttachDetach: 96,
    Research_Purchase1RP: 97,
    Research_Purchase5RP: 98,
    Research_Purchase10RP: 99,
    Research_PurchaseRPBundle: 100,
    Rope_ZiplineAttachDetach: 110,
    MeatExplosion_1: 128,
    MeatExplosion_2: 129,
    MeatExplosion_Headshot: 130,
    ServerRoomSplash_Small: 160,
    ServerRoomSplash_Big: 161,
    RAMActivationSparks: 162,
    GreenBlink: 170,
    ConfettiBurst: 174,
    Ethereal_Void: 180,
    MomBoss_NailBreak: 181,
    MidAirJump_Fart: 182,
    FuelExplosion: 183
};

const mobIDs: { name: string; id: number }[] = [
    { name: "Angler",             id: 1  },
    { name: "AnglerMad",          id: 2  },
    { name: "Armstrong",          id: 3  },
    { name: "ArmstrongMad",       id: 4  },
    { name: "Banshee",            id: 5  },
    { name: "Bomb",               id: 6  },
    { name: "Bomber",             id: 7  },
    { name: "BomberFlashbang",    id: 8  },
    { name: "BomberMad",          id: 9  },
    { name: "Chicken",            id: 10 },
    { name: "Cyst",               id: 11 },
    { name: "FakeGorilla",        id: 12 },
    { name: "BigHead",            id: 13 },
    { name: "RedGreen",           id: 14 },
    { name: "Phantom",            id: 15 },
    { name: "EvilEye",            id: 16 },
    { name: "GiantThrower",       id: 17 },
    { name: "RedGreenMad",        id: 18 },
    { name: "Spider",             id: 19 },
    { name: "FlyingSwarm",        id: 20 },
    { name: "NextBot",            id: 21 },
    { name: "Segway",             id: 22 },
    { name: "NextBotStatic",      id: 23 },
    { name: "EvilEyePinata",      id: 24 },
    { name: "EvilEyePinataLarge", id: 25 },
    { name: "Lanky",              id: 26 },
    { name: "Blob",               id: 27 },
    { name: "Cutie",              id: 28 },
    { name: "SpiderCave",         id: 29 },
    { name: "ForestMob",          id: 30 },
    { name: "Mimic",              id: 31 },
    { name: "GraveyardBoss",      id: 32 },
    { name: "Ringmaster",         id: 33 },
    { name: "Puppet",             id: 34 },
    { name: "PolypMass",          id: 35 },
    { name: "RobotDog",           id: 36 },
    { name: "Shadow",             id: 37 },
    { name: "Heart",              id: 38 },
    { name: "Slimey",             id: 39 },
    { name: "ShadowBoss",         id: 40 },
    { name: "BigShark",           id: 41 },
    { name: "EdenZombie",         id: 42 },
    { name: "Skinwalker",         id: 43 },
    { name: "YinWorm",            id: 44 },
    { name: "YangWorm",           id: 45 },
    { name: "ArmstrongSpace",     id: 46 },
    { name: "Smiley",             id: 47 },
    { name: "MurderBunnyController", id: 48 },
    { name: "MurderRabbitController", id: 49 },
    { name: "SmileyController_Floating", id: 50 },
    { name: "SlimeyController", id: 51 }
];

const flareGunPrefabs = [
    "ChristmasBox",
    "ItemSellingMachineController",
    "Vehicle_Buggy",
]

const newflareGunPrefabs = [
    "item_crate",
];

let currentFlareGunPrefabIndex = 0;
const allPrefabs = flareGunPrefabs;
const itemPrefabs = itemIDs;
const worldPrefabs = allPrefabs.filter(n => !n.startsWith("item_"));
let currentItemIndex = 0;
let currentWorldPrefabIndex = 0;
let prefabOrbitCount = 3;
let itemIndex = 0;
let mobIndex = 0;
let mobGunDelay = 0;
let spawnedPersistentMobs: any[] = [];
let persistentMobEntries: any[] = [];
let mobSpawnAsyncBroken = false;
let mobForceStayEnabled = false;
let acMobValidatorBypassEnabled = false;
let acBeforeMobSpawnDelegate: any = null;
let acBeforeMobSpawnDelegateClass: any = null;
let acNetworkObjectSpawnDelegateRef: any = null;
let mobGunDelay2 = 0;
let mobSpawnButtonLatched = false;
let mobSpawnGunTriggerLatched = false;
const acMobIdByName: Record<string, number> = {
    Unidentified: 0, Angler: 1, AnglerController: 1, AnglerMad: 2, AnglerMadController: 2, Armstrong: 3, ArmstrongController: 3, ArmstrongMad: 4, ArmstrongMadController: 4,
    Banshee: 5, BansheeController: 5, Bomb: 6, BombController: 6, Bomber: 7, BomberController: 7, BomberFlashbang: 8, BomberFlashbangController: 8, BomberMad: 9, BomberMadController: 9,
    Chicken: 10, ChickenController: 10, Cyst: 11, CystController: 11, FakeGorilla: 12, FakeGorillaController: 12, BigHead: 13, BigHeadController: 13, RedGreen: 14, RedGreenController: 14,
    Phantom: 15, PhantomController: 15, EvilEye: 16, EvilEyeController: 16, GiantThrower: 17, GiantThrowerController: 17, RedGreenMad: 18, RedGreenMadController: 18,
    Spider: 19, SpiderController: 19, FlyingSwarm: 20, FlyingSwarmController: 20, NextBot: 21, NextBotController: 21, Segway: 22, SegwayController: 22,
    NextBotStatic: 23, NextBotStaticController: 23, EvilEyePinata: 24, EvilEyePinataController: 24, EvilEyePinataLarge: 25, EvilEyePinataLargeController: 25,
    Lanky: 26, LankyController: 26, Blob: 27, BlobController: 27, Cutie: 28, CutieController: 28, SpiderCave: 29, SpiderCaveController: 29, ForestMob: 30, ForestMobController: 30,
    Mimic: 31, MimicController: 31, GraveyardBoss: 32, GraveyardBossController: 32, GiantController_GraveyardBoss: 32, Ringmaster: 33, RingmasterController: 33,
    Puppet: 34, PuppetController: 34, PolypMass: 35, PolypMassController: 35, RobotDog: 36, RobotDogController: 36, Shadow: 37, ShadowController: 37,
    Heart: 38, HeartController: 38, HeartMobController: 38, Slimey: 39, SlimeyController: 39, ShadowBoss: 40, ShadowBossController: 40, BigShark: 41, BigSharkController: 41,
    EdenZombie: 42, EdenZombieController: 42, Skinwalker: 43, SkinwalkerController: 43, YinWorm: 44, YinWormController: 44, YangWorm: 45, YangWormController: 45,
    ArmstrongSpace: 46, Smiley: 47
};
const acMobNameById: Record<number, string> = { 0: "Unidentified", 1: "Angler", 2: "AnglerMad", 3: "Armstrong", 4: "ArmstrongMad", 5: "Banshee", 6: "Bomb", 7: "Bomber", 8: "BomberFlashbang", 9: "BomberMad", 10: "Chicken", 11: "Cyst", 12: "FakeGorilla", 13: "BigHead", 14: "RedGreen", 15: "Phantom", 16: "EvilEye", 17: "GiantThrower", 18: "RedGreenMad", 19: "Spider", 20: "FlyingSwarm", 21: "NextBot", 22: "Segway", 23: "NextBotStatic", 24: "EvilEyePinata", 25: "EvilEyePinataLarge", 26: "Lanky", 27: "Blob", 28: "Cutie", 29: "SpiderCave", 30: "ForestMob", 31: "Mimic", 32: "GraveyardBoss", 33: "Ringmaster", 34: "Puppet", 35: "PolypMass", 36: "RobotDog", 37: "Shadow", 38: "Heart", 39: "Slimey", 40: "ShadowBoss", 41: "BigShark", 42: "EdenZombie", 43: "Skinwalker", 44: "YinWorm", 45: "YangWorm", 46: "ArmstrongSpace", 47: "Smiley" };
const acMobAliases: Record<string, string> = { GiantController: "GiantThrower", GiantGreenController: "GiantThrower", Giant_GreenController: "GiantThrower", GreenGiantController: "GiantThrower", Green_GiantController: "GiantThrower", YanWormController: "YangWorm", YingWormController: "YinWorm", YinYanWormController: "YinWorm", YingYangWormController: "YinWorm", PrototypeSlenderController: "Shadow" };

let huespawner = 0.0;
let saturationspawner = 0.0;
let sizespawner = 0.0;
let jellyspawner = 0.0;



function normalizePlayerToken(value: any): string {
    try {
        if (value == null) return "";
        if (typeof value === "string") return value.trim();
        if (typeof value === "number" || typeof value === "boolean") return String(value).trim();
        if (value.content != null) return String(value.content).trim();
        return String(value).trim();
    } catch(_) { return ""; }
}
function normalizeWhitelistToken(value: any): string {
    return normalizePlayerToken(value).toLowerCase();
}

function getPlayerIdentityInfo(p: any): any {
    const aliases: string[] = [];
    const pushAlias = (value: any) => {
        const token = normalizePlayerToken(value);
        if (!token || token === "?" || aliases.includes(token)) return;
        aliases.push(token);
    };
    try { pushAlias(p.method("get_playerId").invoke()); } catch(_) {}
    try { pushAlias(p.field("_playerId").value); } catch(_) {}
    try { pushAlias(p.method("get_displayName").invoke()); } catch(_) {}
    try { pushAlias(p.field("_displayName").value); } catch(_) {}
    try { pushAlias(p.field("_userID").value); } catch(_) {}
    try { pushAlias(p.method("get_name").invoke()); } catch(_) {}
    try { pushAlias(p.method("ToString").invoke()); } catch(_) {}
    try {
        if (aliases.length === 0) {
            const fallbackName = p.method("get_gameObject").invoke()?.method("get_name").invoke();
            pushAlias(fallbackName);
        }
    } catch(_) {}
    const key = aliases[0] ?? "?";
    const label = aliases.length > 1 ? aliases[1] : key;
    return { key, label, aliases: aliases.length > 0 ? aliases : ["?"] };
}
function getPlayerName(p: any): string {
    return getPlayerIdentityInfo(p).label;
}
let whitelist: string[] = [];
let whitelistEnabled: boolean = true;
function whitelistHasPlayer(p: any): boolean {
    try {
        const info = getPlayerIdentityInfo(p);
        const realAliases = info.aliases.filter((a: string) => a && a !== "?");
        if (realAliases.length === 0) return false;
        return realAliases.some((alias: string) => whitelist.includes(normalizeWhitelistToken(alias)));
    } catch(_) { return false; }
}
function whitelistAddPlayer(p: any): string {
    const info = getPlayerIdentityInfo(p);
    for (const alias of info.aliases) {
        const token = normalizeWhitelistToken(alias);
        if (token && token !== "?" && !whitelist.includes(token)) whitelist.push(token);
    }
    return info.label;
}
function whitelistRemovePlayer(p: any): string {
    const info = getPlayerIdentityInfo(p);
    const removeSet = info.aliases.map((alias: string) => normalizeWhitelistToken(alias));
    whitelist = whitelist.filter(entry => !removeSet.includes(normalizeWhitelistToken(entry)));
    return info.label;
}
// ─────────────────────────────────────────────────────────────────────────────
((() => {
setTimeout(() => Il2Cpp.perform(() => {
    const images = {
        "AnimalCompany": Il2Cpp.domain.assembly("AnimalCompany").image,
        "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
        "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
        "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
        "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
        "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
        //"PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
        "PhotonFusionNetworking": Il2Cpp.domain.assembly("Fusion.Runtime").image,
        "PhotonFusionNetworkingRealtime": Il2Cpp.domain.assembly("Fusion.Realtime").image,
        "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
        "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image,
        "UnityEngine.UnityWebRequestModule": Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image, // do you really think im just gonna send you files to put in ur ac folder? HELL NAH!
        "UnityEngine.AudioModule": Il2Cpp.domain.assembly("UnityEngine.AudioModule").image
    };

    const AssemblyCSharp = images["AnimalCompany"];
    const QuiverClass = AssemblyCSharp.class("AnimalCompany.Quiver");
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const ParticleManager = AssemblyCSharp.class("AnimalCompany.ParticleManager");
    const ParticleManagerClass = ParticleManager;
    const BackpackItemClass = AssemblyCSharp.class("AnimalCompany.BackpackItem");
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    //const PhotonUnityNetworking = images["PhotonUnityNetworking"];
    const PhotonFusionNetworking = images["PhotonFusionNetworking"];
    const PhotonFusionNetworkingRealtime = images["PhotonFusionNetworkingRealtime"];
    const UnityTextMeshPro = images["Unity.TextMeshPro"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineWebRequestModule = images["UnityEngine.UnityWebRequestModule"]; // again im not sending u files just use my damn webiste
    const UnityEngineAudio = images["UnityEngine.AudioModule"]

    //const ControllerInputPoller = AssemblyCSharp.class("ControllerInputPoller").field("instance").value;
    //const GorillaTaggerClass = AssemblyCSharp.class("GorillaTagger");
    const GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    const PickupManager     = AssemblyCSharp.class("AnimalCompany.PickupManager");
    const ItemSellingMachineController = AssemblyCSharp.class("AnimalCompany.ItemSellingMachineController");
    const PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    const GBOClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
    const GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
    const GIECClass = AssemblyCSharp.class("AnimalCompany.GameplayItemEquippingConfig");
    const NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    const PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
    const SFXManager = AssemblyCSharp.class("AnimalCompany.SFXManager")
	const DamageSourceInfoClass = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo");

// ====================== ANTI-RPC + SPAWN HELPERS ======================
let antiRpcBlock = false;
let antiRpcBlockHooksInstalled = false;
let _rpcBlockMasterEnabled = false;
let _selfRPCBypass = false;

function selfRPC(fn: any) {
    _selfRPCBypass = true;
    try { fn(); } finally { _selfRPCBypass = false; }
}

function isMine(self: any) {
    try {
        return self.method("getIsMine").invoke();
    } catch(e) { return false; }
}

function shouldBlock(self: any) {
    return isMine(self) && !_selfRPCBypass;
}

let itemSpawnSourceDefault: any = null;

function getItemSpawnSourceDefault(): any {
    if (itemSpawnSourceDefault !== null) return itemSpawnSourceDefault;
    try {
        const ItemSpawnSource = AssemblyCSharp.class("AnimalCompany.ItemSpawnSource");
        const candidates = ["None", "Unknown", "Debug", "Spawned", "Shop", "Chest", "Gift", "Default"];
        for (const candidate of candidates) {
            try {
                itemSpawnSourceDefault = ItemSpawnSource.field(candidate).value;
                return itemSpawnSourceDefault;
            } catch(e) {}
        }
    } catch(e) {}
    itemSpawnSourceDefault = 0;
    return itemSpawnSourceDefault;
}

function spawnItemAsync(itemID: any, pos: any, rot: any = null): any {
    const id = typeof itemID === "string" ? Il2Cpp.string(itemID) : itemID;
    try {
        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) return null;

        const spawnPos = pos || Vector3.field("zeroVector").value;
        const spawnRot = rot || Quaternion.method("get_identity").invoke();
        const source = getItemSpawnSourceDefault();

        // Try common overloads
        try {
            return PrefabGen.method("SpawnItemAsync", 4).invoke(id, spawnPos, spawnRot, source);
        } catch(e) {}
        try {
            return PrefabGen.method("SpawnItem", 4).invoke(id, spawnPos, spawnRot, source);
        } catch(e) {}
        try {
            return PrefabGen.method("SpawnItemAsync", 5).invoke(id, spawnPos, spawnRot, null, source);
        } catch(e) {}
        try {
            return PrefabGen.method("SpawnItem", 5).invoke(id, spawnPos, spawnRot, null, source);
        } catch(e) {}

        console.error("[Spawn] All overloads failed for", itemID);
        return null;
    } catch(e) {
        console.error("[Spawn Failed]", e);
        return null;
    }
}

function spawnItem(itemID: string, pos: any = null, hue: number | null = null, sat: number | null = null, scale: number | null = null) {
    const spawned = spawnItemAsync(itemID, pos);
    if (spawned && (hue !== null || sat !== null || scale !== null)) {
        pendingSpawnApply.push({obj: spawned, hue: hue, sat: sat, scale: scale, frame: frameCount});
    }
    return spawned;
}

function spawnPrefab(prefabName: string, pos: any = null) {
    return spawnItemAsync(prefabName, pos);
}

function spawnMob(mobNameOrId: string | number, pos: any = null) {
    const name = typeof mobNameOrId === "number" ? (acMobNameById[mobNameOrId] || "Angler") : mobNameOrId;
    return spawnItemAsync("mob_prefab/" + name, pos);
}

function installAntiRpcBlockHooks() {
    if (antiRpcBlockHooksInstalled) return;

    try {
        const NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");

        // Block force scale / stun
        const applyBuff = NetPlayer.method("RPC_ApplyBuff");
        applyBuff.implementation = function (args: any) {
            if (antiRpcBlock && shouldBlock(this)) {
                console.log("[AntiRPC] Blocked force buff/scale");
                return;
            }
            return applyBuff.invokeRaw(this, args);
        };

        // Block forced teleport
        const rpcTeleport = NetPlayer.method("RPC_Teleport");
        rpcTeleport.implementation = function (args: any) {
            if (antiRpcBlock && shouldBlock(this)) {
                console.log("[AntiRPC] Blocked forced teleport");
                return;
            }
            return rpcTeleport.invokeRaw(this, args);
        };

        console.log("[AntiRPC] Basic hooks installed successfully");
        antiRpcBlockHooksInstalled = true;

    } catch (e) {
        console.error("[AntiRPC] Failed to install hooks:", e);
    }
}
// =====================================================================
    const NetworkObjectClass = PhotonFusionNetworking.class("Fusion.NetworkObject");
    const NetworkTransformClass = PhotonFusionNetworking.class("Fusion.NetworkTransform");
    const FusionPlayerClass = PhotonFusionNetworking.class("Fusion.PlayerRef");
    //const NetworkPlayer = Fusion.class("NetworkPlayer");
    const NManager = AssemblyCSharp.class("AnimalCompany.NetworkManager");
    //const VRRig = AssemblyCSharp.class("VRRig");
    //const GorillaNot = AssemblyCSharp.class("GorillaNot");
    //const GorillaParentClass = AssemblyCSharp.class("GorillaParent");
    //const NetworkSystemClass = AssemblyCSharp.class("NetworkSystem");
    const GorillaReportButton = AssemblyCSharp.class("AnimalCompany.ComputerTerminalKey");
    const ACTerminal = AssemblyCSharp.class("AnimalCompany.ComputerTerminalView");
    //const FreeHoverboardManager = AssemblyCSharp.class("FreeHoverboardManager").method("get_instance").invoke();
    //const GameMode = AssemblyCSharp.class("GorillaGameModes.GameMode");
    //const FriendshipGroupDetection = AssemblyCSharp.class("GorillaTagScripts.FriendshipGroupDetection").method("get_Instance").invoke();
    //const GorillaVelocityTracker = AssemblyCSharp.class("GorillaLocomotion.Climbing.GorillaVelocityTracker");
    //const PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
    //const RpcTarget = PhotonUnityNetworking.class("Photon.Pun.RpcTarget");
    const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");    
    const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");

    const israpidfire = false;
    const itemGunDelay = 0;
    // NOTE: `time` is the outer let declared at module scope — do NOT re-declare it here.
    const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    const Object = UnityEngineCore.class("UnityEngine.Object");
    const SystemObject = Il2Cpp.corlib.class("System.Object");
    const NullableDef = Il2Cpp.corlib.class("System.Nullable`1"); // Generic Nullable<T>
    const Int32Type = Il2Cpp.corlib.class("System.Int32");       // The T in Nullable<T>
    const null2 = NullableDef.inflate(Int32Type);          // Nullable<Int32>
    const NULL = Il2Cpp.reference(SystemObject.alloc());

    const Thread = Il2Cpp.corlib.class("System.Threading.Thread");
    const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    const Vector2 = UnityEngineCore.class("UnityEngine.Vector2");
let cachedVec2FeatureMethod: any = null;
function getVec2FeatureMethod(device: any): any {
    if (cachedVec2FeatureMethod) return cachedVec2FeatureMethod;
    const candidates = device.method("TryGetFeatureValue").overloads();
    for (const m of candidates) {
        try {
            const params = m.parameters;
            if (params.length === 2 && params[1].type.name.includes("Vector2")) {
                cachedVec2FeatureMethod = m;
                return m;
            }
        } catch (_) {}
    }
    return null;
}
    const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    const Time = UnityEngineCore.class("UnityEngine.Time");
    const Resources = UnityEngineCore.class("UnityEngine.Resources");
    const Material = UnityEngineCore.class("UnityEngine.Material");
    const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    const Shader = UnityEngineCore.class("UnityEngine.Shader");
    const Color = UnityEngineCore.class("UnityEngine.Color");
    const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    const PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");
    const Light = UnityEngineCore.class("UnityEngine.Light");
    const AudioSource = UnityEngineAudio.class("UnityEngine.AudioSource");

    const MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    const Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    const Ray = UnityEngineCore.class("UnityEngine.Ray");
    const RaycastHit = UnityEnginePhysics.class("UnityEngine.RaycastHit");

    const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    const Text = UnityEngineUI.class("UnityEngine.UI.Text");
    const Font = UnityEngineTextRendering.class("UnityEngine.Font");

    const TextMeshPro = UnityTextMeshPro.class("TMPro.TextMeshPro");

    const UnityWebRequest = UnityEngineWebRequestModule.class("UnityEngine.Networking.UnityWebRequest"); // if ur still reading dont ddos me :(

    const DownloadHandlerBuffer = UnityEngineWebRequestModule.class("UnityEngine.Networking.DownloadHandlerBuffer"); // okay bye EDIT: how dare you ac devs, you stripped DownloadHandlerAudioClip and ruined my genius idea :(

    //const GorillaTagger = GorillaTaggerClass.field("_instance").value;
    //const GorillaParent = GorillaParentClass.field("instance").value;
    //const GorillaNotInst = GorillaNot.field("instance").value;
    //const NetworkSystem = NetworkSystemClass.field("Instance").value;

    //const LocalRig = GorillaTagger.field("offlineVRRig").value;
    let myNP = null;
    // Dynamic GTPlayer - re-fetched each use to avoid stale pointer crashes
    const getGTPlayer = () => {
        try {
            const v = GTPlayerClass.field("<Instance>k__BackingField").value;
            return (v && !v.isNull()) ? v : null;
        } catch (_) { return null; }
    };
    const getRigidbody = () => {
        try {
            const gtp = getGTPlayer();
            if (!gtp) return null;
            const v = gtp.field("_playerRigidBody").value;
            return (v && !v.isNull()) ? v : null;
        } catch (_) { return null; }
    };
    // Keep names working for existing code
    const GTPlayer = getGTPlayer();
    const rigidbody = getRigidbody();
    //const GorillaComputer = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("GorillaNetworking.GorillaComputer").field("instance").value;

    const UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
    const TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));

    //const GorillaSurfaceOverride = AssemblyCSharp.class("GorillaSurfaceOverride");

    const zeroVector = Vector3.field("zeroVector").value;
    const oneVector = Vector3.field("oneVector").value;
    const identityQuaternion = Quaternion.field("identityQuaternion").value;

    // --- Mob spawn helpers (ported from da.ts) ---
    const acMobIdByName: Record<string, number> = {
        Unidentified: 0, Angler: 1, AnglerController: 1, AnglerMad: 2, AnglerMadController: 2, Armstrong: 3, ArmstrongController: 3, ArmstrongMad: 4, ArmstrongMadController: 4,
        Banshee: 5, BansheeController: 5, Bomb: 6, BombController: 6, Bomber: 7, BomberController: 7, BomberFlashbang: 8, BomberFlashbangController: 8, BomberMad: 9, BomberMadController: 9,
        Chicken: 10, ChickenController: 10, Cyst: 11, CystController: 11, FakeGorilla: 12, FakeGorillaController: 12, BigHead: 13, BigHeadController: 13, RedGreen: 14, RedGreenController: 14,
        Phantom: 15, PhantomController: 15, EvilEye: 16, EvilEyeController: 16, GiantThrower: 17, GiantThrowerController: 17, RedGreenMad: 18, RedGreenMadController: 18,
        Spider: 19, SpiderController: 19, FlyingSwarm: 20, FlyingSwarmController: 20, NextBot: 21, NextBotController: 21, Segway: 22, SegwayController: 22,
        NextBotStatic: 23, NextBotStaticController: 23, EvilEyePinata: 24, EvilEyePinataController: 24, EvilEyePinataLarge: 25, EvilEyePinataLargeController: 25,
        Lanky: 26, LankyController: 26, Blob: 27, BlobController: 27, Cutie: 28, CutieController: 28, SpiderCave: 29, SpiderCaveController: 29, ForestMob: 30, ForestMobController: 30,
        Mimic: 31, MimicController: 31, GraveyardBoss: 32, GraveyardBossController: 32, GiantController_GraveyardBoss: 32, Ringmaster: 33, RingmasterController: 33,
        Puppet: 34, PuppetController: 34, PolypMass: 35, PolypMassController: 35, RobotDog: 36, RobotDogController: 36, Shadow: 37, ShadowController: 37,
        Heart: 38, HeartController: 38, HeartMobController: 38, Slimey: 39, SlimeyController: 39, ShadowBoss: 40, ShadowBossController: 40, BigShark: 41, BigSharkController: 41,
        EdenZombie: 42, EdenZombieController: 42, Skinwalker: 43, SkinwalkerController: 43, YinWorm: 44, YinWormController: 44, YangWorm: 45, YangWormController: 45,
        ArmstrongSpace: 46, Smiley: 47
    };
    const acMobNameById: Record<number, string> = {
        0: "Unidentified", 1: "Angler", 2: "AnglerMad", 3: "Armstrong", 4: "ArmstrongMad", 5: "Banshee", 6: "Bomb", 7: "Bomber", 8: "BomberFlashbang", 9: "BomberMad",
        10: "Chicken", 11: "Cyst", 12: "FakeGorilla", 13: "BigHead", 14: "RedGreen", 15: "Phantom", 16: "EvilEye", 17: "GiantThrower", 18: "RedGreenMad", 19: "Spider",
        20: "FlyingSwarm", 21: "NextBot", 22: "Segway", 23: "NextBotStatic", 24: "EvilEyePinata", 25: "EvilEyePinataLarge", 26: "Lanky", 27: "Blob", 28: "Cutie",
        29: "SpiderCave", 30: "ForestMob", 31: "Mimic", 32: "GraveyardBoss", 33: "Ringmaster", 34: "Puppet", 35: "PolypMass", 36: "RobotDog", 37: "Shadow",
        38: "Heart", 39: "Slimey", 40: "ShadowBoss", 41: "BigShark", 42: "EdenZombie", 43: "Skinwalker", 44: "YinWorm", 45: "YangWorm", 46: "ArmstrongSpace", 47: "Smiley"
    };
    const acMobAliases: Record<string, string> = {
        GiantController: "GiantThrower", GiantGreenController: "GiantThrower", Giant_GreenController: "GiantThrower", GreenGiantController: "GiantThrower",
        Green_GiantController: "GiantThrower", YanWormController: "YangWorm", YingWormController: "YinWorm", YinYanWormController: "YinWorm",
        YingYangWormController: "YinWorm", PrototypeSlenderController: "Shadow"
    };
    let acMobValidatorBypassEnabled = false;
    let acNetworkObjectSpawnDelegateRef: any = null;
    let acBeforeMobSpawnDelegate: any = null;
    let acBeforeMobSpawnDelegateClass: any = null;

    const launchAxisCache: Map<string, string> = new Map();

    const normalizeSceneObjectHandle = (obj: any): string => {
        try {
            if (!obj || obj.isNull?.()) return "";
            const handle = obj.handle;
            if (!handle) return "";
            return handle.toString();
        } catch(_) {
            return "";
        }
    };

    const getLaunchForward = (sourceTransform: any, referenceTransform: any = null): any => {
        try {
            const headCollider = safeField(getInstance(), "headCollider");
            const refTf = (referenceTransform && !referenceTransform.isNull?.())
                ? referenceTransform
                : (headCollider && !headCollider.isNull?.() ? getTransform(headCollider) : null);
            const referenceForward = refTf && !refTf.isNull?.()
                ? readVec3Components(refTf.method("get_forward").invoke())
                : [0, 0, 1];
            const cacheKey = normalizeSceneObjectHandle(sourceTransform) || String(sourceTransform);
            const cachedAxis = launchAxisCache.get(cacheKey);
            const readAxis = (axisName: string): any => {
                switch (axisName) {
                    case "forward": return sourceTransform.method("get_forward").invoke();
                    case "-forward": return Vector3.method("op_Multiply", 2).invoke(sourceTransform.method("get_forward").invoke(), -1);
                    case "up": return sourceTransform.method("get_up").invoke();
                    case "-up": return Vector3.method("op_Multiply", 2).invoke(sourceTransform.method("get_up").invoke(), -1);
                    case "right": return sourceTransform.method("get_right").invoke();
                    case "-right": return Vector3.method("op_Multiply", 2).invoke(sourceTransform.method("get_right").invoke(), -1);
                    default: return sourceTransform.method("get_forward").invoke();
                }
            };
            if (cachedAxis) {
                return Vector3.method("Normalize").invoke(readAxis(cachedAxis));
            }
            const candidates = ["forward", "-forward"];
            let bestAxis = "forward";
            let bestScore = -999999;
            for (const axisName of candidates) {
                try {
                    const vec = readAxis(axisName);
                    const v = readVec3Components(vec);
                    const score = (v[0] * referenceForward[0]) + (v[1] * referenceForward[1]) + (v[2] * referenceForward[2]);
                    if (score > bestScore) {
                        bestScore = score;
                        bestAxis = axisName;
                    }
                } catch(_) {}
            }
            launchAxisCache.set(cacheKey, bestAxis);
            return Vector3.method("Normalize").invoke(readAxis(bestAxis));
        } catch(_) {
            try { return sourceTransform.method("get_forward").invoke(); } catch(_) { return [0, 0, 1]; }
        }
    };

    const getLaunchUp = (sourceTransform: any, forward: any): any => {
        try {
            const worldUp = [0, 1, 0];
            const dot = Vector3.method("Dot").invoke(worldUp, forward) as number;
            let projected = Vector3.method("op_Subtraction", 2).invoke(
                worldUp,
                Vector3.method("op_Multiply", 2).invoke(forward, dot)
            );
            const mag = Vector3.method("Magnitude").invoke(projected) as number;
            if (mag < 0.05) {
                projected = sourceTransform.method("get_up").invoke();
            }
            return Vector3.method("Normalize").invoke(projected);
        } catch(_) {
            try { return sourceTransform.method("get_up").invoke(); } catch(_) { return [0, 1, 0]; }
        }
    };

    const getLaunchRotation = (sourceTransform: any, forward: any, up: any): any => {
        try { return Quaternion.method("LookRotation", 2).invoke(forward, up); } catch(_) {}
        try { return Quaternion.method("LookRotation", 1).invoke(forward); } catch(_) {}
        try { return sourceTransform.method("get_rotation").invoke(); } catch(_) { return identityQuaternion; }
    };


    const acGetMobEnumField = (name: string): any => {
        try { return AssemblyCSharp.class("AnimalCompany.MobID").field(name).value; } catch(_) {}
        return null;
    };
    const acResolveMobID = (mobId: any): any => {
        if (typeof mobId === "number") {
            const enumName = acMobNameById[mobId | 0];
            return enumName ? acGetMobEnumField(enumName) : null;
        }
        const rawName = String(mobId ?? "").replace(/^mob_prefab\//, "");
        const trimmed = rawName.replace(/_?Controller$/, "");
        const candidates = [rawName, acMobAliases[rawName], trimmed, acMobAliases[trimmed]].filter(Boolean) as string[];
        for (const candidate of candidates) {
            const enumVal = acGetMobEnumField(candidate);
            if (enumVal !== null) return enumVal;
            if (Object.prototype.hasOwnProperty.call(acMobIdByName, candidate)) {
                const enumName = acMobNameById[acMobIdByName[candidate] | 0];
                const mapped = enumName ? acGetMobEnumField(enumName) : null;
                if (mapped !== null) return mapped;
            }
        }
        return null;
    };
    const acEnableMobValidatorBypass = (): void => {
        if (acMobValidatorBypassEnabled) return;
        try {
            AssemblyCSharp.class("AnimalCompany.MobSpawnValidator").method("IsMobAllowed", 1).implementation = () => true;
            acMobValidatorBypassEnabled = true;
        } catch(e) { console.error("[MobValidatorBypass]", e); }
    };
    const acGetBeforeMobSpawnDelegate = (): any => {
        if (acBeforeMobSpawnDelegate) return acBeforeMobSpawnDelegate;
        try {
            acBeforeMobSpawnDelegateClass = Il2Cpp.domain.assembly("Fusion.Runtime").image.class("Fusion.NetworkRunner").tryNested("OnBeforeSpawned");
            const validator = AssemblyCSharp.class("AnimalCompany.MobSpawnValidator");
            acBeforeMobSpawnDelegate = Il2Cpp.delegate(acBeforeMobSpawnDelegateClass, (_runner: any, networkObject: any) => {
                try {
                    if (!networkObject || (networkObject.handle && networkObject.handle.isNull())) return;
                    const networkId = networkObject.method("get_Id").invoke();
                    validator.method("AddAllowMob", 1).invoke(networkId);
                } catch(e) { console.error("[BeforeMobSpawn]", e); }
            });
        } catch(e) {
            console.error("[BeforeMobSpawn delegate]", e);
            acBeforeMobSpawnDelegate = null;
        }
        return acBeforeMobSpawnDelegate;
    };
    const acGetNetworkObjectSpawnDelegateRef = (): any => {
        if (acNetworkObjectSpawnDelegateRef) return acNetworkObjectSpawnDelegateRef;
        try {
            const spawnDelegateClass = Il2Cpp.domain.assembly("Fusion.Runtime").image.class("Fusion.NetworkObjectSpawnDelegate");
            acNetworkObjectSpawnDelegateRef = Il2Cpp.reference(spawnDelegateClass.alloc());
        } catch(e) {
            console.error("[NetworkObjectSpawnDelegate]", e);
            acNetworkObjectSpawnDelegateRef = NULL;
        }
        return acNetworkObjectSpawnDelegateRef;
    };
    const trackPersistentMob = (mobEntry: { name: string; id: number }, pos: any, rot: any, spawned: any) => {
        try {
            persistentMobEntries.push({
                mobEntry,
                pos,
                rot,
                object: spawned ?? null,
                lastRespawnTime: time
            });
        } catch(_) {}
    };
    const spawnMobAtPos = (mobEntry: { name: string; id: number }, pos: any, rot?: any): any => {
        const trackSpawnedMob = (spawned: any) => {
            try {
                if (spawned && !spawned.isNull?.()) {
                    stabilizeMobInstance(spawned, pos);
                    spawnedPersistentMobs.push(spawned);
                    trackPersistentMob(mobEntry, pos, rot ?? identityQuaternion, spawned);
                }
            } catch(_) {}
            return spawned;
        };
        const getMobPrefabName = (): string | null => {
            try {
                let MobDataUtilityClass: any = null;
                try { MobDataUtilityClass = AssemblyCSharp.class("AnimalCompany.MobDataUtility"); } catch(_) {}
                if (MobDataUtilityClass) {
                    try {
                        const nameObj = MobDataUtilityClass.method("GetMobPrefabName").invoke(mobEntry.id);
                        const text = nameObj?.content ?? String(nameObj ?? "");
                        if (text && text !== "null" && text !== "?") return text;
                    } catch(_) {}
                    try {
                        const nameObj = MobDataUtilityClass.method("GetMobPrefabName", 1).invoke(mobEntry.id);
                        const text = nameObj?.content ?? String(nameObj ?? "");
                        if (text && text !== "null" && text !== "?") return text;
                    } catch(_) {}
                }
            } catch(_) {}
            return null;
        };
        const tryPrefabFallback = () => {
            try {
                const exactPrefab = getMobPrefabName();
                const cleanName = mobEntry.name.replace(/^mob_prefab\//, "");
                const fallbackNames = [
                    exactPrefab,
                    cleanName,
                    "mob_prefab/" + cleanName,
                    "mob_" + cleanName,
                    cleanName.replace(/\s+/g, ""),
                    cleanName.replace(/\s+/g, "_"),
                    "Mob" + cleanName,
                    cleanName + "Mob",
                    cleanName + "Controller"
                ];
                for (const prefabName of fallbackNames) {
                    if (!prefabName) continue;
                    const spawned = spawnNetworkPrefab(prefabName, pos, rot ?? identityQuaternion);
                    if (spawned && !spawned.isNull?.()) return trackSpawnedMob(spawned);
                }
            } catch(_) {}
            return null;
        };

        try {
            acEnableMobValidatorBypass();
            const spawnDelegate = acGetNetworkObjectSpawnDelegateRef();
            const resolved = acResolveMobID(mobEntry.id) ?? acResolveMobID(mobEntry.name);
            if (resolved !== null) {
                try {
                    const result = PrefabGen.method("SpawnMob", 5).invoke(resolved, pos, rot ?? identityQuaternion, spawnDelegate, Il2Cpp.string("mod"));
                    if (result && !result.isNull?.()) return trackSpawnedMob(result);
                    return null;
                } catch(_) {}
                try {
                    const result = PrefabGen.method("SpawnMob", 4).invoke(resolved, pos, rot ?? identityQuaternion, spawnDelegate);
                    if (result && !result.isNull?.()) return trackSpawnedMob(result);
                    return null;
                } catch(_) {}
            }
        } catch(e) {
            if (String(e).toLowerCase().indexOf("access violation") >= 0) mobSpawnAsyncBroken = true;
            console.error("[spawnMobAtPos] enum path " + mobEntry.name + " id=" + mobEntry.id + ": " + e);
        }

        const fallback = tryPrefabFallback();
        if (fallback && !fallback.isNull?.()) return fallback;
        return null;
    };
    // --- End mob spawn helpers ---

    const instanceField = GTPlayerClass.fields.find((f: any) => f.name.includes("Instance"));

    // Dynamic re-fetch helpers — avoids stale/GC'd pointer crashes (access violation fix)
    const getInstance = () => {
        try {
            const f = GTPlayerClass.fields.find((f: any) => f.name.includes("Instance"));
            const inst = f ? f.value : null;
            return (inst && !inst.isNull()) ? inst : null;
        } catch (_) { return null; }
    };
    const safeField = (obj: any, name: string) => {
        try {
            if (!obj || obj.isNull()) return null;
            const v = obj.field(name).value;
            if (typeof v === "number") return v;
            if (typeof v === "boolean") return v;
            return (v && !v.isNull?.()) ? v : null;
        } catch (_) { return null; }
    };
    const getPlayerScaleNumber = (): number => {
        try {
            const gtp = getGTPlayer();
            if (!gtp) return 1.0;
            const v = gtp.field("<playerScale>k__BackingField").value;
            if (typeof v === "number" && Number.isFinite(v)) return v;
        } catch (_) {}
        return 1.0;
    };
    const safeInvoke = (obj: any, methodName: string, ...args: any[]) => {
        try {
            if (!obj || obj.isNull()) return null;
            return obj.method(methodName).invoke(...args);
        } catch (_) { return null; }
    };

    const instance          = getInstance();
    const rightHandTransform = safeField(getInstance(), "rightHandTransform");
    const leftHandTransform  = safeField(getInstance(), "leftHandTransform");
    const headCollider       = safeField(getInstance(), "headCollider");
    const bodyCollider       = safeField(getInstance(), "bodyCollider");
    const leftHandFollower   = safeField(getInstance(), "leftHandFollower");
    const rightHandFollower  = safeField(getInstance(), "rightHandFollower");
    const playerRigidBody    = safeField(getInstance(), "_playerRigidBody");

    const whatnumber = 0;

    const punchLastLeft = [
        zeroVector, zeroVector, zeroVector, zeroVector, zeroVector,
        zeroVector, zeroVector, zeroVector, zeroVector, zeroVector
    ];

    const punchLastRight = [
        zeroVector, zeroVector, zeroVector, zeroVector, zeroVector,
        zeroVector, zeroVector, zeroVector, zeroVector, zeroVector
    ];

    let LPrev = Vector3.field("zeroVector").value;
    let RPrev = Vector3.field("zeroVector").value;
    let LVel = Vector3.field("zeroVector").value;
    let RVel = Vector3.field("zeroVector").value;
    let AvgVel = Vector3.field("zeroVector").value;

    let righthand = false;

    const arial = Resources
        .method("GetBuiltinResource", 1)
        .inflate(Font)
        .invoke(Il2Cpp.string("Arial.ttf"));

    const prefabList = [
        'InflatedBalloon', 'InflatedHeartBalloon', 'ChristmasBox', 'ChristmasBoxManager',
        'RPGRocket', 'RPGRocketEgg', 'RPGRocketSpear', 'item_randombox_base',
        'StickyAnchor', 'SpawnableZipline', 'NetLootSpawnGroup', 'Vehicle_Buggy',
        'TeleportationManager', 'FlareGunProjectile', 'AutoDestroyItem_DeadBody_Poop',
        'AutoDestroyItem_Splash (0)', 'AutoDestroyItem_Splash (1)', 'AutoDestroyItem_Splash (2)',
        'AutoDestroyItem_Splash (3)', 'AutoDestroyItem_Splash (4)', 'AutoDestroyItem_Splash (5)',
        'SlenderMonster', 'SpaceshipTeleporter', 'MazeManager', 'ThunderController',
        'Explosion_AntiGravity', 'Explosion_Bomb', 'Explosion_Bomber', 'Explosion_BroccoliGrenade',
        'Explosion_ClusterGrenade', 'Explosion_Dynamite', 'Explosion_Egg', 'Explosion_Flashbang',
        'Explosion_FlyingSwarm', 'Explosion_Grenade', 'Explosion_Heart_Gun',
        'Explosion_ImpulseGrenade', 'Explosion_Landmine', 'Explosion_RPG', 'Explosion_RPG_Spear',
        'Explosion_SellingMachine', 'Explosion_StashGrenade', 'Explosion_TeleGrenade',
        'Explosion_Tripwire', 'Explosion_Vehicle', 'ExplosiveEgg', 'ExplosiveEggClustered',
        'ItemSellingMachineController', 'Landmine', 'GiantRockObject',
        'HordeMobController', 'HordeMobLobbyHandler', 'LongAisleController',
        'Duplicator', 'HH_LockedDoor', 'HingedDoorNetworked', 'ScaffoldTrap',
        'Pillar_Arched_Broken_01', 'RuinTower_FloatingPlatform', 'RuinTower_FloatingSmall',
        'AutoDestroyItem_OilSplatter', 'AutoDestroyItem_Splash0', 'AutoDestroyItem_Splash1',
        'AutoDestroyItem_Splash2', 'AutoDestroyItem_Splash3', 'AutoDestroyItem_Splash4',
        'AutoDestroyItem_Splash5', 'BaitShopButton_Spawner', 'BarrelBeansDynamic',
        'BarrelBeansStatic', 'BarrelExplodingDynamic', 'BarrelExplodingStatic',
        'BarrelOilDynamic', 'BarrelOilStatic', 'Basketball', 'BigBanana',
        'BigHatchdoorNetObject', 'BigWheelhandleSpawner', 'BonfireController',
        'BrainPowerPlug', 'ChoppableTreeManager', 'ClawMachineNetObject',
        'CoreTeleporter', 'DiggableGrave', 'DummyPlayerTarget', 'DummyTarget',
        'EasterEgg_QuestSpawner', 'EscherToyBlockObject', 'FortuneTellerNet',
        'FourLeafQuest_FourLeafSpawner', 'FuelCanisterNetObject', 'FuelCanisterSpawner',
        'GenericWorldItemSpawner', 'GiantController_GraveyardBoss_backup', 'GiantRockObject_Fire',
        'GreenscreenNET', 'GrenadeProjectile', 'HatchdoorGrabHandle', 'HatchdoorNetObject',
        'HellAltar', 'KeypadDoorNetObject', 'LakePineapple_Spawner', 'LaserMirror',
        'LaserSink', 'LaserSource', 'LeaderBoardMonsterKill', 'LockedDoor_KeySpawner',
        'LockedShippingContainer_Quest', 'LogQuestItemSpawner', 'LootLantern',
        'Mausoleum_01', 'MetaCameraControls', 'MimicSpawner_CemeteryTile1',
        'MimicSpawner_CemeteryTile3', 'MomToyBlockObject', 'MomToyBlockObject_DisappearOnDrop',
        'MountainKey_Spawner', 'MovieTheater', 'Net', 'NetGameTimeManager',
        'NetMobSpawnGroup', 'NetPlayer', 'NetSpectator', 'NetworkedLever_SecretLeft',
        'RadarPartSpawner', 'RamEventNet', 'RiggedPlank', 'RobotDogRPG',
        'SharkScareTriggerObject', 'Shipwheel', 'SimpleKeypadDoor', 'SkiRaceController',
        'Snail_Spawner', 'Spawner_Key', 'SpiderController', 'TeleportMachine',
        'TubeMonster', 'Uvula', 'VHSQuests_VHSSpawner', 'WinterFilm_ReelSpawner',
        'grababble_fish_paper_message', 'mom_pillow', 'remote_controller_receiver'
    ];

    function UnlockAll() {
      // Get class references
      const appClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.App");
      const appStateClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.AppState");
      const netSessionStateClass = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.UserState");
      const netSessionStateClass2 = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.UserInventoryState");

      const stateObject = appClass.method("get_state").invoke();

      const netSessionObject = appStateClass.method("get_user").bind(stateObject).invoke();

      // Get UserState.inventory property
      const invObject = netSessionStateClass.method("get_inventory").bind(netSessionObject).invoke();

      const moderateRoomObject = netSessionStateClass.method("get_isDeveloper").bind(netSessionObject).invoke();

      const devallitemsObject = netSessionStateClass2.method("get_devOwnAllAvatarItemsOverride").bind(invObject).invoke();

      const statePrimitiveClass = Il2Cpp.domain.assembly("SpatialSys.ObservableState").image.class("SpatialSys.ObservableState.StatePrimitive`1");
      const boolType = Il2Cpp.corlib.class("System.Boolean");
      const genericStatePrimitiveClass = statePrimitiveClass.inflate(boolType);

      moderateRoomObject.method("set_value").invoke(true);

      devallitemsObject.method("set_value").invoke(true);
    }

    function Destroy(object: any) {
        Object.method("Destroy", 1).invoke(object);
    }

    function getComponent(obj: any, type: any) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }

    function getComponentInParent(obj: any, type: any) {
        return obj.method("GetComponentInParent", 0).inflate(type).invoke();
    }

    function addComponent(obj: any, type: any) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }
   
    function getRightFingers(rig: any) {
        try {
            const view = rig.method("get_view").invoke();
            if (!view || view.isNull()) return null;
            const fingerViews = view.field("_fingerViews").value;
            if (!fingerViews || fingerViews.isNull() || fingerViews.length < 2) return null;
            return fingerViews.get(1);
        } catch(_) { return null; }
    }

    function getOrAddComponent(obj: any, type: any) {
        let returnType = getComponent(obj, type);
        if (returnType != null && returnType != undefined) {
            return returnType
        }
        return addComponent(obj, type);
    }

    function getObject(obj: any) {
        return GameObject.method("Find", 1).invoke(Il2Cpp.string(obj));
    }

    function playerIsLocal(player: any) {
        return player.method("get_IsMine").invoke();
    }

    let lastSpawnTimesLeft: Map<string, number> = new Map();
    let lastSpawnTimesRight: Map<string, number> = new Map();

    function checkOtherPlayerInputs(netPlayer: any): any {
        let result = { leftTrigger: false, leftGrab: false, rightTrigger: false, rightGrab: false };
        try {
            const view = netPlayer.method("get_view").invoke();
            if (!view || view.isNull()) return result;
            
            const fingerViews = view.field("_fingerViews").value;
            if (fingerViews && !fingerViews.isNull() && fingerViews.length >= 2) {
                const leftHand = fingerViews.get(0);
                const rightHand = fingerViews.get(1);
                
                if (leftHand && !leftHand.isNull()) {
                    const leftTriggerVal = leftHand.field("_indexValue").value;
                    const leftGripVal = leftHand.field("_middleValue").value;
                    result.leftTrigger = leftTriggerVal > 0.4;
                    result.leftGrab = leftGripVal > 0.4;
                }
                
                if (rightHand && !rightHand.isNull()) {
                    const rightTriggerVal = rightHand.field("_indexValue").value;
                    const rightGripVal = rightHand.field("_middleValue").value;
                    result.rightTrigger = rightTriggerVal > 0.4;
                    result.rightGrab = rightGripVal > 0.4;
                }
            }
        } catch(e) {}
        return result;
    }

    //function spawnItemHelper(item, pos, rot){
    //    PrefabGen.method("SpawnItem", 4).invoke(
    //    Il2Cpp.string("item_" + item),
    //    pos,
    //    rot,
    //    NULL
    //    )
    //}

    //function setPlayerName(name) {
    //    GorillaComputer.field("currentName").value = Il2Cpp.string(name);
    //    GorillaComputer.field("savedName").value = Il2Cpp.string(name);
//
    //    PlayerPrefs.method("SetString").invoke(Il2Cpp.string("playerName"), Il2Cpp.string(name))
    //    PlayerPrefs.method("Save").invoke();
//
    //    PhotonNetwork.method("get_LocalPlayer").invoke().method("set_NickName").invoke(Il2Cpp.string(name));
    //}
//
    //function setPlayerColor(color) {
    //    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("redValue"), color[0]);
    //    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("greenValue"), color[1]);
    //    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("blueValue"), color[2]);
    //    PlayerPrefs.method("Save").invoke();
//
    //    GorillaTagger.method("UpdateColor").invoke(color[0], color[1], color[2]);
    //    const objectArray = Il2Cpp.array(SystemObject, [
    //        Il2Cpp.reference(color[0], Il2Cpp.Type.Enum.FLOAT),
    //        Il2Cpp.reference(color[1], Il2Cpp.Type.Enum.FLOAT),
    //        Il2Cpp.reference(color[2], Il2Cpp.Type.Enum.FLOAT)
    //    ]);
//
    //    const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
    //        "System.String",
    //        "Photon.Pun.RpcTarget",
    //        "System.Object[]");
//
    //    method.invoke(Il2Cpp.string("RPC_InitializeNoobMaterial"), 0, objectArray);
    //}

    function getTransform(obj: any) {
        try {
            if (!obj || obj.isNull()) return null;
            const t = obj.method("get_transform").invoke();
            return (t && !t.isNull()) ? t : null;
        } catch (_) { return null; }
    }

    function world2Player(position: any) {
        const _bc = safeField(getInstance(), "bodyCollider"); if (!_bc || !getGTPlayer()) return position;
        try {
            position = Vector3.method("op_Subtraction", 2).invoke(position, getTransform(safeField(getInstance(), "bodyCollider")).method("get_position").invoke());
            position = Vector3.method("op_Addition", 2).invoke(position, getTransform(getGTPlayer()).method("get_position").invoke());
        } catch(_) {}
        return position;
    }

    function teleportPlayer(position: any) {
        const player = NetPlayer.method("get_localPlayer").invoke();
        if (!player) return;
        player.method("RPC_Teleport").invoke(world2Player(position));
    }
    function getMyPlayer() {
        //GTPlayer.method("TeleportTo", 3).invoke(world2Player(position), getTransform(getGTPlayer()).method("get_rotation").invoke(), false);
        //netPlayer.method("RPC_Teleport").invoke(checkpoint.method("get_transform").invoke().method("get_position").invoke());
        const player = NetPlayer.method("get_localPlayer").invoke();
        if (!player) return;
        return player;
        //player.method("RPC_Teleport").invoke(world2Player(position))
    }

    const AssetBundle = Il2Cpp.domain.assembly("UnityEngine.AssetBundleModule").image.class("UnityEngine.AssetBundle");
    // Cache for loaded bundles and clips
    const loadedBundles: any = {};
    const loadedClips: any = {};

    // Cleanup function to call when restarting the script
    function CleanupAssetBundles() {
      console.log("Cleaning up AssetBundles...");
    
      // Unload all cached bundles
      for (const bundlePath in loadedBundles) {
        const bundle = loadedBundles[bundlePath];
        if (bundle && !bundle.isNull()) {
          console.log("Unloading bundle:", bundlePath);
          bundle.method("Unload", 1).invoke(true); // true = unload all loaded objects
        }
      }

      // Clear caches using basic loops
      for (const key in loadedBundles) {
        delete loadedBundles[key];
      }

      for (const key in loadedClips) {
        delete loadedClips[key];
      }

      console.log("AssetBundle cleanup complete");
    }

    // Auto-cleanup on script reload (call this at the start of your script)
    CleanupAssetBundles();

    function LoadClipFromAssetBundle(bundlePath: string, clipName: string, callback: (clip: any) => void) {
      const key = `${bundlePath}/${clipName}`;
    
      // If clip is already cached, return it immediately
      if (loadedClips[key]) {
        callback(loadedClips[key]);
        return;
      }

      // If bundle is already in our cache, just load the asset
      if (loadedBundles[bundlePath]) {
        loadAssetFromBundle(loadedBundles[bundlePath], clipName, key, callback);
        return;
      }

      // Check if bundle is already loaded by Unity (but not in our cache)
      const existingBundle = findAlreadyLoadedBundle(bundlePath, clipName);
      if (existingBundle) {
        console.log("Found already loaded AssetBundle:", bundlePath);
        loadedBundles[bundlePath] = existingBundle; // Add to our cache
        loadAssetFromBundle(existingBundle, clipName, key, callback);
        return;
      }

      // Load bundle asynchronously
      console.log("Loading AssetBundle:", bundlePath);
      const bundleRequest = AssetBundle.method("LoadFromFileAsync", 1).invoke(Il2Cpp.string(bundlePath));

      if (bundleRequest == null || bundleRequest.isNull()) {
        console.log("Failed to create AssetBundle load request:", bundlePath);
        callback(null);
        return;
      }

      // Wait for bundle to load
      waitForAssetBundleRequest(bundleRequest, (bundle) => {
        if (bundle == null || bundle.isNull()) {
          console.log("Failed to load AssetBundle:", bundlePath);
          callback(null);
          return;
        }

        loadedBundles[bundlePath] = bundle;
        loadAssetFromBundle(bundle, clipName, key, callback);
      });
    }

    function findAlreadyLoadedBundle(bundlePath: string, clipName: string): any {
      try {
        const allBundles = AssetBundle.method("GetAllLoadedAssetBundles").invoke();
        if (allBundles == null || allBundles.isNull()) {
          return null;
        }

        // Get the bundle filename from the full path
        const bundleFileName = bundlePath.split('/').pop()?.split('\\').pop() || '';
        console.log("Looking for bundle with filename:", bundleFileName);

        // Convert IEnumerable to array-like iteration
        const bundleEnum = allBundles.method("GetEnumerator").invoke();
        while (bundleEnum.method("MoveNext").invoke()) {
          const bundle = bundleEnum.method("get_Current").invoke();
          if (bundle && !bundle.isNull()) {

            // First priority: Try to verify this bundle contains our target asset
            let hasTargetAsset = false;
            try {
              const testAsset = bundle.method("Contains", 1).invoke(Il2Cpp.string("assets/" + clipName));
              if (testAsset) {
                console.log("Bundle contains our target asset! Using existing bundle");
                return bundle;
              }
            } catch (e) {
              // Contains method might not exist or might fail, continue with name matching
            }

            // Second priority: Try exact name matching
            try {
              let bundleName = null;
              if (bundle.method("get_name")) {
                bundleName = bundle.method("get_name").invoke();
              }

              if (bundleName) {
                const nameStr = bundleName.toString();
                console.log("Found loaded bundle with name:", nameStr);

                // Only match if the names are exactly equal (avoid partial matches like "1" matching everything)
                if (nameStr === ("\"" + bundleFileName + "\"")) {
                  console.log("Bundle name matches exactly! Verifying it contains target asset...");
                  // Double-check by trying to load the asset
                  try {
                    const AudioClip = Il2Cpp.domain.assembly("UnityEngine.AudioModule").image.class("UnityEngine.AudioClip");
                    const testLoadRequest = bundle.method("LoadAssetAsync", 2).invoke(Il2Cpp.string("assets/" + clipName), AudioClip.type.object);
                    if (testLoadRequest && !testLoadRequest.isNull()) {
                      console.log("Asset load test successful, this is the correct bundle");
                      return bundle;
                    }
                  } catch (e) {
                    console.log("Asset load test failed, this might not be the right bundle");
                  }
                }
              }
            } catch (e) {
              // Name method doesn't exist, skip this bundle
            }
          }
        }

        console.log("No matching already-loaded bundle found");
        return null;
      } catch (e) {
        console.log("Error checking for already loaded bundles:", e);
        return null;
      }
    }

    function loadAssetFromBundle(bundle: any, clipName: string, cacheKey: string, callback: (clip: any) => void) {
      console.log("Loading asset:", clipName);
      const AudioClip = Il2Cpp.domain.assembly("UnityEngine.AudioModule").image.class("UnityEngine.AudioClip");
      const assetRequest = bundle.method("LoadAssetAsync", 2).invoke(Il2Cpp.string("assets/" + clipName), AudioClip.type.object);
    
      if (assetRequest == null || assetRequest.isNull()) {
        console.log("Failed to create asset load request:", clipName);
        callback(null);
        return;
      }

      // Wait for asset to load
      waitForAssetRequest(assetRequest, (clip) => {
        if (clip == null || clip.isNull()) {
          console.log("Clip not found:", clipName);
          callback(null);
          return;
        }

        loadedClips[cacheKey] = clip;
        callback(clip);
      });
    }

    function waitForAssetBundleRequest(request: any, callback: (bundle: any) => void) {
      const checkComplete = () => {
        const isDone = request.method("get_isDone").invoke();
        if (isDone) {
          const bundle = request.method("get_assetBundle").invoke();
          callback(bundle);
        } else {
          setTimeout(checkComplete, 10); // Check again in 10ms
        }
      };
      checkComplete();
    }

    function waitForAssetRequest(request: any, callback: (asset: any) => void) {
      const checkComplete = () => {
        const isDone = request.method("get_isDone").invoke();
        if (isDone) {
          const asset = request.method("get_asset").invoke();
          callback(asset);
        } else {
          setTimeout(checkComplete, 10); // Check again in 10ms
        }
      };
      checkComplete();
    }

    function PlayAudioFromFile(filePath: string, audioName: string) {
      const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
      const NetowrkRunner = PrefabGenerator.field("_instance").value.method("get_runner").invoke();
    
      if (NetowrkRunner.field("_cloudServices").value.method("get_IsInRoom").invoke()) {
        // Load clip from AssetBundle asynchronously
        LoadClipFromAssetBundle(filePath, audioName, (sound) => {
          if (sound == null) {
            console.log("Could not load AudioClip at path:", filePath);
            return;
          }

          playAudioClip(sound, filePath);
        });
      }
    }
    function playAudioClip(sound: any, path: string, extraDelay: number = 0) {
      // Get PrimaryRecorder
      const localPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer").method("get_localPlayer").invoke();
      const myRecorder = localPlayer.field("_recorder").value;

      if (myRecorder == null) {
        console.log("PrimaryRecorder is null, can't play audio");
        return;
      }

      // Set up audio clip playback
      myRecorder.method("set_SourceType", 1).invoke(1); // 1 = AudioClip source
      myRecorder.method("set_AudioClip", 1).invoke(sound);
      myRecorder.method("set_DebugEchoMode", 1).invoke(true);


      // Start recording and transmission
      myRecorder.method("RestartRecording", 0).invoke();

      console.log(`Playing AudioClip '${path}' through PrimaryRecorder`);

      const length = sound.method("get_length").invoke();
      setTimeout(() => {
        console.log("done waiting!");
        FixMic();
      }, (length * 1000) + extraDelay);
    }

    function FixMic() {
      const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
      const NetowrkRunner = PrefabGenerator.field("_instance").value.method("get_runner").invoke();
    
      if (NetowrkRunner.field("_cloudServices").value.method("get_IsInRoom").invoke()) {
        // Get PrimaryRecorder
        const localPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer").method("get_localPlayer").invoke();
        const myRecorder = localPlayer.field("_recorder").value;

        if (myRecorder == null) {
          console.log("PrimaryRecorder is null, can't fix mic");
          return;
        }

      myRecorder.method("set_SourceType", 1).invoke(0); // 1 = AudioClip source
      myRecorder.method("set_AudioClip", 1).invoke(NULL);
      myRecorder.method("set_DebugEchoMode", 1).invoke(false);

      myRecorder.method("RestartRecording", 0).invoke();

      }
    }

    //function sendAllOutgoing() {
    //    GorillaNotInst.field("rpcErrorMax").value = Number.MAX_SAFE_INTEGER;
    //    GorillaNotInst.field("rpcCallLimit").value = Number.MAX_SAFE_INTEGER;
    //    GorillaNotInst.field("logErrorMax").value = Number.MAX_SAFE_INTEGER;
    //    PhotonNetwork.method("set_MaxResendsBeforeDisconnect").invoke(Number.MAX_SAFE_INTEGER);
    //    PhotonNetwork.method("set_QuickResends").invoke(Number.MAX_SAFE_INTEGER);
    //    PhotonNetwork.method("SendAllOutgoingCommands").invoke();
    //}
//
    //function serialize() {
    //    PhotonNetwork.method("RunViewUpdate").invoke();
    //}

    // 10000% skidded from iis.stupid.menu

            /// <summary>
        /// Plays a 2D audio clip at the specified volume using a singleton audio manager.
        /// </summary>
        /// <param name="sound">The audio clip to play.</param>
        /// <param name="volume">The volume at which to play the audio clip. Defaults to 1f.</param>
        //public static void Play2DAudio(AudioClip sound, float volume = 1f)
        //{
        //    if (audioManager == null)
        //    {
        //        audioManager = new GameObject("2DAudioMgr");
        //        AudioSource temp = audioManager.AddComponent<AudioSource>();
        //        temp.spatialBlend = 0f;
        //    }
        //    AudioSource ausrc = audioManager.GetComponent<AudioSource>();
        //    ausrc.volume = volume;
        //    ausrc.PlayOneShot(sound);
        //}

    function Play2DAudio(clip: any, volume: any){
        if (audioManager == null) 
        {
            audioManager = GameObject.new("2DAudioMgr");
            let temp = addComponent(audioManager, AudioSource)
            temp.method("set_spatialBlend").invoke(0)
        }
        let ausrc = getComponent(audioManager, AudioSource)
        ausrc.method("set_volume").invoke(volume)
        ausrc.method("PlayOneShot", 1).invoke(clip)
    }

    function kickPlayer(player: any) {
        const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
        const netinst = PrefabGenerator.field("_instance").value;
        if (!netinst) return null;
        const kickplr = PrefabGenerator.method("KickPlayer");
        if (!kickplr) return null;
        const rpckickplr = netinst.method("RPC_KickPlayer");
        if (!rpckickplr) return null;
        const plruserID = player.field("_userID").value;
        if (!plruserID) return null;
        const parsedid = Il2Cpp.corlib.class("System.Guid").method("Parse").invoke(plruserID);
        rpckickplr.invoke(parsedid);
        kickplr.invoke(plruserID);
    }

    function executeFullGhostCycle() {
    if (waitingForRoom || isGhostFollowingActive) return;
    
    console.log("[+] Starting full ghost cycle: Join room -> Follow players -> Kick all -> Repeat");
    
    // First, join a new room
    if (joinNewRoom()) {
        waitingForRoom = true;
        roomJoinAttempted = true;
        waitForNewRoomAndStartGhost();
    } else {
        console.log("[-] Failed to join new room");
    }
}

let gunRenderedThisFrame = false;
let gunLineShader: any = null;

    function parseMenuButtonName(rawName: any): string {
        const name = normalizePlayerToken(rawName).replace(/^\uFEFF/, "").replace(/\0+$/g, "");
        if (name.startsWith("@")) return name.substring(1);
        if (name.length > 2 && name[1] === "@") return name.substring(2, name.length);
        return "";
    }

    function menuCollidersMatch(a: any, b: any): boolean {
        try {
            if (!a || !b) return false;
            return a.handle.equals(b.handle);
        } catch (_) {
            try {
                const aGo = a.method("get_gameObject").invoke();
                const bGo = b.method("get_gameObject").invoke();
                return aGo.handle.equals(bGo.handle);
            } catch (__) {}
            return false;
        }
    }

    function getMenuButtonKey(terminalKey: any): string {
        const readNameFrom = (obj: any): string => {
            try {
                if (!obj || obj.isNull?.()) return "";
                return normalizePlayerToken(obj.method("get_name").invoke());
            } catch (_) { return ""; }
        };
        let raw = readNameFrom(terminalKey);
        if (!raw) {
            try {
                raw = readNameFrom(terminalKey.method("get_gameObject").invoke());
            } catch (_) {}
        }
        return parseMenuButtonName(raw);
    }

    function disconnectFromRoom() {
        const leaveMethods = [
            "HandleLeavePressed",
            "HandleDisconnectPressed",
            "HandleLeaveRoomPressed",
            "HandleQuitPressed",
            "HandleLeaveGamePressed"
        ];
        try {
            const ComputerTerminalMediator = AssemblyCSharp.class("AnimalCompany.ComputerTerminalMediator");
            const mediatorInstance = Object.method("FindObjectOfType").inflate(ComputerTerminalMediator).invoke();
            if (mediatorInstance && !mediatorInstance.isNull()) {
                for (const methodName of leaveMethods) {
                    try {
                        mediatorInstance.method(methodName).invoke();
                        sendNotification("Disconnected from room", false);
                        return;
                    } catch (_) {}
                }
            }
        } catch (_) {}

        const tryRunnerShutdown = (runner: any): boolean => {
            try {
                if (!runner || runner.isNull?.()) return false;
                runner.method("Shutdown").invoke();
                return true;
            } catch (_) {
                return false;
            }
        };

        try {
            const prefabInst = PrefabGen.field("_instance").value;
            if (prefabInst && !prefabInst.isNull() && tryRunnerShutdown(prefabInst.method("get_runner").invoke())) {
                sendNotification("Disconnected from room", false);
                return;
            }
        } catch (_) {}

        try {
            const runner = SFXManager.method("get__currentRunner").invoke();
            if (tryRunnerShutdown(runner)) {
                sendNotification("Disconnected from room", false);
                return;
            }
        } catch (_) {}

        try {
            const NManagerInst = NManager.method("get_instance").invoke();
            const runner = SFXManager.method("get__currentRunner").invoke();
            if (NManagerInst && !NManagerInst.isNull() && runner && !runner.isNull()) {
                NManagerInst.method("OnPlayerLeft").invoke(runner, runner.method("get_LocalPlayer").invoke());
                sendNotification("Disconnected from room", false);
                return;
            }
        } catch (_) {}

        sendNotification("Disconnect failed", false);
    }

function joinNewRoom() {
    console.log("[+] Attempting to join new room...");
    
    try {
        // Find ComputerTerminalMediator instance
        const ComputerTerminalMediator = AssemblyCSharp.class("AnimalCompany.ComputerTerminalMediator");
        
        // Find the mediator object
        const mediatorInstance = Object.method("FindObjectOfType").inflate(ComputerTerminalMediator).invoke();
        
        if (mediatorInstance.isNull()) {
            console.log("[-] ComputerTerminalMediator instance is null");
            return false;
        }
        
        // Call HandleJoinRandomPressed
        console.log("[+] Calling HandleJoinRandomPressed...");
        mediatorInstance.method("HandleJoinRandomPressed").invoke();
        
        console.log("[+] Join random room request sent");
        return true;
        
    } catch (e) {
        console.log(`[-] Error joining new room: ${e}`);
        return false;
    }
}
function checkIfInNewRoom() {
    try {
        const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
        const instance = PrefabGenerator.field("_instance").value;
        
        if (instance.isNull()) {
            console.log("[-] PrefabGenerator instance is null");
            return false;
        }
        
        const NetworkRunner = instance.method("get_runner").invoke();
        
        if (NetworkRunner.isNull()) {
            console.log("[-] NetworkRunner is null");
            return false;
        }
        
        // Use the cleaner IsInRoom check
        const cloudServices = NetworkRunner.field("_cloudServices").value;
        if (cloudServices.isNull()) {
            console.log("[-] CloudServices is null");
            return false;
        }
        
        const isInRoom = cloudServices.method("get_IsInRoom").invoke();
        console.log(`[+] IsInRoom status: ${isInRoom}`);
        
        if (!isInRoom) {
            return false;
        }
        return isInRoom;
        
    } catch (e) {
        console.log(`[-] Error in checkIfInNewRoom: ${e}`);
        return false;
    }
}
function waitForNewRoomAndStartGhost() {
    
}
function startGhostFollowing() {
    if (isGhostFollowingActive) {
        console.log("[!] Ghost following already active");
        return;
    }
    
    PlayAudioFromFile("/sdcard/Android/data/woosterGames.animalCompany/files/1", "1/do.mp3");

    isGhostFollowingActive = true;
    currentPlayerIndex = 0;
    lastSwitchTime = Date.now();
    
    console.log("[+] Starting ghost following...");
    
    // Find all NetPlayer objects
    const NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    
    const findObjectsOfTypeMethod = Object.method("FindObjectsOfType").inflate(NetPlayer);
    const netPlayersArray = findObjectsOfTypeMethod.invoke();
    
    if (netPlayersArray.isNull()) {
        console.log("[-] No NetPlayer objects found");
        isGhostFollowingActive = false;
        return;
    }
    
    // Convert array to JavaScript array
    netPlayers = [];
    console.log(`[+] Found ${netPlayersArray.length} NetPlayer objects`);
    
    for (let i = 0; i < netPlayersArray.length; i++) {
        const player = netPlayersArray.get(i);
        if (!player.isNull()) {
            netPlayers.push(player);
        }
    }
    
    if (netPlayers.length === 0) {
        console.log("[-] No valid NetPlayer objects found");
        isGhostFollowingActive = false;
        return;
    }
    
    console.log(`[+] Tracking ${netPlayers.length} players`);
}

function updateGhostFollowing() {
    if (!isGhostFollowingActive || netPlayers.length === 0) {
        return;
    }
    
    const currentTime = Date.now();
    
    // Check if it's time to switch to next player (every 2 seconds)
    if (currentTime - lastSwitchTime >= 700) {
        currentPlayerIndex++;
        
        // If we've gone through all players, kick them all and reset
        if (currentPlayerIndex >= netPlayers.length) {
            console.log("[+] Finished following all players, kicking everyone...");
            kickAllPlayersGhostCycle();
            return;
        }
        
        lastSwitchTime = currentTime;
        console.log(`[+] Switching to player ${currentPlayerIndex + 1}/${netPlayers.length}`);
    }
    
    // Follow current player
    const currentPlayer = netPlayers[currentPlayerIndex];
    if (currentPlayer && !currentPlayer.isNull()) {
        try {
            // Get player position
            const transform = currentPlayer.method("get_transform").invoke();
            if (!transform.isNull()) {
                const position = transform.method("get_position").invoke();
                
                // Get your player's transform to move it
                const localPlayer = getLocalPlayer();
                if (localPlayer && !localPlayer.isNull()) {
                    const localTransform = localPlayer.method("get_transform").invoke();
                    if (!localTransform.isNull()) {
                        
                        // Set position
                        localTransform.method("set_position").invoke(position);
                    }
                }
            }
        } catch (e) {
            console.log(`[-] Error following player ${currentPlayerIndex}: ${e}`);
        }
    }
}

function kickAllPlayers() {
    try {
        let kickCount = 0;
        const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
        for (let i = 0; i < rigs.length; i++) {
            const rig = rigs.get(i);
            if (playerIsLocal(rig)) continue;
            kickPlayer(rig);
            kickCount++;
        }
        console.log(`[+] Kicked ${kickCount} players`);
    } catch (e) {
        console.log(`[-] Error in kickAllPlayers: ${e}`);
    }
}
function kickAllPlayersGhostCycle() {
    console.log("[+] Getting NetworkRunner instance for kicking...");
    const PrefabGenerator = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");

    try {
        kickAllPlayers();
        console.log("=============================");

        // Reset and start new cycle after 3 seconds
        resetGhostFollowing();
        rightPrimary = false;
        setTimeout(() => {
            if (rightPrimary) { // Only restart if still holding the button
                executeFullGhostCycle();
            }
        }, 3000);

    } catch (e) {
        console.log(`[-] Error in kickAllPlayersGhostCycle: ${e}`);
        resetGhostFollowing();
        rightPrimary = false;
    }
}

function getLocalPlayer() {
    try {
        const PlayerController = AssemblyCSharp.class("AnimalCompany.PlayerController");
        const player = PlayerController.method("get_instance").invoke();
        
        if (!player.isNull()) {
            const playerView = player.method("get_playerView").invoke();
            if (!playerView.isNull()) {
                return playerView.field("_cameraTransform").value;
            }
        }
    } catch (e) {
        console.log(`[-] Error getting local player: ${e}`);
    }
    
    return null;
}

function resetGhostFollowing() {
    isGhostFollowingActive = false;
    currentPlayerIndex = 0;
    netPlayers = [];
    waitingForRoom = false;
    roomJoinAttempted = false;
    
    if (roomCheckInterval) {
        clearInterval(roomCheckInterval);
        roomCheckInterval = null;
    }
    
    console.log("[+] Ghost following reset");
}

function stopGhostFollowing() {
    resetGhostFollowing();
    console.log("[+] Ghost following stopped");
}

    function renderMenuText(
        canvasObject: any,
        text: string = "",
        color: any = [1, 1, 1, 1],
        pos = zeroVector,
        size = oneVector
    ) {
        const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        title.method("set_text").invoke(Il2Cpp.string(text));
        title.method("set_font").invoke(arial);
        title.method("set_fontSize").invoke(1);
        title.method("set_color").invoke(color);
        title.method("set_fontStyle").invoke(2);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);

        const rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke(size);
        rectTransform.method("set_position").invoke(pos);
        rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0))
    }

    function createMaterial(shader: any) {
        const material = Material.new();
        return Material.method("CreateWithShader").invoke(material, shader);
    }

    function createObject(
        pos = zeroVector,
        rot = identityQuaternion,
        scale = oneVector,
        primitiveType: number = 3,
        colorArr: any = [1, 1, 1, 1],
        parent = null
    ) {
        const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);

        const renderer = getComponent(obj, Renderer);

        if (colorArr[3] == 0) {
            renderer.method("set_enabled").invoke(false);
        } else {
            const material = renderer.method("get_material").invoke(); material.method("set_shader").invoke(UberShader); material.method("set_color").invoke(colorArr);
        }

        const transform = getTransform(obj);
        if (parent != null) {
            transform.method("SetParent", 2).invoke(parent, false);
        }

        transform.method("set_position").invoke(pos);
        transform.method("set_rotation").invoke(rot);
        transform.method("set_localScale").invoke(scale);

        return obj;
    }

    function sendNotification(NotificationText: string = "", requiresReload: boolean = true, clearTime: number = 5) {
        const isOld = (currentNotification == NotificationText);
        notifactionResetTime = time + clearTime;
        currentNotification = NotificationText;
        if (requiresReload && !isOld)
            reloadMenu();
    }

    function renderMenu() {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider))

        const menuBackground = createObject([0.1, 0, 0], identityQuaternion, [0.1, 1, 1], 3, bgColor, getTransform(menu))
        Destroy(getComponent(menuBackground, BoxCollider))

        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider))

        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);

        renderMenuText(canvasObject, "ii's Stupid Menu" + `<color=grey>[</color><color=white>${currentPage + 1}</color><color=grey>]</color>`, textColor, [0.11, 0, 0.175], [1, 0.1]);

        if (time > notifactionResetTime)
            currentNotification = "";
        renderMenuText(canvasObject, currentNotification, textColor, [0.11, 0, 0.275], [1, 0.1]);

        const disconnectButton = createObject([0.1, 0.0, 0.225], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
        disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));

        addComponent(disconnectButton, GorillaReportButton);
        getComponent(disconnectButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.225], [1, 0.1]);

        const returnButton = createObject([0.1, -0.175, -0.225], identityQuaternion, [0.09, 0.09, 0.09], 3, buttonColor, getTransform(menu));
        returnButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));

        addComponent(returnButton, GorillaReportButton);
        getComponent(returnButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "<", textColor, [0.11, -0.175, -0.225], [1, 0.1]);

        {
            const pageButton = createObject([0.1, 0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));

            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, "<", textColor, [0.11, 0.2, 0], [1, 0.1]);
        }

        {
            const pageButton = createObject([0.1, -0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));

            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, ">", textColor, [0.11, -0.2, 0], [1, 0.1]);
        }

        let i = 0;
        const targetMods = buttons[currentCategory]
            .slice(currentPage * 8)
            .slice(0, 8);

        targetMods.forEach((buttonData, index) => {
            const button = createObject([0.105, 0, 0.13 - (i * 0.04)], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
            button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));

            addComponent(button, GorillaReportButton);
            getComponent(button, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, buttonData.buttonText, textColor, [0.11, 0, 0.13 - (i * 0.04)], [1, 0.1]);
            updateButtonColor(button, buttonData);
            i++;
        });
        getTransform(menu).method("set_localScale").invoke(
            Vector3.method("op_Multiply", 2).invoke(
                Vector3.method("op_Multiply", 2).invoke(
                    getTransform(menu).method("get_localScale").invoke(),
                    getPlayerScaleNumber()
                ),
                menuscale
            )
        );
        //getTransform(menu).method("set_localScale").invoke(
        //    Vector3.method("op_Multiply").invoke(
        //        getTransform(menu).method("get_localScale").invoke(),
        //        menuscale
        //    )
        //);
        
        recenterMenu();
    }

    function renderReference() {
        if (righthand) {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, safeField(getInstance(), "leftHandTransform"))
            referenceCollider = getComponent(reference, Collider);

            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
        else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, safeField(getInstance(), "rightHandTransform"))
            referenceCollider = getComponent(reference, Collider);

            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
    }

    let gunLocked = false;
    let lockTarget: any = null;
    let GunPointer: any = null;
    let GunLine: any = null;
    // Lagged visual positions â€” smoothly trail behind real hand/target positions
    let lagSX = 0, lagSY = 0, lagSZ = 0;   // origin (near hand)
    let lagEX = 0, lagEY = 0, lagEZ = 0;   // endpoint (target)
    let lagInit = false;

function readVec3Components(vec: any): any {
    return [
        (vec.field("x").value as number) || 0,
        (vec.field("y").value as number) || 0,
        (vec.field("z").value as number) || 0
    ];
}

function normalizeXZ(x: number, z: number): [number, number] {
    const len = Math.sqrt(x * x + z * z);
    return len > 0 ? [x / len, z / len] : [0, 1];
}

function spawnItemAtPos(bareID: string, pos: any, rot: any): any {
    try {
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(bareID));
            if (prefab && !prefab.isNull?.()) {
                const result = PrefabGen.method("SpawnItem", 4).invoke(prefab, pos, rot, NULL);
                if (result && !result.isNull?.()) return result;
            }
        } catch(_) {}
        try {
            const result2 = PrefabGen.method("SpawnItem", 4).invoke(Il2Cpp.string(bareID), pos, rot, NULL);
            if (result2 && !result2.isNull?.()) return result2;
        } catch(_) {}
        return PrefabGen.method("SpawnItem", 4).invoke(Il2Cpp.string("item_prefab/" + bareID), pos, rot, NULL);
    } catch(e) { console.error("[spawnItemAtPos] " + bareID + ": " + e); }
}

function acAnimalCompanyImage(): any {
    return Il2Cpp.domain.assembly("AnimalCompany").image;
}
function trySetObjectVelocity(obj: any, velocity: any) {
    try {
        let rb: any = null;
        try { rb = getComponent(obj, Rigidbody); } catch(_) {}
        if (!rb || rb.isNull?.()) {
            try {
                const go = obj.method("get_gameObject").invoke();
                if (go && !go.isNull()) rb = getComponent(go, Rigidbody);
            } catch(_) {}
        }
        if (!rb || rb.isNull?.()) {
            try {
                const tf = obj.method("get_transform").invoke();
                if (tf && !tf.isNull()) rb = getComponentInParent(tf.method("get_gameObject").invoke(), Rigidbody);
            } catch(_) {}
        }
        if (rb && !rb.isNull?.()) {
            try { rb.method("set_velocity").invoke(velocity); return true; } catch(_) {}
            try { rb.method("AddForce").invoke(velocity, 2); return true; } catch(_) {}
        }
    } catch(_) {}
    return false;
}

function spawnGoopBurstAtTransform(sourceTransform: any, hue: number = 18, saturation: number = 96, count: number = 2, expireAfter: number = 2.2, velocityScale: number = 8.8) {
    try {
        if (!sourceTransform || sourceTransform.isNull?.()) return;
        const pos = sourceTransform.method("get_position").invoke();
        const forwardVec = readVec3Components(sourceTransform.method("get_forward").invoke());
        const [fx, fz] = normalizeXZ(forwardVec[0], forwardVec[2]);
        for (let i = 0; i < count; i++) {
            const spawnPos = [
                (pos.field("x").value as number) + (fx * 0.14) + ((Math.random() * 0.05) - 0.025),
                (pos.field("y").value as number) - 0.28 + ((Math.random() * 0.02) - 0.01),
                (pos.field("z").value as number) + (fz * 0.14) + ((Math.random() * 0.05) - 0.025)
            ];
            const goop = spawnItemAtPos("item_goop", spawnPos, identityQuaternion);
            if (!goop || goop.isNull?.()) continue;
            spawnedGoopObjects.push({ object: goop, expireAt: time + expireAfter });
            try { goop.method("set_colorHue").invoke(hue); } catch(_) {}
            try { goop.method("set_colorSaturation").invoke(saturation); } catch(_) {}
            trySetObjectVelocity(goop, [
                (fx * velocityScale) + ((Math.random() * 0.95) - 0.475),
                -1.0 + (Math.random() * 0.35),
                (fz * velocityScale) + ((Math.random() * 0.95) - 0.475)
            ]);
        }
    } catch(_) {}
}

let physicsRaycastAllVec4: any = null;
let physicsRaycastOutVec4: any = null;
let physicsRaycastOutVec5: any = null;


    function resolveGunTargetPlayer(gunData: any, maxDistance: number = 8.0): any {
        if (!gunData) return null;
        try {
            const ray = gunData.ray;
            if (ray && !(ray.handle?.isNull?.() ?? true)) {
                try {
                    const hitCollider = ray.method("get_collider").invoke();
                    if (hitCollider && !hitCollider.isNull()) {
                        try {
                            const directPlayer = hitCollider.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
                            if (directPlayer && !directPlayer.isNull()) return directPlayer;
                        } catch(_) {}
                        try {
                            const hitGO = hitCollider.method("get_gameObject").invoke();
                            if (hitGO && !hitGO.isNull()) {
                                const hitPlayer = hitGO.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
                                if (hitPlayer && !hitPlayer.isNull()) return hitPlayer;
                            }
                        } catch(_) {}
                    }
                } catch(_) {}
            }
        } catch(_) {}
        // fallback: nearest player to gun pointer
        try {
            if (gunData.gunPointer) {
                const pointerT = getTransform(gunData.gunPointer);
                if (pointerT && !pointerT.isNull()) {
                    const pointerPos = pointerT.method("get_position").invoke();
                    let nearest = null;
                    let nearestDist = maxDistance;
                    const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                    if (players) {
                        for (let i = 0; i < players.length; i++) {
                            try {
                                const p = players.get(i);
                                if (!p || playerIsLocal(p)) continue;
                                const pT = getTransform(p);
                                if (!pT || pT.isNull()) continue;
                                const pPos = pT.method("get_position").invoke();
                                const dist = Vector3.method("Distance").invoke(pointerPos, pPos) as number;
                                if (dist < nearestDist) { nearestDist = dist; nearest = p; }
                            } catch(_) {}
                        }
                    }
                    return nearest;
                }
            }
        } catch(_) {}
        return null;
    }

    function resolveHandTransform(obj: any): any {
        if (!obj || obj.isNull?.()) return null;
        try {
            obj.method("get_position").invoke();
            return obj;
        } catch (_) {}
        return getTransform(obj);
    }

    function getGunHandTransform(): any {
        const tryFields = (obj: any, names: string[]): any => {
            if (!obj) return null;
            for (const fieldName of names) {
                const tf = resolveHandTransform(safeField(obj, fieldName));
                if (tf) return tf;
            }
            return null;
        };

        const handFieldNames = ["rightHandTransform", "rightHandFollower", "leftHandTransform", "leftHandFollower"];
        const inst = getInstance() ?? getGTPlayer();
        let tf = tryFields(inst, handFieldNames);
        if (tf) return tf;

        try {
            const pc = PCClass.method("get_instance").invoke();
            if (pc && !pc.isNull?.()) {
                tf = tryFields(pc, handFieldNames);
                if (tf) return tf;
                const playerView = pc.method("get_playerView").invoke();
                tf = tryFields(playerView, [...handFieldNames, "_rightHand", "_leftHand", "rightHand", "leftHand"]);
                if (tf) return tf;
            }
        } catch (_) {}

        try {
            const localNP = NetPlayer.method("get_localPlayer").invoke();
            if (localNP && !localNP.isNull()) {
                tf = tryFields(localNP, ["handRight", "handLeft", "rightHand", "leftHand"]);
                if (tf) return tf;
                tf = resolveHandTransform(getRightFingers(localNP));
                if (tf) return tf;
            }
        } catch (_) {}

        if (reference && !reference.isNull?.()) {
            tf = getTransform(reference);
            if (tf) return tf;
        }

        return null;
    }

    function getGunLineShader(): any {
        try {
            if (!gunLineShader || gunLineShader.isNull?.()) {
                gunLineShader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("UI/Default"));
            }
            if (gunLineShader && !gunLineShader.isNull?.()) return gunLineShader;
        } catch (_) {}
        return TextShader;
    }

    function anyGunModActive(): boolean {
        return buttons.flat().some((b) =>
            b.enabled && /gun|launch|tp all|wl rpg|wl egg|wl boomspear/i.test(b.buttonText)
        );
    }

    function ensureGunLineRenderer(): any {
        if (GunLine != null && !GunLine.isNull?.()) return GunLine;
        if (lineRenderHolder == null || lineRenderHolder.isNull?.()) {
            lineRenderHolder = GameObject.new("GunLineHolder");
        }
        const lineObj = GameObject.new("GunLineObject");
        getTransform(lineObj).method("set_parent").invoke(getTransform(lineRenderHolder));
        GunLine = addComponent(lineObj, LineRenderer);
        const shader = getGunLineShader();
        GunLine.method("get_material").invoke().method("set_shader").invoke(shader);
        GunLine.method("set_startWidth").invoke(0.032);
        GunLine.method("set_endWidth").invoke(0.032);
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
        GunLine.method("set_useWorldSpace").invoke(true);
        lineObj.method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
        return GunLine;
    }

    function getWhitelistGunTarget(gunData: any, maxDistance: number = 10.0): any {
        const hitPlayer = resolveGunTargetPlayer(gunData, maxDistance);
        if (!hitPlayer || hitPlayer.isNull?.() || playerIsLocal(hitPlayer)) return null;
        return { player: hitPlayer, id: getPlayerName(hitPlayer) };
    }

    function renderGun(overrideLayerMask: any = null) {
        try {
        const handTransform = getGunHandTransform();
        if (!handTransform || handTransform.isNull?.()) {
            return { gunPointer: null, ray: null, endPosition: null };
        }

        const StartPosition = handTransform.method("get_position").invoke();
        const Direction = handTransform.method("get_forward").invoke();
        if (!StartPosition || !Direction) {
            return { gunPointer: null, ray: null, endPosition: null };
        }

        const rayStartPosition = Vector3.method("op_Addition", 2).invoke(
            StartPosition,
            Vector3.method("op_Multiply", 2).invoke(Direction, 0.08)
        );

        const layerMask = overrideLayerMask ?? -1;
        let finalRay = null;
        try {
            if (!physicsRaycastAllVec4) {
                physicsRaycastAllVec4 = Physics.method("RaycastAll").overload(
                    "UnityEngine.Vector3",
                    "UnityEngine.Vector3",
                    "System.Single",
                    "System.Int32"
                );
            }
            const hits = physicsRaycastAllVec4.invoke(rayStartPosition, Direction, 512.0, layerMask);
            if (hits && !hits.isNull() && hits.length > 0) {
                let bestDistance = Number.POSITIVE_INFINITY;
                for (let i = 0; i < hits.length; i++) {
                    try {
                        const hit = hits.get(i);
                        if (!hit || hit.isNull?.()) continue;
                        const hitCollider = hit.method("get_collider").invoke();
                        if (!hitCollider || hitCollider.isNull()) continue;
                        const hitPoint = hit.method("get_point").invoke();
                        const distance = Vector3.method("Distance").invoke(hitPoint, StartPosition) as number;
                        if (distance < 0.08 || distance >= bestDistance) continue;
                        bestDistance = distance;
                        finalRay = hit;
                    } catch(_) {}
                }
            }
        } catch(_) {}

        if (!finalRay) {
            try {
                const hitBuf = Il2Cpp.alloc(128);
                if (!physicsRaycastOutVec4) {
                    physicsRaycastOutVec4 = Physics.method("Raycast").overload(
                        "UnityEngine.Vector3",
                        "UnityEngine.Vector3",
                        "UnityEngine.RaycastHit&",
                        "System.Single"
                    );
                }
                if (!physicsRaycastOutVec5) {
                    physicsRaycastOutVec5 = Physics.method("Raycast").overload(
                        "UnityEngine.Vector3",
                        "UnityEngine.Vector3",
                        "UnityEngine.RaycastHit&",
                        "System.Single",
                        "System.Int32"
                    );
                }
                const didHit = overrideLayerMask == null
                    ? physicsRaycastOutVec4.invoke(rayStartPosition, Direction, hitBuf, 512.0)
                    : physicsRaycastOutVec5.invoke(rayStartPosition, Direction, hitBuf, 512.0, layerMask);
                if (didHit) {
                    const hitRef = Il2Cpp.reference(hitBuf);
                    const hitPoint = hitRef.method("get_point").invoke();
                    const distance = Vector3.method("Distance").invoke(hitPoint, StartPosition) as number;
                    if (distance >= 0.08) finalRay = hitRef;
                }
            } catch(_) {}
        }

        let EndPosition;
        if (gunLocked) {
            EndPosition = getTransform(lockTarget).method("get_position").invoke();
        } else {
            if (finalRay && !(finalRay.isNull?.() ?? false)) {
                EndPosition = finalRay.method("get_point").invoke();
            } else {
                const farDirection = Vector3.method("op_Multiply", 2).invoke(Direction, 512);
                EndPosition = Vector3.method("op_Addition", 2).invoke(StartPosition, farDirection);
            }
        }

        if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
            const farDirection = Vector3.method("op_Multiply", 2).invoke(Direction, 512);
            EndPosition = Vector3.method("op_Addition", 2).invoke(StartPosition, farDirection);
        }

        const pointerColor = (gunLocked || rightTrigger) ? buttonPressedColor : buttonColor;

        if (GunPointer == null || GunPointer.isNull?.()) {
            GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, pointerColor);
            try { GunPointer.method("set_layer").invoke(0); } catch (_) {}
        }

        GunPointer.method("SetActive").invoke(true);
        const pointerTransform = getTransform(GunPointer);
        if (pointerTransform) pointerTransform.method("set_position").invoke(EndPosition);

        const PointerRenderer = getComponent(GunPointer, Renderer);
        if (!PointerRenderer) {
            return { gunPointer: null, ray: finalRay, endPosition: EndPosition };
        }
        PointerRenderer.method("set_enabled").invoke(true);
        const material = PointerRenderer.method("get_material").invoke();
        material.method("set_shader").invoke(UberShader ?? TextShader);
        material.method("set_color").invoke(pointerColor);

        const collider = getComponent(GunPointer, Collider);
        if (collider != null) {
            Destroy(collider);
        }

        ensureGunLineRenderer();
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);

        const lineMaterial = GunLine.method("get_material").invoke();
        lineMaterial.method("set_shader").invoke(getGunLineShader());

        GunLine.method("set_startColor").invoke(bgColor);
        GunLine.method("set_endColor").invoke(bgColor);

        const lineWidth = 0.032;
        GunLine.method("set_startWidth").invoke(lineWidth);
        GunLine.method("set_endWidth").invoke(lineWidth);
        GunLine.method("set_positionCount").invoke(2);
        GunLine.method("set_useWorldSpace").invoke(true);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        GunLine.method("SetPosition").invoke(1, EndPosition);
        gunRenderedThisFrame = true;

        if (rightTrigger || gunLocked) {
            const Step = 34;
            GunLine.method("set_positionCount").invoke(Step);
            GunLine.method("SetPosition").invoke(0, StartPosition);
            const dirVec = readVec3Components(Direction);
            const dirMag = Math.sqrt((dirVec[0] * dirVec[0]) + (dirVec[1] * dirVec[1]) + (dirVec[2] * dirVec[2])) || 1;
            const dirNorm: [number, number, number] = [dirVec[0] / dirMag, dirVec[1] / dirMag, dirVec[2] / dirMag];
            let upBasis: [number, number, number] = [0, 1, 0];
            if (Math.abs(dirNorm[1]) > 0.92) upBasis = [1, 0, 0];
            let side: [number, number, number] = [
                (upBasis[1] * dirNorm[2]) - (upBasis[2] * dirNorm[1]),
                (upBasis[2] * dirNorm[0]) - (upBasis[0] * dirNorm[2]),
                (upBasis[0] * dirNorm[1]) - (upBasis[1] * dirNorm[0])
            ];
            let sideMag = Math.sqrt((side[0] * side[0]) + (side[1] * side[1]) + (side[2] * side[2])) || 1;
            side = [side[0] / sideMag, side[1] / sideMag, side[2] / sideMag];
            let swirlUp: [number, number, number] = [
                (dirNorm[1] * side[2]) - (dirNorm[2] * side[1]),
                (dirNorm[2] * side[0]) - (dirNorm[0] * side[2]),
                (dirNorm[0] * side[1]) - (dirNorm[1] * side[0])
            ];
            let swirlUpMag = Math.sqrt((swirlUp[0] * swirlUp[0]) + (swirlUp[1] * swirlUp[1]) + (swirlUp[2] * swirlUp[2])) || 1;
            swirlUp = [swirlUp[0] / swirlUpMag, swirlUp[1] / swirlUpMag, swirlUp[2] / swirlUpMag];

            for (let i = 1; i < (Step - 1); i++) {
                const t = i / (Step - 1);
                const Position = Vector3.method("Lerp", 3).invoke(StartPosition, EndPosition, t);
                const swirlAngle = (time * 9.0) + (t * Math.PI * 10.0);
                const swirlFade = Math.sin(t * Math.PI);
                const swirlRadius = (0.031 + (Math.sin((t * Math.PI * 2.0) + (time * 2.4)) * 0.007)) * swirlFade;
                const offset = [
                    (side[0] * Math.cos(swirlAngle) + swirlUp[0] * Math.sin(swirlAngle)) * swirlRadius,
                    (side[1] * Math.cos(swirlAngle) + swirlUp[1] * Math.sin(swirlAngle)) * swirlRadius,
                    (side[2] * Math.cos(swirlAngle) + swirlUp[2] * Math.sin(swirlAngle)) * swirlRadius
                ];
                const finalPosition = Vector3.method("op_Addition", 2).invoke(Position, offset);
                GunLine.method("SetPosition").invoke(i, finalPosition);
            }
            GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
        }

        return { gunPointer: GunPointer, ray: finalRay, endPosition: EndPosition };
        } catch (e) {
            console.error("[renderGun] failed:", e);
            return { gunPointer: null, ray: null, endPosition: null };
        }
    }

function recenterMenu() {
        const menuTransform = getTransform(menu);
        if (!menuTransform || menuTransform.isNull?.()) return;
        let targetPos, targetRot;

        try {
            if (righthand) {
                const rht = safeField(getInstance(), "rightHandTransform");
                if (!rht || rht.isNull?.()) return;
                targetPos = rht.method("get_position").invoke();
                targetRot = rht.method("get_rotation").invoke();
                if (!targetPos || !targetRot) return;
                targetRot = Quaternion.method("op_Multiply", 2).invoke(targetRot, Quaternion.method("Euler", 3).invoke(0, 0, 180));
            } else {
                const lht = safeField(getInstance(), "leftHandTransform");
                if (!lht || lht.isNull?.()) return;
                targetPos = lht.method("get_position").invoke();
                targetRot = lht.method("get_rotation").invoke();
                if (!targetPos || !targetRot) return;
                targetRot = Quaternion.method("op_Multiply", 2).invoke(targetRot, Quaternion.method("Euler", 3).invoke(0, 0, 0));
            }
        } catch (_) { return; }

        if (!targetPos || !targetRot) return;

        try {
            if (LerpMenu) {
                const menuPos = menuTransform.method("get_position").invoke();
                if (!menuPos) return;
                const distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
                if (distance < 1) {
                    menuTransform.method("set_position").invoke(targetPos);
                    menuTransform.method("set_rotation").invoke(targetRot);
                } else {
                    const dt = deltaTime || 0.016;
                    const newPos = Vector3.method("Lerp", 3).invoke(menuPos, targetPos, dt * 15);
                    menuTransform.method("set_position").invoke(newPos);
                    const newRot = Quaternion.method("Slerp", 3).invoke(menuTransform.method("get_rotation").invoke(), targetRot, dt * 15);
                    menuTransform.method("set_rotation").invoke(newRot);
                }
            } else {
                menuTransform.method("set_position").invoke(targetPos);
                menuTransform.method("set_rotation").invoke(targetRot);
            }
        } catch (_) {}
    }
    
    function spawnNetworkPrefab(prefabName: any, pos: any, rot: any) {
        try {
            const runner = PrefabGen.field("_instance")
                .value.method("get_runner")
                .invoke();
            if (!runner || runner.isNull())
                return null;
            const sources = runner
                .field("_config")
                .value.field("PrefabTable")
                .value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            for (let i = 0; i < count; i++) {
                try {
                    const source = sources.method("get_Item").invoke(i);
                    const desc = source
                        .method("get_Description")
                        .invoke()
                        .toString();
                    if (desc.includes(prefabName)) {
                        const no = source.method("WaitForResult").invoke();
                        if (!no || no.isNull())
                            return null;
                        const makeZeroForType = (type: any) => {
                            if (type.class.isEnum || type.isPrimitive)
                                return 0;
                            if (!type.class.isValueType)
                                return NULL;
                            const fields = type.class.fields.filter((f: any) => !f.isStatic);
                            if (fields.length === 0)
                                return 0;
                            return fields.map((f: any) => makeZeroForType(f.type));
                        };
                        const buildNullableArg = (nullableType: any, hasValue: any, value: any): any => {
                            const fields = nullableType.class.fields.filter((f: any) => !f.isStatic);
                            return fields.map((f: any) => {
                                const lname = f.name.toLowerCase();
                                if (lname.includes("hasvalue"))
                                    return hasValue ? 1 : 0;
                                if (lname === "value")
                                    return hasValue ? value : makeZeroForType(f.type);
                                return makeZeroForType(f.type);
                            });
                        };
                        const normalizeValue = (type: any, value: any): any => {
                            if (typeof value === "boolean")
                                return value ? 1 : 0;
                            if (value instanceof Il2Cpp.ValueType) {
                                const fields = type.class.fields.filter((f: any) => !f.isStatic);
                                if (fields.length === 0)
                                    return 0;
                                return fields.map((f: any) => normalizeValue(f.type, f.bind(value).value));
                            }
                            if (Array.isArray(value))
                                return value.map((v: any) => normalizeValue(type, v));
                            return value;
                        };
                        const buildNullableFromValueType = (nullableType: any, valueType: any): any => {
                            return buildNullableArg(nullableType, true, normalizeValue(valueType.type, valueType));
                        };
                        let spawnMethod = null;
                        for (const m of runner.method("Spawn").overloads()) {
                            if (m.parameterCount !== 6 || m.isGeneric)
                                continue;
                            const p = m.parameters;
                            if (p[0].type.name.includes("Fusion.NetworkObject") &&
                                p[1].type.name.startsWith("System.Nullable") &&
                                p[1].type.name.includes("Vector3") &&
                                p[2].type.name.startsWith("System.Nullable") &&
                                p[2].type.name.includes("Quaternion") &&
                                p[3].type.name.startsWith("System.Nullable") &&
                                p[3].type.name.includes("PlayerRef") &&
                                p[4].type.name.includes("OnBeforeSpawned") &&
                                p[5].type.name.includes("NetworkSpawnFlags")) {
                                spawnMethod = m;
                                break;
                            }
                        }
                        if (!spawnMethod)
                            return null;
                        const posArg = buildNullableFromValueType(spawnMethod.parameters[1].type, pos);
                        const rotArg = buildNullableFromValueType(spawnMethod.parameters[2].type, rot);
                        const authArg = buildNullableArg(spawnMethod.parameters[3].type, false, makeZeroForType(spawnMethod.parameters[3].type));
                        const onBeforeArg = spawnMethod.parameters[4].type.class.isValueType ?
                            makeZeroForType(spawnMethod.parameters[4].type) :
                            NULL;
                        return spawnMethod
                            .bind(runner)
                            .invoke(no, posArg, rotArg, authArg, onBeforeArg, 0);
                    }
                } catch (_) {}
            }
        } catch (e) {
            console.error("spawnNetworkPrefab error:", e);
        }
        return null;
    }

    function reloadMenu(rebuildIfOpen: boolean = false) {
        const gripHeld = (righthand && rightSecondary) || (!righthand && leftSecondary);
        const shouldRebuild = rebuildIfOpen && menu != null && gripHeld;
        if (menu != null) {
            Object.method("Destroy", 1).invoke(menu);
            menu = null;
        }
        if (shouldRebuild) {
            try {
                renderMenu();
            } catch (e) {
                console.error("[reloadMenu] renderMenu failed:", e);
            }
        }
    }

    function updateButtonColor(button: any, buttonData: any) {
        const RendererClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image
            .class("UnityEngine.Renderer");

        const renderer = getComponent(button, RendererClass);
        if (!renderer) {
            return;
        }

        const material = renderer.method("get_material").invoke();
        material.method("set_color").invoke(buttonData.enabled ? buttonPressedColor : buttonColor);
    }

    function playButtonSound() {
        try {
		if (btnSoundsDisabled) {return}
        const soundId = (buttonSound | 0) & 0xffff;
        let _snd_pos = zeroVector;
        try {
            const inst = getInstance();
            const handNames = [righthand ? "leftHandTransform" : "rightHandTransform", "rightHandTransform", "leftHandTransform"];
            for (const fieldName of handNames) {
                try {
                    const hand = inst?.field(fieldName).value;
                    if (hand && !hand.isNull?.()) {
                        _snd_pos = hand.method("get_position").invoke();
                        break;
                    }
                } catch (_) {}
            }
        } catch (_) {}

        const playLocal = () => {
            try {
                SFXManager.method("PlaySFXLocal")
                    .overload("System.Int16", "UnityEngine.Vector3", "System.Single", "System.Single", "System.Single")
                    .invoke(soundId, _snd_pos, 1.0, 1.0, 1.0);
                return true;
            } catch (_) {}
            try {
                SFXManager.method("PlaySFXLocal").invoke(soundId, _snd_pos, 1.0, 1.0, 1.0);
                return true;
            } catch (_) {}
            return false;
        };

        if (playLocal()) return;

        const NetworkRunner = SFXManager.method("get__currentRunner").invoke();
        if (!NetworkRunner || NetworkRunner.isNull?.()) return;

        const rpcAttempts = [
            () => SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, soundId, _snd_pos, 1.0, 1.0),
            () => SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, soundId, 1, _snd_pos, 1.0),
            () => SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, soundId, _snd_pos, 1, 1),
        ];
        for (const attempt of rpcAttempts) {
            try { attempt(); return; } catch (_) {}
        }
        } catch(e) { console.error("[playButtonSound] failed:", e); }
        //if(!localButtonSounds) { { const _snd_lht = safeField(getInstance(), "leftHandTransform"); const _snd_pos = (_snd_lht && !_snd_lht.isNull?.()) ? _snd_lht.method("get_position").invoke() : zeroVector; SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, sound, 1, _snd_pos, 1.0); } }
        //else { SFXManager.method("PlaySFXLocal", ["Int16", "Vector3", "Single", "Single", "Single"]).invoke(sound, safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke(), 1.0, 1.0, 1.0); }
        //	public static Void PlaySFXLocal(Int16 sfxID, Vector3 position, Single volume, Single spatialBlend, Single basePitch) { }

        //plop 19
        //elevator? 44
        //magma (sounds clean and cool) 67! SIX SEVEN
        //tech world glass (cuts off) 68
        //arrow hit 75
        //86 fart
        //100 fart 2?
        //hookshot (sounds good ig?) 119
        //unloaded revolver (good button sound?) 138
        //snowball ill keep it in cuz it has potential 160
        //ore pickup like magma again 172
        //that one vending machine thing button 178
        //computer key or stash key whatev (cuts out) 180
        //friend machine 182
        //ducky 191

    }

    function toggleColliders(enabled: any) {
        const meshColliders = Object.method("FindObjectsOfType").inflate(MeshCollider).invoke();

        for (let i = 0; i < meshColliders.length; i++) {
            const meshCollider = meshColliders.get(i);
            meshCollider.method("set_enabled").invoke(enabled);
        }
    }

    interface ButtonInfoConfig {
        buttonText: string;
        method?: () => void;
        enableMethod?: () => void;
        disableMethod?: () => void;
        isTogglable?: boolean;
        toolTip?: string;
        enabled?: boolean;
    }

    class ButtonInfo {
        buttonText: string;
        method?: () => void;
        enableMethod?: () => void;
        disableMethod?: () => void;
        isTogglable: boolean;
        toolTip?: string;
        enabled: boolean;

        constructor(config: ButtonInfoConfig) {
            this.buttonText = config.buttonText;
            this.method = config.method;
            this.enableMethod = config.enableMethod;
            this.disableMethod = config.disableMethod;
            this.isTogglable = config.isTogglable ?? true;
            this.toolTip = config.toolTip;
            this.enabled = config.enabled ?? false;
        }
    }

    let currentCategory = 0;
    let currentPage = 0;

    const buttons: ButtonInfo[][] = [
        [ // Main [0]
            new ButtonInfo({
                buttonText: "Join Discord",
                method: () => {
                    try {
                        UnityEngineCore.class("UnityEngine.Application").method("OpenURL", 1).invoke(Il2Cpp.string("https://discord.gg/VMtskUCVxC"));
                    } catch (_e) {
                        try {
                            sendNotification("Discord: https://discord.gg/VMtskUCVxC", false);
                        } catch (__e) {
                            // ignore
                        }
                    }
                },
                isTogglable: false,
                toolTip: "Check PC"
            }),
            new ButtonInfo({
                buttonText: "Settings",
                method: () => { currentCategory = 2; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the settings category."
            }),
            new ButtonInfo({
                buttonText: "Movement Mods",
                method: () => { currentCategory = 3; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the movement category."
            }),
            new ButtonInfo({
                buttonText: "Fun Mods",
                method: () => { currentCategory = 4; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the fun category."
            }),
            new ButtonInfo({
                buttonText: "Advantage Mods",
                method: () => { currentCategory = 5; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the advantage category."
            }),
            new ButtonInfo({
                buttonText: "Rig Mods",
                method: () => { currentCategory = 6; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the rig category."
            }),
            new ButtonInfo({
                buttonText: "Misc Mods",
                method: () => { currentCategory = 7; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the misc category."
            }),
            new ButtonInfo({
                buttonText: "Visual Mods",
                method: () => { currentCategory = 8; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the visual category."
            }),
            new ButtonInfo({
                buttonText: "Overpowered Mods",
                method: () => { currentCategory = 9; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the op category."
            }),
            new ButtonInfo({
                buttonText: "Item Mods",
                method: () => { currentCategory = 10; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the items category."
            }),
             new ButtonInfo({
                buttonText: "Prefab Mods",
                method: () => { currentCategory = 11; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the mob category."
            }),
            new ButtonInfo({
                buttonText: "Whitelist Mods",
                method: () => { currentCategory = 13; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the Whitelist category."
            }),
            new ButtonInfo({
                buttonText: "Beta Mods",
                method: () => { currentCategory = 12; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the Beta Mods category."
            }),
            new ButtonInfo({
                buttonText: "Hand spam",
                enableMethod: () => { currentCategory = 14; currentPage = 0; getIndex("Hand spam")!.enabled = false; },
                isTogglable: true,
                toolTip: "Opens the hand spam category."
            }),
            new ButtonInfo({
                buttonText: "RPC Mods",
                enableMethod: () => { currentCategory = 15; currentPage = 0; getIndex("RPC Mods")!.enabled = false; },
                isTogglable: true,
                toolTip: "Opens the RPC category."
            }),
            new ButtonInfo({
                buttonText: "Mob",
                enableMethod: () => { currentCategory = 16; currentPage = 0; getIndex("Mob")!.enabled = false; },
                isTogglable: true,
                toolTip: "Opens the mob category."
            }),
            new ButtonInfo({
                buttonText: "Name",
                method: () => { currentCategory = 17; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the name category."
            }),
            new ButtonInfo({
                buttonText: "Room Mods",
                method: () => { currentCategory = 19; currentPage = 0 },
                isTogglable: false,
                toolTip: "Opens the credits category."
            }),
            new ButtonInfo({
                buttonText: "Credits",
                method: () => { currentCategory = 18; currentPage = 0 },
                isTogglable: false
            })
        ],

        [
            new ButtonInfo({
                buttonText: "Disconnect",
                method: () => {
                    try {
                        const NManagerInst = NManager.method("get_instance").invoke();
                        if (!NManagerInst || NManagerInst.isNull()) return;
                        try {
                            const runner = NManagerInst.field("_runner").value;
                            if (runner && !runner.isNull?.()) {
                                try { runner.method("Shutdown").invoke(); return; } catch(_) {}
                                try { runner.method("Disconnect", 0).invoke(); return; } catch(_) {}
                                try { runner.method("LeaveRoom").invoke(); return; } catch(_) {}
                            }
                        } catch(_) {}
                        NManagerInst.method("TryShutdownAndCancelConnecting").invoke();
                    } catch(e) { console.error("[Disconnect]", e); }
                },
                isTogglable: false,
                toolTip: "Disconnects you from the room"
            }),
            new ButtonInfo({
                buttonText: "PreviousPage",
                method: () => {
                    const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;

                    currentPage--;
                    if (currentPage < 0)
                        currentPage = lastPage;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "NextPage",
                method: () => {
                    const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;

                    currentPage++;
                    currentPage %= lastPage + 1;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "GlobalReturn",
                method: () => {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            })
        ],

        [ // Settings [2]
            new ButtonInfo({
                buttonText: "Exit Settings",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Change Menu Theme",
                method: () => {
                    themeIndex++;
                    themeIndex %= 10;

                    switch (themeIndex) {
                        case 0:
                            bgColor = [1.0, 0.5, 0.0, 1.0];
                            textColor = [1.0, 0.7450981, 0.4901961, 1.0];

                            buttonColor = [0.666, 0.333, 0.0, 1.0];
                            buttonPressedColor = [0.333, 0.150, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 1:
                            bgColor = [1.0, 0.0, 0.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];

                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [1.0, 0.0, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 2:
                            bgColor = [0.0, 1.0, 0.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];

                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [0.0, 1.0, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 3:
                            bgColor = [0.0, 0.0, 1.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];

                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [0.0, 0.0, 1.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 4:
                            bgColor = [0.5, 0.0, 0.5, 1.0];
                            textColor = [1.0, 0.9, 1.0, 1.0];

                            buttonColor = [0.25, 0.0, 0.25, 1.0];
                            buttonPressedColor = [0.7, 0.0, 0.7, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 5:
                            bgColor = [0.0, 0.7, 0.7, 1.0];
                            textColor = [1.0, 0.2, 0.8, 1.0];

                            buttonColor = [0.0, 0.3, 0.3, 1.0];
                            buttonPressedColor = [1.0, 0.0, 0.7, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 6:
                            bgColor = [0.9, 0.7, 0.1, 1.0];
                            textColor = [0.0, 0.0, 0.0, 1.0];

                            buttonColor = [0.2, 0.2, 0.2, 1.0];
                            buttonPressedColor = [1.0, 0.84, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 7:
                            bgColor = [0.7, 0.9, 1.0, 1.0];
                            textColor = [0.1, 0.2, 0.4, 1.0];

                            buttonColor = [0.5, 0.7, 0.9, 1.0];
                            buttonPressedColor = [0.2, 0.4, 0.8, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 8:
                            bgColor = [0.6, 0.0, 0.0, 1.0];
                            textColor = [1.0, 0.7, 0.2, 1.0];

                            buttonColor = [0.2, 0.0, 0.0, 1.0];
                            buttonPressedColor = [1.0, 0.3, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 9:
                            bgColor = [0.05, 0.05, 0.1, 1.0];
                            textColor = [0.6, 0.8, 1.0, 1.0];

                            buttonColor = [0.1, 0.1, 0.2, 1.0];
                            buttonPressedColor = [0.4, 0.6, 1.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 10:
                            bgColor = [1.0, 0.55, 0.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];

                            buttonColor = [0.15, 0.15, 0.15, 1.0];
                            buttonPressedColor = [1.0, 0.75, 0.0, 1.0];
                            //boardMaterial.method("set_color").invoke(bgColor);
                            break;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the theme of the menu."
            }),
            new ButtonInfo({
                buttonText: "Change Eject Dupe Amount",
                method: () => {
                    ejectDupeIndex++;
                    ejectDupeIndex %= ejectDupeValues.length;
                    ejectDupeAmount = ejectDupeValues[ejectDupeIndex];
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New eject dupe amount: " + ejectDupeAmount, false);
                },
                isTogglable: false,
                toolTip: "Cycles through preset dupe amounts."
            }),
            new ButtonInfo({
                buttonText: "Jelly Time & duration",
                method: () => {
                    jellywowes++;
                    if (jellywowes > 1.0) {
                        jellywowes = 1.0;
                    }
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New jelly time & duration: " + jellywowes, false);
                },
                isTogglable: false,
                toolTip: "Cycles through preset dupe amounts."
            }),
            new ButtonInfo({
                buttonText: "Change Head Size Amount",
                method: () => {
                    headSizeIndex++;
                    headSizeIndex %= headSizeValues.length;
                    headSizeAmount = headSizeValues[headSizeIndex];
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New head size amount: " + headSizeAmount, false);
                },
                isTogglable: false,
                toolTip: "Cycles through preset head size amounts."
            }),
            new ButtonInfo({
                buttonText: "Change Sound File",
                method: () => {
                    soundFileIndex++;
                    soundFileIndex %= soundFileFiles.length;
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New head size amount: " + soundFileFiles[soundFileIndex], false);
                },
                isTogglable: false,
                toolTip: "Cycles through preset head size amounts."
            }),

            new ButtonInfo({
                buttonText: "Play Sound",
                method: () => {

                    if (rightSecondary && !previousSoundKey) {
                        PlayAudioFromFile("/sdcard/Android/data/woosterGames.animalCompany/files/1", soundFileFiles[soundFileIndex]);
                    }

                    //if (!rightSecondary && previousSoundKey) {
                    //    toggleColliders(true);
                    //}

                    previousSoundKey = rightSecondary;
                },
                isTogglable: true,
                toolTip: "Changes the theme of the menu."
            }),

            new ButtonInfo({
                buttonText: "Fix Mic",
                method: () => {
                    FixMic();
                },
                isTogglable: false,
                toolTip: "Fixes your player mic."
            }),

            new ButtonInfo({
                buttonText: "Negative Head Size",
                method: () => negativeHeadSize = true,
                disableMethod: () => negativeHeadSize = false,
                isTogglable: true,
                toolTip: "Makes the current set head size amount negative to make your head inside out."
            }),

            new ButtonInfo({
                buttonText: "Local Button Sounds",
                enabled: true,
                enableMethod: () => localButtonSounds = true,
                disableMethod: () => localButtonSounds = false,
                toolTip: "Makes players not be able to hear your button sounds."
            }),
			new ButtonInfo({
				buttonText: "Disable Button Sounds",
				enabled: true,
				enableMethod: () => btnSoundsDisabled = true,
				disableMethod: () => btnSoundsDisabled = false,
				toolTip: "Turna off the button sounds."
			}),

            new ButtonInfo({
                buttonText: "Change Button Sound",
                method: () => {
                    //if(rightGrab){
                    //   buttonIndex--;
                    //}
                    //else{
                    //    buttonIndex++;
                    //}
                    //console.log(buttonIndex);
                    buttonIndex++;
                    buttonIndex %= 5;

                    switch (buttonIndex) {
                        case 0:
                            buttonSound = 44;
                            break;
                        case 1:
                            buttonSound = 67;
                            break;
                        case 2:
                            buttonSound = 68;
                            break;
                        case 3:
                            buttonSound = 75;
                            break;
                        case 4:
                            buttonSound = 100;
                            break;
                        case 5:
                            buttonSound = 119;
                            break;
                        case 6:
                            buttonSound = 138;
                            break;
                        case 7:
                            buttonSound = 160;
                            break;
                        case 8:
                            buttonSound = 172;
                            break;
                        case 9:
                            buttonSound = 178;
                            break;
                        case 10:
                            buttonSound = 180;
                            break;
                        case 11:
                            buttonSound = 182;
                            break;
                        case 12:
                            buttonSound = 191;
                    }
                    //sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New sound index: " + buttonIndex, false);
                    // plop

                            //plop 19
                },
                isTogglable: false,
                toolTip: "Changes the button sound."
            }),
            //new ButtonInfo({
            //    buttonText: "button that does nothing",
            //    method: () => {
            //        return;
            //    },
            //    isTogglable: false,
            //    toolTip: "Changes the button sound."
            //}),
            new ButtonInfo({
                buttonText: "Change Item ID",
                method: () => {
                    if(rightGrab){
                       itemIndex--;
                    }
                    else{
                        itemIndex++;
                    }
                    console.log(itemIDs[itemIndex]);
                    sendNotification("<color=grey>[</color><color=#8000ff>MENU</color><color=grey>]</color> " + "New item index: " + itemIDs[itemIndex], false);
                    //buttonIndex %= 5;

                    //switch (buttonIndex) {
                    //    case 0:
                    //        buttonSound = 8;
                    //        break;
                    //    case 1:
                    //        buttonSound = 66;
                    //        break;
                    //    case 2:
                    //        buttonSound = 67;
                    //        break;
                    //    case 3:
                    //        buttonSound = 84;
                    //        break;
                    //    case 4:
                    //        buttonSound = 106;
                    //        break;
                    //    case 5:
                    //        buttonSound = 189;
                    //        break;
                    //}
                },
                isTogglable: false,
                toolTip: "Changes the item ID. Hold right grip to go down"
            }),
            new ButtonInfo({
                buttonText: "Change hue When Spawning Items",
                method: () => {
                    if(rightGrab){
                       huespawner += 1.0;
                    }
                    else if (!rightGrab){
                        huespawner -= 1.0;
                    }
                    if (huespawner > 170.0) {
                        huespawner = 170.0;
                    }
                    else if (huespawner < -27.0) {
                        huespawner = 0.0;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the hue. Hold right grip to go up"
            }),
            new ButtonInfo({
                buttonText: "Change saturation When Spawning Items",
                method: () => {
                    if(rightGrab){
                       saturationspawner += 1.0;
                    }
                    else if (!rightGrab){
                        saturationspawner -= 1.0;
                    }
                    if (saturationspawner > 120.0) {
                        saturationspawner = 120.0;
                    }
                    else if (saturationspawner < 0.0) {
                        saturationspawner = 0.0;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the saturation. Hold right grip to go up"
            }),
            new ButtonInfo({
                buttonText: "Custom Scale Held Item",
                method: () => {
                    try {
                        const player = NetPlayer.method("get_localPlayer").invoke();
                        if (!player)
                            return;
                        const interactor = player.method("GetHandInteractor", 1).invoke(0);
                        if (!interactor)
                            return;
                        const itemAnchor = interactor.field("_itemAnchor").value;
                        if (!itemAnchor)
                            return;
                        const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                        if (!grabbable)
                            return;
                        if (rightGrab) {
                            scaleVal++;
                            if (scaleVal > 127)
                                scaleVal = -127;
                        }
                        if (leftGrab) {
                            scaleVal--;
                            if (scaleVal < -127)
                                scaleVal = 127;
                        }
                        grabbable.method("set_scaleModifier").invoke(scaleVal);
                    } catch (e) {
                        console.error(e);
                    }
                },
                isTogglable: true,
                toolTip: "Hold A to increase, grip to decrease scale of held item."
            }),
            new ButtonInfo({
                buttonText: "Snowball minigun [huge]",
                isTogglable: true,
                method: (() => {
                    // IIFE â€” sexyassdelay lives in this closure, persists across frames
                    let sexyassdelay = 0;
                    function rand(min: number, max: number) {
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    return () => {
                        try {
                            if (!rightGrab) return;
                            if (!rightTrigger) return;
                            // call Time directly â€” module-level `time` is shadowed by a const 0 inside perform()
                            const now: number = Time.method("get_time").invoke();
                            if (now < sexyassdelay) return;
                            sexyassdelay = now + 0.00;
                            const pos     = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                            const forward = safeField(getInstance(), "rightHandTransform")?.method("get_forward").invoke();
                            const result  = PrefabGen.method("SpawnItem", 4).invoke(
                                Il2Cpp.string("item_snowball"),
                                pos, identityQuaternion, NULL
                            );
                            if (!result || result.handle.isNull()) return;
                            const g = result.method("GetComponent", 1).inflate(GBOClass).invoke();
                            if (g && !g.isNull()) {
                                g.method("set_colorHue").invoke(rand(-120, 120));
                                g.method("set_colorSaturation").invoke(rand(-127, 127));
                                g.method("set_scaleModifier").invoke(127);
                                g.method("AddExternalForceVelocity", 1).invoke(
                                    Vector3.method("op_Multiply", 2).invoke(forward, 100)
                                );
                            }
                        } catch(e) { console.error("sperm error:", e); }
                    };
                })(),
                toolTip: "Spawns white snowballs in a stream (hold right grip)."
            }),
            new ButtonInfo({
                buttonText: "Change jelly",
                method: () => {
                    if(rightGrab){
                       jellyspawner += 1.0;
                    }
                    else if (!rightGrab){
                        jellyspawner -= 1.0;
                    }
                    if (jellyspawner > 10.0) {
                        jellyspawner = 10.0;
                    }
                    else if (jellyspawner < 0.0) {
                        jellyspawner = 0.0;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the jelly. Hold right grip to go up"
            }),

            new ButtonInfo({
                buttonText: "Change Menu Scale",
                method: () => {
                    menuscale += 0.1;
                    if (menuscale > 1.5) {
                        menuscale = 0.3;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the button sound."
            }),
            new ButtonInfo({
                buttonText: "Freeze Player in Menu",
                enabled: false,
                method: () => {
                    if (menu != null) {
                        if (closePosition == null) {
                            closePosition = getTransform(rigidbody).method("get_position").invoke();
                        }
                        else {
                            getTransform(rigidbody).method("set_position").invoke(closePosition);
                            getRigidbody()?.method("set_linearVelocity").invoke(zeroVector);
                        }
                    } else {
                        closePosition = null;
                    }
                },
                toolTip: "Freezes your character while in the menu."
            }),
            new ButtonInfo({
                buttonText: "Button Notifications",
                enabled: true,
                method: () => buttonNotifications = true,
                disableMethod: () => buttonNotifications = false,
                toolTip: "Shows notifications when clicking menu buttons, may cause lag."
            }),
            new ButtonInfo({
                buttonText: "Right Hand",
                method: () => righthand = true,
                disableMethod: () => righthand = true,
                toolTip: "Lets you switch menu hand."
            }),
            new ButtonInfo({
                buttonText: "Lerp Menu",
                method: () => LerpMenu = true,
                disableMethod: () => LerpMenu = false,
                toolTip: "Makes the menu Lerped."
            }),
            new ButtonInfo({
                buttonText: "High Punch Power",
                enableMethod: () => highPunchPower = true,
                disableMethod: () => highPunchPower = false,
                toolTip: "Makes punch mod more powerful."
            }),


new ButtonInfo({
    buttonText: "+ prefab",
    method: () => {
        currentWorldPrefabIndex =
            (currentWorldPrefabIndex + 1) % worldPrefabs.length;

        sendNotification(
            `Prefab: ${worldPrefabs[currentWorldPrefabIndex]}`
        );
    },
    isTogglable: false,
    toolTip: "Next non-item prefab"
}),


new ButtonInfo({
    buttonText: "- prefab",
    method: () => {
        currentWorldPrefabIndex =
            (currentWorldPrefabIndex - 1 + worldPrefabs.length) % worldPrefabs.length;

        sendNotification(
            `Prefab: ${worldPrefabs[currentWorldPrefabIndex]}`
        );
    },
    isTogglable: false,
    toolTip: "Previous non-item prefab"
}),


new ButtonInfo({
    buttonText: "prefab spawnling",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player) return;

            const NetworkPrefabSheet = Il2Cpp
                .domain
                .assembly("AnimalCompany")
                .image
                .class("AnimalCompany.NetworkPrefabSheet");

            const globalRefs = NetworkPrefabSheet.method("get_globalRefs").invoke();
            if (!globalRefs) return;

            const prefabName = worldPrefabs[currentWorldPrefabIndex];
            const prefabNetObj = globalRefs.field(prefabName).value;
            if (!prefabNetObj) return;

            const prefabGameObject = prefabNetObj.method("get_gameObject").invoke();

            const FlareGun = Il2Cpp
                .domain
                .assembly("AnimalCompany")
                .image
                .class("AnimalCompany.FlareGun");

            for (let handIndex = 0; handIndex <= 1; handIndex++) {
                const interactor = player.method("GetHandInteractor", 1).invoke(handIndex);
                if (!interactor) continue;

                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) continue;

                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) continue;

                const gameObject = grabbable.method("get_gameObject").invoke();
                if (!gameObject) continue;

                const flareGun = gameObject
                    .method("GetComponent", 1)
                    .inflate(FlareGun)
                    .invoke();

                if (!flareGun) continue;

                flareGun.field("_projectilePrefab").value = prefabGameObject;
                flareGun.field("_sfxShoot").value = null;
                flareGun.field("_sfxShootEmpty").value = null;
            }

            sendNotification(`prefab: ${prefabName}`);
        } catch (e) {
            console.error(e);
        }
    },
    isTogglable: false,
    toolTip: "Load selected non-item prefab into flare gun"
}),





new ButtonInfo({
    buttonText: "+ item",
    method: () => {
        currentItemIndex =
            (currentItemIndex + 1) % itemPrefabs.length;

        sendNotification(
            `Item: ${itemPrefabs[currentItemIndex]}`
        );
    },
    isTogglable: false,
    toolTip: "Next item_ prefab"
}),

new ButtonInfo({
    buttonText: "- item",
    method: () => {
        currentItemIndex =
            (currentItemIndex - 1 + itemPrefabs.length) % itemPrefabs.length;

        sendNotification(
            `Item: ${itemPrefabs[currentItemIndex]}`
        );
    },
    isTogglable: false,
    toolTip: "Previous item_ prefab"
}),



new ButtonInfo({
    buttonText: "item spawnling",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player) return;

            const NetworkPrefabSheet = Il2Cpp
                .domain
                .assembly("AnimalCompany")
                .image
                .class("AnimalCompany.NetworkPrefabSheet");

            const globalRefs = NetworkPrefabSheet.method("get_globalRefs").invoke();
            if (!globalRefs) return;

            const prefabName = itemPrefabs[currentItemIndex];
            const prefabNetObj = globalRefs.field(prefabName).value;
            if (!prefabNetObj) return;

            const prefabGameObject = prefabNetObj.method("get_gameObject").invoke();

            const FlareGun = Il2Cpp
                .domain
                .assembly("AnimalCompany")
                .image
                .class("AnimalCompany.FlareGun");

            for (let handIndex = 0; handIndex <= 1; handIndex++) {
                const interactor = player.method("GetHandInteractor", 1).invoke(handIndex);
                if (!interactor) continue;

                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) continue;

                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) continue;

                const gameObject = grabbable.method("get_gameObject").invoke();
                if (!gameObject) continue;

                const flareGun = gameObject
                    .method("GetComponent", 1)
                    .inflate(FlareGun)
                    .invoke();

                if (!flareGun) continue;

                flareGun.field("_projectilePrefab").value = prefabGameObject;
                flareGun.field("_sfxShoot").value = null;
                flareGun.field("_sfxShootEmpty").value = null;
            }

            sendNotification(`item: ${prefabName}`);
        } catch (e) {
            console.error(e);
        }
    },
    isTogglable: false,
    toolTip: "Load selected item_ prefab into flare gun"
}),


        ],

        [ // Movement Mods [3]
            new ButtonInfo({
                buttonText: "Exit Movement Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
new ButtonInfo({
    buttonText: "Stick Movement",
    method: () => {
        const speed = flySpeed;
        const deadzone = 0.15;

        const lx = Math.abs(leftStickX) > deadzone ? leftStickX : 0;
        const ly = Math.abs(leftStickY) > deadzone ? leftStickY : 0;
        const ry = Math.abs(rightStickY) > deadzone ? rightStickY : 0;

        if (lx === 0 && ly === 0 && ry === 0) return; // no input, stay in place

        const headTransform = getTransform(safeField(getInstance(), "headCollider"));
        const forward = headTransform.method("get_forward").invoke();
        const right   = headTransform.method("get_right").invoke();
        const up      = Vector3.field("upVector").value;

        const fwdMove   = Vector3.method("op_Multiply", 2).invoke(forward, ly * speed * deltaTime);
        const strafeMove = Vector3.method("op_Multiply", 2).invoke(right, lx * speed * deltaTime);
        const upMove    = Vector3.method("op_Multiply", 2).invoke(up, ry * speed * deltaTime);

        let combined = Vector3.method("op_Addition", 2).invoke(fwdMove, strafeMove);
        combined = Vector3.method("op_Addition", 2).invoke(combined, upMove);

        const currentPos = getTransform(getGTPlayer()).method("get_position").invoke();
        const newPos = Vector3.method("op_Addition", 2).invoke(currentPos, combined);
        getTransform(getGTPlayer()).method("set_position").invoke(newPos);
    },
    isTogglable: true,
    toolTip: "Left stick fwd/back/left/right = move accordingly. Right stick up/down = move up/down."
}),

            new ButtonInfo({
buttonText:"Platforms",
enableMethod:()=>{
Destroy(movementPlatformLeft);
Destroy(movementPlatformRight);
movementPlatformLeft=null;
movementPlatformRight=null;
sendNotification("Platforms ON",false);
},
disableMethod:()=>{
Destroy(movementPlatformLeft);
Destroy(movementPlatformRight);
movementPlatformLeft=null;
movementPlatformRight=null;
sendNotification("Platforms OFF",false);
},
isTogglable:true,
method:()=>{
try {
const updateHandPlatform=(handTransform:any,isHeld:boolean,wasHeld:boolean,side:"left"|"right")=>{
const current=side==="left"?movementPlatformLeft:movementPlatformRight;
if (!isHeld){
Destroy(current);
if (side==="left")movementPlatformLeft=null;
else movementPlatformRight=null;
return;
}
if (!wasHeld){
const handPos=handTransform.method("get_position").invoke();
const downPos=[(handPos.field("x").value as number),
(handPos.field("y").value as number)-0.18,
(handPos.field("z").value as number)];
const created=createSolidPlatform(downPos,[0.24,0.025,0.24],[0.95,0.40,0.03,0.92]);
if (side==="left")movementPlatformLeft=created;
else movementPlatformRight=created;
}
};
updateHandPlatform(leftHandTransform,leftGrab,leftGrab,"left");
updateHandPlatform(rightHandTransform,rightGrab,rightGrab,"right");
}catch (e){console.error("Platforms:",e);}
},
toolTip:"Platforms broda"
}),

            new ButtonInfo({
buttonText:"Trigger Platforms",
enableMethod:()=>{
Destroy(movementPlatformLeft);
Destroy(movementPlatformRight);
movementPlatformLeft=null;
movementPlatformRight=null;
sendNotification("Platforms ON",false);
},
disableMethod:()=>{
Destroy(movementPlatformLeft);
Destroy(movementPlatformRight);
movementPlatformLeft=null;
movementPlatformRight=null;
sendNotification("Platforms OFF",false);
},
isTogglable:true,
method:()=>{
try {
const updateHandPlatform=(handTransform:any,isHeld:boolean,wasHeld:boolean,side:"left"|"right")=>{
const current=side==="left"?movementPlatformLeft:movementPlatformRight;
if (!isHeld){
Destroy(current);
if (side==="left")movementPlatformLeft=null;
else movementPlatformRight=null;
return;
}
if (!wasHeld){
const handPos=handTransform.method("get_position").invoke();
const downPos=[(handPos.field("x").value as number),
(handPos.field("y").value as number)-0.18,
(handPos.field("z").value as number)];
const created=createSolidPlatform(downPos,[0.24,0.025,0.24],[0.95,0.40,0.03,0.92]);
if (side==="left")movementPlatformLeft=created;
else movementPlatformRight=created;
}
};
updateHandPlatform(leftHandTransform,leftTrigger,leftTrigger,"left");
updateHandPlatform(rightHandTransform,rightTrigger,rightTrigger,"right");
}catch (e){console.error("Platforms:",e);}
},
toolTip:"Platforms broda"
}),

            //new ButtonInfo({
            //    buttonText: "Frozone",
            //    method: () => {
            //        if (leftGrab) {
            //            if (leftPlatform == null) {
            //                const handTransform = leftHandTransform;
            //                leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            //                addComponent(leftPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
            //            }
            //        } else {
            //            if (leftPlatform != null) {
            //                Destroy(leftPlatform);
            //                leftPlatform = null;
            //            }
            //        }
//
            //        if (rightGrab) {
            //            if (rightPlatform == null) {
            //                const handTransform = rightHandTransform;
            //                rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            //                addComponent(rightPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
            //            }
            //        } else {
            //            if (rightPlatform != null) {
            //                Destroy(rightPlatform);
            //                rightPlatform = null;
            //            }
            //        }
            //    },
            //    toolTip: "Spawns slippy platforms when pressing grip."
            //}),

            new ButtonInfo({
                buttonText: "Fly",
                method: () => {
                    if (rightPrimary) {
                        getRigidbody()?.method("set_linearVelocity").invoke(Vector3.field("zeroVector").value);

                        const transform = getTransform(getGTPlayer());
                        let forward = getTransform(safeField(getInstance(), "headCollider")).method("get_forward").invoke();

                        let position = transform.method("get_position").invoke();
                        forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);

                        position = Vector3.method("op_Addition", 2).invoke(position, forward);

                        transform.method("set_position").invoke(position);
                    }
                },
                toolTip: "Lets you fly around while holding A."
            }),

            new ButtonInfo({
                buttonText: "Trigger Fly",
                method: () => {
                    if (rightTrigger) {
                        getRigidbody()?.method("set_linearVelocity").invoke(Vector3.field("zeroVector").value);

                        const transform = getTransform(getGTPlayer());
                        let forward = getTransform(safeField(getInstance(), "headCollider")).method("get_forward").invoke();

                        let position = transform.method("get_position").invoke();
                        forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);

                        position = Vector3.method("op_Addition", 2).invoke(position, forward);

                        transform.method("set_position").invoke(position);
                    }
                },
                toolTip: "Lets you fly around while holding trigger."
            }),

            new ButtonInfo({
                buttonText: "Up And Down",
                method: () => {
                    if (rightTrigger && rightGrab) {
                        getRigidbody()?.method("set_linearVelocity").invoke(Vector3.field("zeroVector").value);
                    }
                    if (rightTrigger && !rightGrab) {
                        getRigidbody()?.method("AddForce").invoke(Vector3.field("upVector").value, 175 * deltaTime);
                    }
                    if (!rightTrigger && rightGrab) {
                        getRigidbody()?.method("AddForce").invoke(Vector3.field("downVector").value, 175 * deltaTime);
                    }
                },
                toolTip: "Makes you go up when holding trigger, and down when holding grip."
            }),
            new ButtonInfo({
                buttonText: "Size Changer",
                disableMethod: () => {
                    { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<playerScale>k__BackingField").value = 1; }
                    //getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                },
                method: () => {
                    if (rightTrigger) {
                        { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<playerScale>k__BackingField").value += 0.01; }
                        //getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                    }
                    if (leftTrigger) {
                        { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<playerScale>k__BackingField").value -= 0.01; }
                        //getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                    }
                },
                toolTip: "Makes you able to change size with triggers."
            }),
            new ButtonInfo({
                buttonText: "Checkpoint",
                disableMethod: () => {
                    if (checkpoint != null) {
                        Destroy(checkpoint);
                        checkpoint = null;
                    }
                },
                method: () => {
                    if (rightGrab && rightPrimary && leftPrimary) {
                        if (checkpoint == null) {
                            const handTransform = safeField(getInstance(), "rightHandTransform");
                            if (!handTransform || handTransform.isNull?.()) return;
                            checkpoint = createObject(handTransform.method("get_position").invoke(), identityQuaternion, [0.2, 0.2, 0.2], 3, bgColor);
                            Destroy(getComponent(checkpoint, BoxCollider));
                        } else {
                            const handTransform = safeField(getInstance(), "rightHandTransform");
                            if (!handTransform || handTransform.isNull?.()) return;
                            checkpoint.method("get_transform").invoke().method("set_position").invoke(handTransform.method("get_position").invoke())
                        }
                    }
                    if (rightPrimary && leftPrimary) {
                        if (checkpoint != null) {
                            teleportPlayer(checkpoint.method("get_transform").invoke().method("get_position").invoke())
                            getRigidbody()?.method("set_linearVelocity").invoke(zeroVector);
                        }
                    }
                },
                toolTip: "Place a checkpoint with grip and teleport to it with A."
            }),


            //new ButtonInfo({
            //    buttonText: "No Tag Freeze",
            //    method: () => { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("disableMovement").value = false,
            //    toolTip: "Disables tag freeze on your character.",
            //}),

            new ButtonInfo({
                buttonText: "Low Gravity",
                method: () => {
                    const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (6.66 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity lower on your character."
            }),

            new ButtonInfo({
                buttonText: "Zero Gravity",
                method: () => {
                    const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity lower on your character."
            }),

            new ButtonInfo({
                buttonText: "High Gravity",
                method: () => {
                    const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("downVector").value, (deltaTime * (7.77 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity higher on your character."
            }),

            //new ButtonInfo({
            //    buttonText: "Weak Wall Walk",
            //    method: () => {
            //        if (getGTPlayer()?.method("IsHandTouching").invoke(true) || getGTPlayer()?.method("IsHandTouching").invoke(false)) {
            //            const ray = safeField(getGTPlayer(), "lastHitInfoHand");
            //            walkPos = ray.method("get_point").invoke();
            //            walkNormal = ray.method("get_normal").invoke();
            //        }
            //        if (walkPos != Vector3.field("zeroVector").value && rightGrab) {
            //            const force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -5);
            //            getRigidbody()?.method("AddForce").invoke(force, 5);
            //            const zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
            //            rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
            //        }
            //    },
            //    toolTip: "Makes you get brought towards any wall you touch when holding grip, but weaker."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Wall Walk",
            //    method: () => {
            //        if (getGTPlayer()?.method("IsHandTouching").invoke(true) || getGTPlayer()?.method("IsHandTouching").invoke(false)) {
            //            const ray = safeField(getGTPlayer(), "lastHitInfoHand");
            //            walkPos = ray.method("get_point").invoke();
            //            walkNormal = ray.method("get_normal").invoke();
            //        }
            //        if (walkPos != Vector3.field("zeroVector").value && rightGrab) {
            //            const force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -9.81);
            //            getRigidbody()?.method("AddForce").invoke(force, 5);
            //            const zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
            //            rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
            //        }
            //    },
            //    toolTip: "Makes you get brought towards any wall you touch when holding grip."
            //}),

            new ButtonInfo({
                buttonText: "Teleport Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const gunPointer = gunData.gunPointer;

                        if (rightTrigger && !perviousTeleportKey) {
                            teleportPlayer(getTransform(gunPointer).method("get_position").invoke())
                            getRigidbody()?.method("set_linearVelocity").invoke(zeroVector);
                        }

                        perviousTeleportKey = rightTrigger;
                    }
                },
                toolTip: "Teleports you to wherever your hand desires."
            }),

            new ButtonInfo({
                buttonText: "Teleport To Random",
                method: () => {
                    //const vrrigs = GorillaParent.field("vrrigs").value;
                    //const vrrigtotal = vrrigs.method("get_Count").invoke();
                    //const playerRig = vrrigs.method("get_Item").invoke(Math.floor(Math.random() * vrrigtotal));
                    const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                    if (!rigs) return null;

                    const otherRigs = [];
                    for (let i = 0; i < rigs.length; i++) {
                        const rig = rigs.get(i);
                        if (playerIsLocal(rig)) continue;
                        otherRigs.push(rig);
                    }
                
                    if (otherRigs.length === 0) return null;
                
                    const playerRig = otherRigs[Math.floor(Math.random() * otherRigs.length)];

                    teleportPlayer(getTransform(playerRig).method("get_position").invoke());
                    getRigidbody()?.method("set_linearVelocity").invoke(zeroVector);
                },
                isTogglable: false,
                toolTip: "Teleports you to a random player."
            }),

            new ButtonInfo({
                buttonText: "Iron Man",
                method: () => {
                    if (leftPrimary) {
                        const leftRightVector = safeField(getInstance(), "leftHandTransform")?.method("get_right").invoke();
                        const leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, -15.0 * deltaTime);
                        rigidbody.method("AddForce", 2).invoke(leftForce, 2);
                    }
                    if (rightPrimary) {
                        const leftRightVector = safeField(getInstance(), "rightHandTransform")?.method("get_right").invoke();
                        const leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, 15.0 * deltaTime);
                        rigidbody.method("AddForce", 2).invoke(leftForce, 2);
                    }
                },
                toolTip: "Turns you into iron man. Use A and X to fly."
            }),

            new ButtonInfo({
                buttonText: "Noclip",
                method: () => {
                    if (rightTrigger && !previousNoclipKey) {
                        toggleColliders(false);
                    }

                    if (!rightTrigger && previousNoclipKey) {
                        toggleColliders(true);
                    }

                    previousNoclipKey = rightTrigger;
                },
                toolTip: "Lets you clip through objects while holding right trigger."
            }),
            new ButtonInfo({
                buttonText: "Noclip V2",
                method: () => {
                    if (rightTrigger && !previousNoclipKey) {
                        //toggleColliders(false);
                        //{ const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<bodyColliderEnabled>k__BackingField").value = false; }
                        { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<ignoreHeadCollisions>k__BackingField").value = true; }
                        //console.log(safeField(getGTPlayer(), "<handSlideFriction>k__BackingField"));
                        //{ const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<handSlideFriction>k__BackingField").value = 0; }
                    }

                    if (!rightTrigger && previousNoclipKey) {
                        //toggleColliders(true);
                        //{ const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<bodyColliderEnabled>k__BackingField").value = true; }
                        { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<ignoreHeadCollisions>k__BackingField").value = false; }
                        //<handSlideFriction>k__BackingField
                        //{ const _gtp = getGTPlayer(); if (_gtp) _gtp.field("<handSlideFriction>k__BackingField").value = 1.2000000476837158; }
                    }

                    previousNoclipKey = rightTrigger;
                },
                toolTip: "Lets you clip through objects while holding right trigger."
            }),
            new ButtonInfo({
                buttonText: "Legit Long Arms",
                method: () => {
                    getTransform(getGTPlayer()).method("set_localScale").invoke([1.08, 1.08, 1.08]);
                },
                disableMethod: () => {
                    getTransform(getGTPlayer()).method("set_localScale").invoke(oneVector);
                },
                toolTip: "Gives you Slightly longer arms."
            }),
            new ButtonInfo({
                buttonText: "Long Arms",
                method: () => {
                    getTransform(getGTPlayer()).method("set_localScale").invoke([1.25, 1.25, 1.25]);
                },
                disableMethod: () => {
                    getTransform(getGTPlayer()).method("set_localScale").invoke(oneVector);
                },
                toolTip: "Gives you longer arms."
            }),

            new ButtonInfo({
                buttonText: "Speed Boost",
                method: () => {
                    //{ const _gtp = getGTPlayer(); if (_gtp) _gtp.field("maxJumpSpeed").value = 9.0; }
                    getGTPlayer()?.method("SetJumpVelocityMultiplier").invoke(2);
                },
                toolTip: "Gives you a speed boost."
            }),
            new ButtonInfo({
              buttonText: "weird rotation mod",
              method: () => {
                if (!getGTPlayer() || !getRigidbody()) return;
            
                const setConstraints = getRigidbody()?.method("set_constraints");
                const getConstraints = getRigidbody()?.method("get_constraints");
                const setLocalRotation = getTransform(getGTPlayer()).method("set_localRotation");
                const setVelocity = getRigidbody()?.method("set_linearVelocity");
                const getVelocity = getRigidbody()?.method("get_linearVelocity");
                const addForce = getRigidbody()?.method("AddForce");
            
                if (rightStick) {
                  setConstraints.invoke(0);
                }
            
                if (!rightStick) {
                  if (getConstraints.invoke().field("value__").value === 0) {
                    setConstraints.invoke(112);
                    setLocalRotation.invoke(identityQuaternion);
                  }
                }
              },
              toolTip: "Turns you into super man. Use X to fly."
            }),

            //new ButtonInfo({
            //    buttonText: "Slide Control",
            //    enableMethod: () => {
            //        oldSlide = safeField(getGTPlayer(), "slideControl");
            //        { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("slideControl").value = 1; }
            //    },
            //    disableMethod: () => { const _gtp = getGTPlayer(); if (_gtp) _gtp.field("slideControl").value = oldSlide,
            //    toolTip: "Lets you control yourself on ice perfectly."
            //}),
            //new ButtonInfo({
            //    buttonText: "Predictions",
            //    enableMethod: () => {
            //        lvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]); }
            //        Destroy(getComponent(lvT, BoxCollider))
            //        addComponent(lvT, GorillaVelocityTracker);
//
            //        rvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]);
            //        Destroy(getComponent(rvT, BoxCollider))
            //        addComponent(rvT, GorillaVelocityTracker);
            //    },
            //    method: () => {
            //        let predCount = 0.02;
//
            //        getTransform(lvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke()));
            //        getTransform(rvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke()));
//
            //        let leftHandPosition = safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke();
            //        let rightHandPosition = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
//
            //        let leftHandVelocity = getComponent(lvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);
            //        let rightHandVelocity = getComponent(rvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);
//
            //        leftHandVelocity = Vector3.method("op_Multiply", 2).invoke(leftHandVelocity, predCount);
            //        rightHandVelocity = Vector3.method("op_Multiply", 2).invoke(rightHandVelocity, predCount);
//
            //        leftHandPosition = Vector3.method("op_Subtraction", 2).invoke(leftHandPosition, leftHandVelocity);
            //        rightHandPosition = Vector3.method("op_Subtraction", 2).invoke(rightHandPosition, rightHandVelocity);
//
            //        safeField(getInstance(), "leftHandTransform")?.method("set_position").invoke(leftHandPosition);
            //        safeField(getInstance(), "rightHandTransform")?.method("set_position").invoke(rightHandPosition);
            //    },
            //    disableMethod: () => {
            //        Destroy(lvT);
            //        Destroy(rvT);
            //    },
            //    toolTip: "Gives your controllers higher predictions."
            //}),
        ],

        [ // Fun Mods [4]
            new ButtonInfo({
                buttonText: "Exit Fun Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
    buttonText: "Next Item",
    method: () => {
        currentItemIndex = (currentItemIndex + 1) % itemIDs.length;
        sendNotification("Prefab: " + itemIDs[currentItemIndex], false);
    },
    isTogglable: false,
    toolTip: "Cycles to the next item."
}),
new ButtonInfo({
    buttonText: "Prev Item",
    method: () => {
        currentItemIndex = (currentItemIndex - 1 + itemIDs.length) % itemIDs.length;
        sendNotification("Prefab: " + itemIDs[currentItemIndex], false);
    },
    isTogglable: false,
    toolTip: "Cycles to the previous item."
}),
new ButtonInfo({
    buttonText: "Item Orbit",
    isTogglable: true,
    method: (() => {
        let orbitAngle = 0;
        let spawnedItems: any[] = [];
        let lastSpawnIndex = -1;
        const ORBIT_RADIUS = 1.5;
        const ORBIT_SPEED = 90.0;

        return () => {
            try {
                // respawn items if the selected item changed
                if (lastSpawnIndex !== currentItemIndex) {
                    // destroy old items
                    for (const item of spawnedItems) {
                        try {
                            if (item && !item.isNull()) {
                                const no = item.method("GetComponent", 1)
                                    .inflate(NetworkObjectClass).invoke();
                                if (no && !no.isNull()) {
                                    const runner = PrefabGen.field("_instance")
                                        .value.method("get_runner").invoke();
                                    runner.method("Despawn", 1).invoke(no);
                                }
                            }
                        } catch (_) {}
                    }
                    spawnedItems = [];

                    // spawn new items
                    const _hc_sp = safeField(getInstance(), "headCollider"); if (!_hc_sp || _hc_sp.isNull?.()) return; const spawnPos = getTransform(_hc_sp).method("get_position").invoke(); if (!spawnPos) return;
                    for (let i = 0; i < 5; i++) {
                        try {
                            const spawned = PrefabGen.method("SpawnItem", 4).invoke(
                                Il2Cpp.string(itemIDs[currentItemIndex]),
                                spawnPos,
                                identityQuaternion,
                                NULL
                            );
                            if (spawned && !spawned.isNull()) {
                                spawnedItems.push(spawned);
                            }
                        } catch (_) {}
                    }
                    lastSpawnIndex = currentItemIndex;
                }

                orbitAngle += ORBIT_SPEED * deltaTime;
                if (orbitAngle > 360) orbitAngle -= 360;

                const _hc_cp = safeField(getInstance(), "headCollider"); if (!_hc_cp || _hc_cp.isNull?.()) return; const centerPos = getTransform(_hc_cp).method("get_position").invoke(); if (!centerPos) return;

                for (let i = 0; i < spawnedItems.length; i++) {
                    const item = spawnedItems[i];
                    if (!item || item.isNull()) continue;

                    const angleOffset = (360 / spawnedItems.length) * i;
                    const rad = (orbitAngle + angleOffset) * (Math.PI / 180);

                    const offsetX = Math.cos(rad) * ORBIT_RADIUS;
                    const offsetZ = Math.sin(rad) * ORBIT_RADIUS;

                    const offsetVec = Vector3.method("op_Addition").invoke(
                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, offsetX),
                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, offsetZ)
                    );

                    const targetPos = Vector3.method("op_Addition").invoke(centerPos, offsetVec);

                    try {
                        const gbo = item.method("GetComponent", 1).inflate(GBOClass).invoke();
                        if (gbo && !gbo.isNull()) {
                            gbo.method("RPC_Teleport", 2).invoke(
                                targetPos,
                                identityQuaternion,
                                zeroVector,
                                zeroVector,
                                false,
                                false
                            );
                        }
                    } catch (_) {
                        // fallback: move transform directly
                        try {
                            getTransform(item).method("set_position").invoke(targetPos);
                        } catch (_) {}
                    }
                }
            } catch (e) { console.error("item orbit error:", e); }
        };
    })(),
    disableMethod: (() => {
        // need a shared ref to clean up spawned items on disable
        return () => {};
    })(),
    toolTip: "Uh item orbit."
}),
new ButtonInfo({
    buttonText: "Spawn item",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const _rht_si = safeField(getInstance(), "rightHandTransform"); if (!_rht_si || _rht_si.isNull?.()) return;
            const pos = _rht_si.method("get_position").invoke();
            const rot = _rht_si.method("get_rotation").invoke();
            if (!pos || !rot) return;
            const spawned = PrefabGen.method("SpawnItem", 4).invoke(
                Il2Cpp.string(itemIDs[currentItemIndex]),
                pos,
                rot,
                NULL
            );

            // queue hue/sat/scale to apply once GBO is ready
            if (spawned && !spawned.isNull()) {
                const applyHue = getIndex("Set Hue For Spawn")?.enabled ? hueVal : null;
                const applySat = getIndex("Set Sat For Spawn")?.enabled ? satVal : null;
                const applyScale = getIndex("Set Scale For Spawn")?.enabled ? scaleVal : (sizespawner !== 0 ? Math.floor(sizespawner) : null);
                if (applyHue !== null || applySat !== null || applyScale !== null) {
                    pendingSpawnApply.push({ obj: spawned, hue: applyHue, sat: applySat, scale: applyScale, frame: frameCount });
                }
            } else {
                console.log("[spawn] spawned obj is null");
            }
        } catch (e) {
            console.error("Grip spawn error:", e);
        }
    },
    toolTip: "Item spawn lol."
}),
            //new ButtonInfo({
            //    buttonText: "Spawn Hoverboard",
            //    method: () => {
            //        getGTPlayer()?.method("SetHoverAllowed").invoke(true, true)
            //        FreeHoverboardManager.method("SendDropBoardRPC").invoke(safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(), identityQuaternion, zeroVector, zeroVector, bgColor);
            //    },
            //    isTogglable: false,
            //    toolTip: "Spawns you in a hoverboard."
            //}),
            //new ButtonInfo({
            //    buttonText: "Become Goldentrophy",
            //    method: () => {
            //        setPlayerName("goldentrophy");
            //        setPlayerColor([1.0, 0.5, 0.0]);
            //    },
            //    isTogglable: false,
            //    toolTip: "Turns you into goldentrophy."
            //}),
            //new ButtonInfo({
            //    buttonText: "Water Splash Hands",
            //    method: () => {
            //        if (leftGrab && time > splashDelay) {
            //            splashDelay = time + 0.1;
            //            const objectArray = Il2Cpp.array(SystemObject, [safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "leftHandTransform")?.method("get_rotation").invoke(), 1.0, 0.5, true, false]);
//
            //            const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
            //                "System.String",
            //                "Photon.Pun.RpcTarget",
            //                "System.Object[]");
//
            //            method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
            //        }
            //        if (rightGrab && time > splashDelay) {
            //            splashDelay = time + 0.1;
            //            const objectArray = Il2Cpp.array(SystemObject, [safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke(), 1.0, 0.5, true, false]);
//
            //            const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
            //                "System.String",
            //                "Photon.Pun.RpcTarget",
            //                "System.Object[]");
//
            //            method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
            //        }
            //    },
            //    toolTip: "Splashes water on your hands when pressing your grips."
            //}),
            new ButtonInfo({
                buttonText: "Get ID Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), FusionPlayerClass);
                            if (gunTarget && !gunTarget.handle.isNull() && time > idGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    idGunDelay = time + 0.5;
                                    //const id = gunTarget.method("get_Creator").invoke().method("get_UserId").invoke();
                                    const id = gunTarget.method("get_PlayerId").invoke();
                                    sendNotification("ID: " + String(id));
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Logs the ID of whoever your hand desires."
            }),

            //    disableMethod: () => {
            //        Destroy(mylittleSphere);
            //        mylittleSphere = null;
            //    },
            //    enableMethod: () => {
            //        const handTransform = rightHandTransform;
//
            //        // create visual ghost sphere
            //        mylittleSphere = createObject(
            //            handTransform.method("get_position").invoke(),
            //            handTransform.method("get_rotation").invoke(),
            //            [0.3, 0.3, 0.3],
            //            0,
            //            bgColor
            //        );
//
            //        // destroy collider for purely visual
            //        Destroy(getComponent(mylittleSphere, Collider));
//
            //        // parent to hand
            //        getTransform(mylittleSphere).method("set_parent").invoke(getTransform(handTransform));
//
            //        if (rightGrab && mylittleSphere) {
            //            const handPos = getTransform(rightHandTransform).method("get_position").invoke();
            //            const handForward = getTransform(rightHandTransform).method("get_forward").invoke();
            //                            
            //            const sphereScale = getTransform(mylittleSphere).method("get_localScale").invoke();
            //            const maxDistance = 0.5 * sphereScale[0]; // match visual sphere radius
            //                            
            //            // tiny raycast like ID Gun
            //            const hits = Physics.method("RaycastAll", 4).invoke(
            //                handPos,
            //                handForward,
            //                maxDistance,
            //                -1 // all layers
            //            );
            //        
            //            let finalHit = null;
            //            let closestDistance = Infinity;
            //            for (const hit of hits) {
            //                const hitPoint = hit.method("get_point").invoke();
            //                const distance = Vector3.method("Distance").invoke(handPos, hitPoint);
            //                if (distance < closestDistance) {
            //                    finalHit = hit;
            //                    closestDistance = distance;
            //                }
            //            }
            //        
            //            if (finalHit) {
            //                const netPlayer = getComponentInParent(finalHit.method("get_collider").invoke(), NetPlayer);
            //                if (netPlayer && !playerIsLocal(netPlayer)) {
            //                    console.log("NetPlayer touching ghost sphere via ray");
            //                }
            //            }
            //        }
//
//
//
//
            //        //new ButtonInfo({
            ////    buttonText: "Cosmetic Tracers",
            ////    disableMethod: () => {
            ////        for (let line of linePool) {
            ////            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            ////        }
            ////    },
            ////    method: () => {
            ////        if (frameCount % 5 != 0) {
            ////            for (let line of linePool) {
            ////                line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            ////            }
            ////            const vrrigs = GorillaParent.field("vrrigs").value;
            ////            const vrrigtotal = vrrigs.method("get_Count").invoke();
            ////            const rigs = [];
            ////            const cosmeticRigs = [];
            ////            for (let i = 0; i < vrrigtotal; i++) {
            ////                const playerRig = vrrigs.method("get_Item").invoke(i);
            ////                rigs.push(playerRig);
            ////                if (playerIsLocal(playerRig)) continue;
            ////                const concat = String(playerRig.field("concatStringOfCosmeticsAllowed").value);
            ////                if (concat.includes("LBAAD.")) { cosmeticRigs.push(i); continue; }; // Admin
            ////                if (concat.includes("LBAAK.")) { cosmeticRigs.push(i); continue; }; // Stick
            ////                if (concat.includes("LMAPY.")) { cosmeticRigs.push(i); continue; }; // Forest Guide
            ////                if (concat.includes("LBAGS.")) { cosmeticRigs.push(i); continue; }; // Illustrator
            ////                if (concat.includes("LBADE.")) { cosmeticRigs.push(i); continue; }; // Finger Painter
            ////                if (concat.includes("LBANI.")) { cosmeticRigs.push(i); continue; }; // AA Creator
            ////            }
            ////            for (let i = 0; i < vrrigtotal; i++) {
            ////                if (cosmeticRigs.includes(i) == false) continue;
            ////                const playerRig = rigs[i];
            ////                if (!playerIsLocal(playerRig)) {
            ////                    const color = playerRig.field("playerColor").value;
            ////                    if (lineRenderHolder == null) {
            ////                        lineRenderHolder = GameObject.new("LineRender_Holder");
            ////                    }
            ////                    let finalRender = null;
            ////                    let nl = false;
            ////                    for (let line of linePool) {
            ////                        if (finalRender != null) continue;
            ////                        if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
            ////                            line.method("get_gameObject").invoke().method("SetActive").invoke(true);
            ////                            finalRender = line;
            ////                            break;
            ////                        }
            ////                    }
            ////                    if (finalRender == null) {
            ////                        nl = true;
            ////                        const lineHolder = GameObject.new("LineObject");
            ////                        getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
            ////                        const newLine = addComponent(lineHolder, LineRenderer);
            ////                        const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
            ////                        newLine.method("get_material").invoke().method("set_shader").invoke(shader);
            ////                        newLine.method("set_startWidth").invoke(0.025);
            ////                        newLine.method("set_endWidth").invoke(0.025);
            ////                        newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
            ////                        newLine.method("set_useWorldSpace").invoke(true);
            ////                        newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
            ////                        linePool.push(newLine);
            ////                        finalRender = newLine;
            ////                    }
            ////                    finalRender.method("set_startColor").invoke(color);
            ////                    finalRender.method("set_endColor").invoke(color);
            ////                    finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
            ////                    finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
            ////                }
            ////            }
            ////        }
            ////    },
            ////    isTogglable: true,
            ////    toolTip: "Puts tracers on your right hand. Only shows players with rare cosmetics."
            ////}),
            //    },
            //    isTogglable: true,
            //    toolTip: "Logs the ID of whoever your hand desires."
            //}),
            //new ButtonInfo({
            //    buttonText: "Get Platform Gun",
            //    method: () => {
            //        if (rightGrab) {
            //            const gunData = renderGun();
            //            const ray = gunData.ray;
//
            //            if (rightTrigger) {
            //                const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
            //                if (gunTarget && !gunTarget.handle.isNull() && time > idGunDelay) {
            //                    if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
            //                        idGunDelay = time + 0.5;
            //                        const player = gunTarget.method("get_Creator").invoke();
            //                        const concat = String(gunTarget.field("concatStringOfCosmeticsAllowed").value);
            //                        const isSteam = (concat.includes("S. FIRST LOGIN") || concat.includes("FIRST LOGIN")) && !concat.includes("LMAKT.");
            //                        sendNotification(isSteam ? "PLATFORM: Steam" : "PLATFORM: Meta");
            //                    }
            //                }
            //            }
            //        }
            //    },
            //    isTogglable: true,
            //    toolTip: "Logs the platform of whoever your hand desires."
            //}),
            //new ButtonInfo({
            //    buttonText: "Punch Mod",
            //    method: () => {
            //        // This is MORE optimized (BY A LOT) than the one in the steam menu.
            //        const vrrigs = GorillaParent.field("vrrigs").value;
            //        const vrrigtotal = vrrigs.method("get_Count").invoke();
            //        let index = 0;
            //        for (let i = 0; i < vrrigtotal; i++) {
            //            const vrrig = vrrigs.method("get_Item").invoke(i);
            //            index++;
            //            let they = vrrig.field("rightHandTransform").value.method("get_position").invoke();
            //            const notthem = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();
            //            let distance = Vector3.method("Distance").invoke(they, notthem);
            //            if (distance < 0.25) {
            //                const vel = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply").invoke(Vector3.method("Normalize").invoke(Vector3.method("op_Subtraction", 2).invoke(they, punchLastRight[index])), highPunchPower ? 10 : 5), getRigidbody()?.method("get_velocity").invoke());
            //                getRigidbody()?.method("set_velocity").invoke(vel);
            //            }
            //            punchLastRight[index] = they;
            //            they = vrrig.field("leftHandTransform").value.method("get_position").invoke();
            //            distance = Vector3.method("Distance").invoke(they, notthem);
            //            if (distance < 0.25) {
            //                const vel = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply").invoke(Vector3.method("Normalize").invoke(Vector3.method("op_Subtraction", 2).invoke(they, punchLastLeft[index])), highPunchPower ? 10 : 5), getRigidbody()?.method("get_velocity").invoke());
            //                getRigidbody()?.method("set_velocity").invoke(vel);
            //            }
            //            punchLastLeft[index] = they;
            //        }
            //    },
            //    toolTip: "Lets people punch you across the map."
            //}),
            //new ButtonInfo({
            //    buttonText: "Max Quest Score",
            //    method: () => {
            //        LocalRig.method("SetQuestScore")?.invoke(999999)
            //    },
            //    isTogglable: false,
            //    toolTip: "Sets Your Quest Score To Max"
            //}),
            //new ButtonInfo({
            //    buttonText: "Max Ranked Level",
            //    method: () => {
            //        LocalRig.method("SetRankedInfo", 4)?.invoke(4000.0, 7, 7, true);
            //    },
            //    isTogglable: false,
            //    toolTip: "Sets Your Ranked Level To Max"
            //}),
        ],

        [ // Advantage Mods [5]
            new ButtonInfo({
                buttonText: "Exit Advantage Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Invincible",
                isTogglable: true,
                enableMethod: () => {
                    const localPlayer = NetPlayer.method("get_localPlayer").invoke();
                    localPlayer.method("set_isInvincible").invoke(true);
                },
                disableMethod: () => {
                    const localPlayer = NetPlayer.method("get_localPlayer").invoke();
                    localPlayer.method("set_isInvincible").invoke(false);
                },
                toolTip: "Makes you invincible."
            }),
            new ButtonInfo({
                buttonText: "Unlock All",
                isTogglable: false,
                method: () => {
                    try {
                        const AppClass = AssemblyCSharp.class("AnimalCompany.App");
                        const appState = AppClass.method("get_state").invoke();
                        if (!appState || appState.isNull()) { sendNotification("No app state", false); return; }

                        try {
                            const GISCls = AssemblyCSharp.class("AnimalCompany.GameplayItemState");
                            GISCls.method("get_isHidden").implementation = function() { return false; };
                        } catch(_) {}

                        let unlockedSet: any = null;
                        try {
                            const userState = appState.method("get_user").invoke();
                            if (userState && !userState.isNull()) {
                                const inv = userState.method("get_inventory").invoke();
                                if (inv && !inv.isNull()) {
                                    unlockedSet = inv.method("get_unlockedGameplayItems").invoke();
                                    try {
                                        const devOverride = inv.method("get_devOwnAllAvatarItemsOverride").invoke();
                                        if (devOverride && !devOverride.isNull()) devOverride.method("set_value").invoke(true);
                                    } catch(_) {}
                                }
                            }
                        } catch(e) { console.error("[UnlockAll] inventory:", e); }

                        let unlockedItems = 0;
                        try {
                            const gameplayItems = appState.method("get_gameplayItems").invoke();
                            if (gameplayItems && !gameplayItems.isNull()) {
                                const allDict = gameplayItems.method("get_all").invoke();
                                if (allDict && !allDict.isNull()) {
                                    const values = allDict.method("get_Values").invoke();
                                    if (values && !values.isNull()) {
                                        const enumerator = values.method("GetEnumerator").invoke();
                                        while (enumerator.method("MoveNext").invoke()) {
                                            try {
                                                const item = enumerator.method("get_Current").invoke();
                                                if (!item || item.isNull()) continue;
                                                try {
                                                    const isUnlocked = item.method("get_isUnlocked").invoke();
                                                    if (isUnlocked && !isUnlocked.isNull()) isUnlocked.method("set_value").invoke(true);
                                                } catch(_) {}
                                                try {
                                                    const depsSatisfied = item.method("get_unlockDependenciesSatisfied").invoke();
                                                    if (depsSatisfied && !depsSatisfied.isNull()) depsSatisfied.method("set_value").invoke(true);
                                                } catch(_) {}
                                                try {
                                                    const unlockable = item.method("get_unlockable").invoke();
                                                    if (unlockable && !unlockable.isNull()) unlockable.method("set_value").invoke(true);
                                                } catch(_) {}
                                                try {
                                                    const itemID = item.method("get_id").invoke();
                                                    if (itemID && unlockedSet && !unlockedSet.isNull()) {
                                                        unlockedSet.method("Add").invoke(itemID);
                                                    }
                                                } catch(_) {}
                                                unlockedItems++;
                                            } catch(_) {}
                                        }
                                    }
                                }
                            }
                        } catch(e) { console.error("[UnlockAll] gameplayItems:", e); }

                        let unlockedAvatarItems = 0;
                        try {
                            const avatarItems = appState.method("get_avatarItems").invoke();
                            if (avatarItems && !avatarItems.isNull()) {
                                const allDict = avatarItems.method("get_all").invoke();
                                if (allDict && !allDict.isNull()) {
                                    const values = allDict.method("get_Values").invoke();
                                    if (values && !values.isNull()) {
                                        const enumerator = values.method("GetEnumerator").invoke();
                                        while (enumerator.method("MoveNext").invoke()) {
                                            try {
                                                const item = enumerator.method("get_Current").invoke();
                                                if (!item || item.isNull()) continue;
                                                try {
                                                    const isOwned = item.method("get_isOwned").invoke();
                                                    if (isOwned && !isOwned.isNull()) isOwned.method("set_value").invoke(true);
                                                } catch(_) {}
                                                try {
                                                    const canPurchase = item.method("get_canPurchaseDirectly").invoke();
                                                    if (canPurchase && !canPurchase.isNull()) canPurchase.method("set_value").invoke(true);
                                                } catch(_) {}
                                                try {
                                                    const isDevItem = item.method("get_isDevItem")?.invoke();
                                                    if (isDevItem && !isDevItem.isNull()) isDevItem.method("set_value").invoke(true);
                                                } catch(_) {}
                                                unlockedAvatarItems++;
                                            } catch(_) {}
                                        }
                                    }
                                }
                            }
                        } catch(e) { console.error("[UnlockAll] avatarItems:", e); }

                        sendNotification("Unlocked " + unlockedItems + " items + " + unlockedAvatarItems + " cosmetics!", false);
                    } catch(e) { sendNotification("Unlock All: " + e, false); console.error("[UnlockAll]", e); }
                },
                toolTip: "Unlocks all gameplay + cosmetic items including hidden/dev items."
            }),
            new ButtonInfo({
                buttonText: "Stinky Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();
                                    gunTarget.method("RPC_TagAsStinky").invoke();
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Stinkies whoever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Stinky All",
                isTogglable: false,
                method: () => {
                    const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                    if (!rigs) return null;

                    for (let i = 0; i < rigs.length; i++) {
                        const rig = rigs.get(i);
                        if (rig.method("get_IsMine").invoke()) continue;
                        rig.method("RPC_TagAsStinky").invoke();
                    }
                },
                toolTip: "Stinkies everyone"
            }),
            //new ButtonInfo({
            //    buttonText: "Get all player names",
            //    isTogglable: false,
            //    method: () => {
            //        const rigs = Object.method("FindObjectsOfType").inflate(NetworkTransformClass).invoke();
            //        if (!rigs) return null;
//
            //    },
            //    toolTip: "Stinkies everyone"
            //}),
            new ButtonInfo({
                buttonText: "72 FPS",
                method: () => {
                    const targetDelta = 1 / 72;
                    const elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        const sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 72 frames per second."
            }),
            new ButtonInfo({
                buttonText: "60 FPS",
                method: () => {
                    const targetDelta = 1 / 60;
                    const elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        const sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 60 frames per second."
            }),
            new ButtonInfo({
                buttonText: "45 FPS",
                method: () => {
                    const targetDelta = 1 / 45;
                    const elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        const sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 45 frames per second."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Rig Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Trigger Clone Spawn",
                isTogglable: true,
                enableMethod: () => { triggerCloneSpawnActive = true; },
                disableMethod: () => { triggerCloneSpawnActive = false; },
                toolTip: "Spawns a frozen clone at your position when you pull the right trigger."
            }),
            new ButtonInfo({
                buttonText: "Spawn Clones",
                isTogglable: false,
                method: () => { startCloneSpawnSequence(); }
            }),
            new ButtonInfo({
                buttonText: "Clone Line (20)",
                isTogglable: false,
                method: () => { startCloneLineSpawnSequence(); },
                toolTip: "Spawns 20 clones in a straight line."
            }),
            new ButtonInfo({
                buttonText: "Clone Circle (20)",
                isTogglable: false,
                method: () => { startCloneCircleSpawnSequence(); },
                toolTip: "Spawns 20 clones in a circle formation."
            }),
            new ButtonInfo({
                buttonText: "Rig Follow",
                isTogglable: true,
                enableMethod: () => { startCloneFollow(); },
                disableMethod: () => { stopCloneFollow(); }
            }),
            new ButtonInfo({
                buttonText: "Orbit Clones",
                isTogglable: true,
                enableMethod: () => { startCloneOrbit(); },
                disableMethod: () => { stopCloneOrbit(); }
            }),
            new ButtonInfo({
                buttonText: "Clone Line Mode",
                isTogglable: true,
                enableMethod: () => { cloneLineMode = true; },
                disableMethod: () => { cloneLineMode = false; }
            }),
            new ButtonInfo({
                buttonText: "Clone Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const gunPointer = gunData.gunPointer;
                        if (rightTrigger && cloneGunCooldown <= 0 && gunPointer) {
                            const spawnPos = getTransform(gunPointer).method("get_position").invoke();
                            spawnCloneAtPosition(spawnPos, false);
                            cloneGunCooldown = 30;
                        }
                    }
                    if (cloneGunCooldown > 0) cloneGunCooldown--;
                },
                toolTip: "Hold grip to aim, pull trigger to spawn a clone at the pointer."
            }),
            new ButtonInfo({
                buttonText: "Voice Clone Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const gunPointer = gunData.gunPointer;
                        if (rightTrigger && cloneGunCooldown <= 0 && gunPointer) {
                            const spawnPos = getTransform(gunPointer).method("get_position").invoke();
                            spawnCloneAtPosition(spawnPos, true);
                            cloneGunCooldown = 30;
                        }
                    }
                    if (cloneGunCooldown > 0) cloneGunCooldown--;
                },
                toolTip: "Spawns a clone that mimics your voice in real-time."
            }),
            new ButtonInfo({
                buttonText: "Clear Clones",
                isTogglable: false,
                method: () => {
                    try {
                        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
                        Il2Cpp.gc.choose(NetPlayerClass).forEach((plr: any) => {
                            try {
                                if (!plr.method("get_IsMine").invoke()) {
                                    Destroy(plr.method("get_gameObject").invoke());
                                }
                                cloneFrozenTransforms = [];
                                cloneGunClones = [];
                            } catch (_) {}
                        });
                    } catch (e) { }
                }
            }),
            //new ButtonInfo({
            //    buttonText: "Ghost",
            //    method: () => {
            //        if (rightPrimary && !previousGhostKey) {
            //            //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
            //            const player = PCClass.method("get_instance").invoke();
            //            const RIGTESTBETA = player.method("get_playerView").invoke()
            //            if(!RIGTESTBETA) return null;
//
            //            const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
            //            if (!bodyRootTF) return null;
//
            //            const bodyRootTFOld = bodyRootTF.method("get_position").invoke()
//
            //            bodyRootTF.method("set_position").invoke(bodyRootTFOld)
            //        }
            //        else if (!rightPrimary && previousGhostKey) {
            //            const player = PCClass.method("get_instance").invoke();
            //            const RIGTESTBETA = player.method("get_playerView").invoke()
            //            if(!RIGTESTBETA) return null;
//
            //            const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
            //            if (!bodyRootTF) return null;
//
            //            bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
            //        }
            //        previousGhostKey = rightPrimary;
            //    },
            //    toolTip: "Freezes your rig when pressing A."
            //}),

            //new ButtonInfo({
            //    buttonText: "Ghost",
            //    method: () => {
            //        const player = PCClass.method("get_instance").invoke();
            //        if (!player) return null;
            //    
            //        const rig = player.method("get_playerView").invoke();
            //        if (!rig) return null;
            //    
            //        const bodyRootTF = rig.field("_cameraTransform").value;
            //        const handLeftTF = rig.field("_handTargetLeft").value;
            //        const handRightTF = rig.field("_handTargetRight").value;
            //    
            //        if (rightPrimary && !previousGhostKey) {
            //            // Cache positions
            //            if (bodyRootTF) cachedGhostPos.head = bodyRootTF.method("get_position").invoke();
            //            if (handLeftTF) cachedGhostPos.leftHand = handLeftTF.method("get_position").invoke();
            //            if (handRightTF) cachedGhostPos.rightHand = handRightTF.method("get_position").invoke();
            //        }
            //    
            //        if (rightPrimary) {
            //            // Keep freezing positions
            //            if (bodyRootTF && cachedGhostPos.head) bodyRootTF.method("set_position").invoke(cachedGhostPos.head);
            //            if (handLeftTF && cachedGhostPos.leftHand) handLeftTF.method("set_position").invoke(cachedGhostPos.leftHand);
            //            if (handRightTF && cachedGhostPos.rightHand) handRightTF.method("set_position").invoke(cachedGhostPos.rightHand);
            //        } else if (!rightPrimary && previousGhostKey) {
            //            // On release, restore head to headCollider
            //            if (bodyRootTF) bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke());
            //            cachedGhostPos = { head: null, leftHand: null, rightHand: null };
            //        }
            //    
            //        previousGhostKey = rightPrimary;
            //    },
            //    toolTip: "Freezes your rig positions when pressing A."
            //}),

            //new ButtonInfo({
            //    buttonText: "nothing here",
            //    method: () => {
            //    },
            //    toolTip: ""
            //}),
//
            new ButtonInfo({
                buttonText: "Invisible",
                method: () => {
                    if (rightPrimary && !previousInvisKey) {// && !previousInvisKey) {
                        //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                        const player = PCClass.method("get_instance").invoke();
                        const RIGTESTBETA = player.method("get_playerView").invoke()
                        if(!RIGTESTBETA) return null;

                        const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                        if (!bodyRootTF) return null;

                        bodyRootTF.method("set_position").invoke([0, -99999, 0])

                    }
                    else if (!rightPrimary && previousInvisKey) {
                        const player = PCClass.method("get_instance").invoke();
                        const RIGTESTBETA = player.method("get_playerView").invoke()
                        if(!RIGTESTBETA) return null;

                        const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                        if (!bodyRootTF) return null;

                        { const _hc_br = safeField(getInstance(), "headCollider"); if (_hc_br && !_hc_br.isNull?.()) { const _hc_br_t = getTransform(_hc_br); if (_hc_br_t && !_hc_br_t.isNull?.()) bodyRootTF.method("set_position").invoke(_hc_br_t.method("get_position").invoke()); } }
                    }
                    //if (!LocalRig.method("get_enabled").invoke()) {
                    //    getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
                    //}
                    //const player = NetPlayer.method("get_localPlayer").invoke();
                    //if (!player) return;
                    //if (rightSecondary && !previousInvisKey) {
                    //    //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                    //    //weird inverted giant head lol
                    //    player.method("set_playerHeadSize").invoke(-50);
                    //    //set_propBodyID is ss and number 8 is item_crate which is invis
                    //    
                    //}
                    //if () {//(!LocalRig.method("get_enabled").invoke()) {
                    //    //getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
                    //}
                    previousInvisKey = rightPrimary;

                },
                toolTip: "Turns you invisible when holding right joystick." //pressing B."
            }),
            new ButtonInfo({
                buttonText: "Ragdoll",
                method: () => {
                    if (rightStick && !previousInvisKey) {// && !previousInvisKey) {
                        //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                        const player = PCClass.method("get_instance").invoke();
                        const RIGTESTBETA = player.method("get_playerView").invoke()
                        if(!RIGTESTBETA) return null;

                        //const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                        //if (!bodyRootTF) return null;

                        RIGTESTBETA.method("SetRagdoll").invoke(true, [0, 0, 0], rigidbody, getTransform(safeField(getInstance(), "headCollider")))
                        
                    }
                    else if (!rightStick && previousInvisKey) {
                        const player = PCClass.method("get_instance").invoke();
                        const RIGTESTBETA = player.method("get_playerView").invoke()
                        if(!RIGTESTBETA) return null;

                        //const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                        //if (!bodyRootTF) return null;
//
                        //bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
                        RIGTESTBETA.method("SetRagdoll").invoke(false, [0, 0, 0], rigidbody, getTransform(safeField(getInstance(), "headCollider")))
                    }
                    //if (!LocalRig.method("get_enabled").invoke()) {
                    //    getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
                    //}
                    //const player = NetPlayer.method("get_localPlayer").invoke();
                    //if (!player) return;
                    //if (rightSecondary && !previousInvisKey) {
                    //    //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                    //    //weird inverted giant head lol
                    //    player.method("set_playerHeadSize").invoke(-50);
                    //    //set_propBodyID is ss and number 8 is item_crate which is invis
                    //    
                    //}
                    //if () {//(!LocalRig.method("get_enabled").invoke()) {
                    //    //getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
                    //}
                    previousInvisKey = rightStick;

                },
                toolTip: "Ragdoll your rig when holding right joystick." //pressing B."
            }),
            //new ButtonInfo({
            //    buttonText: "Third Person Cam?",
            //    method: () => {
            //        if (rightStick && !previousInvisKey) {// && !previousInvisKey) {
            //            //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
            //            const player = PCClass.method("get_instance").invoke();
            //            const RIGTESTBETA = player.method("get_playerView").invoke()
            //            if(!RIGTESTBETA) return null;
//
            //            //const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
            //            //if (!bodyRootTF) return null;
//
            //            RIGTESTBETA.method("SetName").invoke(Il2Cpp.string("SetName"))
            //            //                        const view = RIGTESTBETA.field("_mode").value;
            //            //view.field("value__").value = 0;
            //            
            //        }
            //        //else if (!rightStick && previousInvisKey) {
            //        //    const player = PCClass.method("get_instance").invoke();
            //        //    const RIGTESTBETA = player.method("get_playerView").invoke()
            //        //    if(!RIGTESTBETA) return null;
////
            //        //    //const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
            //        //    //if (!bodyRootTF) return null;
//////
            //        //    //bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
            //        //    //const view = RIGTESTBETA.field("_mode").value;
            //        //    //view.field("value__").value = 0;
            //        //    RIGTESTBETA.method("SetName").invoke(1)
            //        //}
            //        //if (!LocalRig.method("get_enabled").invoke()) {
            //        //    getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
            //        //}
            //        //const player = NetPlayer.method("get_localPlayer").invoke();
            //        //if (!player) return;
            //        //if (rightSecondary && !previousInvisKey) {
            //        //    //LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
            //        //    //weird inverted giant head lol
            //        //    player.method("set_playerHeadSize").invoke(-50);
            //        //    //set_propBodyID is ss and number 8 is item_crate which is invis
            //        //    
            //        //}
            //        //if () {//(!LocalRig.method("get_enabled").invoke()) {
            //        //    //getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
            //        //}
            //        previousInvisKey = rightStick;
//
            //    },
            //    toolTip: "Turns you invisible when holding B." //pressing B."
            //}),
            new ButtonInfo({
                buttonText: "Jelly Self",
                method: () => {
                    try {
                        const me = NetPlayer.method("get_localPlayer").invoke();
                        if (me && !(me.isNull?.())) {
                            me.method("RPC_SetJellyEffect").invoke(jellywowes, jellywowes);
                        }
                    } catch(_) {}
                },
                enableMethod: () => {
                    sendNotification("Jelly Self ON", false);
                },
                disableMethod: () => {
                    try {
                        const me = NetPlayer.method("get_localPlayer").invoke();
                        if (me && !me.isNull?.()) {
                            me.method("RPC_SetJellyEffect").invoke(0, 0);
                        }
                    } catch(_) {}
                    sendNotification("Jelly Self OFF", false);
                },
                toolTip: "Applies jelly effect to yourself until turned off."
            }),
            new ButtonInfo({
                buttonText: "Rig Gun",
                //disableMethod: () => {
                //    LocalRig.method("set_enabled").invoke(true);
                //},
                method: () => {
                    const player = PCClass.method("get_instance").invoke();
                    const RIGTESTBETA = player.method("get_playerView").invoke()
                    if(!RIGTESTBETA) return null    
                    const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                    if (!bodyRootTF) return null;

                    if (rightGrab) {
                        const gunData = renderGun();
                        const gunPointer = gunData.gunPointer;

                        if (rightTrigger) {
                            //LocalRig.method("set_enabled").invoke(false);
                            const position = Vector3.method("op_Addition", 2).invoke([0, 1, 0], getTransform(gunPointer).method("get_position").invoke());
                            bodyRootTF.method("set_position").invoke(position);
                        } else {
                            bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
                        }
                    }
                },
                toolTip: "Moves your rig to wherever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Grab Rig",
                method: () => {

                    const player = PCClass.method("get_instance").invoke();
                    const RIGTESTBETA = player.method("get_playerView").invoke()
                    if(!RIGTESTBETA) return null    
                    const bodyRootTF = RIGTESTBETA.field("_cameraTransform").value;
                    if (!bodyRootTF) return null;
                    if (rightGrab) {
                        //LocalRig.method("set_enabled").invoke(false);
                        { const _rht = safeField(getInstance(), "rightHandTransform"); if (_rht && !_rht.isNull?.()) { bodyRootTF.method("set_position").invoke(_rht.method("get_position").invoke()); bodyRootTF.method("set_rotation").invoke(_rht.method("get_rotation").invoke()); } }
                    }
                    else {
                        bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
                        bodyRootTF.method("set_rotation").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke())
                    }
                    if (leftGrab) {
                        //LocalRig.method("set_enabled").invoke(false);
                        { const _lht = safeField(getInstance(), "leftHandTransform"); if (_lht && !_lht.isNull?.()) { bodyRootTF.method("set_position").invoke(_lht.method("get_position").invoke()); bodyRootTF.method("set_rotation").invoke(_lht.method("get_rotation").invoke()); } }
                    }
                    else {
                        bodyRootTF.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke())
                        bodyRootTF.method("set_rotation").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke())
                    }
                },
                isTogglable: true,
                toolTip: "Lets you grab your rig"
            }),
            //new ButtonInfo({
            //    buttonText: "Spaz Rig",
            //    method: () => {
            //        const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
            //        trackingRotationOffset.field("x").value = Math.random() * 360.0;
            //        trackingRotationOffset.field("y").value = Math.random() * 360.0;
            //        trackingRotationOffset.field("z").value = Math.random() * 360.0;
            //    },
            //    disableMethod: () => {
            //        const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
            //        trackingRotationOffset.field("x").value = 0.0;
            //        trackingRotationOffset.field("y").value = 0.0;
            //        trackingRotationOffset.field("z").value = 0.0;
            //    },
            //    toolTip: "Spazzes your rig out."
            //}),
            //new ButtonInfo({
            //    buttonText: "Spin Head X",
            //    method: () => {
            //        const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
            //        trackingRotationOffset.field("x").value += 15.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("x").value = 0.0;
            //    },
            //    toolTip: "Rotate head around the X axis."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Spin Head Y",
            //    method: () => {
            //        const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
            //        trackingRotationOffset.field("y").value += 15.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
            //    },
            //    toolTip: "Rotate head around the Y axis."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Spin Head Z",
            //    method: () => {
            //        const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
            //        trackingRotationOffset.field("z").value += 15.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
            //    },
            //    toolTip: "Rotate head around the Z axis."
            //}),
            //new ButtonInfo({
            //    buttonText: "Upside Down Head",
            //    method: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 180.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
            //    },
            //    toolTip: "Flip your head upside down."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Broken Neck",
            //    method: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 90.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
            //    },
            //    toolTip: "Tilt your head sideways."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Backwards Head",
            //    method: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 180.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
            //    },
            //    toolTip: "Turn your head backwards."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Sideways Head",
            //    method: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 90.0;
            //    },
            //    disableMethod: () => {
            //        LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
            //    },
            //    toolTip: "Rotate your head sideways."
            //}),

            // ── Duplicate Own Rig ────────────────────────────────────────────
            new ButtonInfo({
                buttonText: "Duplicate Own Rig",
                isTogglable: true,
                toolTip: "Spawns a DummyPlayerTarget avatar that replays your last 5 seconds of movement on loop. Visible to all players.",

                method: () => {
                    if (!dupeRigActive) {
                        dupeRigActive = true;

                        dupeRigFrames  = dupeRigBuffer.slice();
                        dupeRigPlayIdx = 0;

                        if (dupeRigFrames.length === 0) {
                            sendNotification("No rig data yet – move around first!", false);
                            dupeRigActive = false;
                            return;
                        }

                        // Find the DummyPlayerTarget already in the scene and clone it.
                        // It's a pre-existing avatar mesh object — visible to all players.
                        try {
                            const firstFrame = dupeRigFrames[0];
                            const dummySource = getObject("DummyPlayerTarget");
                            if (!dummySource || dummySource.isNull()) {
                                sendNotification("DummyPlayerTarget not found in scene!", false);
                                dupeRigActive = false;
                                return;
                            }
                            dupeRigDummy = Object.method("Instantiate", 1).invoke(dummySource);
                            if (!dupeRigDummy || dupeRigDummy.isNull()) {
                                sendNotification("Failed to clone DummyPlayerTarget!", false);
                                dupeRigActive = false;
                                return;
                            }
                            // Place it at the first recorded head position
                            const dummyT = getTransform(dupeRigDummy);
                            dummyT.method("set_position").invoke(firstFrame.headPos);
                            dummyT.method("set_rotation").invoke(firstFrame.headRot);
                            dupeRigDummy.method("SetActive").invoke(true);
                        } catch (e) {
                            sendNotification("Spawn error: " + e, false);
                            dupeRigActive = false;
                            return;
                        }

                        const loopSecs = (dupeRigFrames.length > 1)
                            ? (dupeRigFrames[dupeRigFrames.length - 1].timestamp - dupeRigFrames[0].timestamp).toFixed(1)
                            : "?";
                        sendNotification(`Ghost active! Looping ~${loopSecs}s of movement.`, false);
                    }
                },

                disableMethod: () => {
                    if (dupeRigDummy && !dupeRigDummy.isNull()) {
                        Destroy(dupeRigDummy);
                        dupeRigDummy = null;
                    }
                    dupeRigActive  = false;
                    dupeRigFrames  = [];
                    dupeRigPlayIdx = 0;
                    sendNotification("Ghost destroyed.", false);
                }
            }),
            // ─────────────────────────────────────────────────────────────────
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Misc Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
    buttonText: "Item In Stash???",
    isTogglable: false,
    method: () => {
        try {
            // find the stash machine
            const StashMachine = AssemblyCSharp.class("AnimalCompany.StashMachine.StashMachineView");
            const stashes = Object.method("FindObjectsOfType").inflate(StashMachine).invoke();
            if (!stashes || stashes.length === 0) {
                sendNotification("No stash found in room!", false);
                return;
            }

            // use the first stash found
            const stash = stashes.get(0);
            if (!stash || stash.isNull()) {
                sendNotification("Stash is null!", false);
                return;
            }

            // get the stash transform to spawn at its position
            const stashTransform = getTransform(stash);
            const stashPos = stashTransform.method("get_position").invoke();

            // spawn the item at the stash position
            const spawned = PrefabGen.method("SpawnItem", 4).invoke(
                Il2Cpp.string(itemIDs[currentItemIndex]),
                stashPos,
                identityQuaternion,
                NULL
            );

            if (!spawned || spawned.isNull()) {
                sendNotification("Spawn failed!", false);
                return;
            }

            // apply current scale
            try {
                const gbo = spawned.method("GetComponent", 1)
                    .inflate(GBOClass).invoke();
                if (gbo && !gbo.isNull()) {
                    if (getIndex("Set Scale For Spawn")?.enabled) {
                        gbo.method("set_scaleModifier").invoke(scaleVal);
                    } else if (sizespawner !== 0) {
                        gbo.method("set_scaleModifier").invoke(Math.floor(sizespawner));
                    }
                    if (getIndex("Set Hue For Spawn")?.enabled) try { gbo.method("set_colorHue").invoke(hueVal); } catch(_) {}
                    if (getIndex("Set Sat For Spawn")?.enabled) try { gbo.method("set_colorSaturation").invoke(satVal); } catch(_) {}
                }
            } catch (_) {}

            // try to add it directly into the stash slots
            try {
                const stashState = stash.field("_stashState").value;
                if (stashState && !stashState.isNull()) {
                    const slots = stashState.field("_slots").value;
                    if (slots && !slots.isNull()) {
                        const slotCount = slots.method("get_Count").invoke();
                        console.log("Stash slot count: " + slotCount);

                        // find first empty slot and put the item in it
                        for (let i = 0; i < slotCount; i++) {
                            try {
                                const slot = slots.method("get_Item").invoke(i);
                                if (!slot || slot.isNull()) continue;

                                const isEmpty = slot.method("get_isEmpty").invoke();
                                if (isEmpty) {
                                    const networkObj = spawned.method("GetComponent", 1)
                                        .inflate(NetworkObjectClass).invoke();
                                    if (networkObj && !networkObj.isNull()) {
                                        slot.method("RPC_SetItem").invoke(networkObj);
                                        sendNotification("Spawned in stash slot " + i + ": " + itemIDs[currentItemIndex], false);
                                        return;
                                    }
                                }
                            } catch (_) {}
                        }

                        sendNotification("No empty stash slots found, item spawned at stash!", false);
                    }
                }
            } catch (e) {
                // fallback: item is still spawned at stash position even if slot insert fails
                sendNotification("Spawned at stash: " + itemIDs[currentItemIndex], false);
                console.log("slot insert failed, item still spawned at stash pos: " + e);
            }

        } catch (e) {
            console.error("spawn in stash error:", e);
            sendNotification("Error: " + e, false);
        }
    },
    toolTip: "Stash spawner lol."
}),
            new ButtonInfo({
                buttonText: "Shoot Flaregun Projectiles",
                method: () => {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const interactor = player.method("GetHandInteractor", 1).invoke(0);
                    if (!interactor) return;
                    const itemAnchor = interactor.field("_itemAnchor").value;
                    if (!itemAnchor) return;

                    const stick = PrefabGen.method("SpawnItem", 4).invoke(
                    Il2Cpp.string("item_treestick"),
                    safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(),
                    identityQuaternion,
                    NULL
                    )

                    const idofstick = stick.method("get_Id").invoke();
                    //TryGrabObject
                    //Destroy(stick);

                },
                isTogglable: false,
                toolTip: "Lets you eject more times using your stash"
            }),
            new ButtonInfo({
                buttonText: "Ding!",
                method: () => {
                    const File = Il2Cpp.corlib.class("System.IO.File");
                    const Directory = Il2Cpp.corlib.class("System.IO.Directory");


                    const url = API_URL + "/massets/ding.wav"
                    const audioType = 20;
                    const request = UnityWebRequest.alloc()
                    request.method(".ctor", 2).invoke(Il2Cpp.string(url), Il2Cpp.string("GET"))

                    const dh = DownloadHandlerBuffer.method(".ctor").invoke();
                    request.method("set_downloadHandler").invoke(dh);

                    const op = request.method("SendWebRequest").invoke(); 
                    while (!request.method("get_isDone").invoke()) {}
                    
                    const bytes = dh.method("GetData").invoke();

                    const basePath = Il2Cpp.application.persistentDataPath;
                    const soundDir = Il2Cpp.string(basePath + "/skid_audio");

                    if (!Directory.method("Exists").invoke(soundDir)) {
                        Directory.method("CreateDirectory").invoke(soundDir);
                    }
                    
                    const filePath = Il2Cpp.string(soundDir + "/ding.wav");

                    File.method("WriteAllBytes")
                        .invoke(filePath, bytes);

                    //const clip = DownloadHandlerAudioClip.method("GetContent").invoke(request);

                    //Play2DAudio(clip, 1.0)



                },
                isTogglable: false,
                toolTip: ":)"
            }),
            new ButtonInfo({
                buttonText: "Get Hand Position",
                method: () => {

                    if(rightGrab){console.log(safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke())}
                    //TryGrabObject
                    //Destroy(stick);

                },
                isTogglable: false,
                toolTip: "Lets you eject more times using your stash"
            }),
            new ButtonInfo({
    buttonText: "XrInput Name",
    method: () => {
        try {
            const player = NetPlayer.method("get_localPlayer").invoke();
            if (!player) return;
            player.method("RPC_SetPlayerName").invoke(Il2Cpp.string("XrInput"));
        } catch (e) { console.error("name change error:", e); }
    },
    isTogglable: false,
    toolTip: "Changes your in game name."
}),
            new ButtonInfo({
                buttonText: "Stash Dupe",
                method: () => stashDupeEnabled = true,//righthand = true,
                disableMethod: () => stashDupeEnabled = false,//righthand = false,
                toolTip: "Lets you eject more times using your stash"
            }),
            new ButtonInfo({
                buttonText: "Backpack Dupe",
                method: () => backpackDupeEnabled = true,//righthand = true,
                disableMethod: () => backpackDupeEnabled = false,//righthand = false,
                toolTip: "Any item you dump out of a backpack will stay in the bag"
            }),
            new ButtonInfo({
                buttonText: "Stash Allow Move",
                method: () => stashAllowMoves = true,//righthand = true,
                disableMethod: () => stashAllowMoves = false,//righthand = false,
                toolTip: "Lets you use any move in the stash (put anything in quivers, put black crates in bags, etc.)"
            }),
            new ButtonInfo({
                buttonText: "Items in any slot",
                method: () => allowPutGBO = true,//righthand = true,
                disableMethod: () => allowPutGBO = false,//righthand = false,
                toolTip: "Lets you put any item on your back, or hip slots"
            }),
            new ButtonInfo({
                buttonText: "Infinite Ammo",
                enabled: true,
                method: () => infAmmo = true,//righthand = true,
                disableMethod: () => infAmmo = false,//righthand = false,
                toolTip: "Lets you use items infinitely! (IF OFF IT SPAMS ERRORS IN THE CONSOLE AND DOESNT LET YOU USE ITEMS.)"
            }),
            new ButtonInfo({
                buttonText: "Head Size Self (SS) (NOT ON CS)",
                method: () => {
                    //if (rightGrab) {
                    //    //const gunData = renderGun();
                    //    //const ray = gunData.ray;
////
                    //    //if (rightTrigger) {
                    //    //    const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    //    //    if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                    //    //        if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                    //    //            //tagGunDelay = time + 0.5;
                    //    //            //LocalRig.method("set_enabled").invoke(false);
                    //    //            //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                    //    //            //serialize();
                    //    //            //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                    //    //            //LocalRig.method("set_enabled").invoke(true);
                    //    //            //sendAllOutgoing();
                    //    //            gunTarget.method("set_playerHeadSize").invoke(-50);
                    //    //            //set_playerHeadSize
                    //    //        }
                    //    //    }
                    //    //}
                    //}
                    const player = getMyPlayer()
                    if(negativeHeadSize){ player.method("set_playerHeadSize").invoke(-headSizeAmount); } else { player.method("set_playerHeadSize").invoke(headSizeAmount); }
                },
                isTogglable: false,
                toolTip: "Sets your head size to the head size amount. (ONLY FOR OTHER PLAYERS) (NOT VISIBLE ON YOUR SCREEN)"
            }),
            //new ButtonInfo({
            //    buttonText: "Massive Inverted Head Gun",
            //    method: () => {
            //        if (rightGrab) {
            //            const gunData = renderGun();
            //            const ray = gunData.ray;
//
            //            if (rightTrigger) {
            //                const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
            //                if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
            //                    if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
            //                        //tagGunDelay = time + 0.5;
            //                        //LocalRig.method("set_enabled").invoke(false);
            //                        //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
            //                        //serialize();
            //                        //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
            //                        //LocalRig.method("set_enabled").invoke(true);
            //                        //sendAllOutgoing();
            //                        gunTarget.method("set_playerHeadSize").invoke(-50);
            //                        //set_playerHeadSize
            //                    }
            //                }
            //            }
            //        }
            //    },
            //    isTogglable: true,
            //    toolTip: "Sets a players headsize to -50 which makes it big and inside out. (NW)"
            //}),
            new ButtonInfo({
                buttonText: "Use Item Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), GBOClass);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                //if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();

                                    if(leftTrigger){
                                        gunTarget.method("HandleTriggerUse").invoke();
                                    }
                                    else if(leftPrimary){
                                        gunTarget.method("HandleUse").invoke();
                                    }
                                    else{
                                        return null;
                                    }
                                //}
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Uses an item, (flaregun, grenade, etc.)\nHold left trigger to trigger the trigger action on the item, hold left primary to trigger the use action on the item."
            }),
            new ButtonInfo({
                buttonText: "Mic Echo (Photon Mic)",
                disableMethod: () => {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const micobject = player.field("_recorder").value;
                    if (!micobject) return;
                    micobject.method("set_DebugEchoMode").invoke(false);
                },
                enableMethod: () => {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const micobject = player.field("_recorder").value;
                    if (!micobject) return;

                    micobject.method("set_DebugEchoMode").invoke(true);

                    // PhotonVoice
//                  class Photon.Voice.Unity.Recorder : Photon.Voice.Unity.VoiceComponent
//                  {
//                      static System.Int32 MIN_OPUS_BITRATE = 6000;
//                      static System.Int32 MAX_OPUS_BITRATE = 510000;
//                      System.Boolean voiceDetection; // 0x28
//                      System.Single voiceDetectionThreshold; // 0x2c
//                      System.Int32 voiceDetectionDelayMs; // 0x30
//                      System.Object userData; // 0x38
//                      Photon.Voice.LocalVoice voice; // 0x40
//                      Photon.Voice.IAudioDesc inputSource; // 0x48
//                      Photon.Voice.Unity.VoiceConnection voiceConnection; // 0x50
//                      System.Byte interestGroup; // 0x58
//                      System.Boolean useTargetPlayers; // 0x59
//                      System.Int32[] targetPlayers; // 0x60
//                      System.Boolean debugEchoMode; // 0x68
//                      System.Boolean reliableMode; // 0x69
//                      System.Boolean encrypt; // 0x6a
//                      System.Boolean transmitEnabled; // 0x6b
//                      POpusCodec.Enums.SamplingRate samplingRate; // 0x6c
//                      Photon.Voice.OpusCodec.FrameDuration frameDuration; // 0x70
//                      System.Int32 bitrate; // 0x74
//                      Photon.Voice.Unity.Recorder.InputSourceType sourceType; // 0x78
//                      Photon.Voice.Unity.Recorder.MicType microphoneType; // 0x7c
//                      UnityEngine.AudioClip audioClip; // 0x80
//                      System.Boolean loopAudioClip; // 0x88
//                      System.Boolean recordingEnabled; // 0x89
//                      System.Func<Photon.Voice.IAudioDesc> inputFactory; // 0x90
//                      Photon.Voice.IOS.AudioSessionParameters audioSessionParameters; // 0x98
//                      Photon.Voice.Unity.AndroidAudioInParameters androidMicrophoneSettings; // 0xa8
//                      System.Boolean isPausedOrInBackground; // 0xab
//                      System.Boolean stopRecordingWhenPaused; // 0xac
//                      System.Boolean useOnAudioFilterRead; // 0xad
//                      System.Boolean useMicrophoneTypeFallback; // 0xae
//                      System.Boolean recordWhenJoined; // 0xaf
//                      Photon.Voice.DeviceInfo microphoneDevice; // 0xb0
//                      System.Int32 microphoneDeviceChangePending; // 0xd8
//                      System.Int32 restartRecordingPending; // 0xdc
//                      System.Void MicrophoneDeviceChangeDetected(); // 0x055dd008
//                      System.Boolean get_TransmitEnabled(); // 0x055dd210
//                      System.Void set_TransmitEnabled(System.Boolean value); // 0x055dd218
//                      System.Boolean get_Encrypt(); // 0x055dd2c4
//                      System.Void set_Encrypt(System.Boolean value); // 0x055dd2dc
//                      System.Boolean get_DebugEchoMode(); // 0x055dd2fc
//                      System.Void set_DebugEchoMode(System.Boolean value); // 0x055dd314
//                      System.Boolean get_ReliableMode(); // 0x055dd34c
//                      System.Void set_ReliableMode(System.Boolean value); // 0x055dd364
//                      System.Boolean get_VoiceDetection(); // 0x055dd384
//                      System.Void set_VoiceDetection(System.Boolean value); // 0x055dd38c
//                      System.Single get_VoiceDetectionThreshold(); // 0x055dd52c
//                      System.Void set_VoiceDetectionThreshold(System.Single value); // 0x055dd534
//                      System.Int32 get_VoiceDetectionDelayMs(); // 0x055dd764
//                      System.Void set_VoiceDetectionDelayMs(System.Int32 value); // 0x055dd76c
//                      System.Object get_UserData(); // 0x055dd848
//                      System.Void set_UserData(System.Object value); // 0x055dd850
//                      System.Func<Photon.Voice.IAudioDesc> get_InputFactory(); // 0x055dd9e4
//                      System.Void set_InputFactory(System.Func<Photon.Voice.IAudioDesc> value); // 0x055dd9ec
//                      Photon.Voice.AudioUtil.IVoiceDetector get_VoiceDetector(); // 0x055dd46c
//                      System.Byte get_InterestGroup(); // 0x055ddbc4
//                      System.Void set_InterestGroup(System.Byte value); // 0x055ddbdc
//                      System.Int32[] get_TargetPlayers(); // 0x055ddbf8
//                      System.Void set_TargetPlayers(System.Int32[] value); // 0x055ddc10
//                      System.Boolean get_IsCurrentlyTransmitting(); // 0x055ddc5c
//                      Photon.Voice.AudioUtil.ILevelMeter get_LevelMeter(); // 0x055ddc8c
//                      System.Boolean get_VoiceDetectorCalibrating(); // 0x055ddd50
//                      Photon.Voice.ILocalVoiceAudio get_voiceAudio(); // 0x055ddb7c
//                      Photon.Voice.Unity.Recorder.InputSourceType get_SourceType(); // 0x055dde20
//                      System.Void set_SourceType(Photon.Voice.Unity.Recorder.InputSourceType value); // 0x055dde28
//                      Photon.Voice.Unity.Recorder.MicType get_MicrophoneType(); // 0x055ddf94
//                      System.Void set_MicrophoneType(Photon.Voice.Unity.Recorder.MicType value); // 0x055de000
//                      UnityEngine.AudioClip get_AudioClip(); // 0x055de174
//                      System.Void set_AudioClip(UnityEngine.AudioClip value); // 0x055de17c
//                      System.Boolean get_LoopAudioClip(); // 0x055de334
//                      System.Void set_LoopAudioClip(System.Boolean value); // 0x055de33c
//                      POpusCodec.Enums.SamplingRate get_SamplingRate(); // 0x055de458
//                      System.Void set_SamplingRate(POpusCodec.Enums.SamplingRate value); // 0x055de460
//                      Photon.Voice.OpusCodec.FrameDuration get_FrameDuration(); // 0x055de5cc
//                      System.Void set_FrameDuration(Photon.Voice.OpusCodec.FrameDuration value); // 0x055de5d4
//                      System.Int32 get_Bitrate(); // 0x055de740
//                      System.Void set_Bitrate(System.Int32 value); // 0x055de748
//                      System.Boolean get_RecordingEnabled(); // 0x055dea90
//                      System.Void set_RecordingEnabled(System.Boolean value); // 0x055dea98
//                      System.Boolean get_StopRecordingWhenPaused(); // 0x055ded44
//                      System.Void set_StopRecordingWhenPaused(System.Boolean value); // 0x055ded4c
//                      System.Boolean get_UseOnAudioFilterRead(); // 0x055ded54
//                      System.Void set_UseOnAudioFilterRead(System.Boolean value); // 0x055ded5c
//                      System.Boolean get_UseMicrophoneTypeFallback(); // 0x055deedc
//                      System.Void set_UseMicrophoneTypeFallback(System.Boolean value); // 0x055deee4
//                      System.Boolean get_RecordWhenJoined(); // 0x055deeec
//                      System.Void set_RecordWhenJoined(System.Boolean value); // 0x055deef4
//                      Photon.Voice.DeviceInfo get_MicrophoneDevice(); // 0x055deefc
//                      System.Void set_MicrophoneDevice(Photon.Voice.DeviceInfo value); // 0x055def10
//                      System.Boolean get_AndroidMicrophoneAGC(); // 0x055df110
//                      System.Boolean get_AndroidMicrophoneAEC(); // 0x055df118
//                      System.Boolean get_AndroidMicrophoneNS(); // 0x055df120
//                      System.Boolean Init(Photon.Voice.Unity.VoiceConnection connection); // 0x055df128
//                      System.Boolean Deinit(Photon.Voice.Unity.VoiceConnection connection); // 0x055df3b0
//                      System.Boolean RestartRecording(); // 0x055dd9c8
//                      System.Void VoiceDetectorCalibrate(System.Int32 durationMs, System.Action<System.Single> detectionEndedCallback); // 0x055df3d8
//                      System.Void StartRecording(); // 0x055df678
//                      System.Void StopRecording(); // 0x055deac0
//                      System.Boolean SetIosAudioSessionParameters(Photon.Voice.IOS.AudioSessionParameters asp); // 0x055e18c0
//                      System.Boolean SetIosAudioSessionParameters(Photon.Voice.IOS.AudioSessionCategory category, Photon.Voice.IOS.AudioSessionMode mode, Photon.Voice.IOS.AudioSessionCategoryOption[] options); // 0x055e18d0
//                      System.Boolean SetAndroidNativeMicrophoneSettings(System.Boolean aec, System.Boolean agc, System.Boolean ns); // 0x055e1b0c
//                      System.Boolean ResetLocalAudio(); // 0x055e1d84
//                      Photon.Voice.LocalVoice CreateLocalVoiceAudioAndSource(); // 0x055dfd38
//                      System.Void SendPhotonVoiceCreatedMessage(); // 0x055e253c
//                      System.Void Update(); // 0x055e25f8
//                      System.Void OnDestroy(); // 0x055e2a40
//                      System.Void HandleDeviceChange(); // 0x055e27c8
//                      System.Void OnApplicationPause(System.Boolean paused); // 0x055e2cac
//                      System.Void OnApplicationFocus(System.Boolean focused); // 0x055e3404
//                      System.Void HandleApplicationPause(System.Boolean paused); // 0x055e2e64
//                      System.Void .ctor(); // 0x055e35c0
//                  }
                },
                isTogglable: true,
                toolTip: "Be able to hear what other players hear from you."
            }),
            new ButtonInfo({
                buttonText: "Good Mic Quality (Photon Mic)",
                disableMethod: () => {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const micobject = player.field("_recorder").value;
                    if (!micobject) return;
                    //console.log("min opus bitrate: " + micobject.field("MIN_OPUS_BITRATE").value)
                    //console.log("max opus bitrate: " + micobject.field("MAX_OPUS_BITRATE").value)
                    micobject.method("set_Bitrate").invoke(20000);
                    micobject.method("RestartRecording").invoke();
                },
                enableMethod: () => {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const micobject = player.field("_recorder").value;
                    if (!micobject) return;
                    //console.log("bitrate: " + micobject.field("bitrate").value)

                    micobject.method("set_Bitrate").invoke(99999);
                    micobject.method("RestartRecording").invoke();

                    // PhotonVoice
//                  class Photon.Voice.Unity.Recorder : Photon.Voice.Unity.VoiceComponent
//                  {
//                      static System.Int32 MIN_OPUS_BITRATE = 6000;
//                      static System.Int32 MAX_OPUS_BITRATE = 510000;
//                      System.Boolean voiceDetection; // 0x28
//                      System.Single voiceDetectionThreshold; // 0x2c
//                      System.Int32 voiceDetectionDelayMs; // 0x30
//                      System.Object userData; // 0x38
//                      Photon.Voice.LocalVoice voice; // 0x40
//                      Photon.Voice.IAudioDesc inputSource; // 0x48
//                      Photon.Voice.Unity.VoiceConnection voiceConnection; // 0x50
//                      System.Byte interestGroup; // 0x58
//                      System.Boolean useTargetPlayers; // 0x59
//                      System.Int32[] targetPlayers; // 0x60
//                      System.Boolean debugEchoMode; // 0x68
//                      System.Boolean reliableMode; // 0x69
//                      System.Boolean encrypt; // 0x6a
//                      System.Boolean transmitEnabled; // 0x6b
//                      POpusCodec.Enums.SamplingRate samplingRate; // 0x6c
//                      Photon.Voice.OpusCodec.FrameDuration frameDuration; // 0x70
//                      System.Int32 bitrate; // 0x74
//                      Photon.Voice.Unity.Recorder.InputSourceType sourceType; // 0x78
//                      Photon.Voice.Unity.Recorder.MicType microphoneType; // 0x7c
//                      UnityEngine.AudioClip audioClip; // 0x80
//                      System.Boolean loopAudioClip; // 0x88
//                      System.Boolean recordingEnabled; // 0x89
//                      System.Func<Photon.Voice.IAudioDesc> inputFactory; // 0x90
//                      Photon.Voice.IOS.AudioSessionParameters audioSessionParameters; // 0x98
//                      Photon.Voice.Unity.AndroidAudioInParameters androidMicrophoneSettings; // 0xa8
//                      System.Boolean isPausedOrInBackground; // 0xab
//                      System.Boolean stopRecordingWhenPaused; // 0xac
//                      System.Boolean useOnAudioFilterRead; // 0xad
//                      System.Boolean useMicrophoneTypeFallback; // 0xae
//                      System.Boolean recordWhenJoined; // 0xaf
//                      Photon.Voice.DeviceInfo microphoneDevice; // 0xb0
//                      System.Int32 microphoneDeviceChangePending; // 0xd8
//                      System.Int32 restartRecordingPending; // 0xdc
//                      System.Void MicrophoneDeviceChangeDetected(); // 0x055dd008
//                      System.Boolean get_TransmitEnabled(); // 0x055dd210
//                      System.Void set_TransmitEnabled(System.Boolean value); // 0x055dd218
//                      System.Boolean get_Encrypt(); // 0x055dd2c4
//                      System.Void set_Encrypt(System.Boolean value); // 0x055dd2dc
//                      System.Boolean get_DebugEchoMode(); // 0x055dd2fc
//                      System.Void set_DebugEchoMode(System.Boolean value); // 0x055dd314
//                      System.Boolean get_ReliableMode(); // 0x055dd34c
//                      System.Void set_ReliableMode(System.Boolean value); // 0x055dd364
//                      System.Boolean get_VoiceDetection(); // 0x055dd384
//                      System.Void set_VoiceDetection(System.Boolean value); // 0x055dd38c
//                      System.Single get_VoiceDetectionThreshold(); // 0x055dd52c
//                      System.Void set_VoiceDetectionThreshold(System.Single value); // 0x055dd534
//                      System.Int32 get_VoiceDetectionDelayMs(); // 0x055dd764
//                      System.Void set_VoiceDetectionDelayMs(System.Int32 value); // 0x055dd76c
//                      System.Object get_UserData(); // 0x055dd848
//                      System.Void set_UserData(System.Object value); // 0x055dd850
//                      System.Func<Photon.Voice.IAudioDesc> get_InputFactory(); // 0x055dd9e4
//                      System.Void set_InputFactory(System.Func<Photon.Voice.IAudioDesc> value); // 0x055dd9ec
//                      Photon.Voice.AudioUtil.IVoiceDetector get_VoiceDetector(); // 0x055dd46c
//                      System.Byte get_InterestGroup(); // 0x055ddbc4
//                      System.Void set_InterestGroup(System.Byte value); // 0x055ddbdc
//                      System.Int32[] get_TargetPlayers(); // 0x055ddbf8
//                      System.Void set_TargetPlayers(System.Int32[] value); // 0x055ddc10
//                      System.Boolean get_IsCurrentlyTransmitting(); // 0x055ddc5c
//                      Photon.Voice.AudioUtil.ILevelMeter get_LevelMeter(); // 0x055ddc8c
//                      System.Boolean get_VoiceDetectorCalibrating(); // 0x055ddd50
//                      Photon.Voice.ILocalVoiceAudio get_voiceAudio(); // 0x055ddb7c
//                      Photon.Voice.Unity.Recorder.InputSourceType get_SourceType(); // 0x055dde20
//                      System.Void set_SourceType(Photon.Voice.Unity.Recorder.InputSourceType value); // 0x055dde28
//                      Photon.Voice.Unity.Recorder.MicType get_MicrophoneType(); // 0x055ddf94
//                      System.Void set_MicrophoneType(Photon.Voice.Unity.Recorder.MicType value); // 0x055de000
//                      UnityEngine.AudioClip get_AudioClip(); // 0x055de174
//                      System.Void set_AudioClip(UnityEngine.AudioClip value); // 0x055de17c
//                      System.Boolean get_LoopAudioClip(); // 0x055de334
//                      System.Void set_LoopAudioClip(System.Boolean value); // 0x055de33c
//                      POpusCodec.Enums.SamplingRate get_SamplingRate(); // 0x055de458
//                      System.Void set_SamplingRate(POpusCodec.Enums.SamplingRate value); // 0x055de460
//                      Photon.Voice.OpusCodec.FrameDuration get_FrameDuration(); // 0x055de5cc
//                      System.Void set_FrameDuration(Photon.Voice.OpusCodec.FrameDuration value); // 0x055de5d4
//                      System.Int32 get_Bitrate(); // 0x055de740
//                      System.Void set_Bitrate(System.Int32 value); // 0x055de748
//                      System.Boolean get_RecordingEnabled(); // 0x055dea90
//                      System.Void set_RecordingEnabled(System.Boolean value); // 0x055dea98
//                      System.Boolean get_StopRecordingWhenPaused(); // 0x055ded44
//                      System.Void set_StopRecordingWhenPaused(System.Boolean value); // 0x055ded4c
//                      System.Boolean get_UseOnAudioFilterRead(); // 0x055ded54
//                      System.Void set_UseOnAudioFilterRead(System.Boolean value); // 0x055ded5c
//                      System.Boolean get_UseMicrophoneTypeFallback(); // 0x055deedc
//                      System.Void set_UseMicrophoneTypeFallback(System.Boolean value); // 0x055deee4
//                      System.Boolean get_RecordWhenJoined(); // 0x055deeec
//                      System.Void set_RecordWhenJoined(System.Boolean value); // 0x055deef4
//                      Photon.Voice.DeviceInfo get_MicrophoneDevice(); // 0x055deefc
//                      System.Void set_MicrophoneDevice(Photon.Voice.DeviceInfo value); // 0x055def10
//                      System.Boolean get_AndroidMicrophoneAGC(); // 0x055df110
//                      System.Boolean get_AndroidMicrophoneAEC(); // 0x055df118
//                      System.Boolean get_AndroidMicrophoneNS(); // 0x055df120
//                      System.Boolean Init(Photon.Voice.Unity.VoiceConnection connection); // 0x055df128
//                      System.Boolean Deinit(Photon.Voice.Unity.VoiceConnection connection); // 0x055df3b0
//                      System.Boolean RestartRecording(); // 0x055dd9c8
//                      System.Void VoiceDetectorCalibrate(System.Int32 durationMs, System.Action<System.Single> detectionEndedCallback); // 0x055df3d8
//                      System.Void StartRecording(); // 0x055df678
//                      System.Void StopRecording(); // 0x055deac0
//                      System.Boolean SetIosAudioSessionParameters(Photon.Voice.IOS.AudioSessionParameters asp); // 0x055e18c0
//                      System.Boolean SetIosAudioSessionParameters(Photon.Voice.IOS.AudioSessionCategory category, Photon.Voice.IOS.AudioSessionMode mode, Photon.Voice.IOS.AudioSessionCategoryOption[] options); // 0x055e18d0
//                      System.Boolean SetAndroidNativeMicrophoneSettings(System.Boolean aec, System.Boolean agc, System.Boolean ns); // 0x055e1b0c
//                      System.Boolean ResetLocalAudio(); // 0x055e1d84
//                      Photon.Voice.LocalVoice CreateLocalVoiceAudioAndSource(); // 0x055dfd38
//                      System.Void SendPhotonVoiceCreatedMessage(); // 0x055e253c
//                      System.Void Update(); // 0x055e25f8
//                      System.Void OnDestroy(); // 0x055e2a40
//                      System.Void HandleDeviceChange(); // 0x055e27c8
//                      System.Void OnApplicationPause(System.Boolean paused); // 0x055e2cac
//                      System.Void OnApplicationFocus(System.Boolean focused); // 0x055e3404
//                      System.Void HandleApplicationPause(System.Boolean paused); // 0x055e2e64
//                      System.Void .ctor(); // 0x055e35c0
//                  }
                },
                isTogglable: true,
                toolTip: "Enhances your mic quality for other players."
            }),
            //new ButtonInfo({
            //    buttonText: "Connect to US",
            //    method: () => {
            //        PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("us"));
            //    },
            //    isTogglable: false,
            //    toolTip: "Connects you to the US region."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Connect to US West",
            //    method: () => {
            //        PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("usw"));
            //    },
            //    isTogglable: false,
            //    toolTip: "Connects you to the USW rwgion."
            //}),
//
            //new ButtonInfo({
            //    buttonText: "Connect to EU",
            //    method: () => {
            //        PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("eu"));
            //    },
            //    isTogglable: false,
            //    toolTip: "Connects you to the EU region."
            //}),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Visual Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            //new ButtonInfo({
            //    buttonText: "Cosmetic Tracers",
            //    disableMethod: () => {
            //        for (let line of linePool) {
            //            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            //        }
            //    },
            //    method: () => {
            //        if (frameCount % 5 != 0) {
            //            for (let line of linePool) {
            //                line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            //            }
            //            const vrrigs = GorillaParent.field("vrrigs").value;
            //            const vrrigtotal = vrrigs.method("get_Count").invoke();
            //            const rigs = [];
            //            const cosmeticRigs = [];
            //            for (let i = 0; i < vrrigtotal; i++) {
            //                const playerRig = vrrigs.method("get_Item").invoke(i);
            //                rigs.push(playerRig);
            //                if (playerIsLocal(playerRig)) continue;
            //                const concat = String(playerRig.field("concatStringOfCosmeticsAllowed").value);
            //                if (concat.includes("LBAAD.")) { cosmeticRigs.push(i); continue; }; // Admin
            //                if (concat.includes("LBAAK.")) { cosmeticRigs.push(i); continue; }; // Stick
            //                if (concat.includes("LMAPY.")) { cosmeticRigs.push(i); continue; }; // Forest Guide
            //                if (concat.includes("LBAGS.")) { cosmeticRigs.push(i); continue; }; // Illustrator
            //                if (concat.includes("LBADE.")) { cosmeticRigs.push(i); continue; }; // Finger Painter
            //                if (concat.includes("LBANI.")) { cosmeticRigs.push(i); continue; }; // AA Creator
            //            }
            //            for (let i = 0; i < vrrigtotal; i++) {
            //                if (cosmeticRigs.includes(i) == false) continue;
            //                const playerRig = rigs[i];
            //                if (!playerIsLocal(playerRig)) {
            //                    const color = playerRig.field("playerColor").value;
            //                    if (lineRenderHolder == null) {
            //                        lineRenderHolder = GameObject.new("LineRender_Holder");
            //                    }
            //                    let finalRender = null;
            //                    let nl = false;
            //                    for (let line of linePool) {
            //                        if (finalRender != null) continue;
            //                        if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
            //                            line.method("get_gameObject").invoke().method("SetActive").invoke(true);
            //                            finalRender = line;
            //                            break;
            //                        }
            //                    }
            //                    if (finalRender == null) {
            //                        nl = true;
            //                        const lineHolder = GameObject.new("LineObject");
            //                        getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
            //                        const newLine = addComponent(lineHolder, LineRenderer);
            //                        const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
            //                        newLine.method("get_material").invoke().method("set_shader").invoke(shader);
            //                        newLine.method("set_startWidth").invoke(0.025);
            //                        newLine.method("set_endWidth").invoke(0.025);
            //                        newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
            //                        newLine.method("set_useWorldSpace").invoke(true);
            //                        newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
            //                        linePool.push(newLine);
            //                        finalRender = newLine;
            //                    }
            //                    finalRender.method("set_startColor").invoke(color);
            //                    finalRender.method("set_endColor").invoke(color);
            //                    finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
            //                    finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
            //                }
            //            }
            //        }
            //    },
            //    isTogglable: true,
            //    toolTip: "Puts tracers on your right hand. Only shows players with rare cosmetics."
            //}),
            new ButtonInfo({
                buttonText: "Item Tracers",
                disableMethod: () => {
                    for (let line of linePool) {
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: () => {
                    //if (frameCount % 5 != 0) {
                    //                        const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                    //if (!rigs) return null;
//
                    //for (let i = 0; i < rigs.length; i++) {
                    //    const rig = rigs.get(i);
                    //    if (!playerIsLocal(rig)) {
                    //        rig.method("RPC_TagAsStinky").invoke();
                    //    }
                    //    break;
                    //}
                    if (frameCount % 5 != 0) {
                        for (let line of linePool) {
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        const rigs = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
                        if (!rigs) return null;
                        const rigstotal = rigs.length;
                        for (let i = 0; i < rigstotal; i++) {
                            const playerRig = rigs.get(i);
                            //if (!playerIsLocal(playerRig)) {
                                //const color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                let finalRender = null;
                                let nl = false;
                                for (let line of linePool) {
                                    if (finalRender != null) continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    const lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    const newLine = addComponent(lineHolder, LineRenderer);
                                    const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("UI/Default"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(bgColor);
                                finalRender.method("set_endColor").invoke(bgColor);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
                            }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows all items."
            }),
            new ButtonInfo({
                buttonText: "Nearest Item Tracer",
                disableMethod: () => {
                    for (let line of linePool) {
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: () => {
                    if (frameCount % 5 != 0) {
                        let lowestDistance = Number.MAX_SAFE_INTEGER;
                        let closest = 0;
                        for (let line of linePool) {
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        const vrrigs = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
                        if (!vrrigs) return null;
                        const vrrigtotal = vrrigs.length;
                        const rigs = [];
                        for (let i = 0; i < vrrigtotal; i++) {
                            const playerRig = vrrigs.get(i);
                            rigs.push(playerRig);
                            const dist = Vector3.method("Distance").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), getTransform(playerRig).method("get_position").invoke());
                            if (lowestDistance > dist) {
                                lowestDistance = dist;
                                closest = i;
                            }
                        }
                        for (let i = 0; i < vrrigtotal; i++) {
                            if (i != closest) continue;
                            const playerRig = rigs[i];
                            //if (!playerIsLocal(playerRig)) {
                                //const color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                let finalRender = null;
                                let nl = false;
                                for (let line of linePool) {
                                    if (finalRender != null) continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    const lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    const newLine = addComponent(lineHolder, LineRenderer);
                                    const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("UI/Default"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(bgColor);
                                finalRender.method("set_endColor").invoke(bgColor);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
                            //}
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows only the nearest item to reduce lag."
            }),
            new ButtonInfo({
                buttonText: "Casual Tracers",
                disableMethod: () => {
                    for (let line of linePool) {
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: () => {
                    //if (frameCount % 5 != 0) {
                    //                        const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                    //if (!rigs) return null;
//
                    //for (let i = 0; i < rigs.length; i++) {
                    //    const rig = rigs.get(i);
                    //    if (!playerIsLocal(rig)) {
                    //        rig.method("RPC_TagAsStinky").invoke();
                    //    }
                    //    break;
                    //}
                        for (let line of linePool) {
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!rigs) return null;
                        const rigstotal = rigs.length;
                        for (let i = 0; i < rigstotal; i++) {
                            const playerRig = rigs.get(i);
                            if (!playerIsLocal(playerRig)) {
                                //const color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                let finalRender = null;
                                let nl = false;
                                for (let line of linePool) {
                                    if (finalRender != null) continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    const lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    const newLine = addComponent(lineHolder, LineRenderer);
                                    const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("UI/Default"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(bgColor);
                                finalRender.method("set_endColor").invoke(bgColor);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
                            }
                        }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows everyone."
            }),
            new ButtonInfo({
                buttonText: "Nearest Tracer",
                disableMethod: () => {
                    for (let line of linePool) {
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: () => {
                    if (frameCount % 5 != 0) {
                        let lowestDistance = Number.MAX_SAFE_INTEGER;
                        let closest = 0;
                        for (let line of linePool) {
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        const vrrigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!vrrigs) return null;
                        const vrrigtotal = vrrigs.length;
                        const rigs = [];
                        for (let i = 0; i < vrrigtotal; i++) {
                            const playerRig = vrrigs.get(i);
                            rigs.push(playerRig);
                            if (playerIsLocal(playerRig)) continue;
                            const dist = Vector3.method("Distance").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), getTransform(playerRig).method("get_position").invoke());
                            if (lowestDistance > dist) {
                                lowestDistance = dist;
                                closest = i;
                            }
                        }
                        for (let i = 0; i < vrrigtotal; i++) {
                            if (i != closest) continue;
                            const playerRig = rigs[i];
                            if (!playerIsLocal(playerRig)) {
                                //const color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                let finalRender = null;
                                let nl = false;
                                for (let line of linePool) {
                                    if (finalRender != null) continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    const lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    const newLine = addComponent(lineHolder, LineRenderer);
                                    const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("UI/Default"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(bgColor);
                                finalRender.method("set_endColor").invoke(bgColor);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows only the nearest player to reduce lag."
            }),

        ],
        [
            new ButtonInfo({
                buttonText: "Exit Overpowered Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "No Laser Overheat",
                isTogglable: true,
                enableMethod: () => { noLaserOverheat = true; },
                disableMethod: () => { noLaserOverheat = false; },
                method: () => {},
                toolTip: "Removes all overheat, fuel drain and hit cooldown on the mining laser so it fires continuously."
            }),
            new ButtonInfo({
                buttonText: "Infinite Laser Range",
                isTogglable: true,
                enableMethod: () => { infiniteLaserRange = true; },
                disableMethod: () => { infiniteLaserRange = false; },
                method: () => {},
                toolTip: "Removes the 3-4m distance cap on the mining laser so the beam reaches infinitely."
            }),
            new ButtonInfo({
                buttonText: "Grab Player",
                isTogglable: true,
                method: (() => {
                    let grabbedPlayer: any = null;
                    let grabHand: string = "rightHandTransform";
                    const GRAB_RANGE = 1.5;
                    return () => {
                        try {
                            if (!rightGrab || !rightTrigger) {
                                grabbedPlayer = null;
                                return;
                            }
                            if (!grabbedPlayer || grabbedPlayer.isNull?.()) {
                                grabbedPlayer = null;
                                const rht = safeField(getInstance(), "rightHandTransform");
                                const lht = safeField(getInstance(), "leftHandTransform");
                                if (!rht || !lht) return;
                                const rPos = rht.method("get_position").invoke();
                                const lPos = lht.method("get_position").invoke();
                                const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                                if (!players) return;
                                let bestDist = GRAB_RANGE;
                                for (let i = 0; i < players.length; i++) {
                                    const p = players.get(i);
                                    if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                                    const pPos = getTransform(p).method("get_position").invoke();
                                    const dRight = Vector3.method("Distance").invoke(rPos, pPos) as number;
                                    const dLeft  = Vector3.method("Distance").invoke(lPos, pPos) as number;
                                    const d = Math.min(dRight, dLeft);
                                    if (d < bestDist) {
                                        bestDist = d;
                                        grabbedPlayer = p;
                                        grabHand = dRight < dLeft ? "rightHandTransform" : "leftHandTransform";
                                    }
                                }
                                if (!grabbedPlayer) return;
                                sendNotification("Grabbed player!", false);
                            }
                            const ht = safeField(getInstance(), grabHand);
                            if (!ht || ht.isNull?.()) return;
                            const handPos = ht.method("get_position").invoke();
                            // RPC_Teleport sets the player's root (feet). To align their body
                            // center with the hand, subtract the live body-to-root Y delta
                            // (bodyCollider Y - GTPlayer root Y) from the hand position.
                            let targetPos: any = handPos;
                            try {
                                const bcY   = getTransform(safeField(getInstance(), "bodyCollider")).method("get_position").invoke().field("y").value as number;
                                const rootY = getTransform(getGTPlayer()).method("get_position").invoke().field("y").value as number;
                                const bodyOffset = bcY - rootY;
                                const hx = handPos.field("x").value as number;
                                const hy = handPos.field("y").value as number;
                                const hz = handPos.field("z").value as number;
                                targetPos = [hx, hy - bodyOffset, hz];
                            } catch(_) {}
                            grabbedPlayer.method("RPC_Teleport").invoke(targetPos);
                        } catch(e) { console.error("Grab Player:", e); }
                    };
                })(),
                disableMethod: () => {},
                toolTip: "Hold right grip + right trigger to grab the nearest player to your hand."
            }),
            new ButtonInfo({
                buttonText: "No Shotgun Cooldown",
                isTogglable: true,
                enableMethod: () => { noShotgunCooldown = true; },
                disableMethod: () => { noShotgunCooldown = false; },
                toolTip: "Removes reload cooldown on all shotguns."
            }),
            new ButtonInfo({
    buttonText: "Player Orbit",
    isTogglable: true,
    method: (() => {
        let orbitAngle = 0;
        const ORBIT_RADIUS = 1.5;
        const ORBIT_SPEED = 90.0;

        return () => {
            try {
                orbitAngle += ORBIT_SPEED * deltaTime;
                if (orbitAngle > 360) orbitAngle -= 360;

                const _hc_cp = safeField(getInstance(), "headCollider"); if (!_hc_cp || _hc_cp.isNull?.()) return; const centerPos = getTransform(_hc_cp).method("get_position").invoke(); if (!centerPos) return;

                const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                if (!players) return;

                const otherPlayers: any[] = [];
                for (let i = 0; i < players.length; i++) {
                    const p = players.get(i);
                    if (!playerIsLocal(p)) otherPlayers.push(p);
                }

                if (otherPlayers.length === 0) return;

                for (let i = 0; i < otherPlayers.length; i++) {
                    const player = otherPlayers[i];
                    if (!player || player.isNull()) continue;

                    const angleOffset = (360 / otherPlayers.length) * i;
                    const rad = (orbitAngle + angleOffset) * (Math.PI / 180);

                    const offsetX = Math.cos(rad) * ORBIT_RADIUS;
                    const offsetZ = Math.sin(rad) * ORBIT_RADIUS;

                    const offsetVec = Vector3.method("op_Addition").invoke(
                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, offsetX),
                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, offsetZ)
                    );

                    const targetPos = Vector3.method("op_Addition").invoke(centerPos, offsetVec);
                    player.method("RPC_Teleport").invoke(targetPos);
                }
            } catch (e) { console.error("player orbit error:", e); }
        };
    })(),
    toolTip: "Orbits all other players around you. Adjust ORBIT_RADIUS and ORBIT_SPEED in code."
}),
            new ButtonInfo({
    buttonText: "TP All To Me",
    method: () => {
        const myPos = getTransform(getGTPlayer()).method("get_position").invoke();
        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
        if (!players) return;
        for (let i = 0; i < players.length; i++) {
            const netPlayer = players.get(i);
            if (playerIsLocal(netPlayer)) continue;
            netPlayer.method("RPC_Teleport").invoke(myPos);
        }
    },
    isTogglable: false,
    toolTip: "Teleports all players to your position."
}),
            new ButtonInfo({
                buttonText: "Inf Sell Value",
                enableMethod: () => {
                    try {
                        GBIClass.method("get_sellValue").implementation = function() { return 999999; };
                        GBIClass.method("get_additionalSellValue").implementation = function() { return 999999; };
                    } catch (e) {
                        sendNotification("Inf Sell: " + e, false);
                    }
                },
                disableMethod: () => {
                    try {
                        GBIClass.method("get_sellValue").implementation = null;
                        GBIClass.method("get_additionalSellValue").implementation = null;
                    } catch (e) {}
                },
                isTogglable: true,
                toolTip: "Every item sells for 300k."
            }),
            new ButtonInfo({
                buttonText: "Give Money",
                method: () => {
                    try {
                        const player = NetPlayer.method("get_localPlayer").invoke();
                        if (!player)
                            return;
                        player.method("RPC_AddPlayerMoney").invoke(100000000);
                    } catch (e) {
                        console.error("give money failed:", e);
                    }
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "Money All +10M",
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        let count = 0;
                        for (let i = 0; i < players.length; i++) {
                            const p = players.get(i);
                            if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                            try { p.method("RPC_AddPlayerMoney").invoke(10000000); count++; } catch(_) {}
                        }
                        sendNotification("Gave 10M to " + count + " players!", false);
                    } catch(e) { sendNotification("Money All: " + e, false); }
                },
                isTogglable: false,
                toolTip: "Gives 10,000,000 money to all other players."
            }),
            new ButtonInfo({
                buttonText: "Drain Money All",
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        let count = 0;
                        for (let i = 0; i < players.length; i++) {
                            const p = players.get(i);
                            if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                            try { p.method("RPC_AddPlayerMoney").invoke(-10000000); count++; } catch(_) {}
                        }
                        sendNotification("Drained money from " + count + " players!", false);
                    } catch(e) { sendNotification("Money Drain: " + e, false); }
                },
                isTogglable: false,
                toolTip: "Removes 10,000,000 money from all other players."
            }),
            new ButtonInfo({
                buttonText: "Flare Gun",
                isTogglable: true,
                method: () => {
                    try {
                         if (leftGrab) {
                            spawnNetworkPrefab("FlareGunProjectile", safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "leftHandTransform")?.method("get_rotation").invoke());
                        }
                        if (rightGrab) {
                            spawnNetworkPrefab("FlareGunProjectile", safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke());
                        }
                    } catch (e) {
                        console.error(e);
                    }
                },
                toolTip: "Spawns Flare gun projectiles."
            }),
            new ButtonInfo({
    buttonText: "Rocket Launcher",
    isTogglable: true,
    method: () => {
        try {
            // Left hand
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                // Rotate 90° so the rocket points forward (same as your original)
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }

            // Right hand
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Spawns RPG rockets pointing where your hands aim."
}),
new ButtonInfo({
    buttonText: "Grenade Launcher test",
    isTogglable: true,
    method: () => {
        try {
            // Left hand
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("GrenadeProjectile", pos, finalRot);
            }

            // Right hand
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("GrenadeProjectile", pos, finalRot);
            }
        } catch (e) {
            console.error("[grenade]", e);
        }
    },
    toolTip: "Spawns grenade pointing where your hands aim."
}),
            new ButtonInfo({
                buttonText: "BoomSpear Launcher",
                isTogglable: true,
                method: () => {
                    try {
                        if (leftGrab) {
                            const pos = safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke();
                            const _lht6330 = safeField(getInstance(), "leftHandTransform"); if (!_lht6330 || _lht6330.isNull?.()) return; const rot = Quaternion.method("op_Multiply").invoke(_lht6330.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(90, 0, 0));
                            spawnNetworkPrefab("RPGRocketSpear", pos, rot);
                        }
                        if (rightGrab) {
                            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                            const _rht6335 = safeField(getInstance(), "rightHandTransform"); if (!_rht6335 || _rht6335.isNull?.()) return; const rot = Quaternion.method("op_Multiply").invoke(_rht6335.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(90, 0, 0));
                            spawnNetworkPrefab("RPGRocketSpear", pos, rot);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                },
                toolTip: "Spawns BoomSpears pointing where your hands aim."
            }),
            new ButtonInfo({
                buttonText: "Egg Launcher",
                isTogglable: true,
                method: () => {
                    try {
                        if (leftGrab) {
                            const pos = safeField(getInstance(), "leftHandTransform")?.method("get_position").invoke();
                            const _lht6330 = safeField(getInstance(), "leftHandTransform"); if (!_lht6330 || _lht6330.isNull?.()) return; const rot = Quaternion.method("op_Multiply").invoke(_lht6330.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(90, 0, 0));
                            spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                        }
                        if (rightGrab) {
                            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                            const _rht6335 = safeField(getInstance(), "rightHandTransform"); if (!_rht6335 || _rht6335.isNull?.()) return; const rot = Quaternion.method("op_Multiply").invoke(_rht6335.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(90, 0, 0));
                            spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                },
                toolTip: "Spawns Eggs pointing where your hands aim."
            }),
            new ButtonInfo({
    buttonText: "Robot Dog RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Spawns RPG rockets pointing where your hands aim. (No GunLib)"
}),
            new ButtonInfo({
    buttonText: "Bootzooka Launcher",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketShoe", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketShoe", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Spawns RPG rockets pointing where your hands aim. (No GunLib)"
}),
            new ButtonInfo({
    buttonText: "Right Hand: RPG | Left Hand: Boomspear",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: RPG | Left Hand: Egg",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketEgg", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: RPG | Left Hand: Robot Dog RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Boomspear | Left Hand: RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Boomspear | Left Hand: Egg",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketEgg", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Boomspear | Left Hand: Robot Dog RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Egg | Left Hand: RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketEgg", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Egg | Left Hand: Boomspear",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketEgg", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Egg | Left Hand: Robot Dog RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketEgg", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Robot Dog RPG | Left Hand: RPG",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Robot Dog RPG | Left Hand: Egg",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocket", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
    buttonText: "Right Hand: Robot Dog RPG | Left Hand: Boomspear",
    isTogglable: true,
    method: () => {
        try {
            if (leftGrab) {
                const handTf = safeField(getInstance(), "leftHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();
                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RobotDogRPG", pos, finalRot);
            }
            if (rightGrab) {
                const handTf = safeField(getInstance(), "rightHandTransform");
                if (!handTf || handTf.isNull?.()) return;

                const pos = handTf.method("get_position").invoke();
                const baseRot = handTf.method("get_rotation").invoke();

                const offsetRot = Quaternion.method("Euler").invoke(90, 0, 0);
                const finalRot = Quaternion.method("op_Multiply").invoke(baseRot, offsetRot);

                spawnNetworkPrefab("RPGRocketSpear", pos, finalRot);
            }
        } catch (e) {
            console.error("[Rocket Launcher]", e);
        }
    },
    toolTip: "Read Mod Name"
}),
            new ButtonInfo({
                            buttonText: "Nut spam",
                            isTogglable: true,
                            method: () => {
                                try {
                                    if (!rightGrab)
                                        return;
                                    const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                                    const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
                                    const result = PickupManager.method("SpawnPickup", 4).invoke(2, pos, 5, true);
                                    if (result)
                                        sendNotification("Spawned: ", false);
                                    else
                                        sendNotification("Spawn failed: ", false);
                                } catch (e) {
                                    console.error(e);
                                }
                            },
                            toolTip: "Spawns selected prefab at right hand with right hand rotation."
                        }),
                        new ButtonInfo({
                            buttonText: "Ammo spam",
                            isTogglable: true,
                            method: () => {
                                try {
                                    if (!rightGrab)
                                        return;
                                    const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                                    const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
                                    const result = PickupManager.method("SpawnPickup", 4).invoke(1, pos, 5, true);
                                    if (result)
                                        sendNotification("Spawned: ", false);
                                    else
                                        sendNotification("Spawn failed: ", false);
                                } catch (e) {
                                    console.error(e);
                                }
                            },
                            toolTip: "idk."
                        }),
                        new ButtonInfo({
                            buttonText: "Nut Gun",
                            isTogglable: true,
                            method: () => {
                                if (!rightGrab) return;
                                const gunData = renderGun();
                                const ray = gunData.ray;
                                if (!ray || ray.handle.isNull()) return;
                                if (rightTrigger && time > lagGunDelay) {
                                    lagGunDelay = time + 0.0;
                                    try {
                                        const hitPoint = ray.method("get_point").invoke();
                                        
                                        PickupManager.method("SpawnPickup", 4).invoke(2, hitPoint, 5, true);
                                    } catch(e) { sendNotification("Nut Pickup Gun: " + e, false); }
                                }
                            },
                            toolTip: "Spawns nut pickups where you aim (hold grip + trigger)."
                        }),
                        new ButtonInfo({
                            buttonText: "Ammo Gun",
                            isTogglable: true,
                            method: () => {
                                if (!rightGrab) return;
                                const gunData = renderGun();
                                const ray = gunData.ray;
                                if (!ray || ray.handle.isNull()) return;
                                if (rightTrigger && time > lagGunDelay) {
                                    lagGunDelay = time + 0.0;
                                    try {
                                        const hitPoint = ray.method("get_point").invoke();
                                        
                                        PickupManager.method("SpawnPickup", 4).invoke(1, hitPoint, 5, true);
                                    } catch(e) { sendNotification("Ammo Pickup Gun: " + e, false); }
                                }
                            },
                            toolTip: "Spawns ammo pickups where you aim (hold grip + trigger)."
                        }),
                        new ButtonInfo({
                            buttonText: "Explode All Machines",
                            isTogglable: false,
                            method: () => {
                                try {
                                    const machines = Object.method("FindObjectsByType", 1).inflate(ItemSellingMachineController).invoke(0);
                                    if (!machines) return;
                                    for (let i = 0; i < machines.length; i++) {
                                        try {
                                            const m = machines.get(i);
                                            if (!m || m.handle.isNull()) continue;
                                            m.method("RPC_ExplodeMachine").invoke();
                                        } catch(e) {}
                                    }
                                    sendNotification("Exploded all machines!", false);
                                } catch(e) {}
                            },
                            toolTip: "Explodes every selling machine in the room."
                        }),
            new ButtonInfo({
                buttonText: "Recover All Machines",
                isTogglable: false,
                method: () => {
                    try {
                        const machines = Object.method("FindObjectsByType", 1).inflate(ItemSellingMachineController).invoke(0);
                        if (!machines) return;
                        for (let i = 0; i < machines.length; i++) {
                            try {
                                const m = machines.get(i);
                                if (!m || m.handle.isNull()) continue;
                                m.method("RPC_RecoverExplosion").invoke();
                            } catch(e) {}
                        }
                        sendNotification("Recovered all machines!", false);
                    } catch(e) {}
                },
                toolTip: "Recovers every exploded selling machine."
            }),
            new ButtonInfo({
                buttonText: "Money All From Machines",
                isTogglable: false,
                method: () => {
                    try {
                        const machines = Object.method("FindObjectsByType", 1).inflate(ItemSellingMachineController).invoke(0);
                        if (!machines) return;
                        for (let i = 0; i < machines.length; i++) {
                            try {
                                const m = machines.get(i);
                                if (!m || m.handle.isNull()) continue;
                                m.method("RPC_AddPlayerMoneyToAll").invoke(100000000, [], Il2Cpp.reference(Il2Cpp.domain.assembly("Fusion.Runtime").image.class("Fusion.RpcInfo").alloc()));
                            } catch(e) {}
                        }
                        sendNotification("Gave money from all machines!", false);
                    } catch(e) { console.error("money machines:", e); }
                },
                toolTip: "Triggers money payout from all selling machines."
            }),
            new ButtonInfo({
                buttonText: "Spam Start Selling",
                isTogglable: true,
                method: () => {
                    try {
                        if (time < lagGunDelay) return;
                        lagGunDelay = time + 0.5;
                        const machines = Object.method("FindObjectsByType", 1).inflate(ItemSellingMachineController).invoke(0);
                        if (!machines) return;
                        for (let i = 0; i < machines.length; i++) {
                            try {
                                const m = machines.get(i);
                                if (!m || m.handle.isNull()) continue;
                                m.method("RPC_StartItemSelling").invoke(0.0);
                            } catch(e) {}
                        }
                    } catch(e) {}
                },
                toolTip: "Spams start selling on all machines."
            }),
            new ButtonInfo({
				buttonText: "Fling Gun",
				method: () => {
					if (rightGrab) {
						const gunData = renderGun();
						const ray = gunData.ray;
						if (rightTrigger && ray) {
							const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
							if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
								if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
									lagGunDelay = time + 2;

									const transform = gunTarget.method("get_transform").invoke();
									const up = transform.method("get_up").invoke();

									const forceVec = Vector3.method("op_Multiply", 2).invoke(up, 2000 * deltaTime);

									gunTarget.method("RPC_Teleport").invoke([0, -9999999, 0]);
									gunTarget.method("RPC_AddForce").invoke(forceVec);
								}
							}
						}
					}
				},
				isTogglable: true,
				toolTip: "Flings whoever your hand desires. May be broken."
			}),
			new ButtonInfo({
				buttonText: "Ground Gun",
				method: () => {
					if (rightGrab) {
						const gunData = renderGun();
						const ray = gunData.ray;
						if (rightTrigger && ray) {
							const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
							if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
								if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
									lagGunDelay = time + 2;

									const transform = gunTarget.method("get_transform").invoke();
									const up = transform.method("get_up").invoke();

									const forceVec = Vector3.method("op_Multiply", 2).invoke(up, -20000 * deltaTime);

									gunTarget.method("RPC_Teleport").invoke([0, -9999999, 0]);
									gunTarget.method("RPC_AddForce").invoke(forceVec);
								}
							}
						}
					}
				},
				isTogglable: true,
				toolTip: "Grounds whoever your hand desires. May be broken."
			}),
            new ButtonInfo({
                buttonText: "Kick Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();
                                    //gunTarget.method("RPC_TagAsStinky").invoke();
                                    kickPlayer(gunTarget);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Kicks whoever your hand desires."
            }),
            //new ButtonInfo({
            //    buttonText: "Kick Gun V2",
            //    method: () => {
            //        if (rightGrab) {
            //            const gunData = renderGun();
            //            const ray = gunData.ray;
//
            //            if (rightTrigger) {
            //                const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), FusionPlayerClass);
            //                if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
            //                    if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
            //                        const NetworkRunner = SFXManager.method("get__currentRunner").invoke();
            //                        //tagGunDelay = time + 0.5;
            //                        //LocalRig.method("set_enabled").invoke(false);
            //                        //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
            //                        //serialize();
            //                        //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
            //                        //LocalRig.method("set_enabled").invoke(true);
            //                        //sendAllOutgoing();
            //                        //gunTarget.method("RPC_TagAsStinky").invoke();
            //                        //kickPlayer(gunTarget);
            //                        const plrtoken = NManager.method("GetPlayerToken").invoke(NetworkRunner, gunTarget)
//
            //                        NetworkRunner.method("Disconnect").invoke(gunTarget, plrtoken);
//
            //                            //static System.Int32 GetPlayerToken(Fusion.NetworkRunner runner, Fusion.PlayerRef player); // 0x02ea0180
            //                            //static System.Byte[] NewToken(); // 0x02e9ccf8
            //                            //static System.Int32 HashToken(System.Byte[] token); // 0x02ea029c
            //                            //static System.String TokenToString(System.Byte[] token); // 0x02ea02dc
//
            //                        //token is byte[]!
//
            //                        // Disconnect(gunTarget, the token)
            //                    }
            //                }
            //            }
            //        }
            //    },
            //    isTogglable: true,
            //    toolTip: "Kicks whoever your hand desires."
            //}),
            //new ButtonInfo({
            //    buttonText: "BATS REBORN",
            //    //enabled: true,
            //    method: () => {
            //        rightPrimary = true;
            //        if (rightPrimary && !previousGhostKey) {
            //            // Start ghost following cycle
            //            if (!isGhostFollowingActive && !waitingForRoom) {
            //                console.log("[+] Starting ghost following cycle...");
            //                executeFullGhostCycle();
            //            }
            //        }
            //        else if (!rightPrimary && previousGhostKey) {
            //            // Stop ghost following
            //            if (isGhostFollowingActive || waitingForRoom) {
            //                console.log("[+] Stopping ghost following...");
            //                stopGhostFollowing();
            //            }
            //        }
            //    
            //        // Update ghost following if active
            //        if (isGhostFollowingActive && netPlayers.length > 0) {
            //            updateGhostFollowing();
            //        }
            //    
            //        previousGhostKey = rightPrimary;
            //    },
            //    isTogglable: true,
            //    toolTip: "Lags whoever your hand desires. May be broken."
            //}),
            new ButtonInfo({
                buttonText: "Gay Gun",
                method: () => {
                    //if (rightGrab) {
                    //    const gunData = renderGun();
                    //    const ray = gunData.ray;
//
                    //    if (rightTrigger) {
                    //        const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    //        if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
                    //            if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                    //                lagGunDelay = time + 2;
//
                    //                //const plRef = gunTarget.method("get_Creator").invoke().method("get_ActorNumber"/*GetPlayerRef"*/).invoke();
                    //                //const arr = Il2Cpp.array(SystemObject, 0);
                    //                //const rpc = FriendshipGroupDetection.field("photonView").value.method("RPC");
                    //                //for (let i = 0; i < 425; i++) {
                    //                //    rpc.invoke(Il2Cpp.string("NotifyPartyMerging"), plRef, arr);
                    //                //}
                    //                //sendAllOutgoing();
                    //                const transform = gunTarget.method("get_transform").invoke();
                    //                const forward = transform.method("get_forward").invoke();
                    //                const forceVec = Vector3.method("op_Multiply", 2).invoke(forward, 1500 * deltaTime);
                    //                gunTarget.method("RPC_Teleport").invoke([0, -9999999, 0]);
                    //                gunTarget.method("RPC_AddForce").invoke(forceVec);
                    //            }
                    //        }
                    //    }
                    //}
                    hue += 5;
                    if (hue > 255) hue = 0.0;
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    gunTarget.method("RPC_SetColorHSV").invoke(5, hue, 1.0, 1.0)
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
            new ButtonInfo({
                buttonText: "Blind/BlackScreen Gun",
                method: () => {
                    //if (rightGrab) {
                    //    const gunData = renderGun();
                    //    const ray = gunData.ray;
//
                    //    if (rightTrigger) {
                    //        const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    //        if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
                    //            if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                    //                lagGunDelay = time + 2;
//
                    //                //const plRef = gunTarget.method("get_Creator").invoke().method("get_ActorNumber"/*GetPlayerRef"*/).invoke();
                    //                //const arr = Il2Cpp.array(SystemObject, 0);
                    //                //const rpc = FriendshipGroupDetection.field("photonView").value.method("RPC");
                    //                //for (let i = 0; i < 425; i++) {
                    //                //    rpc.invoke(Il2Cpp.string("NotifyPartyMerging"), plRef, arr);
                    //                //}
                    //                //sendAllOutgoing();
                    //                const transform = gunTarget.method("get_transform").invoke();
                    //                const forward = transform.method("get_forward").invoke();
                    //                const forceVec = Vector3.method("op_Multiply", 2).invoke(forward, 1500 * deltaTime);
                    //                gunTarget.method("RPC_Teleport").invoke([0, -9999999, 0]);
                    //                gunTarget.method("RPC_AddForce").invoke(forceVec);
                    //            }
                    //        }
                    //    }
                    //}
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    gunTarget.method("RPC_SetColorHSV").invoke(NaN, NaN, NaN, NaN)
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
			
            new ButtonInfo({
                buttonText: "Break game Gun",
                method: () => {
                    //if (rightGrab) {
                    //    const gunData = renderGun();
                    //    const ray = gunData.ray;
//
                    //    if (rightTrigger) {
                    //        const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    //        if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
                    //            if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                    //                lagGunDelay = time + 2;
//
                    //                //const plRef = gunTarget.method("get_Creator").invoke().method("get_ActorNumber"/*GetPlayerRef"*/).invoke();
                    //                //const arr = Il2Cpp.array(SystemObject, 0);
                    //                //const rpc = FriendshipGroupDetection.field("photonView").value.method("RPC");
                    //                //for (let i = 0; i < 425; i++) {
                    //                //    rpc.invoke(Il2Cpp.string("NotifyPartyMerging"), plRef, arr);
                    //                //}
                    //                //sendAllOutgoing();
                    //                const transform = gunTarget.method("get_transform").invoke();
                    //                const forward = transform.method("get_forward").invoke();
                    //                const forceVec = Vector3.method("op_Multiply", 2).invoke(forward, 1500 * deltaTime);
                    //                gunTarget.method("RPC_Teleport").invoke([0, -9999999, 0]);
                    //                gunTarget.method("RPC_AddForce").invoke(forceVec);
                    //            }
                    //        }
                    //    }
                    //}
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
									gunTarget.method("RPC_SetJellyEffect").invoke(jellywowes, jellywowes);
									kickPlayer(gunTarget)
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Does the rendering glitch on whoever you shoot's game. Also might ban them from the code."
            }),
            new ButtonInfo({
				buttonText: "Fling All",
				method: () => {
					const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
					if (players) {
						for (let i = 0; i < players.length; i++) {
							const netPlayer = players.get(i);
							if (playerIsLocal(netPlayer)) continue;

							const transform = netPlayer.method("get_transform").invoke();
							const up = transform.method("get_up").invoke();

							const forceVec = Vector3.method("op_Multiply", 2).invoke(up, 2000 * deltaTime);

							netPlayer.method("RPC_Teleport").invoke([0, -9999999, 0]);
							netPlayer.method("RPC_AddForce").invoke(forceVec);
						}
					}
				},
				isTogglable: false,
				toolTip: "Flings everyone."
			}),
			new ButtonInfo({
				buttonText: "Ground All",
				method: () => {
					const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
					if (players) {
						for (let i = 0; i < players.length; i++) {
							const netPlayer = players.get(i);
							if (playerIsLocal(netPlayer)) continue;

							const transform = netPlayer.method("get_transform").invoke();
							const up = transform.method("get_up").invoke();

							const forceVec = Vector3.method("op_Multiply", 2).invoke(up, -20000 * deltaTime);

							netPlayer.method("RPC_Teleport").invoke([0, -9999999, 0]);
							netPlayer.method("RPC_AddForce").invoke(forceVec);
						}
					}
				},
				isTogglable: false,
				toolTip: "Grounds everyone."
			}),
			new ButtonInfo({
				buttonText: "Void All",
				method: () => {
					const voidPos = Vector3.new(0,-99999999,0)

					const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
					if (!players) return;

					for (let i = 0; i < players.length; i++) {
						const netPlayer = players.get(i);
						if (playerIsLocal(netPlayer)) continue;

						netPlayer.method("RPC_Teleport").invoke(voidPos);
					}
				},
				isTogglable: false,
				toolTip: "Voids everyone."
			}),
            new ButtonInfo({
                buttonText: "Kick All",
                method: () => {
                    const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (players) {
                            for (let i = 0; i < players.length; i++) {
                                const netPlayer = players.get(i);
                                if (playerIsLocal(netPlayer)) continue;
                                kickPlayer(netPlayer);
                            }
                        }
                },
                isTogglable: false,
                toolTip: "Kicks everyone."
            }),
            new ButtonInfo({
                buttonText: "Spam Kick All",
                method: () => {
                    spamKickTimer -= deltaTime;
                    if (spamKickTimer <= 0) {
                        kickAllPlayers();
                        spamKickTimer = 0.2;
                    }
                },
                isTogglable: true,
                toolTip: "Toggles infinite spam kicks on all players. Enable to start, disable to stop."
            }),
            new ButtonInfo({
                buttonText: "Gay All",
                method: () => {
                    hue += 5;
                    if (hue > 255) hue = 0.0;
                    if(rightGrab){
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (players) {
                            for (let i = 0; i < players.length; i++) {
                                const netPlayer = players.get(i);
                                if (netPlayer.method("get_IsMine").invoke()) continue;
                                //myNP = netPlayer; // cache it
                                netPlayer.method("RPC_SetColorHSV").invoke(5, hue, 1.0, 1.0)
                                //break; // stop once we found it
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
            new ButtonInfo({
                buttonText: "Blind/BlackScreen All",
                method: () => {
                    if(rightGrab){
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (players) {
                            for (let i = 0; i < players.length; i++) {
                                const netPlayer = players.get(i);
                                if (netPlayer.method("get_IsMine").invoke()) continue;
                                //myNP = netPlayer; // cache it
                                netPlayer.method("RPC_SetColorHSV").invoke(NaN, NaN, NaN, NaN)
                                //break; // stop once we found it
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
            new ButtonInfo({
                buttonText: "Blind/BlackScreen Self",
                method: () => {
                    if(rightGrab){
                        //const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        //if (players) {
                        //    for (let i = 0; i < players.length; i++) {
                        //        const netPlayer = players.get(i);
                        //        if (netPlayer.method("get_IsMine").invoke()) continue;
                        //        //myNP = netPlayer; // cache it
                        //        netPlayer.method("RPC_SetColorHSV").invoke(NaN, NaN, NaN, NaN)
                        //        //break; // stop once we found it
                        //    }
                        //}
                        const player = NetPlayer.method("get_localPlayer").invoke();
                        if (!player) return;
                        player.method("RPC_SetColorHSV").invoke(NaN, NaN, NaN, NaN)
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
            new ButtonInfo({
              buttonText: "Spawn Items",
              method: () => {
                const handTransform = safeField(getInstance(), "rightHandTransform");
                if (!handTransform || handTransform.isNull?.()) return;
                if(rightSecondary && rightGrab){
                        PrefabGen.method("SpawnItem", 4).invoke(
                        Il2Cpp.string("" + itemIDs[itemIndex]),
                        //Il2Cpp.string("GiantRockObject"),
                        handTransform.method("get_position").invoke(),
                        handTransform.method("get_rotation").invoke(),
                        NULL
                    )
                }
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
            new ButtonInfo({
              buttonText: "Spawn Item 4x4",
              disableMethod: () => {
                    // hide/destroy all visualizer cubes
                    if (visualizer && visualizer.length) {
                        for (const cube of visualizer) {
                            if (cube) {
                                cube.method("get_gameObject").invoke().method("SetActive").invoke(false);
                                // optionally destroy: Destroy(cube);
                            }
                        }
                        // clear array if you destroyed them
                        // visualizer = [];
                    }
                },
              method: () => {
                const handTransform = safeField(getInstance(), "rightHandTransform");
                if (!handTransform || handTransform.isNull?.()) return;
                const prefabName = Il2Cpp.string("item_" + itemIDs[itemIndex]);
                const basePos = handTransform.method("get_position").invoke();
                const rot = identityQuaternion;
                const spacing = 0.5;
                if (time > tagGunDelay) {
                    tagGunDelay = time + 0.1;
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            const offset = Vector3.method("op_Addition").invoke(
                                basePos,
                                Vector3.method("op_Multiply").invoke(
                                    Vector3.method("op_Addition").invoke(
                                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, i),
                                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, j)
                                    ),
                                    spacing
                                )
                            );
                        
                            // create visualizer cube if not exists
                            if (!visualizer[i * 4 + j]) {
                                const cube = GameObject.method("CreatePrimitive").invoke(3); // cube
                                Destroy(getComponent(cube, Collider));
                                const renderer = getComponent(cube, Renderer);
                                const mat = renderer.method("get_material").invoke();
                                mat.method("set_shader").invoke(UberShader);
                                mat.method("set_color").invoke([0, 1, 0, 0.3]); // semi-transparent green
                                const t = getTransform(cube);
                                t.method("set_localScale").invoke([0.1, 0.1, 0.1]);
                                visualizer[i * 4 + j] = cube;
                            }
                        
                            // update position and rotation every frame
                            const t = getTransform(visualizer[i * 4 + j]);

                            t.method("set_position").invoke(offset);
                            t.method("set_rotation").invoke(rot);
                            visualizer[i * 4 + j].method("get_gameObject").invoke().method("SetActive").invoke(true);
                        }
                    }
                }
            
                if (rightPrimary && !perviousSpawnKey) {
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            const offset = Vector3.method("op_Addition").invoke(
                                basePos,
                                Vector3.method("op_Multiply").invoke(
                                    Vector3.method("op_Addition").invoke(
                                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, i),
                                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, j)
                                    ),
                                    spacing
                                )
                            );
                        
                            PrefabGen.method("SpawnItem", 4).invoke(prefabName, offset, rot, NULL);
                        }
                    }
                }
            
                perviousSpawnKey = rightPrimary;
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
            new ButtonInfo({
              buttonText: "Spawn Item 4x4 (ABOVE HEAD)",
              disableMethod: () => {
                    // hide/destroy all visualizer cubes
                    if (visualizer && visualizer.length) {
                        for (const cube of visualizer) {
                            if (cube) {
                                cube.method("get_gameObject").invoke().method("SetActive").invoke(false);
                                // optionally destroy: Destroy(cube);
                            }
                        }
                        // clear array if you destroyed them
                        // visualizer = [];
                    }
                },
              method: () => {
                const prefabName = Il2Cpp.string("item_" + itemIDs[itemIndex]);
                const headPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(); // top of head
                const rot = identityQuaternion;
                const spacing = 0.5;
                const heightOffset = Vector3.field("upVector").value; // Vector3.up equivalent
                const basePos = Vector3.method("op_Addition").invoke(headPos, Vector3.method("op_Multiply").invoke(heightOffset, 2)); // 2 units above head
                if (time > tagGunDelay) {
                    tagGunDelay = time + 0.1;
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            const offset = Vector3.method("op_Addition").invoke(
                                basePos,
                                Vector3.method("op_Multiply").invoke(
                                    Vector3.method("op_Addition").invoke(
                                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, i),
                                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, j)
                                    ),
                                    spacing
                                )
                            );
                        
                            // create visualizer cube if not exists
                            if (!visualizer[i * 4 + j]) {
                                const cube = GameObject.method("CreatePrimitive").invoke(3); // cube
                                Destroy(getComponent(cube, Collider));
                                const renderer = getComponent(cube, Renderer);
                                const mat = renderer.method("get_material").invoke();
                                mat.method("set_shader").invoke(UberShader);
                                mat.method("set_color").invoke([0, 1, 0, 0.3]); // semi-transparent green
                                const t = getTransform(cube);
                                t.method("set_localScale").invoke([0.1, 0.1, 0.1]);
                                visualizer[i * 4 + j] = cube;
                            }
                        
                            // update position and rotation every frame
                            const t = getTransform(visualizer[i * 4 + j]);
                            t.method("set_position").invoke(offset);
                            t.method("set_rotation").invoke(rot);
                            visualizer[i * 4 + j].method("get_gameObject").invoke().method("SetActive").invoke(true);
                        }
                    }
                }
            
                // spawn actual prefabs if right trigger pressed
                if (rightPrimary && !perviousSpawnKey) {
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            const offset = Vector3.method("op_Addition").invoke(
                                basePos,
                                Vector3.method("op_Multiply").invoke(
                                    Vector3.method("op_Addition").invoke(
                                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, i),
                                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, j)
                                    ),
                                    spacing
                                )
                            );
                        
                            PrefabGen.method("SpawnItem", 4).invoke(prefabName, offset, rot, NULL);
                        }
                    }
                }
            
                perviousSpawnKey = rightPrimary;
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
            new ButtonInfo({
              buttonText: "Spawn Items Gun",
              method: () => {
                //const handTransform = rightHandTransform;
                //if(rightSecondary && rightGrab){
                //    PrefabGen.method("SpawnItem", 4).invoke(
                //    Il2Cpp.string("item_" + itemIDs[itemIndex]),
                //    //Il2Cpp.string("GiantRockObject"),
                //    handTransform.method("get_position").invoke(),
                //    handTransform.method("get_rotation").invoke(),
                //    NULL
                //    )
                //}
                if (rightGrab) {
                    const gunData = renderGun();
                    const gunPointer = gunData.gunPointer;
                        if (rightTrigger) {
                            //if(rightSecondary && rightGrab){
                            PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(itemIDs[currentItemIndex]),
                            //Il2Cpp.string("GiantRockObject"),
                            getTransform(gunPointer).method("get_position").invoke(),
                            identityQuaternion,
                            NULL
                        )
                    }
                    }
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
            new ButtonInfo({
              buttonText: "Drop Items Gun",
              method: () => {
                //const handTransform = rightHandTransform;
                //if(rightSecondary && rightGrab){
                //    PrefabGen.method("SpawnItem", 4).invoke(
                //    Il2Cpp.string("item_" + itemIDs[itemIndex]),
                //    //Il2Cpp.string("GiantRockObject"),
                //    handTransform.method("get_position").invoke(),
                //    handTransform.method("get_rotation").invoke(),
                //    NULL
                //    )
                //}
                if (rightGrab) {
                    const gunData = renderGun();
                    const ray = gunData.ray;
                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), GBOClass);
                            gunTarget.method("RPC_Release", 6).invoke(safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke(), zeroVector, zeroVector, true, false)
                            gunTarget.method("RPC_Teleport", 2).invoke(safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(), safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke(), zeroVector, zeroVector, true, false)
                    }
                    }
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
            new ButtonInfo({
              buttonText: "CRASH ALL",
              method: () => {
                //const handTransform = rightHandTransform;
                //if(rightSecondary && rightGrab){
                //    PrefabGen.method("SpawnItem", 4).invoke(
                //    Il2Cpp.string("item_" + itemIDs[itemIndex]),
                //    //Il2Cpp.string("GiantRockObject"),
                //    handTransform.method("get_position").invoke(),
                //    handTransform.method("get_rotation").invoke(),
                //    NULL
                //    )
                //}
                if (rightGrab) {
                    if(rightTrigger){
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                            if (players) {
                                for (let i = 0; i < players.length; i++) {
                                    const netPlayer = players.get(i);
                                    if (netPlayer.method("get_IsMine").invoke()) continue;
                                    //myNP = netPlayer; // cache it
                                    kickPlayer(netPlayer);
                                    netPlayer.method("RPC_Teleport").invoke(new Vector3(-99999999, -99999999, -99999999), identityQuaternion)
                                    //break; // stop once we found it
                                }
                            }
                        }
                    }
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),
			new ButtonInfo({
				buttonText: "Ban Gun (non-claimed private codes)",
				method: () => {
					if (rightGrab) {
						const gunData = renderGun();
						const ray = gunData.ray;

						if (rightTrigger && ray) {
							const hitCollider = ray.method("get_collider").invoke();
							if (!hitCollider || hitCollider.isNull()) return;

							const hitGO = hitCollider.method("get_gameObject").invoke();

							const target = hitGO
								.method("GetComponentInParent", 0)
								.inflate(NetPlayer)
								.invoke();

							if (!target || target.isNull()) {
								sendNotification("No player detected", false);
								return;
							}

							if (playerIsLocal(target)) return;
                            if (target.method("get_IsMine").invoke()) return;
                            kickPlayer(target);
                            target.method("RPC_Teleport").invoke(new Vector3(-99999999, -99999999, -99999999), identityQuaternion)
						}
					}
				},
				isTogglable: true,
				toolTip: "Bans whoever your hand desires from the code."
			}),
            new ButtonInfo({
              buttonText: "TP ALL Gun",
              method: () => {
                //const handTransform = rightHandTransform;
                //if(rightSecondary && rightGrab){
                //    PrefabGen.method("SpawnItem", 4).invoke(
                //    Il2Cpp.string("item_" + itemIDs[itemIndex]),
                //    //Il2Cpp.string("GiantRockObject"),
                //    handTransform.method("get_position").invoke(),
                //    handTransform.method("get_rotation").invoke(),
                //    NULL
                //    )
                //}
                if (rightGrab) {
                    const gunData = renderGun();
                    const gunPointer = gunData.gunPointer;
                    if(rightTrigger){
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                            if (players) {
                                for (let i = 0; i < players.length; i++) {
                                    const netPlayer = players.get(i);
                                    if (netPlayer.method("get_IsMine").invoke()) continue;
                                    //myNP = netPlayer; // cache it
                                    netPlayer.method("RPC_Teleport").invoke(getTransform(gunPointer).method("get_position").invoke())
                                    //break; // stop once we found it
                                }
                            }
                        }
                    }
              },
              isTogglable: true,
              toolTip: "Lets you spawn items in your right hand."
            }),

            new ButtonInfo({
                buttonText: "Force Spawned Mobs Stay",
                isTogglable: true,
                enableMethod: () => { mobForceStayEnabled = true; sendNotification("Force Spawned Mobs Stay ON", false); },
                disableMethod: () => { mobForceStayEnabled = false; sendNotification("Force Spawned Mobs Stay OFF", false); },
                toolTip: "Keeps tracked spawned mobs active and respawns them if they drop out."
            }),
            new ButtonInfo({
                buttonText: "Spoof developer mode",
                method: () => {
                    UnlockAll();
                },
                  isTogglable: true,
                  toolTip: "Makes the game think you are a developer to unlock beta features."
                }),
            new ButtonInfo({
              buttonText: "Developer mode for vending machine",
              disableMethod: () => {
                try {
                  const theclass = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
                  if (!theclass) return;
                    if(!devEnabled){
                        const vendingmachines = Object.method("FindObjectsOfType").inflate(theclass).invoke();
                        
                        for (let i = 0; i < vendingmachines.length; i++) {
                          const vendingmachine = vendingmachines.get(i);
                          vendingmachine.field("_devModeOn").value = false;
                        }

                        devEnabled = false;
                }
                } catch (e) { console.error(e); }
              },
              method: () => {
                try {
                  const theclass = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
                  if (!theclass) return;
                    if(!devEnabled){
                        const vendingmachines = Object.method("FindObjectsOfType").inflate(theclass).invoke();
                        
                        for (let i = 0; i < vendingmachines.length; i++) {
                          const vendingmachine = vendingmachines.get(i);
                          vendingmachine.field("_devModeOn").value = true;
                        }

                        devEnabled = true;
                }
                } catch (e) { console.error(e); }
              },
              isTogglable: true,
              toolTip: "Enables the developer mode for the vending machine so you can buy any item even if it isn't in the base game!"
            }),
            new ButtonInfo({
                buttonText: "Rapid Fire",
                isTogglable: true,
                method: (() => {
                    let rapidFirePulseDelay = 0;

                    const invokeInstance = (method: any, instance: any, ...args: any[]) => { 
                        return method.invokeRaw(instance, ...args); 
                    };

                    const tryMethodName = (klass: any, names: string[], parameterCount: number = -1) => {
                        for (const name of names) {
                            try { return parameterCount >= 0 ? klass.method(name, parameterCount) : klass.method(name); }
                            catch(_) {}
                        }
                        return null;
                    };

                    const tryCallNames = (obj: any, names: string[], parameterCount: number = -1, ...args: any[]): boolean => {
                        try {
                            if (!obj || obj.isNull?.()) return false;
                            for (const name of names) {
                                try {
                                    const method = parameterCount >= 0 ? obj.class.method(name, parameterCount) : obj.class.method(name);
                                    if (method) {
                                        invokeInstance(method, obj, ...args);
                                        return true;
                                    }
                                } catch(_) {}
                                try {
                                    const method = parameterCount >= 0 ? obj.method(name, parameterCount) : obj.method(name);
                                    if (method) {
                                        method.invoke(...args);
                                        return true;
                                    }
                                } catch(_) {}
                            }
                        } catch(_) {}
                        return false;
                    };

                    const pulseMethod = (held: any, names: string[], parameterCount: number, ...args: any[]) => {
                        for (const name of names) {
                            try {
                                const method = tryMethodName(held.class, [name], parameterCount);
                                if (method) invokeInstance(method, held, ...args);
                            } catch(_) {}
                        }
                    };

                    const pulseWeaponSecondary = (held: any, handIndex: number) => {
                        try {
                            const isLeft = (handIndex === 0);
                            const buttonHoldNames = isLeft ?
                                ["HandleButtonUse", "HandleYButton", "HandleSecondaryButton", "HandleSecondaryUse", "HandleGripUse", "CockHammer", "PullBackHammer", "HandleSecondaryPress", "PressYButton"] :
                                ["HandleButtonUse", "HandleBButton", "HandleSecondaryButton", "HandleSecondaryUse", "HandleGripUse", "CockHammer", "PullBackHammer", "HandleSecondaryPress", "PressBButton"];
                            
                            const buttonDownNames = isLeft ?
                                ["HandleButtonUse", "OnYButtonDown", "HandleYButtonDown", "PressYButton", "OnSecondaryButtonDown", "OnSecondaryUseDown"] :
                                ["HandleButtonUse", "OnBButtonDown", "HandleBButtonDown", "PressBButton", "OnSecondaryButtonDown", "OnSecondaryUseDown"];
                                
                            const buttonUpNames = isLeft ?
                                ["HandleButtonUseUp", "OnYButtonUp", "HandleYButtonUp", "PressYButtonUp", "OnSecondaryButtonUp", "OnSecondaryUseUp"] :
                                ["HandleButtonUseUp", "OnBButtonUp", "HandleBButtonUp", "PressBButtonUp", "OnSecondaryButtonUp", "OnSecondaryUseUp"];

                            for (let i = 0; i < 6; i++) {
                                tryCallNames(held, buttonHoldNames, 0);
                                tryCallNames(held, buttonHoldNames, 1, true);
                                tryCallNames(held, buttonDownNames, 0);
                                tryCallNames(held, buttonHoldNames, 1, false);
                                tryCallNames(held, buttonUpNames, 0);
                            }
                        } catch(_) {}
                    };

                    const applyGunBuffs = (held: any, handIndex: number) => {
                        try {
                            if (!held || held.isNull?.()) return;
                            const heldClassName = String(held.class?.type?.name ?? "").toLowerCase();
                            const isRpgLike = heldClassName.indexOf("rpg") >= 0 || heldClassName.indexOf("rocket") >= 0 || heldClassName.indexOf("flare") >= 0 || heldClassName.indexOf("zipline") >= 0;
                            // Set ALL ammo/state fields
                            try { held.field("_ammoLoaded").value = 255; } catch(_) {}
                            try { held.field("ammoLoaded").value = 255; } catch(_) {}
                            try { held.field("_ammo").value = 255; } catch(_) {}
                            try { held.field("ammo").value = 255; } catch(_) {}
                            try { held.field("_isHammerCocked").value = true; } catch(_) {}
                            try { held.field("_isCocked").value = true; } catch(_) {}
                            try { held.field("isHammerCocked").value = true; } catch(_) {}
                            try { held.field("_hasAmmo").value = true; } catch(_) {}
                            try { held.field("hasAmmo").value = true; } catch(_) {}
                            try { held.field("_isLoaded").value = true; } catch(_) {}
                            try { held.field("isLoaded").value = true; } catch(_) {}
                            // Clear ALL cooldowns/timers
                            try { held.field("_nextUseTime").value = 0.0; } catch(_) {}
                            try { held.field("_reloadTimer").value = 0.0; } catch(_) {}
                            try { held.field("_reloadCooldown").value = 0.0; } catch(_) {}
                            try { held.field("_shotCooldown").value = 0.0; } catch(_) {}
                            try { held.field("_timeBetweenShots").value = 0.0; } catch(_) {}
                            try { held.field("_useCooldown").value = 0.0; } catch(_) {}
                            try { held.field("_secondaryUseCooldown").value = 0.0; } catch(_) {}
                            try { held.field("_triggerUseCooldown").value = 0.0; } catch(_) {}
                            try { held.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                            try { held.field("_recoilCooldown").value = 0.0; } catch(_) {}
                            try { held.field("recoilForceMag").value = 0.0; } catch(_) {}
                            try { held.field("_recoilForceMag").value = 0.0; } catch(_) {}
                            // Call setters
                            try { held.method("set_isHammerCocked").invoke(true); } catch(_) {}
                            try { held.method("set_ammoLoaded").invoke(255); } catch(_) {}
                            try { held.method("set_hasAmmo").invoke(true); } catch(_) {}
                            try { held.method("set_isLoaded").invoke(true); } catch(_) {}
                            // Handle RPG loaded state
                            if (isRpgLike) {
                                try {
                                    const loadedState = held.method("get_loadedState").invoke();
                                    if (loadedState && !loadedState.isNull?.()) {
                                        try { loadedState.field("isLoaded").value = true; } catch(_) {}
                                        try { loadedState.field("_isLoaded").value = true; } catch(_) {}
                                        try { held.method("set_loadedState").invoke(loadedState); } catch(_) {}
                                    }
                                } catch(_) {}
                            }
                            // Pulse secondary to cock
                            pulseWeaponSecondary(held, handIndex);
                            // Clear gun config too
                            try {
                                const cfg = held.method("get_config").invoke();
                                if (cfg && !cfg.isNull?.()) {
                                    try { cfg.field("recoilForceMag").value = 0.0; } catch(_) {}
                                    try { cfg.field("handRecoilForceMag").value = 0.0; } catch(_) {}
                                    try { cfg.field("shotSpread").value = 0.0; } catch(_) {}
                                    try { cfg.field("shotSpreadMin").value = 0.0; } catch(_) {}
                                    try { cfg.field("shotSpreadMax").value = 0.0; } catch(_) {}
                                    try { cfg.field("ammoLoaded").value = 255; } catch(_) {}
                                    try { cfg.field("ammo").value = 255; } catch(_) {}
                                    try { cfg.field("hasAmmo").value = true; } catch(_) {}
                                    try { cfg.field("isLoaded").value = true; } catch(_) {}
                                    try { cfg.field("reloadTime").value = 0.0; } catch(_) {}
                                    try { cfg.field("timeBetweenShots").value = 0.0; } catch(_) {}
                                    try { cfg.field("useCooldown").value = 0.0; } catch(_) {}
                                    try { cfg.field("secondaryUseCooldown").value = 0.0; } catch(_) {}
                                }
                            } catch(_) {}
                        } catch(_) {}
                    };

                    const fireHeldRapid = (held: any, pressed: boolean, handIndex: number) => {
                        if (!held || !pressed || held.isNull?.()) return;
                        if (time <= rapidFirePulseDelay) return;
                        rapidFirePulseDelay = time + 0.018;
                        try {
                            const heldClassName = String(held.class?.type?.name ?? "").toLowerCase();
                            const isLeft = (handIndex === 0);

                            // Apply all gun buffs (ammo, cock, cooldowns, config)
                            applyGunBuffs(held, handIndex);

                            // Extra revolver-specific cocking before shot
                            if (heldClassName.indexOf("revolver") >= 0) {
                                try { held.field("_isHammerCocked").value = true; } catch(_) {}
                                try { held.field("isHammerCocked").value = true; } catch(_) {}
                                try { held.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                                try { held.method("set_isHammerCocked").invoke(true); } catch(_) {}
                                
                                const buttonDown = isLeft ? ["HandleButtonUse", "OnYButtonDown", "HandleYButtonDown", "PressYButton"] : ["HandleButtonUse", "OnBButtonDown", "HandleBButtonDown", "PressBButton"];
                                const buttonHold = isLeft ? ["HandleButtonUse", "HandleYButton", "HandleSecondaryButton", "HandleSecondaryUse"] : ["HandleButtonUse", "HandleBButton", "HandleSecondaryButton", "HandleSecondaryUse"];
                                
                                for (let i = 0; i < 3; i++) {
                                    tryCallNames(held, buttonDown, 0);
                                    tryCallNames(held, buttonHold, 1, true);
                                    tryCallNames(held, buttonHold, 1, false);
                                    try { held.method("HandleButtonUseUp").invoke(); } catch(_) {}
                                }
                            }

                            // Fire the gun
                            try { held.method("HandleTriggerUse").invoke(); } catch(_) {}

                            // Re-apply buffs after firing (game resets state on fire)
                            applyGunBuffs(held, handIndex);

                            // Extra revolver-specific cocking after shot
                            if (heldClassName.indexOf("revolver") >= 0) {
                                try { held.field("_isHammerCocked").value = true; } catch(_) {}
                                try { held.field("isHammerCocked").value = true; } catch(_) {}
                                try { held.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                                try { held.method("set_isHammerCocked").invoke(true); } catch(_) {}
                                
                                const buttonDown = isLeft ? ["HandleButtonUse", "OnYButtonDown", "HandleYButtonDown", "PressYButton"] : ["HandleButtonUse", "OnBButtonDown", "HandleBButtonDown", "PressBButton"];
                                const buttonHold = isLeft ? ["HandleButtonUse", "HandleYButton", "HandleSecondaryButton", "HandleSecondaryUse"] : ["HandleButtonUse", "HandleBButton", "HandleSecondaryButton", "HandleSecondaryUse"];
                                
                                for (let i = 0; i < 3; i++) {
                                    tryCallNames(held, buttonDown, 0);
                                    tryCallNames(held, buttonHold, 1, true);
                                    tryCallNames(held, buttonHold, 1, false);
                                    try { held.method("HandleButtonUseUp").invoke(); } catch(_) {}
                                }
                            }
                        } catch(_) {}
                    };

                    const update = () => {
                        try {
                            const player = NetPlayer.method("get_localPlayer").invoke();
                            if (!player || player.isNull()) return;

                            let grabbable: any = null;
                            let grabbable2: any = null;

                            try {
                                const interactor = player.method("GetHandInteractor", 1).invoke(1);
                                if (interactor && !interactor.isNull()) {
                                    const itemAnchor = interactor.field("_itemAnchor").value;
                                    if (itemAnchor && !itemAnchor.isNull()) {
                                        grabbable = itemAnchor.method("get_grabbableObject").invoke();
                                    }
                                }
                            } catch(_) {}

                            try {
                                const interactor2 = player.method("GetHandInteractor", 1).invoke(0);
                                if (interactor2 && !interactor2.isNull()) {
                                    const itemAnchor2 = interactor2.field("_itemAnchor").value;
                                    if (itemAnchor2 && !itemAnchor2.isNull()) {
                                        grabbable2 = itemAnchor2.method("get_grabbableObject").invoke();
                                    }
                                }
                            } catch(_) {}

                            fireHeldRapid(grabbable, rightTrigger, 1);
                            fireHeldRapid(grabbable2, leftTrigger, 0);
                        } catch (e) {
                            console.error(e);
                        }
                    };

                    return update;
                })(),
                enableMethod: () => { rapidFireEnabled = true; },
                disableMethod: () => { rapidFireEnabled = false; },
                toolTip: "Rapid fire any item that is used with the trigger button and auto-cocks guns."
            }),   
            new ButtonInfo({
                buttonText: "Auto Cock on B/Y Hold",
                isTogglable: true,
                method: (() => {
                    let lastPulseTime = 0;
                    
                    const invokeInstance = (method: any, instance: any, ...args: any[]) => { 
                        return method.invokeRaw(instance, ...args); 
                    };

                    const tryCallNames = (obj: any, names: string[], parameterCount: number = -1, ...args: any[]): boolean => {
                        try {
                            if (!obj || obj.isNull?.()) return false;
                            for (const name of names) {
                                try {
                                    const method = parameterCount >= 0 ? obj.class.method(name, parameterCount) : obj.class.method(name);
                                    if (method) {
                                        invokeInstance(method, obj, ...args);
                                        return true;
                                    }
                                } catch(_) {}
                                try {
                                    const method = parameterCount >= 0 ? obj.method(name, parameterCount) : obj.method(name);
                                    if (method) {
                                        method.invoke(...args);
                                        return true;
                                    }
                                } catch(_) {}
                            }
                        } catch(_) {}
                        return false;
                    };

                    const update = () => {
                        try {
                            if (!autoCockEnabled) return;

                            const player = NetPlayer.method("get_localPlayer").invoke();
                            if (!player || player.isNull()) return;

                            let grabbable: any = null;
                            let grabbable2: any = null;

                            try {
                                const interactor = player.method("GetHandInteractor", 1).invoke(1); // Right hand
                                if (interactor && !interactor.isNull()) {
                                    const itemAnchor = interactor.field("_itemAnchor").value;
                                    if (itemAnchor && !itemAnchor.isNull()) {
                                        grabbable = itemAnchor.method("get_grabbableObject").invoke();
                                    }
                                }
                            } catch(_) {}

                            try {
                                const interactor2 = player.method("GetHandInteractor", 1).invoke(0); // Left hand
                                if (interactor2 && !interactor2.isNull()) {
                                    const itemAnchor2 = interactor2.field("_itemAnchor").value;
                                    if (itemAnchor2 && !itemAnchor2.isNull()) {
                                        grabbable2 = itemAnchor2.method("get_grabbableObject").invoke();
                                    }
                                }
                            } catch(_) {}

                            const pulseWeapon = (held: any, isLeft: boolean) => {
                                if (!held || held.isNull?.()) return;
                                const buttonDown = isLeft ? ["HandleButtonUse", "OnYButtonDown", "HandleYButtonDown", "PressYButton"] : ["HandleButtonUse", "OnBButtonDown", "HandleBButtonDown", "PressBButton"];
                                const buttonHold = isLeft ? ["HandleButtonUse", "HandleYButton", "HandleSecondaryButton", "HandleSecondaryUse"] : ["HandleButtonUse", "HandleBButton", "HandleSecondaryButton", "HandleSecondaryUse"];
                                
                                try {
                                    // Apply cocking state
                                    try { held.field("_isHammerCocked").value = true; } catch(_) {}
                                    try { held.field("isHammerCocked").value = true; } catch(_) {}
                                    try { held.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                                    try { held.method("set_isHammerCocked").invoke(true); } catch(_) {}
                                } catch(_) {}

                                for (let i = 0; i < 3; i++) {
                                    tryCallNames(held, buttonDown, 0);
                                    tryCallNames(held, buttonHold, 1, true);
                                    tryCallNames(held, buttonHold, 1, false);
                                    try { held.method("HandleButtonUseUp").invoke(); } catch(_) {}
                                }
                            };

                            if (time > lastPulseTime + 0.05) { // 20 times per second
                                lastPulseTime = time;
                                
                                if (rightSecondary && grabbable) {
                                    pulseWeapon(grabbable, false);
                                }
                                if (leftSecondary && grabbable2) {
                                    pulseWeapon(grabbable2, true);
                                }
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    };

                    return update;
                })(),
                enableMethod: () => { autoCockEnabled = true; },
                disableMethod: () => { autoCockEnabled = false; },
                toolTip: "Spams button cocking (B/Y) on held items while holding B or Y button."
            }),   
            //new ButtonInfo({
            //    buttonText: "BREAK THE GAME.",
            //    method: () => {
            //        //UnlockAll();
            //      //  const theclass = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
            //      //if (!theclass) return;
            //        //if(!devEnabled){
            //         const networkrunner = SFXManager.method("get__currentRunner").invoke();
            //            //const vendingmachines = Object.method("FindObjectsOfType").inflate(NetworkObjectClass).invoke();
            //            
            //            //for (let i = 0; i < vendingmachines.length; i++) {
            //            //  const vendingmachine = vendingmachines.get(i);
            //            //  //vendingmachine.field("_devModeOn").value = true;
            //            //  //vendingmachine.method("ReleaseStateAuthority").invoke();
            //            //  //vendingmachine.method("RequestStateAuthority").invoke();
            //            //  networkrunner.method("UnloadScene").invoke(0)
            //            //  //networkrunner.method("Shutdown").invoke(vendingmachine)
            //            //}
            //            networkrunner.method("Spawn").invoke(
            //                Il2Cpp.string("GameObject/NetSpectator"),
            //                //Il2Cpp.string("GiantRockObject"),
            //                NULL,
            //                NULL,
            //                NULL,
            //                NULL,
            //                1
            //            )
            //            //console.log(networkrunner.method("GetAllNetworkObjects").invoke())
            //            //const lobbyinfo = networkrunner.method("get_LobbyInfo").invoke();
            //            //console.log("VALID: " + lobbyinfo.method("get_IsValid").invoke() + " NAME: " + lobbyinfo.method("get_Name").invoke() + " REGION: " + lobbyinfo.method("get_Region").invoke());
//
            //            //devEnabled = true;
            //        //Despawn
            //    },
            //      isTogglable: false,
            //      toolTip: "Makes the game think you are a developer to unlock beta features."
            //    }),
                new ButtonInfo({
                buttonText: "Activate all robo-monkes",
                method: () => {
                     const networkrunner = SFXManager.method("get__currentRunner").invoke();
                        const vendingmachines = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.RoboMonkeItem")).invoke();
                        
                        for (let i = 0; i < vendingmachines.length; i++) {
                          const vendingmachine = vendingmachines.get(i);
                          vendingmachine.method("RPC_Startup").invoke(networkrunner.method("get_LocalPlayer").invoke());
                        }
                },
                  isTogglable: false,
                  toolTip: "Activates all robo-monke items."
                }),
                new ButtonInfo({
                buttonText: "Grind ores",
                method: () => {
                    if(rightGrab){
                        const vendingmachines = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.Ore")).invoke();
                        
                        for (let i = 0; i < vendingmachines.length; i++) {
                          const vendingmachine = vendingmachines.get(i);
                          vendingmachine.method("Hit").invoke(999, 4, zeroVector, zeroVector);
                        }
                    }
                },
                  isTogglable: false,
                  toolTip: "Breaks every single ore. (right grip!)"
                }),

                new ButtonInfo({
                buttonText: "Attach everyone to ogre hand (buggy!)",
                method: () => {
                    //UnlockAll();
                  //  const theclass = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
                  //if (!theclass) return;
                    //if(!devEnabled){
                     //const networkrunner = SFXManager.method("get__currentRunner").invoke();
                        const vendingmachines = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.GiantController")).invoke();
                        const rigs = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!rigs) return null;

                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string("mob_prefab/GiantController"),
                            safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(),
                            identityQuaternion,
                            NULL
                        )
                        
                        for (let i = 0; i < vendingmachines.length; i++) {
                          const vendingmachine = vendingmachines.get(i);
                          //vendingmachine.method("RPC_Startup").invoke(networkrunner.method("get_LocalPlayer").invoke());
                          //console.log(vendingmachine.field("attachTransform").value.method("get_position").invoke());
                        for (let i = 0; i < rigs.length; i++) {
                                const rig = rigs.get(i);
                                if (playerIsLocal(rig)) continue;
                                rig.method("RPC_AttachToGiantHand").invoke(true, vendingmachine, true, zeroVector);
                            }
                        }
                },
                  isTogglable: false,
                  toolTip: "Spawns a new ogre and attaches everyone to the hand of it."
                }),


            new ButtonInfo({
            buttonText: "Use All Cameras",
            method: () => {
                //UnlockAll();
              //  const theclass = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
              //if (!theclass) return;
                //if(!devEnabled){
                 //const networkrunner = SFXManager.method("get__currentRunner").invoke();
                    //const vendingmachines = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.GiantController")).invoke();
                    //const rigs = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.DisposableCamera")).invoke();
                    //if (!rigs) return null;
                    //const head = getTransform(safeField(getInstance(), "headCollider"));
                    //if(!head) return null;
                    //PrefabGen.method("SpawnItem", 4).invoke(
                    //    Il2Cpp.string("mob_prefab/GiantController"),
                    //    safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(),
                    //    identityQuaternion,
                    //    NULL
                    //)
                    //
                    //for (let i = 0; i < vendingmachines.length; i++) {
                    //  const vendingmachine = vendingmachines.get(i);
                    //  //vendingmachine.method("RPC_Startup").invoke(networkrunner.method("get_LocalPlayer").invoke());
                    //  //console.log(vendingmachine.field("attachTransform").value.method("get_position").invoke());
                    //System.Void RPC_CameraShoot(UnityEngine.Vector3 cameraPosition, UnityEngine.Quaternion cameraRotation, UnityEngine.Vector3 cameraForward);
                    //for (let i = 0; i < rigs.length; i++) {
                    //        const rig = rigs.get(i);
                    //        //if (rig.method("get_IsMine").invoke()) continue;
                    //        rig.method("RPC_CameraShoot").invoke(head.method("get_position").invoke(), head.method("get_rotation").invoke(), head.method("get_forward").invoke());//getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke(), getTransform(safeField(getInstance(), "headCollider")).method("get_forward").invoke());
                    //}
                    
                    if (rightStick && !perviousShootKey) {
                        const rigs = Object.method("FindObjectsOfType").inflate(AssemblyCSharp.class("AnimalCompany.DisposableCamera")).invoke();
                        if (!rigs) return null;
                        const head = getTransform(safeField(getInstance(), "headCollider"));
                        if(!head) return null;

                        for (let i = 0; i < rigs.length; i++) {
                            const rig = rigs.get(i);
                            //if (rig.method("get_IsMine").invoke()) continue;
                            rig.method("RPC_CameraShoot").invoke(head.method("get_position").invoke(), head.method("get_rotation").invoke(), head.method("get_forward").invoke());//getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(), getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke(), getTransform(safeField(getInstance(), "headCollider")).method("get_forward").invoke());
                        }
                    }

                    //if (rightTrigger && !previousNoclipKey) {
                    //    toggleColliders(false);
                    //}
//
                    //if (!rightTrigger && previousNoclipKey) {
                    //    toggleColliders(true);
                    //}
//
                    //previousNoclipKey = rightTrigger;
                    perviousShootKey = rightStick;
            },
              isTogglable: true,
              toolTip: "Press right joystick to use every camera object in the room. (DOESNT WORK FOR SOME CAMERAS DUE TO STATE AUTHORITY)"
            }),
            new ButtonInfo({
                buttonText: "Fullbright",
                
                disableMethod: () => {
                    lightEnabled = false;
                    if (fullbirhgtobject != null) {
                        fullbirhgtobject.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                
                enableMethod: () => {
                    lightEnabled = true;
                    if (fullbirhgtobject != null) {
                        fullbirhgtobject.method("get_gameObject").invoke().method("SetActive").invoke(true);
                    }
                },
            
                method: () => {
                    if (!lightEnabled) return;
                
                    if (fullbirhgtobject == null) {
                        fullbirhgtobject = createObject(
                            getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke(),
                            getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke(),
                            [0, 0, 0],
                            3,
                            bgColor
                        );
                        Destroy(getComponent(fullbirhgtobject, Collider));
                        addComponent(fullbirhgtobject, Light);
                        getTransform(fullbirhgtobject).method("SetParent", 2).invoke(getTransform(safeField(getInstance(), "headCollider")), false);
                    } else {
                        // update position/rotation every frame to follow head
                        const t = getTransform(fullbirhgtobject);
                        t.method("set_position").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke());
                        t.method("set_rotation").invoke(getTransform(safeField(getInstance(), "headCollider")).method("get_rotation").invoke());
                        const lightComp = getComponent(fullbirhgtobject, Light);
                        if (lightComp != null) {
                            lightComp.method("set_intensity").invoke(5.0);
                            lightComp.method("set_range").invoke(999.0); // <â€” crank it up! change 5.0 to whatever you want
                        }
                        fullbirhgtobject.method("get_gameObject").invoke().method("SetActive").invoke(true);
                    }
                },
            
                isTogglable: true,
                toolTip: "Press right joystick to toggle a light on your head."
            }),

            new ButtonInfo({
                buttonText: "Spoof stash mode",
                method: () => {
                    UnlockAll();
                },
                  isTogglable: true,
                  toolTip: "Makes the game think you are a developer to unlock beta features."
                }),
            new ButtonInfo({
                buttonText:"Give Masterclient",
                method:()=>{
                    try {
                    let runner=null;
                        try {
const pgInst=PrefabGen.field("_instance").value;
if (pgInst&&!pgInst.isNull())runner=pgInst.method("get_runner").invoke();
}catch (_){}
if (!runner||runner.isNull?.()){
try {
const sfx=SFXManager.field("_instance").value;
if (sfx&&!sfx.isNull())runner=sfx.method("get__currentRunner").invoke();
}catch (_){}
}
if (!runner||runner.isNull?.()){sendNotification("Runner is null",false);return;}
const localRef=runner.method("get_LocalPlayer").invoke();
if (!localRef){sendNotification("LocalPlayer ref null",false);return;}
runner.method("SetMasterClient").invoke(localRef);
sendNotification("You are now the master client!",false);
}catch (e){sendNotification("Masterclient: "+e,false);console.error("[Masterclient]:",e);}
},
isTogglable: false,
toolTip:"Promotes you to master client / host using NetworkRunner.SetMasterClient."
}),
new ButtonInfo({
    buttonText: "Turn into nuts gun",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        
        const gunData = renderGun();
        const ray = gunData.ray;
        if (!ray || ray.handle.isNull()) return;

        if (rightTrigger && time > lagGunDelay) {
            lagGunDelay = time + 0.08;

            let playerKicked = false;

            // === Kick Gun ===
            try {
                const collider = ray.method("get_collider").invoke();
                if (collider) {
                    const gunTarget = getComponentInParent(collider, NetPlayer);
                    if (gunTarget && !gunTarget.handle.isNull()) {
                        if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                            kickPlayer(gunTarget);
                            playerKicked = true;
                        }
                    }
                }
            } catch(e) {
                sendNotification("Kick Error: " + e, false);
            }

            // === Spawn Nut ONLY if someone was kicked ===
            if (playerKicked) {
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    PickupManager.method("SpawnPickup", 4).invoke(2, hitPoint, 5, true);
                } catch(e) {
                    sendNotification("Nut Spawn Error: " + e, false);
                }
            }
        }
    },
    toolTip: "turn player into nuts with a gun."
}),
new ButtonInfo({
    buttonText: "Turn into ammo gun",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        
        const gunData = renderGun();
        const ray = gunData.ray;
        if (!ray || ray.handle.isNull()) return;

        if (rightTrigger && time > lagGunDelay) {
            lagGunDelay = time + 0.08;

            let playerKicked = false;

            // Try to kick
            try {
                const collider = ray.method("get_collider").invoke();
                if (collider) {
                    const gunTarget = getComponentInParent(collider, NetPlayer);
                    if (gunTarget && !gunTarget.handle.isNull()) {
                        if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                            kickPlayer(gunTarget);
                            playerKicked = true;
                        }
                    }
                }
            } catch(e) {
                sendNotification("Kick Error: " + e, false);
            }

            // Spawn Ammo ONLY if kick succeeded
            if (playerKicked) {
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    PickupManager.method("SpawnPickup", 4).invoke(1, hitPoint, 5, true);
                } catch(e) {
                    sendNotification("Ammo Spawn Error: " + e, false);
                }
            }
        }
    },
    toolTip: "turns player into ammo with gun"
}),
new ButtonInfo({
    buttonText: "Unban All",
    isTogglable: false,
    method: () => {
        try {
            let count = 0;
            const NetPlayerClass = NetPlayer; // already in your menu

            Il2Cpp.gc.choose(NetPlayerClass).forEach((p: any) => {
                try {
                    if (!p || p.handle.isNull() || playerIsLocal(p)) return;

                    // Main unban / forgive actions
                    kickPlayer(p); // sometimes re-kicking helps reset state
                    p.method("RPC_TagAsStinky")?.invoke(); // clear stinky tag

                    // Try to clear ban flags if they exist
                    try { p.method("set_banned")?.invoke(false); } catch(e) {}
                    try { p.field("_isBanned")?.set(false); } catch(e) {}

                    count++;
                } catch(e) {}
            });

            sendNotification(`Attempted to unban ${count} players`, true);
            
        } catch(e) {
            sendNotification("Unban All Error: " + e, false);
        }
    },
    toolTip: "unbans banned players from priv code"
}),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Item Mods",
                method: () => {
                    currentCategory = 0; currentPage = 0
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),

        new ButtonInfo({
            buttonText: "Spawn Copy Of Held",
            method: () => {
                try {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    let grabbable: any = null;
                    for (const hand of [1, 0]) {
                        try {
                            const interactor = player.method("GetHandInteractor", 1).invoke(hand);
                            if (!interactor) continue;
                            const itemAnchor = interactor.field("_itemAnchor").value;
                            if (!itemAnchor) continue;
                            const g = itemAnchor.method("get_grabbableObject").invoke();
                            if (g && !g.handle.isNull()) { grabbable = g; break; }
                        } catch(_) {}
                    }
                    if (!grabbable) { sendNotification("No item held!", false); return; }
                    const gbo = grabbable.method("GetComponent", 1).inflate(GBOClass).invoke();
                    if (!gbo || gbo.handle.isNull()) { sendNotification("Item has no GBO!", false); return; }
                    const itemIDRaw = gbo.method("get_id").invoke() as string;
                    const hue = gbo.method("get_colorHue").invoke() as number;
                    const sat = gbo.method("get_colorSaturation").invoke() as number;
                    const scale = gbo.method("get_scaleModifier").invoke() as number;
                    const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
                    const spawned = PrefabGen.method("SpawnItem", 4).invoke(Il2Cpp.string(itemIDRaw), pos, identityQuaternion, NULL);
                    if (!spawned || spawned.handle.isNull()) { sendNotification("Spawn failed!", false); return; }
                    const spawnedGBO = spawned.method("GetComponent", 1).inflate(GBOClass).invoke();
                    if (spawnedGBO && !spawnedGBO.handle.isNull()) {
                        try { spawnedGBO.method("set_colorHue").invoke(hue); } catch(_) {}
                        try { spawnedGBO.method("set_colorSaturation").invoke(sat); } catch(_) {}
                        try { spawnedGBO.method("set_scaleModifier").invoke(scale); } catch(_) {}
                    }
                    sendNotification("Spawned! Hue:" + hue + " Sat:" + sat + " Scale:" + scale, false);
                } catch(e) { sendNotification("Spawn Copy: " + e, false); }
            },
            isTogglable: false,
            toolTip: "Spawns a copy of your held item (either hand) with the same hue, saturation and scale."
        }),
        new ButtonInfo({
            buttonText: "No Gravity On Held Item",
            isTogglable: true,
            method: (() => {
                const modifiedGravityItems = new Map<string, any>();

                const disable = () => {
                    for (const [key, grabbable] of modifiedGravityItems.entries()) {
                        try {
                            if (grabbable && !grabbable.isNull()) {
                                grabbable.method("set_useGravity").invoke(true);
                            }
                        } catch (_) {}
                    }
                    modifiedGravityItems.clear();
                };

                const update = () => {
                    try {
                        const player = NetPlayer.method("get_localPlayer").invoke();
                        if (player && !player.isNull()) {
                            for (let i = 0; i < 2; i++) {
                                try {
                                    const interactor = player.method("GetHandInteractor", 1).invoke(i);
                                    if (interactor && !interactor.isNull()) {
                                        const itemAnchor = interactor.field("_itemAnchor").value;
                                        if (itemAnchor && !itemAnchor.isNull()) {
                                            const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                                            if (grabbable && !grabbable.isNull()) {
                                                grabbable.method("set_useGravity").invoke(false);
                                                const key = normalizeSceneObjectHandle(grabbable) || String(grabbable.handle);
                                                if (!modifiedGravityItems.has(key)) {
                                                    modifiedGravityItems.set(key, grabbable);
                                                }
                                            }
                                        }
                                    }
                                } catch (_) {}
                            }
                        }
                    } catch (e) { console.error("No gravity item update error:", e); }
                };

                (update as any)._disable = disable;
                return update;
            })(),
            disableMethod: function() {
                const d = (buttons.flat().find(b => b.buttonText === "No Gravity On Held Item")?.method as any)?._disable;
                if (d) d();
            },
            toolTip: "Disables gravity on held items. Turning this off restores normal gravity."
        }),


        new ButtonInfo({
            buttonText: "Jelly Held Item",
            isTogglable: true,
            method: () => {
                try {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player) return;
                    const hand = player.method("GetHandInteractor", 1).invoke(0);
                    if (!hand) return;
                    const anchor = hand.field("_itemAnchor").value;
                    if (!anchor) return;
                    const held = anchor.method("get_grabbableObject").invoke();
                    if (!held) return;
                    if (rightGrab) jellyVal = Math.min(255, jellyVal + 5);
                    if (leftGrab) jellyVal = Math.max(0, jellyVal - 5);
                    const _byte = jellyVal & 0xff;
                    try { held.method("SetJellyStrengthData").invoke(_byte); } catch(_) {}
                    try { held.method("RPC_SetJellyStrengthData").invoke(_byte); } catch(_) {}
                    try { held.method("SetJellyStrength").invoke(_byte / 255.0); } catch(_) {}
                    try { held.method("set_jellyStrength").invoke(_byte); } catch(_) {}
                    try { held.field("_jellyStrength").value = _byte; } catch(_) {}
                    try { held.method("HandleJellyStrengthChanged").invoke(); } catch(_) {}
                    if (time > tagGunDelay) { currentNotification = "Jelly: " + _byte; notifactionResetTime = time + 1.5; tagGunDelay = time + 0.25; }
                } catch(e) { console.error("[Jelly Held Item]", e); }
            },
            toolTip: "Hold right grip to increase jelly, left grip to decrease."
        }),

        new ButtonInfo({
            buttonText: "Custom Scale Held Item",
            method: () => {
              try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                if (!player) return;
                const interactor = player.method("GetHandInteractor", 1).invoke(0);
                if (!interactor) return;
                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) return;
                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) return;
            
                if (rightPrimary && scaleVal < 127) scaleVal++;
                if (rightGrab && scaleVal > -127) scaleVal--;
            
                grabbable.method("set_scaleModifier").invoke(scaleVal);
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease scale of held item."
          }),

        new ButtonInfo({
            buttonText: "Custom Hue Held Item",
            method: () => {
              try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                if (!player) return;
                const interactor = player.method("GetHandInteractor", 1).invoke(0);
                if (!interactor) return;
                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) return;
                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) return;
            
                if (rightPrimary && hueVal < 127) hueVal++;
                if (rightGrab && hueVal > -127) hueVal--;
            
                grabbable.method("set_colorHue").invoke(hueVal);
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease hue of held item."
          }),

        new ButtonInfo({
            buttonText: "Custom Sat Held Item",
            method: () => {
              try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                if (!player) return;
                const interactor = player.method("GetHandInteractor", 1).invoke(0);
                if (!interactor) return;
                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) return;
                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) return;
            
                if (rightPrimary && satVal < 127) satVal++;
                if (rightGrab && satVal > -127) satVal--;
            
                grabbable.method("set_colorSaturation").invoke(satVal);
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease sat of held item."
          }),

        new ButtonInfo({
            buttonText: "Bypass adding to containers held item",
            //enableMethod: () => {
            //  throwvelocityTest = true;
            //},
            //disableMethod: () => {
            //  throwvelocityTest = false;
            //},
            method: () => {
                try {
                const player = NetPlayer.method("get_localPlayer").invoke();
                if (!player) return;
                const interactor = player.method("GetHandInteractor", 1).invoke(0);
                if (!interactor) return;
                const itemAnchor = interactor.field("_itemAnchor").value;
                if (!itemAnchor) return;
                const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                if (!grabbable) return;
                
                //if (rightPrimary && hueVal < 127) hueVal++;
                //if (rightGrab && hueVal > -127) hueVal--;
                
                const GIECInstance = grabbable.field("equippingConfig").value;
                GIECInstance.field("allowAddToQuiver").value = true;
                GIECInstance.field("allowAddToBag").value = true;
                sendNotification("success!")
              } catch (e) { console.error(e); }
            },
            isTogglable: false,
            toolTip: "Allows the item you are currently holding to be put in bags, quivers, your back, your hip, etc."
          }),

        new ButtonInfo({
            buttonText: "Allow grabbing anywhere in held item",
            isTogglable: true,
            method: (() => {
                const modifiedGrabItems = new Map<string, any>();

                const disable = () => {
                    for (const [key, grabbable] of modifiedGrabItems.entries()) {
                        try {
                            if (grabbable && !grabbable.isNull()) {
                                grabbable.field("_allowGrabAnywhere").value = false;
                            }
                        } catch (_) {}
                    }
                    modifiedGrabItems.clear();
                };

                const update = () => {
                    try {
                        const player = NetPlayer.method("get_localPlayer").invoke();
                        if (player && !player.isNull()) {
                            for (let i = 0; i < 2; i++) {
                                try {
                                    const interactor = player.method("GetHandInteractor", 1).invoke(i);
                                    if (interactor && !interactor.isNull()) {
                                        const itemAnchor = interactor.field("_itemAnchor").value;
                                        if (itemAnchor && !itemAnchor.isNull()) {
                                            const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                                            if (grabbable && !grabbable.isNull()) {
                                                grabbable.field("_allowGrabAnywhere").value = true;
                                                const key = normalizeSceneObjectHandle(grabbable) || String(grabbable.handle);
                                                if (!modifiedGrabItems.has(key)) {
                                                    modifiedGrabItems.set(key, grabbable);
                                                }
                                            }
                                        }
                                    }
                                } catch (_) {}
                            }
                        }
                    } catch (e) { console.error("Grab anywhere item update error:", e); }
                };

                (update as any)._disable = disable;
                return update;
            })(),
            disableMethod: function() {
                const d = (buttons.flat().find(b => b.buttonText === "Allow grabbing anywhere in held item")?.method as any)?._disable;
                if (d) d();
            },
            toolTip: "Lets you grab on any point for the held item. Some items lock where you hold them (eg. Revolver, RPG) This mod removes the limitation! Disabling this restores normal grab points."
        }),


        new ButtonInfo({
            buttonText: "Rainbow all items",
            method: () => {
              try {
            
                //grabbable.method("set_colorSaturation").invoke(satVal);

                hueVal += 15;
                if (hueVal > 127) hueVal = -127;
                if(rightGrab){
                    const players = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
                    if (players) {
                        for (let i = 0; i < players.length; i++) {
                            const netPlayer = players.get(i);
                            //if (netPlayer.method("get_IsMine").invoke()) continue;
                            //myNP = netPlayer; // cache it
                            netPlayer.method("set_colorHue").invoke(hueVal)
                            //break; // stop once we found it
                        }
                    }
                }
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease sat of held item."
          }),
            new ButtonInfo({
                buttonText: "Jelly Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();
                                    gunTarget.method("RPC_SetJellyEffect").invoke(jellywowes, jellywowes);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "jellifies whoever your hand desires."
            }),
            new ButtonInfo({ //             const prefabName = itemPrefabs[currentItemIndex];
                buttonText: "Poor Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();
                                    gunTarget.method("RPC_AddPlayerMoney").invoke(-100);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "makes whoever your hand desires POOR."
            }),
            new ButtonInfo({
                buttonText: "Rich Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    //tagGunDelay = time + 0.5;
                                    //LocalRig.method("set_enabled").invoke(false);
                                    //getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    //serialize();
                                    //GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    //LocalRig.method("set_enabled").invoke(true);
                                    //sendAllOutgoing();
                                    gunTarget.method("RPC_AddPlayerMoney").invoke(9999999);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "makes whoever your hand desires rich."
            }),
            new ButtonInfo({
                buttonText: "Kill Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;
                        if (rightTrigger && ray) {
							console.log("yes")
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget)) {
                                    const hitCollider = ray.method("get_collider").invoke();
									if (!hitCollider || hitCollider.isNull()) return;
									const hitGO = hitCollider.method("get_gameObject").invoke();
									const gunTarget = hitGO.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
									if (!gunTarget || gunTarget.isNull()) { sendNotification("No player there", false); return; }
									if (playerIsLocal(gunTarget)) return;
									const pos = getTransform(gunTarget).method("get_position").invoke();
									const dmgNull = DamageSourceInfoClass.method("get_Null").invoke();
									gunTarget.method("RPC_PlayerHit", 5).invoke(9999, pos, zeroVector, dmgNull, false);
									sendNotification("Insta killed: " + getPlayerName(gunTarget), false);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Kills whoever your hands desires"
            }),
		  new ButtonInfo({
                buttonText: "Kill All",
                isTogglable: false,
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        const now = Time.method("get_time").invoke();
						for (let i = 0; i < players.length; i++) {
							const netPlayer = players.get(i);
							if (playerIsLocal(netPlayer)) continue;
							const pos = getTransform(netPlayer).method("get_position").invoke();
							const dmgNull = DamageSourceInfoClass.method("get_Null").invoke();
							netPlayer.method("RPC_PlayerHit", 5).invoke(9999, pos, zeroVector, dmgNull, false);
							sendNotification("Insta killed everyone",false);
						}
                    } catch(e) { console.error("RPG All:", e); }
                },
                toolTip: "Kills everyone."
            }),
          new ButtonInfo({
            buttonText: "Scale all items",
            method: () => {
              try {
            
                //grabbable.method("set_colorSaturation").invoke(satVal);

                scaleVal += 15;
                if (scaleVal > 127) scaleVal = -127;
                if(rightGrab){
                    const players = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
                    if (players) {
                        for (let i = 0; i < players.length; i++) {
                            const netPlayer = players.get(i);
                            //if (netPlayer.method("get_IsMine").invoke()) continue;
                            //myNP = netPlayer; // cache it
                            netPlayer.method("set_scaleModifier").invoke(scaleVal)
                            //break; // stop once we found i
                        }
                    }
                }
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease sat of held item."
          }),

        new ButtonInfo({
            buttonText: "Set Hue For Spawn",
            method: () => {
                try {
                    if (rightPrimary && hueVal < 127) hueVal++;
                    if (rightGrab && hueVal > -127) hueVal--;
                    sendNotification("Spawn Hue: " + hueVal, false);
                } catch(e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease hue used when spawning items."
        }),
        new ButtonInfo({
            buttonText: "Set Sat For Spawn",
            method: () => {
                try {
                    if (rightPrimary && satVal < 127) satVal++;
                    if (rightGrab && satVal > -127) satVal--;
                    sendNotification("Spawn Sat: " + satVal, false);
                } catch(e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease saturation used when spawning items."
        }),
        new ButtonInfo({
            buttonText: "Set Scale For Spawn",
            method: () => {
                try {
                    if (rightPrimary && scaleVal < 127) scaleVal++;
                    if (rightGrab && scaleVal > -127) scaleVal--;
                    sendNotification("Spawn Scale: " + scaleVal, false);
                } catch(e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Hold A to increase, grip to decrease scale used when spawning items."
        }),
        new ButtonInfo({
            buttonText: "Nuke",
            method: () => {
              try {
                const handPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();

                // Upward offset
                const upwardOffset = Vector3.method("op_Multiply").invoke(
                    Vector3.field("upVector").value,
                    10.0
                );

                // Apply upward offset to hand position
                const arrowsss = Vector3.method("op_Addition").invoke(handPos, upwardOffset);

                // Rightward offset
                const rightOffset = Vector3.method("op_Multiply").invoke(
                    Vector3.field("rightVector").value,
                    0.5 // tweak distance
                );

                // Final arrow spawn position: hand + up + right
                const arrowSpawnPos = Vector3.method("op_Addition").invoke(arrowsss, rightOffset);

                // Also spawn RPG ammo slightly lower
                const upwardOffsetv2 = Vector3.method("op_Multiply").invoke(
                    Vector3.field("upVector").value,
                    5.0
                );
                const spawnPosv2 = Vector3.method("op_Addition").invoke(handPos, upwardOffsetv2);

                // Assign final position for arrow (fix: no extra add!)
                const spawnPos = arrowSpawnPos;

                if (rightPrimary && !previoussaaakey) {
                    PrefabGen.method("SpawnItem", 4).invoke(
                        Il2Cpp.string("item_rpg_ammo"),
                        spawnPosv2,
                        identityQuaternion,
                        NULL
                    );
                
                    PrefabGen.method("SpawnItem", 4).invoke(
                        Il2Cpp.string("item_arrow_bomb"),
                        spawnPos,
                        identityQuaternion,
                        NULL
                    );
                }

                previoussaaakey = rightPrimary;

                
              } catch (e) { console.error(e); }
            },
            isTogglable: true,
            toolTip: "Press right primany to nuke."
          }),
          new ButtonInfo({
    buttonText: "Text Test",
    isTogglable: true, // now its a toggle
    method: () => { // runs when toggled ON
        if (handTextObj == null) {
            const handPos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const handRot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();

            // create tiny world-space canvas
            handTextObj = createObject(handPos, handRot, [0.05,0.05,0.05], 3, [0,0,0,0]);
            const canvas = addComponent(handTextObj, Canvas);
            canvas.method("set_renderMode").invoke(2); // world space
            const scaler = addComponent(handTextObj, CanvasScaler);
            scaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);

            // parent to hand so it follows
            getTransform(handTextObj).method("SetParent", 2).invoke(safeField(getInstance(), "rightHandTransform"), true);

            const transform = getTransform(handTextObj);
            transform.method("SetParent", 2).invoke(safeField(getInstance(), "rightHandTransform"), true);
            transform.method("set_localRotation").invoke(Quaternion.method("Euler").invoke(90,0,0)); // tilt to face player
            transform.method("set_localPosition").invoke(zeroVector); // tilt to face player


            // render the text
            renderMenuText(handTextObj, "Floating Text", handRot, handPos, [200,50]);

            // destroy collider so it doesn't block
            const col = getComponent(handTextObj, Collider);
            if (col) Destroy(col);
        }
    },
    disableMethod: () => { // runs when toggled OFF
        if (handTextObj != null) {
            Object.method("Destroy", 1).invoke(handTextObj);
            handTextObj = null;
        }
    },
    toolTip: "Toggles floating hand text"
}),

        //new ButtonInfo({
        //    buttonText: "Loader Test",
        //    //enableMethod: () => {
        //    //  throwvelocityTest = true;
        //    //},
        //    //disableMethod: () => {
        //    //  throwvelocityTest = false;
        //    //},
        //    method: () => {
        //        try {
        //            
        //      } catch (e) { console.error(e); }
        //    },
        //    isTogglable: false,
        //    toolTip: "Lets you grab on any point for the held item. Some items lock where you hold them (eg. Revolver, RPG) This mod removes the limitation!"
        //}),
            //new ButtonInfo({
            //    buttonText: "Anti Moderator",
            //    isTogglable: true,
            //    method: () => {
            //        if (frameCount % 5 != 0) {
            //            const vrrigs = GorillaParent.field("vrrigs").value;
            //            const vrrigtotal = vrrigs.method("get_Count").invoke();
            //            let shouldLeave = false;
            //            for (let i = 0; i < vrrigtotal; i++) {
            //                const playerRig = vrrigs.method("get_Item").invoke(i);
            //                if (playerIsLocal(playerRig)) continue;
            //                const concat = String(playerRig.field("concatStringOfCosmeticsAllowed").value);
            //                if (concat.includes("LBAAD.")) { shouldLeave = true; break; }; // Admin
            //                if (concat.includes("LBAAK.")) { shouldLeave = true; break; }; // Stick
            //                if (concat.includes("LMAPY.")) { shouldLeave = true; break; }; // Forest Guide
            //            }
            //            if (shouldLeave == true) {
            //                let room = "";
            //                try {
            //                    room = String(PhotonNetwork.method("get_CurrentRoom").invoke().method("get_Name").invoke());
            //                } finally {
            //                    NetworkSystem.method("ReturnToSinglePlayer").invoke();
            //                }
            //                for (let i = 0; i < 10; i++) {
            //                    console.log("Moderator in code " + room);
            //                }
            //                sendNotification("Moderator in code " + room, true, 20);
            //            }
            //        }
            //    },
            //    toolTip: "When someone with the stick joins, you get disconnected.",
            //}),
        ],

    [ // Prefab Mods [11]
    new ButtonInfo({
        buttonText: "Exit Prefab Mods",
        method: () => {
            currentCategory = 0; currentPage = 0
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
    }),

new ButtonInfo({
    buttonText: "Next Prefab",
    method: () => {
        currentWorldPrefabIndex = (currentWorldPrefabIndex + 1) % prefabList.length;
        sendNotification("Prefab: " + prefabList[currentWorldPrefabIndex], false);
    },
    isTogglable: false,
    toolTip: "Cycles to the next prefab."
}),
new ButtonInfo({
    buttonText: "Prev Prefab",
    method: () => {
        currentWorldPrefabIndex = (currentWorldPrefabIndex - 1 + prefabList.length) % prefabList.length;
        sendNotification("Prefab: " + prefabList[currentWorldPrefabIndex], false);
    },
    isTogglable: false,
    toolTip: "Cycles to the previous mob."
}),

new ButtonInfo({
    buttonText: "Scale Prefab Up",
    isTogglable: false,
    method: () => {
        try {
            sizespawner += 10;
            if (sizespawner > 1000.0) sizespawner = 1000.0;

            const items = Object.method("FindObjectsOfType").inflate(NetworkObjectClass).invoke();
            if (!items) return;

            const playerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();

            for (let i = 0; i < items.length; i++) {
                const item = items.get(i);
                if (!item || item.isNull()) continue;

                try {
                    const dist = Vector3.method("Distance").invoke(
                        playerPos,
                        getTransform(item).method("get_position").invoke()
                    );

                    if (dist < 1000.0) {
                        getTransform(item).method("set_localScale").invoke(
                            [sizespawner, sizespawner, sizespawner]
                        );
                    }
                } catch (_) {}
            }

            const gbos = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
            if (gbos) {
                for (let i = 0; i < gbos.length; i++) {
                    const gbo = gbos.get(i);
                    if (!gbo || gbo.isNull()) continue;

                    try {
                        const dist = Vector3.method("Distance").invoke(
                            playerPos,
                            getTransform(gbo).method("get_position").invoke()
                        );

                        if (dist < 1000.0) {
                            try {
                                gbo.method("set_scaleModifier").invoke(
                                    Math.floor(sizespawner * 12)
                                );
                            } catch (_) {
                                getTransform(gbo).method("set_localScale").invoke(
                                    [sizespawner, sizespawner, sizespawner]
                                );
                            }
                        }
                    } catch (_) {}
                }
            }

            sendNotification("Prefab scale: " + sizespawner.toFixed(2), false);
        } catch (e) { console.error("scale up error:", e); }
    },
    toolTip: "Increases the selected prefab scale."
}),

new ButtonInfo({
    buttonText: "Scale Prefab Down",
    isTogglable: false,
    method: () => {
        try {
            sizespawner -= 10;
            if (sizespawner <0) sizespawner = 0;

            const items = Object.method("FindObjectsOfType").inflate(NetworkObjectClass).invoke();
            if (!items) return;

            const playerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();

            for (let i = 0; i < items.length; i++) {
                const item = items.get(i);
                if (!item || item.isNull()) continue;

                try {
                    const dist = Vector3.method("Distance").invoke(
                        playerPos,
                        getTransform(item).method("get_position").invoke()
                    );

                    if (dist < 1000.0) {
                        getTransform(item).method("set_localScale").invoke(
                            [sizespawner, sizespawner, sizespawner]
                        );
                    }
                } catch (_) {}
            }

            const gbos = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
            if (gbos) {
                for (let i = 0; i < gbos.length; i++) {
                    const gbo = gbos.get(i);
                    if (!gbo || gbo.isNull()) continue;

                    try {
                        const dist = Vector3.method("Distance").invoke(
                            playerPos,
                            getTransform(gbo).method("get_position").invoke()
                        );

                        if (dist < 1000.0) {
                            try {
                                gbo.method("set_scaleModifier").invoke(
                                    Math.floor(sizespawner * 12)
                                );
                            } catch (_) {
                                getTransform(gbo).method("set_localScale").invoke(
                                    [sizespawner, sizespawner, sizespawner]
                                );
                            }
                        }
                    } catch (_) {}
                }
            }

            sendNotification("Prefab scale: " + sizespawner.toFixed(2), false);
        } catch (e) { console.error("scale down error:", e); }
    },
    toolTip: "Lowers the default prefab scale."
}),

new ButtonInfo({
    buttonText: "Reset Prefab Scale",
    isTogglable: false,
    method: () => {
        try {
            sizespawner = 1.0;

            const playerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();

            const items = Object.method("FindObjectsOfType").inflate(NetworkObjectClass).invoke();
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    const item = items.get(i);
                    if (!item || item.isNull()) continue;
                    try {
                        const dist = Vector3.method("Distance").invoke(
                            playerPos,
                            getTransform(item).method("get_position").invoke()
                        );
                        if (dist < 1000.0) {
                            getTransform(item).method("set_localScale").invoke(
                                [1.0, 1.0, 1.0]
                            );
                        }
                    } catch (_) {}
                }
            }

            const gbos = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
            if (gbos) {
                for (let i = 0; i < gbos.length; i++) {
                    const gbo = gbos.get(i);
                    if (!gbo || gbo.isNull()) continue;
                    try {
                        const dist = Vector3.method("Distance").invoke(
                            playerPos,
                            getTransform(gbo).method("get_position").invoke()
                        );
                        if (dist < 1000.0) {
                            try {
                                gbo.method("set_scaleModifier").invoke(0);
                            } catch (_) {
                                getTransform(gbo).method("set_localScale").invoke(
                                    [1.0, 1.0, 1.0]
                                );
                            }
                        }
                    } catch (_) {}
                }
            }

            sendNotification("Prefab scale reset to 1.0", false);
        } catch (e) { console.error("scale reset error:", e); }
    },
    toolTip: "Resets the default prefab scale."
}),

new ButtonInfo({
    buttonText: "Prefab Spiral",
    isTogglable: true,
    method: (() => {
        let orbitAngle = 0;
        let spawnedPrefabs: any[] = [];
        let lastPrefabIndex = -1;
        const TOTAL_PREFABS = 50;
        const RADIUS = 5;
        const HEIGHT_STEP = 7;
        const ORBIT_SPEED = 60.0;
        const REVOLUTIONS = 2.0;

        return () => {
            try {
                // respawn if prefab changed or not spawned yet
                if (lastPrefabIndex !== currentWorldPrefabIndex || spawnedPrefabs.length === 0) {
                    // despawn old prefabs
                    for (const p of spawnedPrefabs) {
                        try {
                            if (p && !p.isNull()) {
                                const runner = PrefabGen.field("_instance")
                                    .value.method("get_runner").invoke();
                                const no = p.method("GetComponent", 1)
                                    .inflate(NetworkObjectClass).invoke();
                                if (no && !no.isNull()) {
                                    runner.method("Despawn", 1).invoke(no);
                                }
                            }
                        } catch (_) {}
                    }
                    spawnedPrefabs = [];

                    // spawn new prefabs
                    const _hc_sp = safeField(getInstance(), "headCollider"); if (!_hc_sp || _hc_sp.isNull?.()) return; const spawnPos = getTransform(_hc_sp).method("get_position").invoke(); if (!spawnPos) return;
                    const prefabName = prefabList[currentWorldPrefabIndex];

                    for (let i = 0; i < TOTAL_PREFABS; i++) {
                        try {
                            let spawned = null;
                            try {
                                spawned = spawnNetworkPrefab(prefabName, spawnPos, identityQuaternion);
                            } catch (_) {
                                spawned = PrefabGen.method("SpawnItem", 4).invoke(
                                    Il2Cpp.string(prefabName),
                                    spawnPos,
                                    identityQuaternion,
                                    NULL
                                );
                            }
                            if (spawned && !spawned.isNull()) {
                                spawnedPrefabs.push(spawned);
                            }
                        } catch (_) {}
                    }

                    lastPrefabIndex = currentWorldPrefabIndex;
                    sendNotification("Spiral: " + prefabList[currentWorldPrefabIndex], false);
                }

                // update rotation angle
                orbitAngle += ORBIT_SPEED * deltaTime;
                if (orbitAngle > 360) orbitAngle -= 360;

                const _hc_cp = safeField(getInstance(), "headCollider"); if (!_hc_cp || _hc_cp.isNull?.()) return; const centerPos = getTransform(_hc_cp).method("get_position").invoke(); if (!centerPos) return;

                // offset the spiral so it starts at feet level
                const heightOffset = Vector3.method("op_Multiply").invoke(
                    Vector3.field("upVector").value,
                    -(TOTAL_PREFABS * HEIGHT_STEP) / 2
                );
                const basePos = Vector3.method("op_Addition").invoke(centerPos, heightOffset);

                for (let i = 0; i < spawnedPrefabs.length; i++) {
                    const prefab = spawnedPrefabs[i];
                    if (!prefab || prefab.isNull()) continue;

                    // each prefab gets its own angle offset based on position in spiral
                    const angleOffset = (i / TOTAL_PREFABS) * (360 * REVOLUTIONS);
                    const rad = (orbitAngle + angleOffset) * (Math.PI / 180);

                    const offsetX = Math.cos(rad) * RADIUS;
                    const offsetZ = Math.sin(rad) * RADIUS;
                    const offsetY = i * HEIGHT_STEP;

                    const xPart = Vector3.method("op_Multiply").invoke(
                        Vector3.field("rightVector").value, offsetX
                    );
                    const yPart = Vector3.method("op_Multiply").invoke(
                        Vector3.field("upVector").value, offsetY
                    );
                    const zPart = Vector3.method("op_Multiply").invoke(
                        Vector3.field("forwardVector").value, offsetZ
                    );

                    const offset = Vector3.method("op_Addition").invoke(
                        Vector3.method("op_Addition").invoke(xPart, yPart),
                        zPart
                    );

                    const targetPos = Vector3.method("op_Addition").invoke(basePos, offset);

                    // try RPC_Teleport on GBO first, fallback to transform
                    try {
                        const gbo = prefab.method("GetComponent", 1).inflate(GBOClass).invoke();
                        if (gbo && !gbo.isNull()) {
                            gbo.method("RPC_Teleport", 2).invoke(
                                targetPos,
                                identityQuaternion,
                                zeroVector,
                                zeroVector,
                                false,
                                false
                            );
                        } else {
                            getTransform(prefab).method("set_position").invoke(targetPos);
                        }
                    } catch (_) {
                        try {
                            getTransform(prefab).method("set_position").invoke(targetPos);
                        } catch (_) {}
                    }
                }
            } catch (e) { console.error("prefab spiral orbit error:", e); }
        };
    })(),
    disableMethod: (() => {
        return () => {
        };
    })(),
    toolTip: "Spawns your selected prefab in a spiral."
}),

new ButtonInfo({
    buttonText: "Prefab Cross",
    isTogglable: false,
    method: () => {
        try {
            const centerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();
            const prefabName = prefabList[currentWorldPrefabIndex];
            const armLength = 5;   // how many prefabs per arm
            const spacing = 0.6;   // distance between each prefab

            const directions = [
                Vector3.field("forwardVector").value,
                Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, -1),
                Vector3.field("rightVector").value,
                Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, -1),
            ];

            // center piece
            try {
                spawnNetworkPrefab(prefabName, centerPos, identityQuaternion);
            } catch (_) {
                try {
                    PrefabGen.method("SpawnItem", 4).invoke(
                        Il2Cpp.string(prefabName),
                        centerPos,
                        identityQuaternion,
                        NULL
                    );
                } catch (_) {}
            }

            for (const dir of directions) {
                for (let i = 1; i <= armLength; i++) {
                    const offset = Vector3.method("op_Multiply").invoke(dir, i * spacing);
                    const spawnPos = Vector3.method("op_Addition").invoke(centerPos, offset);

                    try {
                        spawnNetworkPrefab(prefabName, spawnPos, identityQuaternion);
                    } catch (_) {
                        try {
                            PrefabGen.method("SpawnItem", 4).invoke(
                                Il2Cpp.string(prefabName),
                                spawnPos,
                                identityQuaternion,
                                NULL
                            );
                        } catch (_) {}
                    }
                }
            }

            sendNotification("Spawned cross of: " + prefabName, false);
        } catch (e) { console.error("prefab cross error:", e); }
    },
    toolTip: "Spawns a horizontal cross of your selected prefab."
}),

new ButtonInfo({
    buttonText: "Prefab DNA",
    isTogglable: false,
    method: () => {
        try {
            const centerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();
            const prefabName = prefabList[currentWorldPrefabIndex];
            const stepsPerRevolution = 12;
            const totalSteps = 36;
            const radius = 4;
            const heightStep = 0.25;
            const rungEvery = 3;

            for (let i = 0; i < totalSteps; i++) {
                const angle = (i / stepsPerRevolution) * (Math.PI * 2);
                const height = i * heightStep;

                const x1 = Math.cos(angle) * radius;
                const z1 = Math.sin(angle) * radius;

                const x2 = Math.cos(angle + Math.PI) * radius;
                const z2 = Math.sin(angle + Math.PI) * radius;

                const yPart = Vector3.method("op_Multiply").invoke(
                    Vector3.field("upVector").value, height
                );

                const xPart1 = Vector3.method("op_Multiply").invoke(
                    Vector3.field("rightVector").value, x1
                );
                const zPart1 = Vector3.method("op_Multiply").invoke(
                    Vector3.field("forwardVector").value, z1
                );
                const offset1 = Vector3.method("op_Addition").invoke(
                    Vector3.method("op_Addition").invoke(xPart1, yPart),
                    zPart1
                );
                const spawnPos1 = Vector3.method("op_Addition").invoke(centerPos, offset1);

                try {
                    spawnNetworkPrefab(prefabName, spawnPos1, identityQuaternion);
                } catch (_) {
                    try {
                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(prefabName),
                            spawnPos1,
                            identityQuaternion,
                            NULL
                        );
                    } catch (_) {}
                }

                // spawn strand 2
                const xPart2 = Vector3.method("op_Multiply").invoke(
                    Vector3.field("rightVector").value, x2
                );
                const zPart2 = Vector3.method("op_Multiply").invoke(
                    Vector3.field("forwardVector").value, z2
                );
                const offset2 = Vector3.method("op_Addition").invoke(
                    Vector3.method("op_Addition").invoke(xPart2, yPart),
                    zPart2
                );
                const spawnPos2 = Vector3.method("op_Addition").invoke(centerPos, offset2);

                try {
                    spawnNetworkPrefab(prefabName, spawnPos2, identityQuaternion);
                } catch (_) {
                    try {
                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(prefabName),
                            spawnPos2,
                            identityQuaternion,
                            NULL
                        );
                    } catch (_) {}
                }

                if (i % rungEvery === 0) {
                    const rungSteps = 3;

                    for (let r = 1; r < rungSteps; r++) {
                        const t = r / rungSteps;

                        // lerp between strand 1 and strand 2 positions
                        const rx = x1 + (x2 - x1) * t;
                        const rz = z1 + (z2 - z1) * t;

                        const rxPart = Vector3.method("op_Multiply").invoke(
                            Vector3.field("rightVector").value, rx
                        );
                        const rzPart = Vector3.method("op_Multiply").invoke(
                            Vector3.field("forwardVector").value, rz
                        );
                        const rungOffset = Vector3.method("op_Addition").invoke(
                            Vector3.method("op_Addition").invoke(rxPart, yPart),
                            rzPart
                        );
                        const rungPos = Vector3.method("op_Addition").invoke(centerPos, rungOffset);

                        try {
                            spawnNetworkPrefab(prefabName, rungPos, identityQuaternion);
                        } catch (_) {
                            try {
                                PrefabGen.method("SpawnItem", 4).invoke(
                                    Il2Cpp.string(prefabName),
                                    rungPos,
                                    identityQuaternion,
                                    NULL
                                );
                            } catch (_) {}
                        }
                    }
                }
            }

            sendNotification("Spawned DNA of: " + prefabName, false);
        } catch (e) { console.error("prefab DNA error:", e); }
    },
    toolTip: "Spawns the selected prefab you have in a DNA kinda shape around you."
}),
new ButtonInfo({
    buttonText: "Prefab Sphere",
    isTogglable: false,
    method: () => {
        try {
            const centerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();
            const prefabName = prefabList[currentWorldPrefabIndex];
            const rings = 6;
            const countPerRing = 8;
            const radius = 2.0;

            for (let r = 0; r < rings; r++) {
                const phi = (Math.PI / (rings - 1)) * r;

                for (let i = 0; i < countPerRing; i++) {
                    const theta = ((2 * Math.PI) / countPerRing) * i;

                    // spherical to cartesian
                    const offsetX = radius * Math.sin(phi) * Math.cos(theta);
                    const offsetY = radius * Math.cos(phi);
                    const offsetZ = radius * Math.sin(phi) * Math.sin(theta);

                    const rightVec = Vector3.field("rightVector").value;
                    const upVec = Vector3.field("upVector").value;
                    const fwdVec = Vector3.field("forwardVector").value;

                    const xPart = Vector3.method("op_Multiply").invoke(rightVec, offsetX);
                    const yPart = Vector3.method("op_Multiply").invoke(upVec, offsetY);
                    const zPart = Vector3.method("op_Multiply").invoke(fwdVec, offsetZ);

                    const offset = Vector3.method("op_Addition").invoke(
                        Vector3.method("op_Addition").invoke(xPart, yPart),
                        zPart
                    );

                    const spawnPos = Vector3.method("op_Addition").invoke(centerPos, offset);

                    try {
                        spawnNetworkPrefab(prefabName, spawnPos, identityQuaternion);
                    } catch (_) {
                        try {
                            PrefabGen.method("SpawnItem", 4).invoke(
                                Il2Cpp.string(prefabName),
                                spawnPos,
                                identityQuaternion,
                                NULL
                            );
                        } catch (_) {}
                    }
                }
            }

            sendNotification("Spawned sphere of: " + prefabName, false);
        } catch (e) { console.error("prefab sphere error:", e); }
    },
    toolTip: "Spawns a sphere of your selected prefab around you."
}),
new ButtonInfo({
    buttonText: "+ Orbit",
    isTogglable: false,
    method: () => {
        prefabOrbitCount++;
        sendNotification(`Orbit count: ${prefabOrbitCount}`);
    },
    toolTip: "Increment prefab orbit count"
}),
new ButtonInfo({
    buttonText: "- Orbit",
    isTogglable: false,
    method: () => {
        if (prefabOrbitCount > 1) prefabOrbitCount--;
        sendNotification(`Orbit count: ${prefabOrbitCount}`);
    },
    toolTip: "Decrement prefab orbit count"
}),
new ButtonInfo({
    buttonText: "Prefab Orbit",
    isTogglable: true,
    method: (() => {
        let orbitObjects: any[] = [];
        let orbitAngle = 0;
        let orbitInitialized = false;
        const ORBIT_RADIUS = 6.3;
        const ORBIT_SPEED = 90.0;

        const disable = () => {
            for (const obj of orbitObjects) {
                if (!obj || obj.isNull?.()) continue;
                try {
                    const runner = obj.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(obj);
                        continue;
                    }
                } catch(_) {}
                try {
                    const go = obj.method("get_gameObject").invoke();
                    if (go && !go.isNull()) Destroy(go);
                } catch(_) {}
            }
            orbitObjects = [];
            orbitInitialized = false;
        };


        const update = () => {
            try {
                if (!orbitInitialized) {
                    orbitObjects = [];
                    for (let i = 0; i < prefabOrbitCount; i++) {
                        const spawned = spawnNetworkPrefab(
                            prefabList[currentWorldPrefabIndex],
                            safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke(),
                            identityQuaternion
                        );
                        if (spawned) orbitObjects.push(spawned);
                    }
                    orbitInitialized = true;
                }

                orbitAngle += ORBIT_SPEED * deltaTime;
                if (orbitAngle > 360) orbitAngle -= 360;

                const _hc_cp = safeField(getInstance(), "headCollider"); if (!_hc_cp || _hc_cp.isNull?.()) return; const centerPos = getTransform(_hc_cp).method("get_position").invoke(); if (!centerPos) return;

                for (let i = 0; i < orbitObjects.length; i++) {
                    const obj = orbitObjects[i];
                    if (!obj || obj.isNull()) continue;

                    const angleOffset = (360 / prefabOrbitCount) * i;
                    const rad = (orbitAngle + angleOffset) * (Math.PI / 180);

                    const offsetX = Math.cos(rad) * ORBIT_RADIUS;
                    const offsetZ = Math.sin(rad) * ORBIT_RADIUS;

                    const offsetVec = Vector3.method("op_Addition").invoke(
                        Vector3.method("op_Multiply").invoke(Vector3.field("rightVector").value, offsetX),
                        Vector3.method("op_Multiply").invoke(Vector3.field("forwardVector").value, offsetZ)
                    );

                    const targetPos = Vector3.method("op_Addition").invoke(centerPos, offsetVec);
                    getTransform(obj).method("set_position").invoke(targetPos);
                }
            } catch (e) { console.error("orbit error:", e); }
        };

        (update as any)._disable = disable;
        return update;
    })(),
    disableMethod: function() {
        // call the shared disable via the attached reference
        const d = (buttons.flat().find(b => b.buttonText === "Prefab Orbit")?.method as any)?._disable;
        if (d) d();
    },
    toolTip: "Orbits the selected prefab around you, with a number for how many."
}),
new ButtonInfo({
    buttonText: "Selling Machine Follow",
    isTogglable: true,
    method: (() => {
        let spawnedMachine: any = null;

        const disable = () => {
            if (spawnedMachine && !spawnedMachine.isNull?.()) {
                try {
                    const runner = spawnedMachine.method("get_Runner").invoke();
                    if (runner && !runner.isNull()) {
                        runner.method("Despawn").invoke(spawnedMachine);
                    } else {
                        const go = spawnedMachine.method("get_gameObject").invoke();
                        if (go && !go.isNull()) Destroy(go);
                    }
                } catch(_) {
                    try {
                        const go = spawnedMachine.method("get_gameObject").invoke();
                        if (go && !go.isNull()) Destroy(go);
                    } catch(_) {}
                }
            }
            spawnedMachine = null;
        };

        const update = () => {
            try {
                const _hc_cp = safeField(getInstance(), "headCollider");
                if (!_hc_cp || _hc_cp.isNull?.()) return;
                const centerPos = getTransform(_hc_cp).method("get_position").invoke();
                const centerRot = getTransform(_hc_cp).method("get_rotation").invoke();
                if (!centerPos) return;

                if (!spawnedMachine || spawnedMachine.isNull?.()) {
                    spawnedMachine = spawnNetworkPrefab(
                        "ItemSellingMachineController",
                        centerPos,
                        centerRot
                    );
                    sendNotification("Selling Machine spawned to follow you", false);
                } else {
                    getTransform(spawnedMachine).method("set_position").invoke(centerPos);
                    getTransform(spawnedMachine).method("set_rotation").invoke(centerRot);
                }
            } catch (e) { console.error("selling machine follow error:", e); }
        };

        (update as any)._disable = disable;
        return update;
    })(),
    disableMethod: function() {
        const d = (buttons.flat().find(b => b.buttonText === "Selling Machine Follow")?.method as any)?._disable;
        if (d) d();
    },
    toolTip: "Spawns a selling machine that follows you/moves with you."
}),
new ButtonInfo({
    buttonText: "Prefab thing spawn",
    isTogglable: true,
    method: () => {
        try {
            if (!rightGrab) return;
            if (!rightTrigger) return;

            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            const prefabName = prefabList[currentWorldPrefabIndex];

            try {
                spawnNetworkPrefab(prefabName, pos, rot);
            } catch (_) {
                try {
                    PrefabGen.method("SpawnItem", 4).invoke(
                        Il2Cpp.string(prefabName),
                        pos,
                        rot,
                        NULL
                    );
                } catch (_) {}
            }
        } catch (e) { console.error("prefab spawn hand error:", e); }
    },
    toolTip: "Prefab lol."
}),
new ButtonInfo({
    buttonText: "Prefab Gun",
    isTogglable: true,
    method: () => {
        try {
            if (!rightGrab) return;

            const gunData = renderGun();
            const gunPointer = gunData.gunPointer;
            if (!gunPointer) return;

            if (rightTrigger && time > tagGunDelay) {
                tagGunDelay = time + 0.3;

                const pos = getTransform(gunPointer).method("get_position").invoke();
                const rot = identityQuaternion;
                const prefabName = prefabList[currentWorldPrefabIndex];

                try {
                    spawnNetworkPrefab(prefabName, pos, rot);
                } catch (_) {
                    try {
                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(prefabName),
                            pos,
                            rot,
                            NULL
                        );
                    } catch (_) {}
                }

                sendNotification("Spawned: " + prefabName, false);
            }
        } catch (e) { console.error("prefab gun error:", e); }
    },
    toolTip: "Spawns the selected prefab wherever your hand desires."
}),
new ButtonInfo({
    buttonText: "Explosion Gun",
    isTogglable: true,
    method: () => {
        try {
            if (!rightGrab) return;

            const gunData = renderGun();
            const gunPointer = gunData.gunPointer;
            if (!gunPointer) return;

            if (rightTrigger) {

                const pos = getTransform(gunPointer).method("get_position").invoke();
                const rot = identityQuaternion;
                const prefabName = "ExplosiveEgg";

                try {
                    spawnNetworkPrefab(prefabName, pos, rot);
                } catch (_) {
                    try {
                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(prefabName),
                            pos,
                            rot,
                            NULL
                        );
                    } catch (_) {}
                }

                sendNotification("Spawned: " + prefabName, false);
            }
        } catch (e) { console.error("explosion gun error:", e); }
    },
    toolTip: "Spawns an ExplosiveEgg wherever your hand desires."
}),
new ButtonInfo({
    buttonText: "Vehicle Gun",
    isTogglable: true,
    method: () => {
        try {
            if (!rightGrab) return;

            const gunData = renderGun();
            const gunPointer = gunData.gunPointer;
            if (!gunPointer) return;

            if (rightTrigger) {

                const pos = getTransform(gunPointer).method("get_position").invoke();
                const rot = identityQuaternion;
                const prefabName = "Vehicle_Buggy";

                try {
                    spawnNetworkPrefab(prefabName, pos, rot);
                } catch (_) {
                    try {
                        PrefabGen.method("SpawnItem", 4).invoke(
                            Il2Cpp.string(prefabName),
                            pos,
                            rot,
                            NULL
                        );
                    } catch (_) {}
                }

                sendNotification("Spawned: " + prefabName, false);
            }
        } catch (e) { console.error("vehicle gun error:", e); }
    },
    toolTip: "Spawns a car wherever your hand desires."
}),
new ButtonInfo({
    buttonText: "Grab Prefab",
    isTogglable: true,
    method: (() => {
        let grabbedObj: any = null;
        let grabHand: string = "rightHandTransform";
        let didRelease = false;
        const GRAB_RANGE = 15.0;
        return () => {
            try {
                // need both trigger + grip on at least one hand
                const rHeld = rightGrab && rightTrigger;
                const lHeld = leftGrab && leftTrigger;
                if (!rHeld && !lHeld) {
                    grabbedObj = null;
                    didRelease = false;
                    return;
                }
                if (!grabbedObj || grabbedObj.isNull?.()) {
                    grabbedObj = null;
                    didRelease = false;
                    const rht = safeField(getInstance(), "rightHandTransform");
                    const lht = safeField(getInstance(), "leftHandTransform");
                    if (!rht || !lht) return;
                    const rPos = rht.method("get_position").invoke();
                    const lPos = lht.method("get_position").invoke();

                    let bestDist = GRAB_RANGE;

                    // search GrabbableObjects (includes GrabbableItem like frog camera)
                    try {
                        const gbos = Object.method("FindObjectsOfType").inflate(GBOClass).invoke();
                        if (gbos) {
                            for (let i = 0; i < gbos.length; i++) {
                                const gbo = gbos.get(i);
                                if (!gbo || gbo.isNull()) continue;
                                try {
                                    const gboPos = getTransform(gbo).method("get_position").invoke();
                                    const dRight = rHeld ? (Vector3.method("Distance").invoke(rPos, gboPos) as number) : 999;
                                    const dLeft  = lHeld ? (Vector3.method("Distance").invoke(lPos, gboPos) as number) : 999;
                                    const d = Math.min(dRight, dLeft);
                                    if (d < bestDist) {
                                        bestDist = d;
                                        grabbedObj = gbo;
                                        grabHand = dRight < dLeft ? "rightHandTransform" : "leftHandTransform";
                                    }
                                } catch (_) {}
                            }
                        }
                    } catch (_) {}

                    // also search NetworkObjects as fallback
                    try {
                        const netObjs = Object.method("FindObjectsOfType").inflate(NetworkObjectClass).invoke();
                        if (netObjs) {
                            for (let i = 0; i < netObjs.length; i++) {
                                const no = netObjs.get(i);
                                if (!no || no.isNull()) continue;
                                try {
                                    const noPos = getTransform(no).method("get_position").invoke();
                                    const dRight = rHeld ? (Vector3.method("Distance").invoke(rPos, noPos) as number) : 999;
                                    const dLeft  = lHeld ? (Vector3.method("Distance").invoke(lPos, noPos) as number) : 999;
                                    const d = Math.min(dRight, dLeft);
                                    if (d < bestDist) {
                                        bestDist = d;
                                        grabbedObj = no;
                                        grabHand = dRight < dLeft ? "rightHandTransform" : "leftHandTransform";
                                    }
                                } catch (_) {}
                            }
                        }
                    } catch (_) {}

                    if (!grabbedObj) return;
                    sendNotification("Grabbed prefab!", false);
                }

                const ht = safeField(getInstance(), grabHand);
                if (!ht || ht.isNull?.()) return;
                const handPos = ht.method("get_position").invoke();
                const handRot = ht.method("get_rotation").invoke();

                // force-release from other player's hand EVERY frame
                // (their client keeps re-attaching it, so we must keep fighting)
                try {
                    grabbedObj.method("RPC_Release").invoke(
                        handPos,
                        handRot,
                        zeroVector,
                        zeroVector,
                        false,
                        false
                    );
                } catch (_) {}
                try {
                    grabbedObj.method("ForceRelease").invoke();
                } catch (_) {}

                // teleport to hand
                let moved = false;
                if (!moved) {
                    try {
                        grabbedObj.method("RPC_Teleport", 2).invoke(
                            handPos,
                            identityQuaternion,
                            zeroVector,
                            zeroVector,
                            false,
                            false
                        );
                        moved = true;
                    } catch (_) {}
                }
                if (!moved) {
                    try {
                        getTransform(grabbedObj).method("set_position").invoke(handPos);
                        moved = true;
                    } catch (_) {}
                }
            } catch(e) { console.error("Grab Prefab:", e); }
        };
    })(),
    disableMethod: () => {},
    toolTip: "Hold trigger + grip to grab the nearest prefab/item (even from other players) and carry it."
}),

],

[
new ButtonInfo({
                buttonText: "Jelly Gun",
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;

                        if (rightTrigger && ray) {
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                tagGunDelay = time + 0.5;
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    gunTarget.method("RPC_SetJellyEffect").invoke(jellywowes, jellywowes);
                                    jellyTimers.set(gunTarget, time + 30.0);
                                    sendNotification("Jellied " + getPlayerName(gunTarget) + " for 30s!", false);
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Jellifies a player for 30 seconds (hold grip + trigger)."
            }),
],

        [ 
            new ButtonInfo({
                buttonText: "Exit Whitelist Mods",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Toggle Whitelist",
                isTogglable: false,
                method: () => {
                    whitelistEnabled = !whitelistEnabled;
                    sendNotification("Whitelist: " + (whitelistEnabled ? "ON" : "OFF"), false);
                },
                toolTip: "Toggles whether whitelist is enforced on mods."
            }),

            new ButtonInfo({
                buttonText: "WL Gun Add",
                isTogglable: true,
                method: () => {
                    if (!rightGrab) return;
                    const gunData = renderGun();
                    if (rightTrigger && time > lagGunDelay) {
                        lagGunDelay = time + 0.5;
                        try {
                            const target = getWhitelistGunTarget(gunData);
                            if (!target || !target.player) { sendNotification("No player aimed at", false); return; }
                            whitelist = [];
                            const id = whitelistAddPlayer(target.player);
                            sendNotification("WL set to: " + id, false);
                        } catch(e) { console.error("WL Gun Add:", e); }
                    }
                },
                toolTip: "Hold grip, point at player, pull trigger to select them."
            }),
            new ButtonInfo({
                buttonText: "WL Gun Remove",
                isTogglable: true,
                method: () => {
                    if (!rightGrab) return;
                    const gunData = renderGun();
                    if (rightTrigger && time > lagGunDelay) {
                        lagGunDelay = time + 0.5;
                        try {
                            const target = getWhitelistGunTarget(gunData);
                            if (!target || !target.player) { sendNotification("No player aimed at", false); return; }
                            if (whitelistHasPlayer(target.player)) {
                                const id = whitelistRemovePlayer(target.player);
                                sendNotification("Removed from whitelist: " + id, false);
                            } else {
                                sendNotification("Not in whitelist: " + target.id, false);
                            }
                        } catch(e) { console.error("WL Gun Remove:", e); }
                    }
                },
                toolTip: "Hold grip, point at player, pull trigger to remove from whitelist."
            }),
            new ButtonInfo({
                buttonText: "Clear Whitelist",
                isTogglable: false,
                method: () => {
                    whitelist = [];
                    sendNotification("Whitelist cleared!", false);
                },
                toolTip: "Removes all players from the whitelist."
            }),
            new ButtonInfo({
                buttonText: "Show Whitelisted Players",
                isTogglable: false,
                method: () => {
                    if (whitelist.length === 0) { sendNotification("Whitelist is empty", false); return; }
                    sendNotification("WL: " + whitelist.join(", "), false);
                },
                toolTip: "Shows all whitelisted players."
            }),
            new ButtonInfo({
                buttonText: "WL Give RPG Launcher Gun",
                enableMethod: () => { wlRpgTarget = null; },
                disableMethod: () => { wlRpgTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlRpgTarget = target.player;
                                    sendNotification("RPG target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlRpgTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlRpgTarget.handle.toString();
                            const view = wlRpgTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlRpgTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlRpgTarget);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocket", pos, rot);
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocket", pos, rot);
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlRpgTarget = null; }
                            else console.error("WL RPG Gun:", e);
                        }
                    } catch(e) { console.error("WL RPG Gun outer:", e); }
                },
                toolTip: "whoever you shoot gets RPG hands with grip + trigger"
            }),
            new ButtonInfo({
                buttonText: "WL Give Egg Launcher Gun",
                enableMethod: () => { wlEggTarget = null; },
                disableMethod: () => { wlEggTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlEggTarget = target.player;
                                    sendNotification("Egg target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlEggTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlEggTarget.handle.toString();
                            const view = wlEggTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlEggTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlEggTarget);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlEggTarget = null; }
                            else console.error("WL Egg Gun:", e);
                        }
                    } catch(e) { console.error("WL Egg Gun outer:", e); }
                },
                toolTip: "whoever you shoot gets Egg hands with grip + trigger"
            }),
            new ButtonInfo({
                buttonText: "WL Give Boomspear Launcher Gun",
                enableMethod: () => { wlBoomspearTarget = null; },
                disableMethod: () => { wlBoomspearTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlBoomspearTarget = target.player;
                                    sendNotification("BoomSpear target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlBoomspearTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlBoomspearTarget.handle.toString();
                            const view = wlBoomspearTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlBoomspearTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlBoomspearTarget);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketSpear", pos, rot);
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketSpear", pos, rot);
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlBoomspearTarget = null; }
                            else console.error("WL BoomSpear Gun:", e);
                        }
                    } catch(e) { console.error("WL BoomSpear Gun outer:", e); }
                },
                toolTip: "whoever you shoot gets RPG hands with grip + trigger"
            }),
            new ButtonInfo({
                buttonText: "WL Give Flare gun Gun",
                enableMethod: () => { wlRpgTarget = null; },
                disableMethod: () => { wlRpgTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlRpgTarget = target.player;
                                    sendNotification("RPG target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlRpgTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlRpgTarget.handle.toString();
                            const view = wlRpgTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlRpgTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlRpgTarget);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("FlareGunProjectile", pos, rot);
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("FlareGunProjectile", pos, rot);
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlRpgTarget = null; }
                            else console.error("WL RPG Gun:", e);
                        }
                    } catch(e) { console.error("WL RPG Gun outer:", e); }
                },
                toolTip: "whoever you shoot gets Flaregun with grip + trigger"
            }),
            new ButtonInfo({
                buttonText: "WL Give Bootzooka Launcher Gun",
                enableMethod: () => { wlRpgTarget = null; },
                disableMethod: () => { wlRpgTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlRpgTarget = target.player;
                                    sendNotification("RPG target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlRpgTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlRpgTarget.handle.toString();
                            const view = wlRpgTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlRpgTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlRpgTarget);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketShoe", pos, rot);
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                            spawnNetworkPrefab("RPGRocketShoe", pos, rot);
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlRpgTarget = null; }
                            else console.error("WL RPG Gun:", e);
                        }
                    } catch(e) { console.error("WL RPG Gun outer:", e); }
                },
                toolTip: "whoever you shoot gets RPG hands with grip + trigger"
            }),
            new ButtonInfo({
                buttonText: "Launch Gun",
                isTogglable: true,
                method: () => {
                    if (rightGrab) {
                        const gunData = renderGun();
                        const ray = gunData.ray;
                        const launchForce = Il2Cpp.UnityEngine.Vector3.new(0, 1500.0, 0);
                        if (rightTrigger && ray && time > lagGunDelay) {
                            lagGunDelay = time + 0.5;
                            const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                            if (gunTarget && !gunTarget.handle.isNull()) {
                                if (!playerIsLocal(gunTarget) && (!whitelistEnabled || !whitelistHasPlayer(gunTarget))) {
                                    try {
                                        gunTarget.method("RPC_AddForce").invoke(launchForce);
                                        sendNotification("Launched " + getPlayerName(gunTarget) + "!", false);
                                    } catch(e) { console.error("Launch Gun:", e); }
                                }
                            }
                        }
                    }
                },
                toolTip: "Hold grip + pull trigger to aim at any player and launch them upward."
            }),
            new ButtonInfo({
                buttonText: "RPG hands All",
                isTogglable: true,
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        const now = Time.method("get_time").invoke();
                        for (let i = 0; i < players.length; i++) {
                            try {
                                const p = players.get(i);
                                if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                                let playerKey: string;
                                try { playerKey = p.handle.toString(); } catch(_) { continue; }
                                const view = p.method("get_view").invoke();
                                if (!view || view.isNull?.()) continue;
                                const inputs = checkOtherPlayerInputs(p);
                                if (inputs.leftGrab && inputs.leftTrigger) {
                                    const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                    if (now - lastLeft > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetLeft").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocket", pos, rot);
                                                lastSpawnTimesLeft.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                                if (inputs.rightGrab && inputs.rightTrigger) {
                                    const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                    if (now - lastRight > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetRight").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocket", pos, rot);
                                                lastSpawnTimesRight.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                            } catch(e: any) {
                                if (e?.message?.includes("access violation")) continue;
                            }
                        }
                    } catch(e) { console.error("RPG All:", e); }
                },
                toolTip: "All players fire RPG rockets from their hands when they grip+trigger."
            }),
            new ButtonInfo({
                buttonText: "Boomspear hands All",
                isTogglable: true,
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        const now = Time.method("get_time").invoke();
                        for (let i = 0; i < players.length; i++) {
                            try {
                                const p = players.get(i);
                                if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                                let playerKey: string;
                                try { playerKey = p.handle.toString(); } catch(_) { continue; }
                                const view = p.method("get_view").invoke();
                                if (!view || view.isNull?.()) continue;
                                const inputs = checkOtherPlayerInputs(p);
                                if (inputs.leftGrab && inputs.leftTrigger) {
                                    const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                    if (now - lastLeft > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetLeft").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocketSpear", pos, rot);
                                                lastSpawnTimesLeft.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                                if (inputs.rightGrab && inputs.rightTrigger) {
                                    const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                    if (now - lastRight > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetRight").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocket", pos, rot);
                                                lastSpawnTimesRight.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                            } catch(e: any) {
                                if (e?.message?.includes("access violation")) continue;
                            }
                        }
                    } catch(e) { console.error("RPG All:", e); }
                },
                toolTip: "All players fire Boomspears from their hands when they grip+trigger."
            }),
            new ButtonInfo({
                buttonText: "Egg hands All",
                isTogglable: true,
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        const now = Time.method("get_time").invoke();
                        for (let i = 0; i < players.length; i++) {
                            try {
                                const p = players.get(i);
                                if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                                let playerKey: string;
                                try { playerKey = p.handle.toString(); } catch(_) { continue; }
                                const view = p.method("get_view").invoke();
                                if (!view || view.isNull?.()) continue;
                                const inputs = checkOtherPlayerInputs(p);
                                if (inputs.leftGrab && inputs.leftTrigger) {
                                    const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                    if (now - lastLeft > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetLeft").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                                                lastSpawnTimesLeft.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                                if (inputs.rightGrab && inputs.rightTrigger) {
                                    const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                    if (now - lastRight > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetRight").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("RPGRocketEgg", pos, rot);
                                                lastSpawnTimesRight.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                            } catch(e: any) {
                                if (e?.message?.includes("access violation")) continue;
                            }
                        }
                    } catch(e) { console.error("RPG All:", e); }
                },
                toolTip: "All players fire RPG eggs from their hands when they grip+trigger."
            }),
            new ButtonInfo({
                buttonText: "Flaregun All",
                isTogglable: true,
                method: () => {
                    try {
                        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                        if (!players) return;
                        const now = Time.method("get_time").invoke();
                        for (let i = 0; i < players.length; i++) {
                            try {
                                const p = players.get(i);
                                if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                                let playerKey: string;
                                try { playerKey = p.handle.toString(); } catch(_) { continue; }
                                const view = p.method("get_view").invoke();
                                if (!view || view.isNull?.()) continue;
                                const inputs = checkOtherPlayerInputs(p);
                                if (inputs.leftGrab && inputs.leftTrigger) {
                                    const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                    if (now - lastLeft > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetLeft").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("FlareGunProjectile", pos, rot);
                                                lastSpawnTimesLeft.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                                if (inputs.rightGrab && inputs.rightTrigger) {
                                    const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                    if (now - lastRight > 0.05) {
                                        try {
                                            const hand = view.field("_handTargetRight").value;
                                            if (hand && !hand.isNull()) {
                                                const pos = hand.method("get_position").invoke();
                                                const rot = Quaternion.method("op_Multiply").invoke(hand.method("get_rotation").invoke(), Quaternion.method("Euler").invoke(-90, 0, 0));
                                                spawnNetworkPrefab("FlareGunProjectile", pos, rot);
                                                lastSpawnTimesRight.set(playerKey, now);
                                            }
                                        } catch(_) {}
                                    }
                                }
                            } catch(e: any) {
                                if (e?.message?.includes("access violation")) continue;
                            }
                        }
                    } catch(e) { console.error("RPG All:", e); }
                },
                toolTip: "All players Flaregun when they grip+trigger."
            }),
            new ButtonInfo({
                buttonText: "WL Item Launcher",
                enableMethod: () => { wlItemTarget = null; },
                disableMethod: () => { wlItemTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlItemTarget = target.player;
                                    sendNotification("Item target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlItemTarget) return;
                        try {
                            const now = Time.method("get_time").invoke();
                            const playerKey = wlItemTarget.handle.toString();
                            const view = wlItemTarget.method("get_view").invoke();
                            if (!view || view.isNull?.()) { wlItemTarget = null; return; }
                            const inputs = checkOtherPlayerInputs(wlItemTarget);
                            const prefabName = Il2Cpp.string(itemIDs[currentItemIndex]);
                            if (inputs.leftGrab && inputs.leftTrigger) {
                                const lastLeft = lastSpawnTimesLeft.get(playerKey) || 0;
                                if (now - lastLeft > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetLeft").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = hand.method("get_rotation").invoke();
                                            const spawned = PrefabGen.method("SpawnItem", 4).invoke(prefabName, pos, rot, NULL);
                                            if (spawned && !spawned.handle.isNull()) {
                                                const gbo = spawned.method("GetComponent", 1).inflate(GBOClass).invoke();
                                                if (gbo && !gbo.isNull?.()) {
                                                    if (getIndex("Custom Hue Held Item")?.enabled || getIndex("Set Hue For Spawn")?.enabled) try { gbo.method("set_colorHue").invoke(hueVal); } catch(_) {}
                                                    if (getIndex("Custom Sat Held Item")?.enabled || getIndex("Set Sat For Spawn")?.enabled) try { gbo.method("set_colorSaturation").invoke(satVal); } catch(_) {}
                                                    if (getIndex("Custom Scale Held Item")?.enabled || getIndex("Set Scale For Spawn")?.enabled) try { gbo.method("set_scaleModifier").invoke(scaleVal); } catch(_) {}
                                                }
                                            }
                                            lastSpawnTimesLeft.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                            if (inputs.rightGrab && inputs.rightTrigger) {
                                const lastRight = lastSpawnTimesRight.get(playerKey) || 0;
                                if (now - lastRight > 0.05) {
                                    try {
                                        const hand = view.field("_handTargetRight").value;
                                        if (hand && !hand.isNull()) {
                                            const pos = hand.method("get_position").invoke();
                                            const rot = hand.method("get_rotation").invoke();
                                            const spawned = PrefabGen.method("SpawnItem", 4).invoke(prefabName, pos, rot, NULL);
                                            if (spawned && !spawned.handle.isNull()) {
                                                const gbo = spawned.method("GetComponent", 1).inflate(GBOClass).invoke();
                                                if (gbo && !gbo.isNull?.()) {
                                                    if (getIndex("Custom Hue Held Item")?.enabled || getIndex("Set Hue For Spawn")?.enabled) try { gbo.method("set_colorHue").invoke(hueVal); } catch(_) {}
                                                    if (getIndex("Custom Sat Held Item")?.enabled || getIndex("Set Sat For Spawn")?.enabled) try { gbo.method("set_colorSaturation").invoke(satVal); } catch(_) {}
                                                    if (getIndex("Custom Scale Held Item")?.enabled || getIndex("Set Scale For Spawn")?.enabled) try { gbo.method("set_scaleModifier").invoke(scaleVal); } catch(_) {}
                                                }
                                            }
                                            lastSpawnTimesRight.set(playerKey, now);
                                        }
                                    } catch(_) {}
                                }
                            }
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlItemTarget = null; }
                            else console.error("WL Item Launcher:", e);
                        }
                    } catch(e) { console.error("WL Item Launcher outer:", e); }
                },
                toolTip: "Aim at WL player + trigger to select. Spawns selected Fun Mods item from their hands when they grip+trigger."
            }),
            new ButtonInfo({
                buttonText: "Goop",
                enableMethod: () => { wlPissTarget = null; },
                disableMethod: () => { wlPissTarget = null; },
                isTogglable: true,
                method: () => {
                    try {
                        if (rightGrab) {
                            const gunData = renderGun();
                            if (rightTrigger && time > tagGunDelay) {
                                tagGunDelay = time + 0.25;
                                const target = getWhitelistGunTarget(gunData);
                                if (target?.player) {
                                    wlPissTarget = target.player;
                                    sendNotification("Goon target: " + target.id, false);
                                }
                            }
                        }
                        if (!wlPissTarget) return;
                        if (time <= goopSpamDelay) return;
                        try {
                            goopSpamDelay = time + 0.055;
                            spawnGoopBurstAtTransform(getTransform(wlPissTarget), 56, 100, 1, 2.2, 5.2);
                        } catch(e: any) {
                            if (e?.message?.includes("access violation")) { wlPissTarget = null; }
                            else console.error("Goon:", e);
                        }
                    } catch(e) { console.error("Goon outer:", e); }
                },
                toolTip: "Aim at a WL player once to lock on, then continuously pisses on them."
            })
        ],

        [ // Hand spam [14]
            new ButtonInfo({
                buttonText: "Exit Hand spam",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            // Pelican Case
new ButtonInfo({
    buttonText: "pelican case hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_pelican_case", pos, rot);
        } catch (e) { console.error("pelican case spawn error:", e); }
    },
    toolTip: "Spawns a pelican case at your right hand."
}),

// Rare Card
new ButtonInfo({
    buttonText: "rare card hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_rare_card", pos, rot);
        } catch (e) { console.error("rare card spawn error:", e); }
    },
    toolTip: "Spawns a rare card at your right hand."
}),

// Time Bomb
new ButtonInfo({
    buttonText: "time bomb hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_timebomb", pos, rot);
        } catch (e) { console.error("time bomb spawn error:", e); }
    },
    toolTip: "Spawns a time bomb at your right hand."
}),

// Cutie Dead
new ButtonInfo({
    buttonText: "cutie dead hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_cutie_dead", pos, rot);
        } catch (e) { console.error("cutie dead spawn error:", e); }
    },
    toolTip: "Spawns a cutie dead at your right hand."
}),

// Goop
new ButtonInfo({
    buttonText: "goop hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_goop", pos, rot);
        } catch (e) { console.error("goop spawn error:", e); }
    },
    toolTip: "Spawns a goop at your right hand."
}),

// Flashlight Backpack
new ButtonInfo({
    buttonText: "flashlight backpack hand spam",
    isTogglable: true,
    method: () => {
        if (!rightGrab) return;
        try {
            const pos = safeField(getInstance(), "rightHandTransform")?.method("get_position").invoke();
            const rot = safeField(getInstance(), "rightHandTransform")?.method("get_rotation").invoke();
            spawnItemAsync("item_backpack_with_flashlight", pos, rot);
        } catch (e) { console.error("flashlight backpack spawn error:", e); }
    },
    toolTip: "Spawns a flashlight backpack at your right hand."
}),
        ],

        [ // RPC Mods [15]
            new ButtonInfo({
                buttonText: "Exit RPC Mods",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Stun All",
                method: () => {
                    try {
                        const playerDict = NetPlayer.field("playerIDToNetPlayer").value;
                        const vals = playerDict.method("get_Values").invoke();
                        const en = vals.method("GetEnumerator").invoke();
                        let count = 0;
                        while (en.method("MoveNext").invoke()) {
                            const p = en.method("get_Current").invoke();
                            if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                            try {
                                const cur = p.method("get_playerScale").invoke() as number;
                                p.method("set_playerScale").invoke(cur + 1.0);
                                count++;
                            } catch(_) {}
                        }
                        sendNotification("Scaled up " + count + " players!", false);
                    } catch(e) { sendNotification("Stun All: " + e, false); }
                },
                isTogglable: false,
                toolTip: "Increases all other players scale by 1."
            }),
            new ButtonInfo({
                buttonText: "No Gravity All",
                method: () => {
                    try {
                        const playerDict = NetPlayer.field("playerIDToNetPlayer").value;
                        const vals = playerDict.method("get_Values").invoke();
                        const en = vals.method("GetEnumerator").invoke();
                        let count = 0;
                        while (en.method("MoveNext").invoke()) {
                            const p = en.method("get_Current").invoke();
                            if (!p || p.handle.isNull() || playerIsLocal(p)) continue;
                            try { p.method("RPC_ApplyBuff").invoke(1); count++; } catch(_) {}
                        }
                        sendNotification("Big buff sent to " + count + " players!", false);
                    } catch(e) { sendNotification("Buff All Big: " + e, false); }
                },
                isTogglable: false,
                toolTip: "Sends big/scale buff (ID 1) to all players."
            }),
            new ButtonInfo({
    buttonText: "Block RPCs NOT WORKING",
    isTogglable: true,
    enabled: false,
    enableMethod: () => {
        installAntiRpcBlockHooks();
        antiRpcBlock = true;
        sendNotification("RPC Blocking ENABLED", false);
    },
    disableMethod: () => {
        antiRpcBlock = false;
        sendNotification("RPC Blocking DISABLED", false);
    },
    toolTip: "Blocks hostile RPCs from other players"
}),
        ],
        [ // Mob [16]
            new ButtonInfo({
                buttonText: "Exit Mob",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "+ Mob ID",
                method: () => {
                    mobIndex = (mobIndex + 1) % mobIDs.length;
                    sendNotification("Mob: " + mobIDs[mobIndex].name + " (ID: " + mobIDs[mobIndex].id + ")", false);
                },
                isTogglable: false,
                toolTip: "Cycles to the next mob ID."
            }),
            new ButtonInfo({
                buttonText: "- Mob ID",
                method: () => {
                    mobIndex = (mobIndex - 1 + mobIDs.length) % mobIDs.length;
                    sendNotification("Mob: " + mobIDs[mobIndex].name + " (ID: " + mobIDs[mobIndex].id + ")", false);
                },
                isTogglable: false,
                toolTip: "Cycles to the previous mob ID."
            }),
            new ButtonInfo({
                buttonText: "Spawn Mob",
                method: () => {
                    const handTransform = safeField(getInstance(), "rightHandTransform");
                    const spawnPressed = rightSecondary && rightGrab;
                    if (!spawnPressed) {
                        mobSpawnButtonLatched = false;
                        return;
                    }
                    if (!mobSpawnButtonLatched) {
                        mobSpawnButtonLatched = true;
                        try {
                            if (!handTransform || handTransform.isNull?.()) return;
                            const mob = mobIDs[mobIndex];
                            const forward = getLaunchForward(handTransform);
                            const up = getLaunchUp(handTransform, forward);
                            const pos = Vector3.method("op_Addition").invoke(
                                handTransform.method("get_position").invoke(),
                                Vector3.method("op_Addition").invoke(
                                    Vector3.method("op_Multiply", 2).invoke(forward, 0.55),
                                    Vector3.method("op_Multiply", 2).invoke(up, -0.03)
                                )
                            );
                            const rot = getLaunchRotation(handTransform, forward, up);
                            spawnMobAtPos(mob, pos, rot);
                            sendNotification("Spawning mob: " + mob.name + " (id=" + mob.id + ")", false);
                        } catch(e) { console.error("Spawn Mob:", e); sendNotification("Spawn failed: " + e, false); }
                    }
                },
                isTogglable: true,
                toolTip: "Spawns one mob at your right hand per grip + B press."
            }),
            new ButtonInfo({
                buttonText: "Spawn Mob Gun",
                isTogglable: true,
                method: () => {
                    if (!rightGrab) {
                        mobSpawnGunTriggerLatched = false;
                        return;
                    }
                    const gunData = renderGun();
                    if (!rightTrigger) {
                        mobSpawnGunTriggerLatched = false;
                        return;
                    }
                    const ray = gunData.ray;
                    if (!ray || ray.handle.isNull()) return;
                    if (!mobSpawnGunTriggerLatched && time > mobGunDelay2) {
                        mobSpawnGunTriggerLatched = true;
                        mobGunDelay2 = time + 0.15;
                        const hitPoint = ray.method("get_point").invoke();
                        const mob = mobIDs[mobIndex];
                        spawnMobAtPos(mob, hitPoint, identityQuaternion);
                        sendNotification("Spawning: " + mob.name + " (id=" + mob.id + ")", false);
                    }
                },
                toolTip: "Spawns one mob where you aim per trigger pull."
            }),
            new ButtonInfo({
                buttonText: "Mom Boss Gun",
                isTogglable: true,
                method: (() => {
                    let spawnPos: any = null;
                    let respawnDelay = 0;
                    let patched = false;
                    return () => {
                        try {
                            const MomBossClass = AssemblyCSharp.class("AnimalCompany.MomBossController");

                            // patch ResetGame once so it never despawns her
                            if (!patched) {
                                try {
                                    MomBossClass.method("ResetGame").implementation = function() {};
                                    MomBossClass.method("RPC_ResetGame").implementation = function() {};
                                    patched = true;
                                } catch(_) {}
                            }

                            // render gun FIRST before any return so laser always shows
                            let gunHitPoint: any = null;
                            if (rightGrab) {
                                const gunData = renderGun();
                                const ray = gunData.ray;
                                if (ray && !(ray.handle?.isNull?.() ?? true)) {
                                    gunHitPoint = ray.method("get_point").invoke();
                                }
                            }

                            const momBoss = Object.method("FindObjectOfType").inflate(MomBossClass).invoke();
                            if (!momBoss || momBoss.isNull()) return;

                            // aim + trigger to place her anywhere
                            if (rightGrab) {
                                if (gunHitPoint && rightTrigger && time > tagGunDelay) {
                                    tagGunDelay = time + 0.5;
                                    spawnPos = gunHitPoint;
                                    try { momBoss.method("get_transform").invoke().method("set_position").invoke(spawnPos); } catch(_) {}
                                    try { momBoss.field("floorCenter").value = spawnPos; } catch(_) {}
                                    try { momBoss.field("floorCenter2D").value = [spawnPos.field("x").value, spawnPos.field("z").value]; } catch(_) {}
                                    try { momBoss.field("floorHeight").value = spawnPos.field("y").value; } catch(_) {}
                                    try { momBoss.field("isLocalWithinActiveRange").value = true; } catch(_) {}
                                    try { momBoss.field("_canBecomeStateAuthority").value = true; } catch(_) {}
                                    try { momBoss.field("_isLocalWithinRangeChangedInFixedUpdate").value = false; } catch(_) {}
                                    try { momBoss.field("onExitedArea").value = null; } catch(_) {}
                                    try { momBoss.method("set_n_timerToResetGame").invoke(99999.0); } catch(_) {
                                        try { momBoss.field("_n_timerToResetGame").value = 99999.0; } catch(_) {}
                                    }
                                    try {
                                        const playersInArea = momBoss.field("_playersInArea").value;
                                        if (playersInArea && !playersInArea.isNull()) {
                                            const lp = getInstance();
                                            if (lp && !lp.isNull()) {
                                                if (!(playersInArea.method("Contains").invoke(lp) as boolean))
                                                    playersInArea.method("Add").invoke(lp);
                                            }
                                        }
                                    } catch(_) {}
                                    try { momBoss.method("OnEnteredArea").invoke(); } catch(_) {}
                                    try { momBoss.method("HandleEnteredArea").invoke(); } catch(_) {}
                                    try { momBoss.method("SetFirstPlayerEnteredGameState").invoke(); } catch(_) {}
                                    try { momBoss.method("set_n_gameState").invoke(1); } catch(_) {}
                                    sendNotification("Mom Boss spawned!", false);
                                }
                            }

                            // every frame: keep her alive at spawn pos
                            if (spawnPos) {
                                try { momBoss.method("get_transform").invoke().method("set_position").invoke(spawnPos); } catch(_) {}
                                try { momBoss.field("isLocalWithinActiveRange").value = true; } catch(_) {}
                                try { momBoss.field("_canBecomeStateAuthority").value = true; } catch(_) {}
                                try { momBoss.field("_isLocalWithinRangeChangedInFixedUpdate").value = false; } catch(_) {}
                                try { momBoss.field("onExitedArea").value = null; } catch(_) {}
                                try { momBoss.method("set_n_timerToResetGame").invoke(99999.0); } catch(_) {
                                    try { momBoss.field("_n_timerToResetGame").value = 99999.0; } catch(_) {}
                                }
                                try {
                                    const playersInArea = momBoss.field("_playersInArea").value;
                                    if (playersInArea && !playersInArea.isNull()) {
                                        const lp = getInstance();
                                        if (lp && !lp.isNull()) {
                                            if (!(playersInArea.method("Contains").invoke(lp) as boolean))
                                                playersInArea.method("Add").invoke(lp);
                                        }
                                    }
                                } catch(_) {}
                                try {
                                    const gs = momBoss.method("get_n_gameState").invoke() as number;
                                    if (gs === 0) {
                                        try { momBoss.method("OnEnteredArea").invoke(); } catch(_) {}
                                        try { momBoss.method("SetFirstPlayerEnteredGameState").invoke(); } catch(_) {}
                                        try { momBoss.method("set_n_gameState").invoke(1); } catch(_) {}
                                    }
                                } catch(_) {}
                            }
                        } catch(e) { console.error("Mom Boss Gun:", e); }
                    };
                })(),
                toolTip: "Hold grip + aim + trigger to spawn Mom Boss anywhere. Keeps her alive every frame."
            }),
            new ButtonInfo({
                buttonText: "Force Spawned Mobs Stay",
                enableMethod: () => { mobForceStayEnabled = true; sendNotification("Force Spawned Mobs Stay ON", false); },
                disableMethod: () => { mobForceStayEnabled = false; sendNotification("Force Spawned Mobs Stay OFF", false); },
                isTogglable: true,
                toolTip: "Keeps tracked spawned mobs active and respawns them if they drop out."
            }),
        ],

        [ // Name [17]
            new ButtonInfo({
                buttonText: "Exit Name",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "M4.",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("M4."));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("M4");
                        sendNotification("Name set to: M4.", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to M4."
            }),
            new ButtonInfo({
                buttonText: "iiDK",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("iiDK"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("iiDK");
                        sendNotification("Name set to: iiDK", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to spammed FCS."
            }),
            new ButtonInfo({
                buttonText: "Moony2HP",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Moony2HP"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Moony2HP");
                        sendNotification("Name set to: Moony2HP", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Moony2HP."
            }),
            new ButtonInfo({
                buttonText: "son",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("son"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("son");
                        sendNotification("Name set to: son", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to son."
            }),
            new ButtonInfo({
                buttonText: "Verity",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Verity"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Verity");
                        sendNotification("Name set to: Verity", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Verity."
            }),
            new ButtonInfo({
                buttonText: "Nothing",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string(" "));
                        netplayer.field("cache_displayName").value = Il2Cpp.string(" ");
                        sendNotification("Name set to: ", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Quite Literally Nothing."
            }),
            new ButtonInfo({
                buttonText: "SKIDDER",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("SKIDDER"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("SKIDDER");
                        sendNotification("Name set to: SKIDDER", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to SKIDDER."
            }),
            new ButtonInfo({
                buttonText: "ii's Stupid Menu",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("ii's Stupid Menu"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("ii's Stupid Menu");
                        sendNotification("Name set to: ii's Stupid Menu", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to ii's Stupid Menu."
            }),
            new ButtonInfo({
                buttonText: "Voidy",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Voidy"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Voidy");
                        sendNotification("Name set to: Voidy", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Voidy."
            }),
            new ButtonInfo({
                buttonText: "That1dev",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("That1dev"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("That1dev");
                        sendNotification("Name set to: That1dev", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to That1dev."
            }),
            new ButtonInfo({
                buttonText: "<anon>",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("<anon>"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("<anon>");
                        sendNotification("Name set to: <anon>", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to <anon>."
            }),
            new ButtonInfo({
                buttonText: "Doritos",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Doritos"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Doritos");
                        sendNotification("Name set to: Doritos", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Doritos."
            }),
            new ButtonInfo({
                buttonText: "████",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("████"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("████");
                        sendNotification("Name set to: █████", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to █████."
            }),
            new ButtonInfo({
                buttonText: "Anonymous",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Anonymous"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Anonymous");
                        sendNotification("Name set to: Anonymous", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Anonymous."
            }),
            new ButtonInfo({
                buttonText: "MavVGamer",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("MavVGamer"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("MavVGamer");
                        sendNotification("Name set to: MavVGamer", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to MavVGamer."
            }),
            new ButtonInfo({
                buttonText: "rasp",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("rasp"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("rasp");
                        sendNotification("Name set to: rasp", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to rasp."
            }),
            new ButtonInfo({
                buttonText: "byte",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("byte"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("byte");
                        sendNotification("Name set to: byte", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to byte."
            }),
            new ButtonInfo({
                buttonText: "Femboy",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Femboy"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Femboy");
                        sendNotification("Name set to: Femboy", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Femboy."
            }),
            new ButtonInfo({
                buttonText: "Big Macs",
                method: () => {
                    try {
                        const netplayer = NetPlayer.method("get_localPlayer").invoke();
                        if (!netplayer) return;
                        netplayer.method("set_displayName").invoke(Il2Cpp.string("Big Macs"));
                        netplayer.field("cache_displayName").value = Il2Cpp.string("Big Macs");
                        sendNotification("Name set to: Big Macs", false);
                    } catch (e) { console.error("name change error:", e); }
                },
                isTogglable: false,
                toolTip: "Sets your display name to Big Macs."
            }),
        ],

        [ // Credits [18]
            new ButtonInfo({
                buttonText: "Exit Credits",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "That1dev",
                method: () => {
                },
                isTogglable: false,
                toolTip: "That1dev Made the full menu"
            }),
            new ButtonInfo({
                buttonText: "playfab.xr",
                method: () => {
                },
                isTogglable: false,
                toolTip: "playfab.xr made menu work standalone"
            }),
			new ButtonInfo({
                buttonText: "turquoiz200FPS",
                method: () => {
                },
                isTogglable: false,
                toolTip: "validation method and qol"
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Room Mods",
                method: () => { currentCategory = 0; currentPage = 0; },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Lock Room",
                method: () => {
                    spamKickTimer -= deltaTime;
                    if (spamKickTimer <= 0) {
                        kickAllPlayers();
                        spamKickTimer = 0.2;
                    }
                },
                isTogglable: true,
                toolTip: "First, kicks everyone, and then makes it so nobody can join the room."
            }),
            new ButtonInfo({
                buttonText: "Reconnect",
                method: () => {
                },
                isTogglable: false,
                toolTip: "Disconnects and reconnects you to the current room."
            }),
            new ButtonInfo({
    buttonText: "Fling Near Computer and selling machine",
    method: () => {},
    isTogglable: true,
    toolTip: "Flings players who get near Friends Machine or Computer",
    enableMethod: () => { flingNearMachinesEnabled = true; },
    disableMethod: () => { flingNearMachinesEnabled = false; }
}),
        ]
    ];

    let buttonMap: Map<string, ButtonInfo> = new Map();
    buttons.flat().forEach(button => {
        buttonMap.set(button.buttonText, button);
    });

    function getIndex(buttonText: string): ButtonInfo | undefined {
        return buttonMap.get(buttonText);
    }

    function resolveButton(goName: string): ButtonInfo | undefined {
        if (!goName) return undefined;
        let btn = buttonMap.get(goName);
        if (btn) return btn;
        const stripped = goName.replace(/<[^>]+>/g, "").trim();
        if (stripped && stripped !== goName) {
            btn = buttonMap.get(stripped);
            if (btn) return btn;
        }
        for (const [key, value] of buttonMap) {
            if (key.replace(/<[^>]+>/g, "").trim() === stripped) return value;
        }
        return undefined;
    }

    function executeMenuButton(button: ButtonInfo) {
        if (button.isTogglable) {
            button.enabled = !button.enabled;
            try {
                if (button.enabled) {
                    if (button.enableMethod) button.enableMethod();
                    else if (button.method) button.method();
                    if (button.toolTip && buttonNotifications)
                        sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> " + button.toolTip, false);
                } else {
                    if (button.disableMethod) button.disableMethod();
                    if (button.toolTip && buttonNotifications)
                        sendNotification("<color=grey>[</color><color=red>DISABLE</color><color=grey>]</color> " + button.toolTip, false);
                }
            } catch (e) {
                console.error(`[MenuButton] action failed for '${button.buttonText}':`, e);
            }
        } else {
            try {
                if (button.toolTip && buttonNotifications)
                    sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> " + button.toolTip, false);
                button.method?.();
            } catch (e) {
                console.error(`[MenuButton] action failed for '${button.buttonText}':`, e);
            }
        }
        reloadMenu(true);
    }

    const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function (collider: any) {
        const goName = getMenuButtonKey(this);

        if (goName && referenceCollider && !referenceCollider.isNull?.()) {
            try {
            if (menuCollidersMatch(collider, referenceCollider)) {
                const _time = Time.method("get_time").invoke();

                if (_time > buttonClickDelay) {
                    buttonClickDelay = _time + 0.2;

                    const button = resolveButton(goName);
                    playButtonSound();
                    if (button) {
                        executeMenuButton(button);
                    } else {
                        console.warn(`[MenuButton] no match for '${goName}'`);
                    }
                }
            }
            } catch (e) {
                console.error("[MenuButton] OnTriggerEnter failed:", e);
            }
            return;
        }

        return ButtonActivation.invokeRaw(this, collider);
    };

    //const VRRigOnDisable = VRRig.method("OnDisable");
    //VRRigOnDisable.implementation = function () {
    //    if (this.handle.equals(LocalRig.handle)) {
    //        return;
    //    }
//
    //    return this.method("OnDisable").invoke();
    //};
//
    //const SendReport = GorillaNot.method("SendReport");
    //SendReport.implementation = function () {
    //    return;
    //}

    // Custom boards
    //{
    //    let boardIndex = 0;
    //    const forest = getTransform(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom"));
    //    const childCount = forest.method("get_childCount").invoke();
//
    //    for (let i = 0; i < childCount; i++) {
    //        const child = forest.method("GetChild").invoke(i);
    //        const gameObject = child.method("get_gameObject").invoke();
    //        if (gameObject.method("get_name").invoke().toString().includes("UnityTempFile")) {
    //            boardIndex++;
    //            if (boardIndex == 5) {
    //                boardMaterial = Material.new();
    //                Material.method("CreateWithShader").invoke(boardMaterial, UberShader);
//
    //                getComponent(gameObject, Renderer).method("set_material").invoke(boardMaterial);
    //                boardMaterial.method("set_color").invoke(bgColor);
    //                break;
    //            }
    //        }
    //    }
//
    //    const motdTitle = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdHeadingText"), TextMeshPro);
    //    motdTitle.method("set_text").invoke(Il2Cpp.string("Thanks for using ii's Stupid Menu!"));
//
    //    const motdText = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdBodyText"), TextMeshPro);
    //    motdText.method("set_fontSize").invoke(100);
    //    motdText.method("set_text").invoke(Il2Cpp.string(`You are currently using build ${version}. Thank you for supporting me on Patreon, it means a lot! This menu runs completely standalone. I, iiDk, am not responsible for any bans using this menu. If you get banned while using this, it's your responsibility.`));
    //}

        // Stash and Object stuff
    {
        const GBOAnywhere1 = AssemblyCSharp.class("AnimalCompany.GrabbableObject").method("get_allowAttachToBack");
        GBOAnywhere1.implementation = function () {
            const originalValue = GBOAnywhere1.invokeRaw(this); // call OG method
            return allowPutGBO ? true : originalValue;
        }

        const GBOAnywhere2 = AssemblyCSharp.class("AnimalCompany.GrabbableObject").method("get_allowAttachToHip");
        GBOAnywhere2.implementation = function () {
            const originalValue = GBOAnywhere2.invokeRaw(this); // call OG method
            return allowPutGBO ? true : originalValue;
        }

        const GBOAnywhere3 = AssemblyCSharp.class("AnimalCompany.StashMachine.StashMachineActionsUtility").method("CanPerformMove");
        GBOAnywhere3.implementation = function (_state: any, _src: any, _dest: any) {
            if (stashAllowMoves) {
                return true;
            } else {
                return GBOAnywhere3.invokeRaw(this, _state, _src, _dest);
            }
        }

        const EjectItem = AssemblyCSharp.class("AnimalCompany.StashMachine.StashMachineTrashChuteView").method("EjectItem");
        EjectItem.implementation = function (item: any) {
            if (stashDupeEnabled) {
                for (let i = 0; i < ejectDupeAmount; i++) {
                    EjectItem.invokeRaw(this, item);
                }
            } else {
                EjectItem.invokeRaw(this, item);
            }
        };

        const StashQOL = AssemblyCSharp.class("AnimalCompany.StashMachineSecurityKeypad").method("HandleKeyPressed");
        StashQOL.implementation = function (key: any) {
            if(stashQOLFix){
                for (let i = 0; i < 4; i++) {
                    StashQOL.invokeRaw(this, key);
                }
            }
            else{ StashQOL.invokeRaw(this, key); }
        };        
    }

    // Infinite stuff

    {
        const InfJetpack = AssemblyCSharp.class("AnimalCompany.JetpackHandy").method("RPC_UseJetpack");
        InfJetpack.implementation = function () {
            if(infAmmo){
                InfJetpack.invokeRaw(this);
                this.field("_isUsed").value = false;
            }
            else{
                InfJetpack.invokeRaw(this);
            }
        };
    
        const InfFlare = AssemblyCSharp.class("AnimalCompany.FlareGun").method("get_hasAmmo");
        InfFlare.implementation = function () {
            if(infAmmo || rapidFireEnabled) return true;
            return InfFlare.invokeRaw(this);
        };

        const InfZipline = AssemblyCSharp.class("AnimalCompany.ZiplineGun").method("get_isLoaded");
        InfZipline.implementation = function () {
            if(infAmmo || rapidFireEnabled) return true;
            return InfZipline.invokeRaw(this);
        };
    
        const InfAmmoRevolver = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_ammoLoaded");
        InfAmmoRevolver.implementation = function () {
            if(infAmmo || rapidFireEnabled) return 255;
            return InfAmmoRevolver.invokeRaw(this);
        }
        // Hooks AnimalCompany.Revolver — covers BOTH the normal revolver and the gold revolver
        // (they share the same class). ArenaRevolver uses AnimalCompany.AutoReloadGun and is unaffected.
        //
        // NOTE: get_isHammerCocked is a read-only getter. Spoofing it isn't enough because
        // the game writes the backing field to false after each shot. We also need OnUpdate
        // and HandleUse to force _isHammerCocked back to true every frame/use when the
        // cheat is active — same pattern as the shotgun noShotgunCooldown hooks.
        const CockedRevolver = AssemblyCSharp.class("AnimalCompany.Revolver").method("get_isHammerCocked");
        CockedRevolver.implementation = function () {
            if (infAmmo || rapidFireEnabled) return true;
            return CockedRevolver.invokeRaw(this);
        }

        try {
            const RevolverOnUpdate = AssemblyCSharp.class("AnimalCompany.Revolver").method("OnUpdate");
            RevolverOnUpdate.implementation = function () {
                const ret = RevolverOnUpdate.invokeRaw(this);
                if (infAmmo || rapidFireEnabled) {
                    try { this.field("_isHammerCocked").value = true; } catch(_) {}
                    try { this.field("_ammoLoaded").value = 255; } catch(_) {}
                    try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                    try { this.field("_triggerUseCooldown").value = 0.0; } catch(_) {}
                    try { this.field("_secondaryUseCooldown").value = 0.0; } catch(_) {}
                    try { this.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                }
                return ret;
            };
            console.log("[revolver] OnUpdate hook installed");
        } catch(e) { console.error("[revolver] OnUpdate hook failed:", e); }

        try {
            const RevolverHandleTriggerUse = AssemblyCSharp.class("AnimalCompany.Revolver").method("HandleTriggerUse");
            RevolverHandleTriggerUse.implementation = function () {
                if (infAmmo || rapidFireEnabled) {
                    try { this.field("_isHammerCocked").value = true; } catch(_) {}
                    try { this.field("_ammoLoaded").value = 255; } catch(_) {}
                    try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                    try { this.field("_triggerUseCooldown").value = 0.0; } catch(_) {}
                    try { this.field("_secondaryUseCooldown").value = 0.0; } catch(_) {}
                }
                const ret = RevolverHandleTriggerUse.invokeRaw(this);
                if (infAmmo || rapidFireEnabled) {
                    try { this.field("_isHammerCocked").value = true; } catch(_) {}
                    try { this.field("_hammerPullbackAmount").value = 1.0; } catch(_) {}
                }
                return ret;
            };
            console.log("[revolver] HandleTriggerUse hook installed");
        } catch(e) { console.error("[revolver] HandleTriggerUse hook failed:", e); }

        const InfAmmoRevolverArena = AssemblyCSharp.class("AnimalCompany.AutoReloadGun").method("get__ammoLeft");
        InfAmmoRevolverArena.implementation = function () {
            if(infAmmo || rapidFireEnabled) return 255;
            return InfAmmoRevolverArena.invokeRaw(this);
        }
    
        const ShotgunInfAmmo = AssemblyCSharp.class("AnimalCompany.Shotgun").method("get__ammoLeft");
        ShotgunInfAmmo.implementation = function () {
            if(infAmmo || rapidFireEnabled) return 255;
            return ShotgunInfAmmo.invokeRaw(this);
        }

        try {
            const ShotgunOnUpdate = AssemblyCSharp.class("AnimalCompany.Shotgun").method("OnUpdate");
            ShotgunOnUpdate.implementation = function () {
                const ret = ShotgunOnUpdate.invokeRaw(this);
                if (noShotgunCooldown || rapidFireEnabled) {
                    try { this.field("_loadedState").value = 1; } catch(_) {}
                    try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                }
                return ret;
            };
            console.log("[shotgun] OnUpdate hook installed");
        } catch(e) { console.error("[shotgun] OnUpdate hook failed:", e); }

        try {
            const ShotgunHandleUse = AssemblyCSharp.class("AnimalCompany.Shotgun").method("HandleUse");
            ShotgunHandleUse.implementation = function () {
                if (noShotgunCooldown || rapidFireEnabled) {
                    try { this.field("_loadedState").value = 1; } catch(_) {}
                    try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                }
                return ShotgunHandleUse.invokeRaw(this);
            };
            console.log("[shotgun] HandleUse hook installed");
        } catch(e) { console.error("[shotgun] HandleUse hook failed:", e); }

        try {
            const ShotgunClass = AssemblyCSharp.class("AnimalCompany.Shotgun");
            const shotgunUpdateReload = ShotgunClass.method("UpdateReload");
            if (shotgunUpdateReload && !shotgunUpdateReload.handle.isNull()) {
                shotgunUpdateReload.implementation = function() {
                    if (noShotgunCooldown || rapidFireEnabled) {
                        try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                    }
                    return shotgunUpdateReload.invokeRaw(this);
                };
                console.log("[shotgun] UpdateReload hook installed");
            }
        } catch(_) {}

        try {
            const ShotgunClass = AssemblyCSharp.class("AnimalCompany.Shotgun");
            const shotgunReloadUpdate = ShotgunClass.method("ReloadUpdate");
            if (shotgunReloadUpdate && !shotgunReloadUpdate.handle.isNull()) {
                shotgunReloadUpdate.implementation = function() {
                    if (noShotgunCooldown || rapidFireEnabled) {
                        try { this.field("_reloadTimer").value = 0.0; } catch(_) {}
                    }
                    return shotgunReloadUpdate.invokeRaw(this);
                };
                console.log("[shotgun] ReloadUpdate hook installed");
            }
        } catch(_) {}

        try {
            const ShotgunCheckReload = AssemblyCSharp.class("AnimalCompany.Shotgun").method("CheckToAutoReload");
            ShotgunCheckReload.implementation = function () {
                if (noShotgunCooldown || rapidFireEnabled) return;
                return ShotgunCheckReload.invokeRaw(this);
            };
            console.log("[shotgun] CheckToAutoReload hook installed");
        } catch(e) { console.error("[shotgun] CheckToAutoReload hook failed:", e); }

        try {
            const ShotgunResetHeldReload = AssemblyCSharp.class("AnimalCompany.Shotgun").method("ResetHeldReload");
            ShotgunResetHeldReload.implementation = function () {
                if (noShotgunCooldown || rapidFireEnabled) return;
                return ShotgunResetHeldReload.invokeRaw(this);
            };
            console.log("[shotgun] ResetHeldReload hook installed");
        } catch(e) { console.error("[shotgun] ResetHeldReload hook failed:", e); }

        // --- Mining Laser hooks ---
        try {
            const MiningLaserUpdate = AssemblyCSharp.class("AnimalCompany.MiningLaser").method("OnUpdate");
            MiningLaserUpdate.implementation = function () {
                const ret = MiningLaserUpdate.invokeRaw(this);
                if (noLaserOverheat) {
                    try { this.field("_overheatPenaltyDelay").value = 0.0; } catch(_) {}
                    try { this.field("_regenDelay").value = 0.0; } catch(_) {}
                    try { this.field("_hitInterval").value = 0.0; } catch(_) {}
                    try { this.field("__didOverheat").value = false; } catch(_) {}
                    try { this.field("__fuel").value = this.field("_maxFuel").value; } catch(_) {}
                    try { this.field("_consumedFuelPerSecond").value = 0; } catch(_) {}
                    try { this.field("_regenFuelPerSecond").value = 999; } catch(_) {}
                }
                if (infiniteLaserRange) {
                    try { this.field("_maxDistance").value = 9999.0; } catch(_) {}
                }
                return ret;
            };
            console.log("[mininglaser] OnUpdate hook installed");
        } catch(e) { console.error("[mininglaser] OnUpdate hook failed:", e); }
        // --- End Mining Laser hooks ---

        // --- Mom Boss stay active hook ---
        try {
            const MomBossFixedUpdate = AssemblyCSharp.class("AnimalCompany.MomBossController").method("FixedUpdateNetwork");
            MomBossFixedUpdate.implementation = function () {
                try { this.field("isLocalWithinActiveRange").value = true; } catch(_) {}
                try { this.field("_canBecomeStateAuthority").value = true; } catch(_) {}
                try { this.field("_n_timerToResetGame").value = 99999.0; } catch(_) {}
                return MomBossFixedUpdate.invokeRaw(this);
            };
            console.log("[momboss] FixedUpdateNetwork hook installed");
        } catch(e) { console.error("[momboss] FixedUpdateNetwork hook failed:", e); }
        try {
            const MomBossExitedArea = AssemblyCSharp.class("AnimalCompany.MomBossController").method("OnExitedArea");
            MomBossExitedArea.implementation = function () { /* block */ };
            console.log("[momboss] OnExitedArea hook installed");
        } catch(e) { console.error("[momboss] OnExitedArea hook failed:", e); }
        try {
            const MomBossResetGame = AssemblyCSharp.class("AnimalCompany.MomBossController").method("RPC_ResetGame");
            MomBossResetGame.implementation = function () { /* block */ };
            console.log("[momboss] RPC_ResetGame hook installed");
        } catch(e) { console.error("[momboss] RPC_ResetGame hook failed:", e); }
        try {
            const MomBossHandleLocal = AssemblyCSharp.class("AnimalCompany.MomBossController").method("HandleLocalWithinActiveRangeChanged");
            MomBossHandleLocal.implementation = function () { /* block */ };
            console.log("[momboss] HandleLocalWithinActiveRangeChanged hook installed");
        } catch(e) { console.error("[momboss] HandleLocalWithinActiveRangeChanged hook failed:", e); }
        try {
            const MomBossUpdatePlayers = AssemblyCSharp.class("AnimalCompany.MomBossController").method("UpdatePlayersInArea");
            MomBossUpdatePlayers.implementation = function () { /* block so fake player stays in list */ };
            console.log("[momboss] UpdatePlayersInArea hook installed");
        } catch(e) { console.error("[momboss] UpdatePlayersInArea hook failed:", e); }
        // --- End Mom Boss hook ---


        //const ShotgunInfAmmo2 = AssemblyCSharp.class("AnimalCompany.Shotgun").method("ResetHeldReload");
        //ShotgunInfAmmo2.implementation = function () {
        //    if(infAmmo){
        //        return false;
        //    }
        //}

        const RPGInfAmmo = AssemblyCSharp.class("AnimalCompany.RPG").method("get_loadedState");
        RPGInfAmmo.implementation = function () {
            if(infAmmo) return 1;
            return RPGInfAmmo.invokeRaw(this);
        }

        try {
            const RPGShoot = AssemblyCSharp.class("AnimalCompany.RPG").method("Shoot");
            RPGShoot.implementation = function () {
                RPGShoot.invokeRaw(this);
                if(infAmmo) this.field("_loadedState").value = 1;
            }
        } catch(_) {}

        try {
            const RPGReload = AssemblyCSharp.class("AnimalCompany.RPG").method("RPC_Reload");
            RPGReload.implementation = function () {
                if(infAmmo) return;
                RPGReload.invokeRaw(this);
            }
        } catch(_) {}
    }

    // Misc
    {
        const ArenaItemKillerGoByeBye = AssemblyCSharp.class("AnimalCompany.ArenaItemKiller").method("DespawnIfNecessary");
        ArenaItemKillerGoByeBye.implementation = function () {
            return false;
        }

        const BackpackDupe = AssemblyCSharp.class("AnimalCompany.BackpackItem").method("RemoveItem");
        BackpackDupe.implementation = function (key: any) {
            if(backpackDupeEnabled){
                return false;
            }
            else{ this.method("RemoveItem").invoke(key); }
        } 
    }

    function updateInput() {
        try {
            const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4);
            const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5);
            if (!leftDevice || leftDevice.isNull() || !rightDevice || rightDevice.isNull()) return;
            const leftValid = leftDevice.method("get_isValid").invoke();
            const rightValid = rightDevice.method("get_isValid").invoke();
            if (!leftValid || !rightValid) return;
            const outBool = Il2Cpp.alloc(1);
            leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
            leftPrimary = outBool.readU8() !== 0;
            leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
            leftSecondary = outBool.readU8() !== 0;
            leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
            leftGrab = outBool.readU8() !== 0;
            leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
            leftTrigger = outBool.readU8() !== 0;
            leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
            leftStick = outBool.readU8() !== 0;
            rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
            rightPrimary = outBool.readU8() !== 0;
            rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
            rightSecondary = outBool.readU8() !== 0;
            rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
            rightTrigger = outBool.readU8() !== 0;
            rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
            rightGrab = outBool.readU8() !== 0;
            rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
            rightStick = outBool.readU8() !== 0;
            try {
    const vec2Method = getVec2FeatureMethod(leftDevice);
    if (vec2Method) {
        const outVec2 = Il2Cpp.alloc(8);
        const axisUsage = CommonUsages.field("primary2DAxis").value;

        vec2Method.invoke.call(leftDevice, axisUsage, outVec2);
        leftStickX = outVec2.readFloat();
        leftStickY = outVec2.add(4).readFloat();

        vec2Method.invoke.call(rightDevice, axisUsage, outVec2);
        rightStickX = outVec2.readFloat();
        rightStickY = outVec2.add(4).readFloat();

        Il2Cpp.free(outVec2);
    }
} catch (_) {}
            Il2Cpp.free(outBool);
        } catch (e) {
            // Device not ready this frame, skip silently
        }
    }

    function stabilizeMobInstance(mob: any, fallbackPos: any = null) {
        try {
            if (!mob || mob.isNull?.()) return;
            let go = mob;
            try {
                const maybeGo = mob.method("get_gameObject").invoke();
                if (maybeGo && !maybeGo.isNull?.()) go = maybeGo;
            } catch(_) {}
            try { go.method("SetActive").invoke(true); } catch(_) {}
            try { mob.method("set_enabled").invoke(true); } catch(_) {}
            try {
                const killer = go.method("GetComponentInChildren", 0).inflate(AssemblyCSharp.class("AnimalCompany.ArenaItemKiller")).invoke();
                if (killer && !killer.isNull?.()) {
                    try { killer.method("set_enabled").invoke(false); } catch(_) {}
                    try { killer.field("_isEnabled").value = false; } catch(_) {}
                }
            } catch(_) {}
            if (fallbackPos) {
                try {
                    const tf = getTransform(go);
                    const cur = tf.method("get_position").invoke();
                    if ((cur.field("y").value) < -5000) tf.method("set_position").invoke(fallbackPos);
                } catch(_) {}
            }
        } catch(_) {}
    }

    const resolveGTPlayerTickMethod = (): any => {
        const classes = [GTPlayerClass, PCClass];
        const names = ["OnLateUpdate", "LateUpdate", "OnUpdate", "Update"];
        for (const cls of classes) {
            for (const name of names) {
                try {
                    const method = cls.method(name);
                    if (method) return method;
                } catch (_) {}
            }
        }
        return null;
    };

    // ==========================================
// MOUSE.JS EXACT CLONING PORT
// ==========================================
let cloneSpawnActive = false;
let cloneSpawnPhase = 0;
let cloneSpawnSavedPos: any = null;
let cloneSpawnTimer = 0;

// Clone Line / Clone Circle spawn sequence state
let cloneLineSpawnActive = false;
let cloneLineSpawnPhase = 0;
let cloneLineSpawnSavedPos: any = null;
let cloneLineSpawnTimer = 0;

let cloneCircleSpawnActive = false;
let cloneCircleSpawnPhase = 0;
let cloneCircleSpawnSavedPos: any = null;
let cloneCircleSpawnTimer = 0;

let cloneOrbiters: any[] = [];
let cloneOrbitActive = false;

let cloneFollowTransforms: any[] = [];
let cloneFollowActive = false;
let cloneFollowDelay = 0;
let cloneLineMode = false;

let triggerCloneSpawnActive = false;
let triggerCloneSpawnCooldown = 0;
let cloneFrozenTransforms: any[] = [];
let cloneGunCooldown = 0;
let cloneGunClones: any[] = [];

// Helpers
const NULL2 = Il2Cpp.alloc(8);
NULL2.writePointer(NULL);

function extractVec(v: any) { return v ? [v.field("x").value, v.field("y").value, v.field("z").value] : null; }
function extractQuat(q: any) { return q ? [q.field("x").value, q.field("y").value, q.field("z").value, q.field("w").value] : null; }

function rbcTeleportPlayer(position: any) {
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) return;
        const currentPos = getTransform(_bc).method("get_position").invoke();
        const diff = Vector3.method("op_Subtraction", 2).invoke(position, currentPos);
        const rootPos = getTransform(getGTPlayer()).method("get_position").invoke();
        const newRoot = Vector3.method("op_Addition", 2).invoke(rootPos, diff);
        getTransform(getGTPlayer()).method("set_position").invoke(newRoot);
    } catch (e) { console.error("[RBC] rbcTeleportPlayer: " + e); }
}

function startCloneSpawnSequence() {
    if (cloneSpawnActive) return;
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) {
            console.error("[RBC] Not initialized yet");
            return;
        }
        cloneSpawnSavedPos = getTransform(_bc).method("get_position").invoke();
        cloneSpawnActive = true;
        cloneSpawnPhase = 0;
        cloneSpawnTimer = 0;
    } catch (e) { console.error("[RBC] startCloneSpawnSequence: " + e); }
}

function updateCloneSpawnSequence() {
    if (!cloneSpawnActive) return;
    try {
        if (cloneSpawnPhase === 0) {
            rbcTeleportPlayer(Vector3.field("zeroVector").value);
            cloneSpawnPhase = 1;
            cloneSpawnTimer = 25;
        } else if (cloneSpawnPhase === 1) {
            cloneSpawnTimer--;
            if (cloneSpawnTimer <= 0) {
                spawnClones();
                cloneSpawnPhase = 2;
                cloneSpawnTimer = 10;
            }
        } else if (cloneSpawnPhase === 2) {
            cloneSpawnTimer--;
            if (cloneSpawnSavedPos) {
                rbcTeleportPlayer(cloneSpawnSavedPos);
            }
            cloneSpawnActive = false;
            cloneSpawnSavedPos = null;
        }
    } catch (e) { console.error("[RBC] updateCloneSpawnSequence: " + e); }
}

function spawnSingleFrozenClone() {
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) return;
        const bodyTf = getTransform(_bc);
        const myPos = extractVec(bodyTf.method("get_position").invoke());
        const headTransform = getTransform(safeField(getInstance(), "headCollider"));
        const myRot = extractQuat(headTransform.method("get_rotation").invoke());

        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) { return; }
        const runner = inst.method("get_runner").invoke();
        if (!runner || runner.isNull()) { return; }
        const localPlayer = runner.method("get_LocalPlayer").invoke();
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        let netPlayerObj = null;
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.indexOf("NetworkedPlayer") !== -1 || desc.indexOf("NetPlayer") !== -1) {
                    netPlayerObj = source.method("WaitForResult").invoke();
                    if (netPlayerObj && !netPlayerObj.isNull()) { break; }
                    netPlayerObj = null;
                }
            } catch (e) {}
        }
        if (!netPlayerObj || netPlayerObj.isNull()) { return; }
        
        let spawnMethod = null;
        const allMethods = runner.class.methods;
        for (let mi = 0; mi < allMethods.length; mi++) {
            const m = allMethods[mi];
            if (m.name === "Spawn" && m.parameterCount === 6 && !m.isGeneric && m.parameters[0].type.name === "Fusion.NetworkObject") {
                spawnMethod = m;
                break;
            }
        }
        if (!spawnMethod) { return; }
        
        const makeZero = (t: any): any => {
            if (t.class.isEnum || t.isPrimitive) return 0;
            if (!t.class.isValueType) return NULL2;
            const f = t.class.fields.filter((x: any) => !x.isStatic);
            return f.length === 0 ? 0 : f.map((x: any) => makeZero(x.type));
        };
        const buildNull = (nt: any, hv: any, v: any): any => {
            return nt.class.fields.filter((f: any) => !f.isStatic).map((f: any) => {
                const n = f.name.toLowerCase();
                if (n.includes("hasvalue")) return hv ? 1 : 0;
                if (n === "value") return hv ? v : makeZero(f.type);
                return makeZero(f.type);
            });
        };
        const norm = (t: any, v: any): any => {
            if (typeof v === "boolean") return v ? 1 : 0;
            if (v instanceof Il2Cpp.ValueType) {
                return t.class.fields.filter((f: any) => !f.isStatic).map((f: any) => norm(f.type, f.bind(v).value));
            }
            return v;
        };

        const rootPos = bodyTf.method("get_position").invoke();
        const headFwd = headTransform.method("get_forward").invoke();
        // Move spawn position 1.5 meters in front of the player so they don't overlap
        const fwdOffset = Vector3.method("op_Multiply", 2).invoke(headFwd, 1.5);
        fwdOffset.field("y").value = 0; // Keep it on the ground
        const vPos = Vector3.method("op_Addition", 2).invoke(rootPos, fwdOffset);
        const qRot = headTransform.method("get_rotation").invoke();
        const pa = buildNull(spawnMethod.parameters[1].type, true, norm(vPos.type, vPos));
        const ra = buildNull(spawnMethod.parameters[2].type, true, norm(qRot.type, qRot));
        const aa = buildNull(spawnMethod.parameters[3].type, true, norm(localPlayer.type, localPlayer));
        const oa = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL2;
        
        const spawnedObj = spawnMethod.bind(runner).invoke(netPlayerObj, pa, ra, aa, oa, 0);

        if (spawnedObj && !spawnedObj.isNull()) {
            const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
            const spawnedNetPlayer = spawnedObj.method("GetComponent", 1).inflate(NetPlayerClass).invoke();
            const localNetPlayer = NetPlayerClass.method("get_localPlayer").invoke();
            
            if (spawnedNetPlayer && !spawnedNetPlayer.isNull() && localNetPlayer && !localNetPlayer.isNull()) {
                const rigDataSnapshot = localNetPlayer.method("get_rigData").invoke();
                const volSnapshot = localNetPlayer.method("get_playerVolume").invoke();
                
                let myHandRight = null; let myHandLeft = null; let myHead = null;
                try { myHandRight = localNetPlayer.field("handRight").value; } catch (e) {}
                try { myHandLeft = localNetPlayer.field("handLeft").value; } catch (e) {}
                try { myHead = localNetPlayer.field("head").value; } catch (e) {}

                cloneFrozenTransforms.push({
                    netPlayer: spawnedNetPlayer,
                    transform: spawnedNetPlayer.method("get_transform").invoke(),
                    pos: myPos,
                    rot: myRot,
                    rigData: rigDataSnapshot,
                    volume: volSnapshot,
                    handRPos: extractVec((myHandRight && !myHandRight.isNull()) ? myHandRight.method("get_position").invoke() : null),
                    handRRot: extractQuat((myHandRight && !myHandRight.isNull()) ? myHandRight.method("get_rotation").invoke() : null),
                    handLPos: extractVec((myHandLeft && !myHandLeft.isNull()) ? myHandLeft.method("get_position").invoke() : null),
                    handLRot: extractQuat((myHandLeft && !myHandLeft.isNull()) ? myHandLeft.method("get_rotation").invoke() : null),
                    headPos: extractVec((myHead && !myHead.isNull()) ? myHead.method("get_position").invoke() : null),
                    headRot: extractQuat((myHead && !myHead.isNull()) ? myHead.method("get_rotation").invoke() : null)
                });
            }
        }
    } catch (e) { console.error("[RBC] spawnSingleFrozenClone: " + e); }
}

function setupVoiceForClone(spawnedObj: any) {
    if (!spawnedObj || spawnedObj.isNull()) return;
    try {
        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        const spawnedNetPlayer = spawnedObj.method("GetComponent", 1).inflate(NetPlayerClass).invoke();
        
        if (spawnedNetPlayer && !spawnedNetPlayer.isNull()) {
            const voiceNetObj = spawnedNetPlayer.field("voiceNetworkObject").value;
            if (voiceNetObj && !voiceNetObj.isNull()) {
                voiceNetObj.method("SetupSpeaker").invoke();
            }
        }
    } catch (e) { console.error("[RBC] setupVoiceForClone: " + e); }
}
function spawnCloneAtPosition(targetPos: any, useVoice: boolean = true) {
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) return;
        const headTransform = getTransform(safeField(getInstance(), "headCollider"));
        const myRot = extractQuat(headTransform.method("get_rotation").invoke());

        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) { return; }
        const runner = inst.method("get_runner").invoke();
        if (!runner || runner.isNull()) { return; }
        const localPlayer = runner.method("get_LocalPlayer").invoke();
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        let netPlayerObj = null;
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.indexOf("NetworkedPlayer") !== -1 || desc.indexOf("NetPlayer") !== -1) {
                    netPlayerObj = source.method("WaitForResult").invoke();
                    if (netPlayerObj && !netPlayerObj.isNull()) { break; }
                    netPlayerObj = null;
                }
            } catch (e) {}
        }
        if (!netPlayerObj || netPlayerObj.isNull()) { return; }

        let spawnMethod = null;
        const allMethods = runner.class.methods;
        for (let mi = 0; mi < allMethods.length; mi++) {
            const m = allMethods[mi];
            if (m.name === "Spawn" && m.parameterCount === 6 && !m.isGeneric && m.parameters[0].type.name === "Fusion.NetworkObject") {
                spawnMethod = m;
                break;
            }
        }
        if (!spawnMethod) { return; }

        const makeZero = (t: any): any => {
            if (t.class.isEnum || t.isPrimitive) return 0;
            if (!t.class.isValueType) return NULL2;
            const f = t.class.fields.filter((x: any) => !x.isStatic);
            return f.length === 0 ? 0 : f.map((x: any) => makeZero(x.type));
        };
        const buildNull = (nt: any, hv: any, v: any): any => {
            return nt.class.fields.filter((f: any) => !f.isStatic).map((f: any) => {
                const n = f.name.toLowerCase();
                if (n.includes("hasvalue")) return hv ? 1 : 0;
                if (n === "value") return hv ? v : makeZero(f.type);
                return makeZero(f.type);
            });
        };
        const norm = (t: any, v: any): any => {
            if (typeof v === "boolean") return v ? 1 : 0;
            if (v instanceof Il2Cpp.ValueType) {
                return t.class.fields.filter((f: any) => !f.isStatic).map((f: any) => norm(f.type, f.bind(v).value));
            }
            return v;
        };

        const qRot = headTransform.method("get_rotation").invoke();
        const pa = buildNull(spawnMethod.parameters[1].type, true, norm(targetPos.type, targetPos));
        const ra = buildNull(spawnMethod.parameters[2].type, true, norm(qRot.type, qRot));
        const aa = buildNull(spawnMethod.parameters[3].type, true, norm(localPlayer.type, localPlayer));
        const oa = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL2;

        const spawnedObj = spawnMethod.bind(runner).invoke(netPlayerObj, pa, ra, aa, oa, 0);

        if (spawnedObj && !spawnedObj.isNull()) {
            const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
            const spawnedNetPlayer = spawnedObj.method("GetComponent", 1).inflate(NetPlayerClass).invoke();

            if (spawnedNetPlayer && !spawnedNetPlayer.isNull()) {
                const posArr = extractVec(targetPos);
                
                cloneGunClones.push({
                    netPlayer: spawnedNetPlayer,
                    transform: spawnedNetPlayer.method("get_transform").invoke(),
                    pos: posArr,
                    rot: myRot
                });

                if (useVoice) {
                    try {
                        let liveMicClip = null;
                        try {
                            const lPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer").method("get_localPlayer").invoke();
                            if (lPlayer && !lPlayer.isNull()) {
                                const myRecorder = lPlayer.field("_recorder").value;
                                if (myRecorder && !myRecorder.isNull()) {
                                    const inputSource = myRecorder.field("inputSource").value;
                                    if (inputSource && !inputSource.isNull()) {
                                        try { liveMicClip = inputSource.method("get_MicAudioClip").invoke(); } 
                                        catch (e) {
                                            try { liveMicClip = inputSource.field("mic").value; } catch (e2) {}
                                        }
                                    }
                                }
                            }
                        } catch (e) { }

                        if (!liveMicClip || liveMicClip.isNull()) {
                            const AudioModule = Il2Cpp.domain.assembly("UnityEngine.AudioModule").image;
                            const Microphone = AudioModule.class("UnityEngine.Microphone");
                            const devicesStrArray = Microphone.method("get_devices").invoke();
                            let micName = null;
                            try { micName = devicesStrArray.get ? devicesStrArray.get(0) : devicesStrArray[0]; } catch(e) {}
                            liveMicClip = Microphone.method("Start").invoke(micName, true, 10, 44100);
                        }

                        if (liveMicClip && !liveMicClip.isNull()) {
                            const AudioModule = Il2Cpp.domain.assembly("UnityEngine.AudioModule").image;
                            const AudioSourceClass = AudioModule.class("UnityEngine.AudioSource");
                            const go = spawnedObj.method("get_gameObject").invoke();
                            const audioSource = go.method("AddComponent", 1).inflate(AudioSourceClass).invoke();
                            audioSource.method("set_clip").invoke(liveMicClip);
                            audioSource.method("set_loop").invoke(true);
                            audioSource.method("set_spatialBlend").invoke(1.0);
                            audioSource.method("set_maxDistance").invoke(20.0);
                            audioSource.method("set_rolloffMode").invoke(1); // Logarithmic
                            audioSource.method("Play").invoke();
                        }
                    } catch (e) { console.error("[RBC] voice inject gun: " + e); }
                }
            }
        }

    } catch (e) { console.error("[RBC] spawnCloneAtPosition: " + e); }
}

function spawnClones() {
    try {
        const rot = Quaternion.method("get_identity").invoke();
        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) { return; }
        const runner = inst.method("get_runner").invoke();
        if (!runner || runner.isNull()) { return; }
        const localPlayer = runner.method("get_LocalPlayer").invoke();
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        let netPlayerObj = null;
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.indexOf("NetworkedPlayer") !== -1 || desc.indexOf("NetPlayer") !== -1) {
                    netPlayerObj = source.method("WaitForResult").invoke();
                    if (netPlayerObj && !netPlayerObj.isNull()) { break; }
                    netPlayerObj = null;
                }
            } catch (e) {}
        }
        if (!netPlayerObj || netPlayerObj.isNull()) { return; }
        
        let spawnMethod = null;
        const allMethods = runner.class.methods;
        for (let mi = 0; mi < allMethods.length; mi++) {
            const m = allMethods[mi];
            if (m.name === "Spawn" && m.parameterCount === 6 && !m.isGeneric && m.parameters[0].type.name === "Fusion.NetworkObject") {
                spawnMethod = m;
                break;
            }
        }
        if (!spawnMethod) { return; }
        const makeZero = (t: any): any => {
            if (t.class.isEnum || t.isPrimitive) return 0;
            if (!t.class.isValueType) return NULL2;
            const f = t.class.fields.filter((x: any) => !x.isStatic);
            return f.length === 0 ? 0 : f.map((x: any) => makeZero(x.type));
        };
        const buildNull = (nt: any, hv: any, v: any): any => {
            return nt.class.fields.filter((f: any) => !f.isStatic).map((f: any) => {
                const n = f.name.toLowerCase();
                if (n.includes("hasvalue")) return hv ? 1 : 0;
                if (n === "value") return hv ? v : makeZero(f.type);
                return makeZero(f.type);
            });
        };
        const norm = (t: any, v: any): any => {
            if (typeof v === "boolean") return v ? 1 : 0;
            if (v instanceof Il2Cpp.ValueType) {
                return t.class.fields.filter((f: any) => !f.isStatic).map((f: any) => norm(f.type, f.bind(v).value));
            }
            return v;
        };
        for (let c = 0; c < 5; c++) {
            const angle = c / 5 * Math.PI * 2;
            const offsetX = Math.cos(angle) * 2;
            const offsetZ = Math.sin(angle) * 2;
            const spawnPos = Vector3.method("op_Addition", 2).invoke(Vector3.field("zeroVector").value, [offsetX, 0, offsetZ]);
            const pa = buildNull(spawnMethod.parameters[1].type, true, norm(spawnPos.type, spawnPos));
            const ra = buildNull(spawnMethod.parameters[2].type, true, norm(rot.type, rot));
            const aa = buildNull(spawnMethod.parameters[3].type, true, norm(localPlayer.type, localPlayer));
            const oa = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL2;
            const spawnedObj = spawnMethod.bind(runner).invoke(netPlayerObj, pa, ra, aa, oa, 0);
            setupVoiceForClone(spawnedObj);
        }
    } catch (e) { console.error("[RBC] spawnClones: " + e); }
}

// ── Clone Line: 20 clones in a line ──
function startCloneLineSpawnSequence() {
    if (cloneLineSpawnActive) return;
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) {
            console.error("[RBC] Not initialized yet");
            return;
        }
        cloneLineSpawnSavedPos = getTransform(_bc).method("get_position").invoke();
        cloneLineSpawnActive = true;
        cloneLineSpawnPhase = 0;
        cloneLineSpawnTimer = 0;
    } catch (e) { console.error("[RBC] startCloneLineSpawnSequence: " + e); }
}

function updateCloneLineSpawnSequence() {
    if (!cloneLineSpawnActive) return;
    try {
        if (cloneLineSpawnPhase === 0) {
            rbcTeleportPlayer(Vector3.field("zeroVector").value);
            cloneLineSpawnPhase = 1;
            cloneLineSpawnTimer = 25;
        } else if (cloneLineSpawnPhase === 1) {
            cloneLineSpawnTimer--;
            if (cloneLineSpawnTimer <= 0) {
                spawnClonesLine();
                cloneLineSpawnPhase = 2;
                cloneLineSpawnTimer = 10;
            }
        } else if (cloneLineSpawnPhase === 2) {
            cloneLineSpawnTimer--;
            if (cloneLineSpawnTimer <= 0) {
                if (cloneLineSpawnSavedPos) {
                    rbcTeleportPlayer(cloneLineSpawnSavedPos);
                }
                cloneLineSpawnActive = false;
                cloneLineSpawnSavedPos = null;
            }
        }
    } catch (e) { console.error("[RBC] updateCloneLineSpawnSequence: " + e); }
}

function spawnClonesLine() {
    try {
        const rot = Quaternion.method("get_identity").invoke();
        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) { return; }
        const runner = inst.method("get_runner").invoke();
        if (!runner || runner.isNull()) { return; }
        const localPlayer = runner.method("get_LocalPlayer").invoke();
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        let netPlayerObj = null;
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.indexOf("NetworkedPlayer") !== -1 || desc.indexOf("NetPlayer") !== -1) {
                    netPlayerObj = source.method("WaitForResult").invoke();
                    if (netPlayerObj && !netPlayerObj.isNull()) { break; }
                    netPlayerObj = null;
                }
            } catch (e) {}
        }
        if (!netPlayerObj || netPlayerObj.isNull()) { return; }

        let spawnMethod = null;
        const allMethods = runner.class.methods;
        for (let mi = 0; mi < allMethods.length; mi++) {
            const m = allMethods[mi];
            if (m.name === "Spawn" && m.parameterCount === 6 && !m.isGeneric && m.parameters[0].type.name === "Fusion.NetworkObject") {
                spawnMethod = m;
                break;
            }
        }
        if (!spawnMethod) { return; }
        const makeZero = (t: any): any => {
            if (t.class.isEnum || t.isPrimitive) return 0;
            if (!t.class.isValueType) return NULL2;
            const f = t.class.fields.filter((x: any) => !x.isStatic);
            return f.length === 0 ? 0 : f.map((x: any) => makeZero(x.type));
        };
        const buildNull = (nt: any, hv: any, v: any): any => {
            return nt.class.fields.filter((f: any) => !f.isStatic).map((f: any) => {
                const n = f.name.toLowerCase();
                if (n.includes("hasvalue")) return hv ? 1 : 0;
                if (n === "value") return hv ? v : makeZero(f.type);
                return makeZero(f.type);
            });
        };
        const norm = (t: any, v: any): any => {
            if (typeof v === "boolean") return v ? 1 : 0;
            if (v instanceof Il2Cpp.ValueType) {
                return t.class.fields.filter((f: any) => !f.isStatic).map((f: any) => norm(f.type, f.bind(v).value));
            }
            return v;
        };
        // 20 clones spaced 1.5m apart in a line along X axis
        for (let c = 0; c < 20; c++) {
            const offsetX = (c - 9.5) * 1.5; // center the line around origin
            const spawnPos = Vector3.method("op_Addition", 2).invoke(Vector3.field("zeroVector").value, [offsetX, 0, 0]);
            const pa = buildNull(spawnMethod.parameters[1].type, true, norm(spawnPos.type, spawnPos));
            const ra = buildNull(spawnMethod.parameters[2].type, true, norm(rot.type, rot));
            const aa = buildNull(spawnMethod.parameters[3].type, true, norm(localPlayer.type, localPlayer));
            const oa = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL2;
            const spawnedObj = spawnMethod.bind(runner).invoke(netPlayerObj, pa, ra, aa, oa, 0);
        }
    } catch (e) { console.error("[RBC] spawnClonesLine: " + e); }
}

// ── Clone Circle: 20 clones in a circle ──
function startCloneCircleSpawnSequence() {
    if (cloneCircleSpawnActive) return;
    try {
        const _bc = safeField(getInstance(), "bodyCollider");
        if (!_bc || !getGTPlayer()) {
            console.error("[RBC] Not initialized yet");
            return;
        }
        cloneCircleSpawnSavedPos = getTransform(_bc).method("get_position").invoke();
        cloneCircleSpawnActive = true;
        cloneCircleSpawnPhase = 0;
        cloneCircleSpawnTimer = 0;
    } catch (e) { console.error("[RBC] startCloneCircleSpawnSequence: " + e); }
}

function updateCloneCircleSpawnSequence() {
    if (!cloneCircleSpawnActive) return;
    try {
        if (cloneCircleSpawnPhase === 0) {
            rbcTeleportPlayer(Vector3.field("zeroVector").value);
            cloneCircleSpawnPhase = 1;
            cloneCircleSpawnTimer = 25;
        } else if (cloneCircleSpawnPhase === 1) {
            cloneCircleSpawnTimer--;
            if (cloneCircleSpawnTimer <= 0) {
                spawnClonesCircle();
                cloneCircleSpawnPhase = 2;
                cloneCircleSpawnTimer = 10;
            }
        } else if (cloneCircleSpawnPhase === 2) {
            cloneCircleSpawnTimer--;
            if (cloneCircleSpawnTimer <= 0) {
                if (cloneCircleSpawnSavedPos) {
                    rbcTeleportPlayer(cloneCircleSpawnSavedPos);
                }
                cloneCircleSpawnActive = false;
                cloneCircleSpawnSavedPos = null;
            }
        }
    } catch (e) { console.error("[RBC] updateCloneCircleSpawnSequence: " + e); }
}

function spawnClonesCircle() {
    try {
        const rot = Quaternion.method("get_identity").invoke();
        const inst = PrefabGen.field("_instance").value;
        if (!inst || inst.isNull()) { return; }
        const runner = inst.method("get_runner").invoke();
        if (!runner || runner.isNull()) { return; }
        const localPlayer = runner.method("get_LocalPlayer").invoke();
        const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
        const count = sources.method("get_Count").invoke();
        let netPlayerObj = null;
        for (let i = 0; i < count; i++) {
            try {
                const source = sources.method("get_Item").invoke(i);
                const desc = source.method("get_Description").invoke().toString();
                if (desc.indexOf("NetworkedPlayer") !== -1 || desc.indexOf("NetPlayer") !== -1) {
                    netPlayerObj = source.method("WaitForResult").invoke();
                    if (netPlayerObj && !netPlayerObj.isNull()) { break; }
                    netPlayerObj = null;
                }
            } catch (e) {}
        }
        if (!netPlayerObj || netPlayerObj.isNull()) { return; }

        let spawnMethod = null;
        const allMethods = runner.class.methods;
        for (let mi = 0; mi < allMethods.length; mi++) {
            const m = allMethods[mi];
            if (m.name === "Spawn" && m.parameterCount === 6 && !m.isGeneric && m.parameters[0].type.name === "Fusion.NetworkObject") {
                spawnMethod = m;
                break;
            }
        }
        if (!spawnMethod) { return; }
        const makeZero = (t: any): any => {
            if (t.class.isEnum || t.isPrimitive) return 0;
            if (!t.class.isValueType) return NULL2;
            const f = t.class.fields.filter((x: any) => !x.isStatic);
            return f.length === 0 ? 0 : f.map((x: any) => makeZero(x.type));
        };
        const buildNull = (nt: any, hv: any, v: any): any => {
            return nt.class.fields.filter((f: any) => !f.isStatic).map((f: any) => {
                const n = f.name.toLowerCase();
                if (n.includes("hasvalue")) return hv ? 1 : 0;
                if (n === "value") return hv ? v : makeZero(f.type);
                return makeZero(f.type);
            });
        };
        const norm = (t: any, v: any): any => {
            if (typeof v === "boolean") return v ? 1 : 0;
            if (v instanceof Il2Cpp.ValueType) {
                return t.class.fields.filter((f: any) => !f.isStatic).map((f: any) => norm(f.type, f.bind(v).value));
            }
            return v;
        };
        // 20 clones evenly spaced in a circle, radius 4
        for (let c = 0; c < 20; c++) {
            const angle = c / 20 * Math.PI * 2;
            const offsetX = Math.cos(angle) * 4;
            const offsetZ = Math.sin(angle) * 4;
            const spawnPos = Vector3.method("op_Addition", 2).invoke(Vector3.field("zeroVector").value, [offsetX, 0, offsetZ]);
            const pa = buildNull(spawnMethod.parameters[1].type, true, norm(spawnPos.type, spawnPos));
            const ra = buildNull(spawnMethod.parameters[2].type, true, norm(rot.type, rot));
            const aa = buildNull(spawnMethod.parameters[3].type, true, norm(localPlayer.type, localPlayer));
            const oa = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL2;
            const spawnedObj = spawnMethod.bind(runner).invoke(netPlayerObj, pa, ra, aa, oa, 0);
        }
    } catch (e) { console.error("[RBC] spawnClonesCircle: " + e); }
}

function startCloneFollow() {
    cloneFollowTransforms = [];
    cloneFollowActive = true;
    try {
        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        Il2Cpp.gc.choose(NetPlayerClass).forEach((plr: any) => {
            try {
                if (plr.method("get_IsMine").invoke()) return;
                const tf = plr.method("get_transform").invoke();
                if (tf && !tf.isNull()) {
                    cloneFollowTransforms.push({ transform: tf, netPlayer: plr });
                }
            } catch (e) {}
        });
    } catch (e) { console.error("[RBC] startCloneFollow: " + e); }
}

function updateCloneFollow() {
    if (!cloneFollowActive || cloneFollowTransforms.length === 0) return;
    try {
        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        const localNetPlayer = NetPlayerClass.method("get_localPlayer").invoke();
        if (!localNetPlayer || localNetPlayer.isNull()) return;
        
        const headTransform = getTransform(safeField(getInstance(), "headCollider"));
        const bodyRot = headTransform.method("get_rotation").invoke();
        const bodyPos = headTransform.method("get_position").invoke();
        const bodyRight = headTransform.method("get_right").invoke();

        let myHandRight = null;
        let myHandLeft = null;
        let myHead = null;
        try { myHandRight = localNetPlayer.field("handRight").value; } catch (e) {}
        try { myHandLeft = localNetPlayer.field("handLeft").value; } catch (e) {}
        try { myHead = localNetPlayer.field("head").value; } catch (e) {}
        
        const count = cloneFollowTransforms.length;
        if (cloneLineMode) {
            for (let i = 0; i < count; i++) {
                try {
                    const offset = (i + 1) * 1;
                    const newPos = Vector3.method("op_Addition", 2).invoke(bodyPos, Vector3.method("op_Multiply", 2).invoke(bodyRight, offset));
                    cloneFollowTransforms[i].transform.method("set_position").invoke(newPos);
                    cloneFollowTransforms[i].transform.method("set_rotation").invoke(bodyRot);
                    try { cloneFollowTransforms[i].netPlayer.method("set_rigData").invoke(localNetPlayer.method("get_rigData").invoke()); } catch (e) {}
                    try { cloneFollowTransforms[i].netPlayer.method("set_playerVolume").invoke(localNetPlayer.method("get_playerVolume").invoke()); } catch (e) {}
                    if (myHandRight && !myHandRight.isNull()) {
                        try {
                            const cloneHandR = cloneFollowTransforms[i].netPlayer.field("handRight").value;
                            if (cloneHandR && !cloneHandR.isNull()) {
                                cloneHandR.method("set_position").invoke(myHandRight.method("get_position").invoke());
                                cloneHandR.method("set_rotation").invoke(myHandRight.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                    if (myHandLeft && !myHandLeft.isNull()) {
                        try {
                            const cloneHandL = cloneFollowTransforms[i].netPlayer.field("handLeft").value;
                            if (cloneHandL && !cloneHandL.isNull()) {
                                cloneHandL.method("set_position").invoke(myHandLeft.method("get_position").invoke());
                                cloneHandL.method("set_rotation").invoke(myHandLeft.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                    if (myHead && !myHead.isNull()) {
                        try {
                            const cloneHead = cloneFollowTransforms[i].netPlayer.field("head").value;
                            if (cloneHead && !cloneHead.isNull()) {
                                cloneHead.method("set_position").invoke(myHead.method("get_position").invoke());
                                cloneHead.method("set_rotation").invoke(myHead.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                } catch (e) {}
            }
        } else {
            for (let i = 0; i < count; i++) {
                try {
                    cloneFollowTransforms[i].transform.method("set_position").invoke(bodyPos);
                    cloneFollowTransforms[i].transform.method("set_rotation").invoke(bodyRot);
                    try { cloneFollowTransforms[i].netPlayer.method("set_rigData").invoke(localNetPlayer.method("get_rigData").invoke()); } catch (e) {}
                    try { cloneFollowTransforms[i].netPlayer.method("set_playerVolume").invoke(localNetPlayer.method("get_playerVolume").invoke()); } catch (e) {}
                    if (myHandRight && !myHandRight.isNull()) {
                        try {
                            const cloneHandR = cloneFollowTransforms[i].netPlayer.field("handRight").value;
                            if (cloneHandR && !cloneHandR.isNull()) {
                                cloneHandR.method("set_position").invoke(myHandRight.method("get_position").invoke());
                                cloneHandR.method("set_rotation").invoke(myHandRight.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                    if (myHandLeft && !myHandLeft.isNull()) {
                        try {
                            const cloneHandL = cloneFollowTransforms[i].netPlayer.field("handLeft").value;
                            if (cloneHandL && !cloneHandL.isNull()) {
                                cloneHandL.method("set_position").invoke(myHandLeft.method("get_position").invoke());
                                cloneHandL.method("set_rotation").invoke(myHandLeft.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                    if (myHead && !myHead.isNull()) {
                        try {
                            const cloneHead = cloneFollowTransforms[i].netPlayer.field("head").value;
                            if (cloneHead && !cloneHead.isNull()) {
                                cloneHead.method("set_position").invoke(myHead.method("get_position").invoke());
                                cloneHead.method("set_rotation").invoke(myHead.method("get_rotation").invoke());
                            }
                        } catch (e) {}
                    }
                } catch (e) {}
            }
        }
    } catch (e) { console.error("[RBC] updateCloneFollow: " + e); }
}

function startCloneOrbit() {
    cloneOrbiters = [];
    cloneOrbitActive = true;
    try {
        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        let idx = 0;
        Il2Cpp.gc.choose(NetPlayerClass).forEach((plr: any) => {
            try {
                if (plr.method("get_IsMine").invoke()) return;
                const tf = plr.method("get_transform").invoke();
                if (tf && !tf.isNull()) {
                    const angle = idx / 8 * Math.PI * 2;
                    cloneOrbiters.push({ transform: tf, angle });
                    idx++;
                }
            } catch (e) {}
        });
    } catch (e) { console.error("[RBC] startCloneOrbit: " + e); }
}

function updateCloneOrbit() {
    if (!cloneOrbitActive || cloneOrbiters.length === 0) return;
    try {
        const centerPos = getTransform(safeField(getInstance(), "headCollider")).method("get_position").invoke();
        let delta = Time.method("get_deltaTime").invoke();
        for (let i = 0; i < cloneOrbiters.length; i++) {
            try {
                let orb = cloneOrbiters[i];
                orb.angle += 1.5 * delta;
                let newPos = Vector3.method("op_Addition", 2).invoke(centerPos, [Math.cos(orb.angle) * 4, 0, Math.sin(orb.angle) * 4]);
                orb.transform.method("set_position").invoke(newPos);
            } catch (e) {}
        }
    } catch (e) { console.error("[RBC] updateCloneOrbit: " + e); }
}

function stopCloneOrbit() {
    cloneOrbitActive = false;
    cloneOrbiters = [];
}
function stopCloneFollow() {
    cloneFollowActive = false;
    cloneFollowTransforms = [];
}


try {
    const NPC = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    const m = NPC.method("FixedUpdateNetwork");
    m.implementation = function() {
        const res = m.invokeRaw(this);
        
        let localRigData = null;
        try {
            const localNetPlayer = NPC.method("get_localPlayer").invoke();
            if (localNetPlayer && !localNetPlayer.isNull()) {
                localRigData = localNetPlayer.method("get_rigData").invoke();
            }
        } catch(e) {}

        for (let i = 0; i < cloneFrozenTransforms.length; i++) {
            if (cloneFrozenTransforms[i].netPlayer.handle.equals(this.handle)) {
                try {
                    const f = cloneFrozenTransforms[i];
                    if (f.rigData) f.netPlayer.method("set_rigData").invoke(f.rigData);
                } catch(e) {}
            }
        }
        
        if (localRigData) {
            for (let i = 0; i < cloneGunClones.length; i++) {
                if (cloneGunClones[i].netPlayer.handle.equals(this.handle)) {
                    try {
                        cloneGunClones[i].netPlayer.method("set_rigData").invoke(localRigData);
                    } catch(e) {}
                }
            }
        }
        return res;
    };
} catch(e) {}

function updateTriggerCloneSpawn() {
    if (!triggerCloneSpawnActive) return;
    if (triggerCloneSpawnCooldown > 0) triggerCloneSpawnCooldown--;
    if (rightTrigger && triggerCloneSpawnCooldown <= 0) {
        spawnSingleFrozenClone();
        triggerCloneSpawnCooldown = 30;
    }
}

function updateFrozenClones() {
    for (let i = 0; i < cloneFrozenTransforms.length; i++) {
        try {
            const f = cloneFrozenTransforms[i];
            if (!f.transform || f.transform.isNull()) continue;

            const makeVec = (arr: any): any => {
                const v = Vector3.field("zeroVector").value;
                v.field("x").value = arr[0]; v.field("y").value = arr[1]; v.field("z").value = arr[2];
                return v;
            };
            const makeQuat = (arr: any): any => {
                const q = Quaternion.method("get_identity").invoke();
                q.field("x").value = arr[0]; q.field("y").value = arr[1]; q.field("z").value = arr[2]; q.field("w").value = arr[3];
                return q;
            };

            f.transform.method("set_position").invoke(makeVec(f.pos));
            f.transform.method("set_rotation").invoke(makeQuat(f.rot));
            
            if (f.rigData) f.netPlayer.method("set_rigData").invoke(f.rigData);
            if (f.volume) f.netPlayer.method("set_playerVolume").invoke(f.volume);

            if (f.handRPos) {
                const handR = f.netPlayer.field("handRight").value;
                if (handR && !handR.isNull()) {
                    handR.method("set_position").invoke(makeVec(f.handRPos));
                    handR.method("set_rotation").invoke(makeQuat(f.handRRot));
                }
            }
            if (f.handLPos) {
                const handL = f.netPlayer.field("handLeft").value;
                if (handL && !handL.isNull()) {
                    handL.method("set_position").invoke(makeVec(f.handLPos));
                    handL.method("set_rotation").invoke(makeQuat(f.handLRot));
                }
            }
            if (f.headPos) {
                const head = f.netPlayer.field("head").value;
                if (head && !head.isNull()) {
                    head.method("set_position").invoke(makeVec(f.headPos));
                    head.method("set_rotation").invoke(makeQuat(f.headRot));
                }
            }
        } catch (e) { }
    }
}
function updateGunClones() {
    try {
        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        const localNetPlayer = NetPlayerClass.method("get_localPlayer").invoke();
        let currentVol = null;
        if (localNetPlayer && !localNetPlayer.isNull()) {
            currentVol = localNetPlayer.method("get_playerVolume").invoke();
        }

        for (let i = 0; i < cloneGunClones.length; i++) {
            try {
                const c = cloneGunClones[i];
                if (!c.transform || c.transform.isNull()) continue;

                const makeVec = (arr: any): any => {
                    const v = Vector3.field("zeroVector").value;
                    v.field("x").value = arr[0]; v.field("y").value = arr[1]; v.field("z").value = arr[2];
                    return v;
                };
                const makeQuat = (arr: any): any => {
                    const q = Quaternion.method("get_identity").invoke();
                    q.field("x").value = arr[0]; q.field("y").value = arr[1]; q.field("z").value = arr[2]; q.field("w").value = arr[3];
                    return q;
                };

                c.transform.method("set_position").invoke(makeVec(c.pos));
                c.transform.method("set_rotation").invoke(makeQuat(c.rot));
                
                if (currentVol) {
                    c.netPlayer.method("set_playerVolume").invoke(currentVol);
                }
            } catch (e) { }
        }
    } catch (e) {}
}
// ==========================================

    const LateUpdate = resolveGTPlayerTickMethod();
    if (!LateUpdate) {
        console.error("[acstuff] Could not find GorillaLocomotion/PlayerController tick method; menu loop disabled");
    } else {
        console.log("[acstuff] Hooked tick method:", LateUpdate.name);
    LateUpdate.implementation = function () {
        try {
            updateCloneSpawnSequence();
            updateCloneLineSpawnSequence();
            updateCloneCircleSpawnSequence();
            updateCloneFollow();
            updateCloneOrbit();
            updateTriggerCloneSpawn();
            updateFrozenClones();
            updateGunClones();
        } catch(e) {}
        try {
        gunRenderedThisFrame = false;
        deltaTime = Time.method("get_deltaTime").invoke();
        time += deltaTime;
        frameCount++;

        updateFlingNearMachines();

        // No Shotgun Cooldown - exact port from ac.js n5RunShotgunNoCooldown
        if (noShotgunCooldown) {
            try {
                const _cls = AssemblyCSharp.class("AnimalCompany.Shotgun");
                const _arr = Object.method("FindObjectsOfType", 0).inflate(_cls).invoke();
                const _len = (_arr && typeof _arr.length === "number") ? _arr.length : 0;
                for (let _i = 0; _i < _len; _i++) {
                    const _sg = _arr.get ? _arr.get(_i) : _arr[_i];
                    if (!_sg || (_sg.handle && _sg.handle.isNull())) continue;
                    try { _sg.field("_reloadTimer").value = 0; } catch(_) {}
                    try { _sg.method("set__ammoLeft").invoke(99); } catch(_) {}
                    try { _sg.field("__ammoLeft").value = 99; } catch(_) {}
                    try {
                        const _gun = _sg.field("_gun").value;
                        if (_gun && !_gun.handle.isNull()) {
                            try { const _cfg = _gun.method("get_config").invoke(); if (_cfg && !_cfg.handle.isNull()) _cfg.field("shootTime").value = 0.01; } catch(_) {}
                        }
                    } catch(_) {}
                }
            } catch(_) {}
        }

        // process pending spawn hue/sat/scale applications
        if (pendingSpawnApply.length > 0) {
            pendingSpawnApply = pendingSpawnApply.filter(entry => {
                if (frameCount - entry.frame < 3) return true; // wait 3 frames
                try {
                    if (!entry.obj || entry.obj.isNull?.()) return false;
                    const gbo = entry.obj.method("GetComponent", 1).inflate(GBOClass).invoke();
                    if (!gbo || gbo.isNull?.()) return frameCount - entry.frame < 10; // retry up to 10 frames
                    if (entry.scale !== null) try { gbo.method("set_scaleModifier").invoke(entry.scale); } catch(_) {}
                    if (entry.hue !== null) try { gbo.method("set_colorHue").invoke(entry.hue); } catch(_) {}
                    if (entry.sat !== null) try { gbo.method("set_colorSaturation").invoke(entry.sat); } catch(_) {}
                } catch(_) {}
                return false;
            });
        }
        if (!instance) {
        }
      //  if (whatnumber == 0) {
      //      const fields = GTPlayer.class.fields;
      //      fields.forEach(f => console.log(f.name + " | static=" + f.isStatic)); 
      //      whatnumber + 1;
      //  }
        updateInput();

        if (rightGrab && anyGunModActive()) {
            try { renderGun(); } catch (e) { console.error("[renderGun early]", e); }
        }

        // ── Force Spawned Mobs Stay ──────────────────────────────────────────
        if (mobForceStayEnabled) {
            for (const mob of spawnedPersistentMobs) {
                try { stabilizeMobInstance(mob); } catch(_) {}
            }
            for (const entry of persistentMobEntries) {
                try {
                    if (!entry) continue;
                    const obj = entry.object;
                    let alive = false;
                    try {
                        if (obj && !obj.isNull?.()) {
                            const go = obj.method("get_gameObject").invoke();
                            alive = !!go && !go.isNull?.();
                            if (alive) {
                                try { go.method("SetActive").invoke(true); } catch(_) {}
                                continue;
                            }
                        }
                    } catch(_) {}
                    if (!alive && time > ((entry.lastRespawnTime ?? 0) + 1.0)) {
                        entry.lastRespawnTime = time;
                        try {
                            PrefabGen.method("SpawnItem", 4).invoke(
                                Il2Cpp.string("mob_prefab/" + entry.mobEntry.name),
                                entry.pos, entry.rot, NULL
                            );
                        } catch(_) {}
                    }
                } catch(_) {}
            }
        }

        // ── Duplicate Own Rig: record current pose into ring buffer ──────────
        try {
            const _hc = safeField(getInstance(), "headCollider"); const _lht = safeField(getInstance(), "leftHandTransform"); const _rht = safeField(getInstance(), "rightHandTransform"); if (_hc && _lht && _rht) {
                const headT  = getTransform(safeField(getInstance(), "headCollider"));
                const lhT    = safeField(getInstance(), "leftHandTransform");
                const rhT    = safeField(getInstance(), "rightHandTransform");

                // Guard: skip frame if any transform is null/invalid
                if (!headT || headT.isNull() || !lhT || lhT.isNull() || !rhT || rhT.isNull()) {
                    // skip this frame silently
                } else {

                // Try to read mic activity from the player's AudioSource
                let micActive = false;
                try {
                    const localNP = NetPlayer.method("get_localPlayer").invoke();
                    if (localNP && !localNP.isNull()) {
                        const npAudio = getComponent(localNP, AudioSource);
                        if (npAudio && !npAudio.isNull()) {
                            micActive = npAudio.method("get_isPlaying").invoke();
                        }
                    }
                } catch (_) {}

                const frame: DupeRigFrame = {
                    headPos: safeInvoke(headT, "get_position"),
                    headRot: safeInvoke(headT, "get_rotation"),
                    lhPos:   safeInvoke(lhT,   "get_position"),
                    lhRot:   safeInvoke(lhT,   "get_rotation"),
                    rhPos:   safeInvoke(rhT,    "get_position"),
                    rhRot:   safeInvoke(rhT,    "get_rotation"),
                    micActive,
                    timestamp: time,
                };

                // Only push frame if all positions/rotations were successfully read
                if (frame.headPos && frame.headRot && frame.lhPos && frame.lhRot && frame.rhPos && frame.rhRot) {
                    dupeRigBuffer.push(frame);
                    // Trim by real time (keep only last DUPE_RIG_RECORD_SECS seconds)
                    // and also cap by max frame count as a safety net
                    while (
                        dupeRigBuffer.length > 0 &&
                        (time - dupeRigBuffer[0].timestamp > DUPE_RIG_RECORD_SECS ||
                         dupeRigBuffer.length > DUPE_RIG_MAX_FRAMES)
                    ) {
                        dupeRigBuffer.shift();
                    }
                }

                } // end null-guard else
            }
        } catch (_) {}

        // ── Duplicate Own Rig: tick ghost playback ───────────────────────────
        if (dupeRigActive && dupeRigFrames.length > 0) {
            try {
                const f = dupeRigFrames[dupeRigPlayIdx % dupeRigFrames.length];

                // Move the DummyPlayerTarget (networked avatar) to the delayed head position.
                // All players in the room can see this since it's a real network object.
                if (dupeRigDummy && !dupeRigDummy.isNull() && f.headPos && f.headRot) {
                    const dummyT = getTransform(dupeRigDummy);
                    // re-check dummyT validity before each invoke
                    if (dummyT && !dummyT.isNull()) {
                        try { dummyT.method("set_position").invoke(f.headPos); } catch(_) {}
                        try { dummyT.method("set_rotation").invoke(f.headRot); } catch(_) {}
                    }
                }

                dupeRigPlayIdx++;
            } catch (_) {}
        }
        // ─────────────────────────────────────────────────────────────────────

        if ((righthand && rightSecondary) || (!righthand && leftSecondary)) {
            if (currentNotification != "" && time > notifactionResetTime)
                reloadMenu();

            if (menu == null) {
                renderMenu();
            } else {
                recenterMenu();
            }
        } else {
            if (menu != null) {
                Destroy(menu);
                menu = null;
            }
        }

        if (menu == null) {
            if (reference != null) {
                Destroy(reference);
                reference = null;
            }
        } else {
            if (reference == null) {
                renderReference();
            }
        }

        buttons.flat()
            .filter(button => button.enabled)
            .forEach(button => {
                if (button.method) {
                    try {
                        button.method();
                    } catch (error: any) {
                        console.error(`Error executing method for button '${button.buttonText || 'unnamed'}':`, error);
                        console.error('Error stack:', error.stack);
                        console.error('Button object:', button);

                        if (error.stack) {
                            const stackLines = error.stack.split('\n');
                            if (stackLines.length > 1) {
                                console.error('Error occurred at:', stackLines[1].trim());
                            }
                        }
                    }
                }
            });

        if (!gunRenderedThisFrame && rightGrab && anyGunModActive()) {
            try { renderGun(); } catch (e) { console.error("[renderGun fallback]", e); }
        }

        if (!gunRenderedThisFrame) {
            try {
                if (GunPointer != null) {
                    try {
                        if (typeof GunPointer.isNull === 'function' && GunPointer.isNull()) {
                            GunPointer = null;
                        } else if (!(GunPointer.method("get_activeSelf").invoke())) {
                            Destroy(GunPointer);
                            GunPointer = null;
                        } else {
                            GunPointer.method("SetActive").invoke(false);
                        }
                    } catch (_) { GunPointer = null; }
                }

                if (GunLine != null) {
                    try {
                        if (typeof GunLine.isNull === 'function' && GunLine.isNull()) {
                            GunLine = null;
                        } else {
                            let lineObj = GunLine.method("get_gameObject").invoke();
                            if (lineObj != null && !lineObj.isNull()) {
                                if (!(lineObj.method("get_activeSelf").invoke())) {
                                    Destroy(lineObj);
                                    GunLine = null;
                                } else {
                                    lineObj.method("SetActive").invoke(false);
                                }
                            }
                        }
                    } catch (_) { GunLine = null; }
                }
            } catch (_) { }
        }
        return LateUpdate.invokeRaw(this);
        } catch (_lue: any) {
            if (_lue && _lue.message && _lue.message.includes("access violation")) {
            } else {
                console.error("[LateUpdate] error:", _lue);
            }
            try { return LateUpdate.invokeRaw(this); } catch(_) {}
        }

function updateFlingNearMachines() {
    if (!flingNearMachinesEnabled) return;

    const now = time;

    if (now - lastFlingCheckTime < 0.6) return;
    lastFlingCheckTime = now;

    try {
        if (now - lastTargetCacheTime > 8 || cachedTargets.length === 0) {
            cachedTargets = [];
            lastTargetCacheTime = now;

            // Selling Machines
            try {
                const machines = Object.method("FindObjectsOfType", 0)
                    .inflate(ItemSellingMachineController)
                    .invoke();
                if (machines && !machines.isNull()) {
                    const len = machines.length || 0;
                    for (let i = 0; i < len; i++) {
                        const m = machines.get ? machines.get(i) : machines[i];
                        if (m && !m.isNull()) {
                            const t = getTransform(m);
                            if (t && !t.isNull()) cachedTargets.push(t.method("get_position").invoke());
                        }
                    }
                }
            } catch(e) {}

            // Leave Computers
            try {
                const terminals = Object.method("FindObjectsOfType", 0)
                    .inflate(ACTerminal)
                    .invoke();
                if (terminals && !terminals.isNull()) {
                    const len = terminals.length || 0;
                    for (let i = 0; i < len; i++) {
                        const t = terminals.get ? terminals.get(i) : terminals[i];
                        if (t && !t.isNull()) {
                            const pos = getTransform(t).method("get_position").invoke();
                            if (pos) cachedTargets.push(pos);
                        }
                    }
                }
            } catch(e) {}
        }

        if (cachedTargets.length === 0) return;

        const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
        const allPlayers = Il2Cpp.gc.choose(NetPlayerClass);

        allPlayers.forEach((player: any) => {
            try {
                if (!player || player.isNull() || player.method("get_IsMine").invoke()) return;

                const playerTf = player.method("get_transform").invoke();
                if (!playerTf || playerTf.isNull()) return;

                const playerPos = playerTf.method("get_position").invoke();
                const playerId = (player.field("_userID")?.value?.content) || "unknown";

                if (flingCooldown.has(playerId) && now - flingCooldown.get(playerId) < 2.0) return;

                for (const machinePos of cachedTargets) {
                    const dist = Vector3.method("Distance", 2).invoke(playerPos, machinePos);
                    if (dist < 4.2) {
                        flingPlayer(player, playerPos, machinePos);
                        flingCooldown.set(playerId, now);
                        break;
                    }
                }
            } catch (e) {}
        });
    } catch (e) {
        console.error("[FlingMachines] Error:", e);
    }
}

function flingPlayer(player: { method: (arg0: string) => { (): any; new(): any; invoke: { (): any; new(): any; }; }; }, playerPos: any, machinePos: any) {
    try {
        let rb = null;
        try {
            rb = player.method("get_rigidbody")?.invoke();
        } catch(e) {}
        
        if (!rb || rb.isNull()) {
            const go = player.method("get_gameObject").invoke();
            if (go && !go.isNull()) {
                rb = getComponent(go, Rigidbody);
            }
        }
        
        if (!rb || rb.isNull()) return;

        const direction = Vector3.method("op_Subtraction", 2).invoke(playerPos, machinePos);
        const normalized = Vector3.method("Normalize").invoke(direction);

        const upVector = Vector3.field("upVector").value;
        const upBoost = Vector3.method("op_Multiply", 2).invoke(upVector, 38);

        const outward = Vector3.method("op_Multiply", 2).invoke(normalized, 28);

        const upward = Vector3.method("op_Addition", 2).invoke(outward, upBoost);

        rb.method("set_velocity").invoke(upward);
        rb.method("AddForce", 2).invoke(upward, 1);

        console.log(`[Fling] Flung player near machine!`);
    } catch (e) {
        console.error("[FlingPlayer] Failed:", e);
    }
}
        function blockBanUserFromPrivateRoom() {
    try {
        const BanUserMethod = AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("BanUserFromPrivateRoom");
        BanUserMethod.implementation = function (session: any, roomCode: any, targetUserID: any, clear: any, canceller: any) {
            console.log("[Anti-Ban] Blocked BanUserFromPrivateRoom");
            return null;
        };
        console.log("[Anti-Ban] BanUserFromPrivateRoom hook installed (always active)");
    } catch (e) {
        console.error("[Anti-Ban] BanUserFromPrivateRoom hook failed:", e);
    }
}

function blockKickUserFromPrivateRoom() {
    try {
        const KickUserMethod = AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("KickUserFromPrivateRoom");
        KickUserMethod.implementation = function (session: any, roomCode: any, targetUserID: any, clear: any, canceller: any) {
            console.log("[Anti-Kick] Blocked KickUserFromPrivateRoom");
            return null;
        };
        console.log("[Anti-Kick] KickUserFromPrivateRoom hook installed (always active)");
    } catch (e) {
        console.error("[Anti-Kick] KickUserFromPrivateRoom hook failed:", e);
    }
}
    };
    }
    stashAllowMoves = true;
    stashQOLFix = true;

    console.log(`

    ██╗██╗███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗██████╗     ███╗   ███╗███████╗███╗   ██╗██╗   ██╗
    ██║██║██╔════╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔══██╗    ████╗ ████║██╔════╝████╗  ██║██║   ██║
    ██║██║███████╗    ███████╗   ██║   ██║   ██║██████╔╝██║██║  ██║    ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║
    ██║██║╚════██║    ╚════██║   ██║   ██║   ██║██╔═══╝ ██║██║  ██║    ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║
    ██║██║███████║    ███████║   ██║   ╚██████╔╝██║     ██║██████╔╝    ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝
    ╚═╝╚═╝╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═════╝     ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ 
    ii's Stupid Menu(AC) ${version}
    Compiled ${new Date().toISOString()}
`);
}, "main"), 2000);
})());

function createSolidPlatform(downPos: number[], arg1: number[], arg2: number[]) {
    throw new Error("Function not implemented.");
}
// === TIMER FIX - Bottom of ts.ts ===
function setTimeout(callback: () => void, delay: number): any {
    return globalThis.setTimeout(callback, delay);
}

function clearInterval(id: any): void {
    if (id) globalThis.clearInterval(id);
}

function clearTimeout(id: any): void {
    if (id) globalThis.clearTimeout(id);
}
// =====================================

