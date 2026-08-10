import os
import sys
import time
import subprocess

try:
    import psutil
except ImportError:
    psutil = None

GAME_DIR = os.environ.get("FCS_GAME_DIR", r"C:\Program Files (x86)\Steam\steamapps\common\Animal Company")
SCRIPT_DIR = os.path.dirname(os.path.abspath(sys.argv[0]))

def attach_console():
    try:
        import ctypes
        kernel32 = ctypes.windll.kernel32
        kernel32.AllocConsole()
        kernel32.SetConsoleTitleW("SYTE Bypass")
        sys.stdout = open("CONOUT$", "w", buffering=1, encoding="utf-8", errors="replace")
        sys.stderr = open("CONOUT$", "w", buffering=1, encoding="utf-8", errors="replace")
        sys.stdin = open("CONIN$", "r", encoding="utf-8", errors="replace")
    except Exception:
        pass

def is_process_running(name):
    if psutil:
        for proc in psutil.process_iter(['name']):
            try:
                if proc.info['name'].lower() == name.lower():
                    return True
            except:
                pass
        return False
    else:
        try:
            output = subprocess.check_output(['tasklist', '/FI', f'IMAGENAME eq {name}'], text=True, timeout=5)
            return name.lower() in output.lower()
        except:
            return False

def inject_frida():
    bridge = os.path.join(SCRIPT_DIR, "ac_bridge.js")
    bypass = os.path.join(SCRIPT_DIR, "bypass.js")
    quest = os.path.join(SCRIPT_DIR, "quest.ts")
    try:
        print("  [!] Game detected! Injecting bypass...")
        print()
        return subprocess.Popen(
            ['frida', '-l', bridge, '-l', bypass, '-l', quest, 'EACLauncher.exe'],
            cwd=SCRIPT_DIR
        )
    except Exception as e:
        print(f"  [x] Injection failed: {e}")
        return False

def main():
    attach_console()
    try:
        kernel32 = __import__('ctypes').windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
    except:
        pass

    os.system("cls")
    print()
    print("  ███████ ██    ██ ████████ ███████ ")
    print("  ██       ██  ██     ██    ██      ")
    print("  ███████   ████      ██    █████   ")
    print("       ██    ██       ██    ██      ")
    print("  ███████    ██       ██    ███████ ")
    print()
    print("  ------------------------------------------")
    print()
    print("             Complete EAC Bypass")
    print("                 discord.gg/syte")
    print()
    print("  ------------------------------------------")
    print()

    eac_exe = os.path.join(GAME_DIR, "EACLauncher.exe")
    game_exe = os.path.join(GAME_DIR, "AnimalCompany.exe")
    eac_data = os.path.join(GAME_DIR, "EACLauncher_Data")
    game_data = os.path.join(GAME_DIR, "AnimalCompany_Data")

    if not os.path.exists(game_exe):
        print("  [+] Already set up")
    else:
        if os.path.exists(eac_exe):
            os.remove(eac_exe)
        print("  [+] Deleted EACLauncher.exe")

        if os.path.exists(game_exe) and not os.path.exists(eac_exe):
            os.rename(game_exe, eac_exe)
        print("  [+] Renamed AnimalCompany.exe -> EACLauncher.exe")

        if os.path.exists(game_data) and not os.path.exists(eac_data):
            os.rename(game_data, eac_data)
        print("  [+] Renamed AnimalCompany_Data -> EACLauncher_Data")

    print()
    print("  ------------------------------------------")
    print("       Looking For EACLauncher...")
    print("  ------------------------------------------")
    print()
    print("  Launch Animal Company from Steam")
    print()
    print("  Keep this window open!")
    print()

    injected = False
    frida_process = None
    while True:
        if not injected and is_process_running("EACLauncher.exe"):
            time.sleep(1)
            frida_process = inject_frida()
            if frida_process:
                injected = True
                print("  [+] Bypass injected!")
                print()
                print("  ------------------------------------------")
                print("              BYPASSED")
                print("  ------------------------------------------")
                print()
                print("  Waiting for game to close...")
                print()
        if injected and not is_process_running("EACLauncher.exe"):
            if frida_process and frida_process.poll() is None:
                frida_process.terminate()
            print("  Game closed. Exiting...")
            print()
            break
        time.sleep(0.5)

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        import traceback
        tb = traceback.format_exc()
        print(f"\n  Error: {e}")
        print(f"  {tb}")
        try:
            log_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), "bypass_crash.log")
            with open(log_path, "w") as f:
                f.write(f"Error: {e}\n{tb}\n")
        except:
            pass
        try:
            input("  Press Enter to close...")
        except:
            time.sleep(30)
