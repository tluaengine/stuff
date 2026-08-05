import os
import sys
import subprocess
import time
import ctypes
import sysconfig

try:
    import psutil
except ImportError:
    print("Installing psutil...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "psutil"])
    import psutil

try:
    subprocess.run(['pyinstaller', '--version'], capture_output=True, check=True)
except Exception:
    print("Installing pyinstaller...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--force-reinstall", "pyinstaller", "setuptools", "altgraph"])

GAME_DIR = r"C:\Program Files (x86)\Steam\steamapps\common\Animal Company"
BRIDGE_SCRIPT = "frida-il2cpp-bridge.js"
BYPASS_SCRIPT = "bypass.js"
QUEST_SCRIPT = "quest.ts"
VALIDATE_SCRIPT = "validateclient.js"

PURPLE = "\033[38;5;242m"
LPURPLE = "\033[38;5;250m"
DPURPLE = "\033[38;5;236m"
WHITE = "\033[97m"
GRAY = "\033[90m"
RESET = "\033[0m"
BOLD = "\033[1m"

def enable_ansi():
    try:
        kernel32 = ctypes.windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
    except:
        pass

def spin_msg(msg, duration=1.0):
    frames = ["/", "-", "\\", "|"]
    end_time = time.time() + duration
    i = 0
    while time.time() < end_time:
        c = frames[i % 4]
        sys.stdout.write(f"\r\033[2K{GRAY}   [{c}]{RESET} {msg}")
        sys.stdout.flush()
        time.sleep(0.15)
        i += 1
    sys.stdout.write(f"\r\033[2K")
    sys.stdout.flush()

def increment_initialised():
    try:
        inc_file = os.path.abspath(
            os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                "..", "..", "..", "..",
                "inc_ready.py"
            )
        )

        if os.path.isfile(inc_file):
            subprocess.Popen([sys.executable, inc_file])
        else:
            print(f"inc_ready.py not found: {inc_file}")

    except Exception as e:
        print(e)

def replace_ini():
    spin_msg("Replacing launcher INI...")
    ini_path = os.path.join(GAME_DIR, INI_FILE)
    try:
        if os.path.exists(ini_path):
            os.remove(ini_path)
        with open(ini_path, 'w') as f:
            f.write("ApplicationPath=AnimalCompany.exe\n")
            f.write("WorkingDirectory=\n")
            f.write("WaitForExit=0\n")
            f.write("NoOperation=false\n")
        print(f"{LPURPLE}   [+] {RESET}Launcher INI replaced")
        return True
    except Exception as e:
        print(f"{LPURPLE}   [x] {RESET}Failed: {e}")
        return False

def start_frida_wait():
    script_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), BYPASS_SCRIPT)
    if not os.path.exists(script_path):
        print(f"{LPURPLE}   [x] {RESET}{BYPASS_SCRIPT} not found!")
        return False
    spin_msg("Checking Frida installation...")
    try:
        check = subprocess.run(['frida', '--version'], capture_output=True, text=True)
        if check.returncode != 0:
            print(f"{LPURPLE}   [x] {RESET}Frida not found!")
            return False
        print(f"{LPURPLE}   [+] {RESET}Frida ready for injection")
        return True
    except FileNotFoundError:
        print(f"{LPURPLE}   [x] {RESET}Frida not found! Install: pip install frida-tools")
        return False
    except Exception as e:
        print(f"{LPURPLE}   [x] {RESET}Failed: {e}")
        return False

def restore_launcher():
    bak_path = os.path.join(GAME_DIR, "EACLauncher.exe.bak")
    exe_path = os.path.join(GAME_DIR, "EACLauncher.exe")
    try:
        if os.path.exists(bak_path):
            subprocess.run(['cmd', '/c', 'copy', '/Y', bak_path, exe_path], check=True, capture_output=True)
            subprocess.run(['cmd', '/c', 'del', bak_path], check=True, capture_output=True)
    except:
        pass

def build_dummy_launcher():
    spin_msg("Building dummy launcher...")
    try:
        import tempfile
        import shutil

        eac_path = os.path.join(GAME_DIR, "EACLauncher.exe")
        backup_path = os.path.join(GAME_DIR, "EACLauncher.exe.bak")
        game_path = os.path.join(GAME_DIR, "AnimalCompany.exe")

        if os.path.exists(backup_path):
            print(f"{LPURPLE}   [+] {RESET}Dummy launcher already built")
            return True

        if not os.path.exists(eac_path):
            print(f"{LPURPLE}   [x] {RESET}EACLauncher.exe not found!")
            return False

        tmp_dir = tempfile.mkdtemp()
        launcher_py = os.path.join(tmp_dir, "make_launcher.py")
        with open(launcher_py, "w") as f:
            f.write('import subprocess, os, sys\n')
            f.write('game_dir = os.path.dirname(os.path.abspath(sys.argv[0]))\n')
            f.write('game_exe = os.path.join(game_dir, "AnimalCompany.exe")\n')
            f.write('subprocess.Popen([game_exe], cwd=game_dir)\n')

        shutil.copy2(eac_path, backup_path)

        result = subprocess.run(    
            [
                os.path.join(
                    sysconfig.get_path("scripts"),
                    "pyinstaller.exe"
                ),
                "--onefile",
                "--noconsole",
                "--name",
                "EACLauncher",
                launcher_py
            ],
            capture_output=True, text=True, cwd=tmp_dir
        )

        if result.returncode != 0:
            print(f"{LPURPLE}   [x] {RESET}PyInstaller failed")
            if os.path.exists(backup_path):
                os.remove(backup_path)
            shutil.rmtree(tmp_dir, ignore_errors=True)
            return False

        dummy_path = os.path.join(tmp_dir, "dist", "EACLauncher.exe")
        if os.path.exists(dummy_path):
            shutil.copy2(dummy_path, eac_path)
            shutil.rmtree(tmp_dir, ignore_errors=True)
            print(f"{LPURPLE}   [+] {RESET}Dummy launcher built")
            return True
        else:
            print(f"{LPURPLE}   [x] {RESET}Build output not found")
            if os.path.exists(backup_path):
                os.remove(backup_path)
            shutil.rmtree(tmp_dir, ignore_errors=True)
            return False
    except Exception as e:
        print(f"{LPURPLE}   [x] {RESET}Failed: {e}")
        return False

def is_process_running():
    for proc in psutil.process_iter(['name']):
        try:
            name = proc.info['name']
            if not name:
                continue

            if name == "AnimalCompany.exe":
                return "A"

            if name == "EACLauncher.exe":
                return "B"

        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass

    return False

def inject_frida(running):
    bridge_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), BRIDGE_SCRIPT)
    script_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), BYPASS_SCRIPT)
    quest_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), QUEST_SCRIPT)
    validate_path = os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), VALIDATE_SCRIPT)

    try:
        print(f"{LPURPLE}   [!] {RESET}Game detected! Injecting bypass...")
        print()

        subprocess.Popen(
            [
                "cmd", "/c",
                "frida",
                "-l", bridge_path,
                "-l", script_path,
                "-l", quest_path,
                "-l", validate_path,
                "AnimalCompany.exe"
            ],
            creationflags=subprocess.CREATE_NEW_CONSOLE,
            cwd=os.path.dirname(os.path.abspath(sys.argv[0]))
        )

        subprocess.Popen(
            [
                "cmd", "/c",
                "frida",
                "-l", bridge_path,
                "-l", script_path,
                "-l", quest_path,
                "EACLauncher.exe"
            ],
            creationflags=subprocess.CREATE_NEW_CONSOLE,
            cwd=os.path.dirname(os.path.abspath(sys.argv[0]))
        )
        return True

    except Exception as e:
        print(f"{LPURPLE}   [x] {RESET}Injection failed: {e}")
        return False

def monitor_frida():
    print()
    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
    print(f"{WHITE}{BOLD}        Looking For Animal Company...{RESET}")
    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
    print()
    print()
    print(f"{WHITE}   Launch Animal Company from Steam{RESET}")
    print()
    print(f"{GRAY}   Keep this window open!{RESET}")
    print()
    increment_initialised()
    injected = False
    try:
        while True:
            running = is_process_running()
            if not injected and is_process_running():
                time.sleep(1)
                if inject_frida(running):
                    injected = True
                    print(f"{LPURPLE}   [+] {RESET}Bypass injected!")
                    print()
                    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
                    print(f"{WHITE}{BOLD}                    BYPASSED{RESET}")
                    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
                    print()
                    print(f"{GRAY}   Waiting for game to close...{RESET}")
                    print()
            if injected and not is_process_running():
                print(f"{DPURPLE}   Game closed. Exiting...{RESET}")
                print()
                break
            time.sleep(0.5)
    except KeyboardInterrupt:
        print()
        print(f"{DPURPLE}   Exiting...{RESET}")
        print()

def main():
    enable_ansi()
    os.system("cls")
    restore_launcher()
    print()
    print(f"{DPURPLE}{BOLD}            ███████ ██    ██ ████████ ███████ {RESET}")
    print(f"{DPURPLE}{BOLD}            ██       ██  ██     ██    ██      {RESET}")
    print(f"{PURPLE}{BOLD}            ███████   ████      ██    █████   {RESET}")
    print(f"{PURPLE}{BOLD}                 ██    ██       ██    ██      {RESET}")
    print(f"{LPURPLE}{BOLD}            ███████    ██       ██    ███████ {RESET}")
    print()
    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
    print()
    print(f"{LPURPLE}                Complete EAC Bypass{RESET}")
    print(f"{GRAY}                     Made by Byte!{RESET}")
    print(f"{GRAY}                     discord.gg/syte{RESET}")
    print()
    print(f"{GRAY}   ────────────────────────────────────────────────────{RESET}")
    print()
    if not build_dummy_launcher():
        print()
        input(f"{GRAY}   Press Enter to exit...{RESET}")
        return 1
    print()
    if not start_frida_wait():
        print()
        input(f"{GRAY}   Press Enter to exit...{RESET}")
        return 1
    print()
    monitor_frida()
    print()
    print(f"{DPURPLE}   Session ended.{RESET}")
    print()
    return 0

if __name__ == "__main__":
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print(f"\n\n{LPURPLE}   [!] {RESET}Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n{LPURPLE}   [x] {RESET}Error: {e}")
        print()
        input(f"{GRAY}   Press Enter to exit...{RESET}")
        sys.exit(1)
