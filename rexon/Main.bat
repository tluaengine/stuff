@echo off
title Rexon MENU INJECTOR
set "hwid_json=%APPDATA%\fcs-launcher\hwid_cache.json"
if exist "%hwid_json%" del "%hwid_json%"
setlocal enabledelayedexpansion

:frida

color 1
set "PATH=%PROGRAMFILES%\nodejs;%LOCALAPPDATA%\Programs\nodejs;%APPDATA%\npm;%PATH%"
set SOURCE=%~dp0sounds
set MENU_DIR=%~dp0
cd /d "%MENU_DIR%"
set "PREFLIGHT_ONLY=0"
set "REPAIR_ONLY=0"
if /I "%~1"=="--preflight-only" set "PREFLIGHT_ONLY=1"
if /I "%~1"=="--repair-only" set "REPAIR_ONLY=1"
call :refresh_runtime_paths
if "!PREFLIGHT_ONLY!!REPAIR_ONLY!"=="00" call :launch_injector

set "STEAM_PATH="
for /f "delims=" %%S in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$c=@(); try{$c+=(Get-ItemProperty 'HKLM:\SOFTWARE\WOW6432Node\Valve\Steam' -ErrorAction Stop).InstallPath}catch{}; try{$c+=(Get-ItemProperty 'HKCU:\SOFTWARE\Valve\Steam' -ErrorAction Stop).SteamPath}catch{}; try{$c+=Split-Path ((Get-Process steam -ErrorAction Stop | Select-Object -First 1).Path)}catch{}; $c+=${env:ProgramFiles(x86)}+'\Steam'; $c | Where-Object {$_ -and (Test-Path (Join-Path $_ 'steam.exe'))} | Select-Object -First 1"') do if not defined STEAM_PATH set "STEAM_PATH=%%S"
set "STEAM_EXE=!STEAM_PATH!\steam.exe"

set "GAME_DIR="
if defined STEAM_PATH for /f "delims=" %%D in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$roots=@($env:STEAM_PATH); $vdf=Join-Path $env:STEAM_PATH 'steamapps\libraryfolders.vdf'; if(Test-Path $vdf){foreach($line in Get-Content -LiteralPath $vdf){$p=$line.Split([char]34); if($p.Length -ge 4 -and $p[1] -eq 'path'){$roots+=$p[3].Replace('\\','\')}}}; foreach($root in ($roots | Select-Object -Unique)){$manifest=Join-Path $root 'steamapps\appmanifest_4551040.acf'; $game=Join-Path $root 'steamapps\common\Animal Company'; if((Test-Path $manifest) -and (Test-Path $game)){Write-Output $game; break}}"') do if not defined GAME_DIR set "GAME_DIR=%%D"
if defined STEAM_PATH for /f "delims=" %%D in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$roots=@($env:STEAM_PATH); $vdf=Join-Path $env:STEAM_PATH 'steamapps\libraryfolders.vdf'; if(Test-Path $vdf){foreach($line in Get-Content -LiteralPath $vdf){$p=$line.Split([char]34); if($p.Length -ge 4 -and $p[1] -eq 'path'){$roots+=$p[3].Replace('\\','\')}}}; foreach($root in ($roots | Select-Object -Unique)){$manifest=Join-Path $root 'steamapps\appmanifest_4551040.acf'; $game=Join-Path $root 'steamapps\common\Animal Company'; if((Test-Path $manifest) -and (Test-Path $game)){Write-Output $game; break}}"') do if not defined GAME_DIR set "GAME_DIR=%%D"
set TARGET=!GAME_DIR!\sounds
if "!PREFLIGHT_ONLY!"=="1" (
    set "FRIDA_SCRIPTS="
    for /f "delims=" %%P in ('python -c "import sysconfig; print(sysconfig.get_path('scripts') or '')" 2^>nul') do set "FRIDA_SCRIPTS=%%P"
    if not defined FRIDA_SCRIPTS for /f "delims=" %%F in ('where frida 2^>nul') do if not defined FRIDA_SCRIPTS set "FRIDA_SCRIPTS=%%~dpF
	
    if defined FRIDA_SCRIPTS set "PATH=!FRIDA_SCRIPTS!;!PATH!"
    goto :preflight_checks
)

if defined GAME_DIR if exist "%GAME_DIR%\" goto :exe_found
color 4
echo.
echo  ============================================
echo   Animal Company is not installed.
echo.
if exist "!STEAM_EXE!" (
    echo   Opening the Steam installation page now.
    start "" "steam://install/4551040"
) else (
    echo   Steam was not found, so installation cannot start.
)
echo  ============================================
echo.
pause
exit /b 1
:exe_found

if not exist "%TARGET%" mkdir "%TARGET%"

echo.
echo  =========================================
echo          Automatic Dependency Repair
echo  =========================================
echo.
color 1
for %%F in (ac_bridge.js config.js bypass.js da.ts symbols.ts nophoton.ts quest.ts bypass.py) do (
    if not exist "%MENU_DIR%%%F" if exist "%MENU_DIR%%%F.backup" (
        echo  [WARN] %%F is missing; restoring local backup...
        copy /y "%MENU_DIR%%%F.backup" "%MENU_DIR%%%F" >nul 2>&1
        if exist "%MENU_DIR%%%F" (echo  [FIXED] Restored %%F) else (echo  [WARN] Could not restore %%F - extract a clean Rexon Menu copy.)
    )
)
echo  [-] Checking Python...
where python >nul 2>&1
if errorlevel 1 (
    echo  [WARN] Python not found; installing...
    winget install Python.Python.3 --accept-package-agreements --accept-source-agreements --silent >nul 2>&1
    if errorlevel 1 (
        echo  [-] Trying direct download...
        powershell -Command "try { Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.12.4/python-3.12.4-amd64.exe' -OutFile '%TEMP%\python_installer.exe' -UseBasicParsing; Start-Process '%TEMP%\python_installer.exe' -ArgumentList '/quiet InstallAllUsers=0 Include_pip=1 Include_launcher=1 PrependPath=1' -Wait; Remove-Item '%TEMP%\python_installer.exe' -Force } catch { Write-Host 'Download failed' }" >nul 2>&1
    )
    call :refresh_runtime_paths
    python --version >nul 2>&1 && echo  [FIXED] Python installed || echo  [WARN] Python install failed - install 64-bit Python from python.org.
)
python --version >nul 2>&1 && echo  [+] Python found || echo  [!] Python not found - install from python.org

echo  [-] Checking pip...
python -m pip --version >nul 2>&1
if errorlevel 1 (
    echo  [WARN] pip not found; installing...
    python -m ensurepip --upgrade >nul 2>&1
    python -m ensurepip --default-pip >nul 2>&1
    python -m pip --version >nul 2>&1 && echo  [FIXED] pip installed || echo  [WARN] pip install failed - run python -m ensurepip --upgrade.
)
python -m pip --version >nul 2>&1 && echo  [+] pip found || echo  [!] pip not found

echo  [-] Checking frida-tools...
set "FRIDA_QUICK_CHECK=1"
python -c "import frida, frida_tools" >nul 2>&1
if errorlevel 1 set "FRIDA_QUICK_CHECK=0"
where frida >nul 2>&1
if errorlevel 1 set "FRIDA_QUICK_CHECK=0"
if "!FRIDA_QUICK_CHECK!"=="0" (
    echo  [WARN] Frida missing; repairing...
    python -m pip install --upgrade frida-tools >nul 2>&1
    if errorlevel 1 python -m pip install --user --upgrade frida-tools >nul 2>&1
    call :refresh_runtime_paths
    python -c "import frida, frida_tools" >nul 2>&1 && echo  [FIXED] Frida installed || echo  [WARN] Frida repair failed - run python -m pip install --upgrade frida-tools.
)
python -c "import frida, frida_tools" >nul 2>&1
if errorlevel 1 (echo  [!] frida-tools repair failed) else (echo  [+] frida-tools ready)

set "FRIDA_SCRIPTS="
set "PYTHON_SYSTEM_SCRIPTS="
set "PYTHON_USER_SCRIPTS="
for /f "delims=" %%P in ('python -c "import sysconfig; print(sysconfig.get_path('scripts') or '')" 2^>nul') do set "PYTHON_SYSTEM_SCRIPTS=%%P"
for /f "delims=" %%P in ('python -c "import os, site; print(os.path.join(site.USER_BASE, 'Scripts'))" 2^>nul') do set "PYTHON_USER_SCRIPTS=%%P"
if defined PYTHON_SYSTEM_SCRIPTS if exist "!PYTHON_SYSTEM_SCRIPTS!\frida.exe" set "FRIDA_SCRIPTS=!PYTHON_SYSTEM_SCRIPTS!"
if not defined FRIDA_SCRIPTS if defined PYTHON_USER_SCRIPTS if exist "!PYTHON_USER_SCRIPTS!\frida.exe" set "FRIDA_SCRIPTS=!PYTHON_USER_SCRIPTS!"
if not defined FRIDA_SCRIPTS (
    for /f "delims=" %%F in ('where frida 2^>nul') do if not defined FRIDA_SCRIPTS set "FRIDA_SCRIPTS=%%~dpF"
)
if defined FRIDA_SCRIPTS (
    set "PATH=!FRIDA_SCRIPTS!;!PATH!"
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$frida=($env:FRIDA_SCRIPTS).TrimEnd([char]92); $userPath=[Environment]::GetEnvironmentVariable('Path','User'); if($null -eq $userPath){$userPath=''}; $found=$false; foreach($entry in ($userPath -split ';')){if($entry.Trim().TrimEnd([char]92) -ieq $frida){$found=$true}}; if(-not $found){$newPath=($userPath.TrimEnd(';')+';'+$frida).Trim(';'); [Environment]::SetEnvironmentVariable('Path',$newPath,'User')}" >nul 2>&1
    echo  [+] Frida PATH ready: !FRIDA_SCRIPTS!
) else (
    echo  [!] Could not locate frida.exe after installation
)

echo  [-] Checking psutil...
python -c "import psutil" >nul 2>&1
if errorlevel 1 (
    echo  [WARN] psutil missing; repairing...
    python -m pip install psutil >nul 2>&1
    python -c "import psutil" >nul 2>&1 && echo  [FIXED] psutil installed || echo  [WARN] psutil repair failed - run python -m pip install psutil.
)
python -c "import psutil" >nul 2>&1 && echo  [+] psutil ready || echo  [!] psutil failed
echo.

echo  =========================================
echo            Automatic Game Repair
echo  =========================================
echo.
color 1
set "STEAM_OPEN_ERROR=0"
tasklist /FI "IMAGENAME eq Steam.exe" /NH 2>nul | find /I "Steam.exe" >nul
if errorlevel 1 (
    if exist "!STEAM_EXE!" (
        echo  [WARN] Steam is not running; starting it...
        start "" "!STEAM_EXE!" -silent
        set "STEAM_STARTED=0"
        set "STEAM_PROCESS_FILE=%TEMP%\fcs-steam-!RANDOM!.tmp"
        for /L %%W in (1,1,30) do (
            if "!STEAM_STARTED!"=="0" (
                tasklist /FI "IMAGENAME eq Steam.exe" /NH >"!STEAM_PROCESS_FILE!" 2>nul
                find /I "Steam.exe" "!STEAM_PROCESS_FILE!" >nul 2>&1
                if not errorlevel 1 set "STEAM_STARTED=1"
                if "!STEAM_STARTED!"=="0" timeout /t 1 /nobreak >nul
            )
        )
        del /q "!STEAM_PROCESS_FILE!" >nul 2>&1
        if "!STEAM_STARTED!"=="1" (echo  [FIXED] Steam started) else (set "STEAM_OPEN_ERROR=1")
    ) else (
        set "STEAM_OPEN_ERROR=1"
    )
)
if "!STEAM_OPEN_ERROR!"=="1" (
    color 4
    echo.
    echo  ERROR: OPEN STEAM
    echo.
    pause
    exit /b 1
)

set "NEEDS_STEAM_REPAIR=0"
if not exist "!GAME_DIR!\GameAssembly.dll" set "NEEDS_STEAM_REPAIR=1"
if not exist "!GAME_DIR!\UnityPlayer.dll" set "NEEDS_STEAM_REPAIR=1"
if not exist "!GAME_DIR!\EACLauncher.exe" if not exist "!GAME_DIR!\AnimalCompany.exe" set "NEEDS_STEAM_REPAIR=1"
if not exist "!GAME_DIR!\EACLauncher_Data\globalgamemanagers" if not exist "!GAME_DIR!\AnimalCompany_Data\globalgamemanagers" set "NEEDS_STEAM_REPAIR=1"
if "!NEEDS_STEAM_REPAIR!"=="1" (
    echo  [WARN] Missing game files detected; starting Steam validation...
    taskkill /IM EACLauncher.exe /F >nul 2>&1
    taskkill /IM AnimalCompany.exe /F >nul 2>&1
    start "" "steam://validate/4551040"
    set "STEAM_REPAIR_READY=0"
    for /L %%W in (1,1,300) do (
        if "!STEAM_REPAIR_READY!"=="0" (
            if exist "!GAME_DIR!\GameAssembly.dll" if exist "!GAME_DIR!\UnityPlayer.dll" if exist "!GAME_DIR!\AnimalCompany.exe" if exist "!GAME_DIR!\AnimalCompany_Data\globalgamemanagers" set "STEAM_REPAIR_READY=1"
            if "!STEAM_REPAIR_READY!"=="0" timeout /t 1 /nobreak >nul
        )
    )
    if "!STEAM_REPAIR_READY!"=="0" (
        color 4
        echo  [WARN] Steam validation did not finish within five minutes.
        echo         Fix: let Steam finish validating, then run this launcher again.
        pause
        exit /b 1
    )
    timeout /t 5 /nobreak >nul
    echo  [FIXED] Steam game files restored
) else (
    echo  [+] Game files are present
)
echo.

color 1
echo  =========================================
echo           Configuring EAC Bypass
echo  =========================================
echo.
if "!REPAIR_ONLY!"=="1" (
    echo  [-] Checking EAC bypass file pairing
) else (
    echo  [+] EAC bypass setup launched
)
set "BYPASS_PAIRING_CHANGED=0"
set "BYPASS_PAIRING_ERROR=0"
if exist "!GAME_DIR!\AnimalCompany.exe" (
    echo  [WARN] Executable pairing is incomplete; repairing...
    if exist "!GAME_DIR!\EACLauncher.exe" (
        if exist "!GAME_DIR!\EACLauncher.original.exe" (del /q "!GAME_DIR!\EACLauncher.exe" >nul 2>&1) else (move /y "!GAME_DIR!\EACLauncher.exe" "!GAME_DIR!\EACLauncher.original.exe" >nul 2>&1)
    )
    move /y "!GAME_DIR!\AnimalCompany.exe" "!GAME_DIR!\EACLauncher.exe" >nul 2>&1
    set "BYPASS_PAIRING_CHANGED=1"
)
if exist "!GAME_DIR!\AnimalCompany_Data" (
    echo  [WARN] Data pairing is incomplete; repairing...
    if exist "!GAME_DIR!\EACLauncher_Data" (
        if exist "!GAME_DIR!\EACLauncher_Data.original" (rmdir /s /q "!GAME_DIR!\EACLauncher_Data" >nul 2>&1) else (move /y "!GAME_DIR!\EACLauncher_Data" "!GAME_DIR!\EACLauncher_Data.original" >nul 2>&1)
    )
    move /y "!GAME_DIR!\AnimalCompany_Data" "!GAME_DIR!\EACLauncher_Data" >nul 2>&1
    set "BYPASS_PAIRING_CHANGED=1"
)
if exist "!GAME_DIR!\AnimalCompany.exe" set "BYPASS_PAIRING_ERROR=1"
if exist "!GAME_DIR!\AnimalCompany_Data" set "BYPASS_PAIRING_ERROR=1"
if not exist "!GAME_DIR!\EACLauncher.exe" set "BYPASS_PAIRING_ERROR=1"
if not exist "!GAME_DIR!\EACLauncher_Data\globalgamemanagers" set "BYPASS_PAIRING_ERROR=1"
if "!BYPASS_PAIRING_ERROR!"=="1" (
    color 4
    echo  [ERROR] EAC bypass file pairing could not be repaired.
    echo          Fix: verify Animal Company files in Steam, then rerun Rexon.bat.
    pause
    exit /b 1
)
if "!BYPASS_PAIRING_CHANGED!"=="1" echo  [FIXED] EAC bypass executable/data pairing
echo  [+] Main auto injector now owns injection
set "REPAIR_GAME_COUNT=0"
for /f "tokens=2" %%P in ('tasklist /FI "IMAGENAME eq EACLauncher.exe" /NH 2^>nul ^| find /I "EACLauncher.exe"') do set /a REPAIR_GAME_COUNT+=1
if !REPAIR_GAME_COUNT! GTR 1 (
    echo  [WARN] Duplicate game processes detected; closing them...
    taskkill /IM EACLauncher.exe /F >nul 2>&1
    timeout /t 2 /nobreak >nul
    echo  [FIXED] Duplicate game processes closed
)
echo.

echo  =========================================
echo          Soundboard Setup
echo  =========================================
echo.
set SOUNDCOUNT=0
for %%F in ("%SOURCE%\*.wav") do (
    if not exist "%TARGET%\%%~nxF" (
        copy "%%F" "%TARGET%\%%~nxF" >nul
        set /a SOUNDCOUNT+=1
        echo  [+] Added %%~nxF
    )
)
for %%F in ("%SOURCE%\*.mp3") do set /a SOUNDCOUNT+=1
if !SOUNDCOUNT!==0 (
    echo  [-] No new sound files to copy
) else (
    echo  [+] !SOUNDCOUNT! sound file^(s^) ready
)
echo.

echo  =========================================
echo          Discord RPC
echo  =========================================
echo.
if "!REPAIR_ONLY!"=="1" (
    echo  [-] Discord Rich Presence skipped in repair-only mode
) else (
    set "DISCORD_READY=0"
    where node >nul 2>&1
    if not errorlevel 1 if exist "%MENU_DIR%node_modules\ts-node" if exist "%MENU_DIR%discordrpc.ts" set "DISCORD_READY=1"
    if "!DISCORD_READY!"=="1" (
        start "" /b cmd.exe /d /c "call npx ts-node --transpile-only discordrpc.ts >nul 2>&1"
        echo  [+] Discord Rich Presence started
    ) else (
        echo  [-] Discord Rich Presence dependencies unavailable, skipping optional feature
    )
)
echo.

:preflight_checks
echo  =========================================
echo           Pre-Flight Checks
echo  =========================================
echo.

set TOTAL=0
set PASSED=0
set FAILED=0
set WARNED=0

echo   Injection Files:
for %%F in (
    "%MENU_DIR%ac_bridge.js"
    "%MENU_DIR%config.js"
    "%MENU_DIR%bypass.js"
    "%MENU_DIR%da.ts"
    "%MENU_DIR%symbols.ts"
    "%MENU_DIR%nophoton.ts"
    "%MENU_DIR%quest.ts"
    "%MENU_DIR%bypass.py"
) do (
    set /a TOTAL+=1
    if exist "%%~fF" (
        if %%~zF GTR 0 (
            set /a PASSED+=1
            echo     [OPERATIONAL] %%~nxF - %%~zF bytes
        ) else (
            set /a FAILED+=1
            echo     [FAIL] %%~nxF is empty
            echo            Fix: restore %%~nxF from a clean FCS Menu download.
        )
    ) else (
        set /a FAILED+=1
        echo     [FAIL] %%~nxF is missing
        echo            Fix: restore %%~nxF from a clean FCS Menu download.
    )
)

echo.
echo   Required Runtime:
set "PYTHON_VERSION="
for /f "tokens=2" %%V in ('python --version 2^>^&1') do if not defined PYTHON_VERSION set "PYTHON_VERSION=%%V"
set /a TOTAL+=1
python -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 8) else 1)" >nul 2>&1
if errorlevel 1 (set /a FAILED+=1 & echo     [FAIL] Python 3.8 or newer required. & echo            Fix: install 64-bit Python from python.org, then rerun.) else (set /a PASSED+=1 & echo     [OPERATIONAL] Python !PYTHON_VERSION!)
set /a TOTAL+=1
python -c "import struct; raise SystemExit(0 if struct.calcsize('P') == 8 else 1)" >nul 2>&1
if errorlevel 1 (set /a FAILED+=1 & echo     [FAIL] 64-bit Python required. & echo            Fix: uninstall 32-bit Python and install the 64-bit build.) else (set /a PASSED+=1 & echo     [OPERATIONAL] Python architecture - 64-bit)
set "FRIDA_VERSION="
for /f "delims=" %%V in ('frida --version 2^>nul') do if not defined FRIDA_VERSION set "FRIDA_VERSION=%%V"
set /a TOTAL+=1
if defined FRIDA_VERSION (set /a PASSED+=1 & echo     [OPERATIONAL] Frida !FRIDA_VERSION!) else (set /a FAILED+=1 & echo     [FAIL] Frida CLI unavailable. & echo            Fix: run python -m pip install --upgrade frida-tools.)
set /a TOTAL+=1
python -c "import frida, subprocess; cli=subprocess.check_output(['frida','--version'], text=True).strip(); raise SystemExit(0 if cli == frida.__version__ else 1)" >nul 2>&1
if errorlevel 1 (
    if "!PREFLIGHT_ONLY!"=="1" (echo     [WARN] Frida CLI/Python version mismatch.) else (echo     [WARN] Frida CLI/Python version mismatch; attempting repair...)
    if not "!PREFLIGHT_ONLY!"=="1" python -m pip install --upgrade --force-reinstall frida frida-tools >nul 2>&1
    python -c "import frida, subprocess; cli=subprocess.check_output(['frida','--version'], text=True).strip(); raise SystemExit(0 if cli == frida.__version__ else 1)" >nul 2>&1
    if errorlevel 1 (
        set /a FAILED+=1
        echo     [FAIL] Frida CLI/Python versions still mismatch.
        echo            Fix: run python -m pip install --force-reinstall frida frida-tools.
    ) else (
        set /a PASSED+=1
        echo     [FIXED] Frida CLI/Python versions match
    )
) else (set /a PASSED+=1 & echo     [OPERATIONAL] Frida CLI/Python versions match)
set /a TOTAL+=1
python -c "import psutil" >nul 2>&1
if errorlevel 1 (set /a FAILED+=1 & echo     [FAIL] Python psutil package. & echo            Fix: run python -m pip install psutil.) else (set /a PASSED+=1 & echo     [OPERATIONAL] Python psutil package)

echo.
echo   Game Installation:
set /a TOTAL+=1
if exist "!GAME_DIR!\EACLauncher.exe" (for %%F in ("!GAME_DIR!\EACLauncher.exe") do if %%~zF GTR 0 (set /a PASSED+=1 & echo     [OPERATIONAL] EACLauncher.exe - %%~zF bytes) else (set /a FAILED+=1 & echo     [FAIL] EACLauncher.exe is empty & echo            Fix: verify game files in Steam, then rerun repair-only.)) else (set /a FAILED+=1 & echo     [FAIL] EACLauncher.exe is missing & echo            Fix: verify game files in Steam, then rerun repair-only.)
set /a TOTAL+=1
if exist "!GAME_DIR!\EACLauncher_Data\globalgamemanagers" (set /a PASSED+=1 & echo     [OPERATIONAL] EACLauncher_Data content) else (set /a FAILED+=1 & echo     [FAIL] EACLauncher_Data is incomplete & echo            Fix: verify game files in Steam, then rerun repair-only.)
set /a TOTAL+=1
if exist "!GAME_DIR!\GameAssembly.dll" (set /a PASSED+=1 & echo     [OPERATIONAL] GameAssembly.dll) else (set /a FAILED+=1 & echo     [FAIL] GameAssembly.dll is missing & echo            Fix: verify Animal Company files in Steam.)
set /a TOTAL+=1
if exist "!GAME_DIR!\UnityPlayer.dll" (set /a PASSED+=1 & echo     [OPERATIONAL] UnityPlayer.dll) else (set /a FAILED+=1 & echo     [FAIL] UnityPlayer.dll is missing & echo            Fix: verify Animal Company files in Steam.)
set /a TOTAL+=1
if exist "!GAME_DIR!\AnimalCompany.exe" (set /a WARNED+=1 & echo     [WARN] AnimalCompany.exe still exists - bypass setup may be partial & echo            Fix: close the game and run RUN.START.bat --repair-only.) else if exist "!GAME_DIR!\AnimalCompany_Data" (set /a WARNED+=1 & echo     [WARN] AnimalCompany_Data still exists - bypass setup may be partial & echo            Fix: close the game and run RUN.START.bat --repair-only.) else (set /a PASSED+=1 & echo     [OPERATIONAL] Bypass executable/data pairing)
set /a TOTAL+=1
tasklist /FI "IMAGENAME eq Steam.exe" /NH 2>nul | find /I "Steam.exe" >nul
if errorlevel 1 (set /a FAILED+=1 & echo     [FAIL] Steam is not running. & echo            Fix: open Steam, sign in, then rerun RUN.START.bat.) else (set /a PASSED+=1 & echo     [OPERATIONAL] Steam is running)
set "ACTIVE_GAME_COUNT=0"
for /f "tokens=2" %%P in ('tasklist /FI "IMAGENAME eq EACLauncher.exe" /NH 2^>nul ^| find /I "EACLauncher.exe"') do set /a ACTIVE_GAME_COUNT+=1
set /a TOTAL+=1
if !ACTIVE_GAME_COUNT! GTR 1 (set /a FAILED+=1 & echo     [FAIL] !ACTIVE_GAME_COUNT! game processes are running. & echo            Fix: close every Animal Company process and rerun.) else if !ACTIVE_GAME_COUNT! EQU 1 (set /a WARNED+=1 & echo     [WARN] Game is already running - injection will begin immediately) else (set /a PASSED+=1 & echo     [OPERATIONAL] No stale game process)

echo.
title FCS MENU INJECTOR
echo  =========================================
if !FAILED! GTR 0 (
    color 4
    echo   !PASSED! operational, !WARNED! warning^(s^), !FAILED! failed - !TOTAL! total
    echo   Injection blocked. Automatic repair could not safely resolve each FAIL.
) else if !WARNED! GTR 0 (
    color 1
    echo   !PASSED! operational, !WARNED! warning^(s^) - !TOTAL! total
    echo   Checks operational with warnings. Ready to inject.
) else (
    color 2
    echo   ALL !PASSED!/!TOTAL! CHECKS OPERATIONAL - Ready to inject!
	cd /d "%~dp0"
	cd..
	cd..
	cd..
	python inc_ready.py
)
echo  =========================================
echo  Upd message: Finally.
echo.
if !FAILED! GTR 0 (
    pause
    exit /b 1
)
if !PREFLIGHT_ONLY!==1 (
    echo  Pre-flight-only run complete. No injection was attempted.
    exit /b 0
)
if !REPAIR_ONLY!==1 (
    echo  Automatic repair and verification complete. No injection was attempted.
    exit /b 0
)
echo  [+] Auto injector is running
echo  Launch Animal Company from Steam.
echo.
set "GAMEPID=0"
:wait_for_game
set "GAMEPID=0"
for /f "tokens=2" %%P in ('tasklist /FI "IMAGENAME eq EACLauncher.exe" /NH 2^>nul ^| find /I "EACLauncher.exe"') do if "!GAMEPID!"=="0" set "GAMEPID=%%P"
if "!GAMEPID!"=="0" (
    timeout /t 1 /nobreak >nul
    goto :wait_for_game
)

echo  [+] Game detected - automatic injection in 4 seconds...
timeout /t 4 /nobreak >nul
echo  [-] Waiting for GameAssembly.dll...
set "GAMEASSEMBLY_READY=0"
set "MODULE_CHECK_FILE=%TEMP%\fcs-module-!RANDOM!.tmp"
for /L %%W in (1,1,30) do (
    if "!GAMEASSEMBLY_READY!"=="0" (
        tasklist /FI "PID eq !GAMEPID!" /M GameAssembly.dll /NH >"!MODULE_CHECK_FILE!" 2>nul
        find /I "EACLauncher.exe" "!MODULE_CHECK_FILE!" >nul 2>&1
        if not errorlevel 1 set "GAMEASSEMBLY_READY=1"
        if "!GAMEASSEMBLY_READY!"=="0" timeout /t 1 /nobreak >nul
    )
)
del /q "!MODULE_CHECK_FILE!" >nul 2>&1
if "!GAMEASSEMBLY_READY!"=="0" (
    color 4
    echo  [FAIL] GameAssembly.dll was not ready; injection was cancelled.
    echo         Fix: close the game and rerun RUN.START.bat.
    pause
    exit /b 1
)

echo  [+] Injecting FCS Menu...
frida -l "%MENU_DIR%ac_bridge.js" -l "%MENU_DIR%config.js" -l "%MENU_DIR%symbols.ts" -l "%MENU_DIR%nophoton.ts" -l "%MENU_DIR%da.ts" -l "%MENU_DIR%quest.ts" -p !GAMEPID!
if errorlevel 1 (
    color 4
    echo.
    echo  [FAIL] FCS Menu injection stopped with an error.
    echo         Fix: close the game and rerun RUN.START.bat.
    pause
    exit /b 1
)
exit /b 0

:refresh_runtime_paths
set "DETECTED_PYTHON="
for /f "delims=" %%P in ('python -c "import sys; print(sys.executable)" 2^>nul') do if not defined DETECTED_PYTHON set "DETECTED_PYTHON=%%P"
if not defined DETECTED_PYTHON for /f "delims=" %%P in ('py -3 -c "import sys; print(sys.executable)" 2^>nul') do if not defined DETECTED_PYTHON set "DETECTED_PYTHON=%%P"
if not defined DETECTED_PYTHON for /d %%P in ("%LOCALAPPDATA%\Programs\Python\Python*" "%LOCALAPPDATA%\Python\pythoncore-*" "%PROGRAMFILES%\Python*") do if exist "%%~fP\python.exe" set "DETECTED_PYTHON=%%~fP\python.exe"
if defined DETECTED_PYTHON for %%P in ("!DETECTED_PYTHON!") do set "PATH=%%~dpP;!PATH!"
set "DETECTED_PYTHON_SCRIPTS="
for /f "delims=" %%P in ('python -c "import sysconfig; print(sysconfig.get_path('scripts') or '')" 2^>nul') do if not defined DETECTED_PYTHON_SCRIPTS set "DETECTED_PYTHON_SCRIPTS=%%P"
if defined DETECTED_PYTHON_SCRIPTS set "PATH=!DETECTED_PYTHON_SCRIPTS!;!PATH!"
set "DETECTED_NODE_DIR="
for /f "tokens=2*" %%A in ('reg query "HKLM\SOFTWARE\Node.js" /v InstallPath 2^>nul') do set "DETECTED_NODE_DIR=%%B"
if defined DETECTED_NODE_DIR set "PATH=!DETECTED_NODE_DIR!;!PATH!"
set "PATH=%APPDATA%\npm;!PATH!"
exit /b 0

:launch_injector
start "BYPASS INJECTOR" /D "%MENU_DIR%" cmd.exe /d /c "title BYPASS INJECTOR & color 7 & python bypass.py --fcs-batch-window & timeout /t -1 /nobreak >nul"
exit /b 0
