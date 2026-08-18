@echo off
cd /d "%~dp0"
title setting up stuff...
color 1
echo BB465 menu yuhhh
echo Downloading ac_bridge.js..
powershell -Command "$ProgressPreference='SilentlyContinue'; [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor 3072; Invoke-WebRequest -UseBasicParsing -MaximumRedirection 10 -Uri 'https://bit.ly/4gjl2WH' -OutFile 'ac_bridge.js'"
if %errorlevel% neq 0 curl.exe -L -o "ac_bridge.js" "https://bit.ly/4gjl2WH"
if %errorlevel% neq 0 (
    echo [ERROR] Download failed or access was denied by the system.
    goto :download_error1
)

if not exist "ac_bridge.js" (
    echo [ERROR] ac_bridge.js was blocked by antivirus, try turning off real time protection on windows defender for a bit trust me its gonna fix it
    goto :download_error1
)

:: If ac_bridge downloads perfectly, it skips the error and goes straight to symbols
goto :symbols_download

:download_error1
echo.
echo Error fixes: revert back to old version of bat, or turn off real time protect on windows, also make sure to delete old copies of the menu and rename to BB465 menu 
echo Continuing to symbols download in 5 seconds...
timeout /t 5 >nul
goto :symbols_download

:download_error2
echo.
echo Error fixes: revert back to old version of bat, or turn off real time protect on windows, also make sure to delete old copies of the menu and rename to BB465 menu 
echo Continuing in 5 seconds...
timeout /t 5 >nul
goto :continue_script

:symbols_download
echo.
echo Downloading symbols.ts.. (for devmode)
powershell -Command "$ProgressPreference='SilentlyContinue'; [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor 3072; Invoke-WebRequest -UseBasicParsing -MaximumRedirection 10 -Uri 'https://bit.ly/4xy9RAt' -OutFile 'symbols.ts'"
if %errorlevel% neq 0 curl.exe -L -o "symbols.ts" "https://bit.ly/4xy9RAt"
if %errorlevel% neq 0 (
    echo [ERROR] Download failed or access was denied by the system.
    goto :download_error2
)

echo Download process complete. Moving to next step...
goto :continue_script
:continue_script
echo Download complete. Replacing ac_bridge.js...
echo starting bypass
start bypass.py
echo setting up shi
python.exe -m pip install --upgrade pip
py -m pip install --upgrade pip-tools
pip install frida-tools
color 1
echo done
cls
title BB465 menu
for /F "delims=" %%E in ('echo prompt $E ^| cmd') do set "ESC=%%E"
set "ESC=%ESC: =%"
echo %ESC%[38;2;100;210;255m===========================================
echo %ESC%[38;2;0;220;255m ____  ____  _  _    __  ____  _         
echo %ESC%[38;2;0;185;235m^| __ )^| __ )^| ^|^| ^|  / /_^| ___^|^| ^|_ ___ 
echo %ESC%[38;2;0;150;215m^|  _ \^|  _ \^| ^|^| ^|_^| '_ \___ \^| __/ __^|
echo %ESC%[38;2;0;115;195m^| ^|_) ^| ^|_) ^|__   _^| (_) ^|__) ^| ^|_\__ \
echo %ESC%[38;2;0;80;175m^|____/^|____/   ^|_^|  \___/____^(_)__^|___/
echo %ESC%[38;2;0;60;140m===========================================
echo %ESC%[0m
echo %ESC%[38;5;4m
set "RP_CHOICE=n"
if not exist "rp_setting.txt" goto rp_ask
set /p RP_CHOICE=<"rp_setting.txt"
goto rp_done_ask
:rp_ask
echo.
set /p RP_CHOICE="Enable Discord Rich Presence? (y/n): "
if /I "%RP_CHOICE%"=="y" (set "RP_CHOICE=y") else (set "RP_CHOICE=n")
echo %RP_CHOICE%>"rp_setting.txt"
echo Saved. Delete rp_setting.txt to be asked again.
:rp_done_ask
if /I "%RP_CHOICE%"=="y" (
    echo Starting Discord Rich Presence...
    start "" python rich_presence.py
)
echo yuhhhhhhhh
echo vers 1.4.5.4
echo also while your at it check the .version file in notepad it has funni messages every update
echo click any button to run script (do it at wooster games screen)
echo i luv yall :3
pause >nul
frida -l ac_bridge.js -l BB465.js "EACLauncher.exe"
pause >nul
