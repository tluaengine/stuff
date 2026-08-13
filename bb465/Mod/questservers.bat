@echo off
color 1
echo questservers made by m4, improved by Banban465 =]
echo press any button when in loading screen
echo if it doesnt work open questservers.bat again and do the normal thingy
pause >nul
frida -l ac_bridge.js -l symbols.ts -l quest.ts "EACLauncher.exe"

if errorlevel 1 (
    echo.
    powershell -Command "[Console]::Write([char]27 + '[31m')"
    echo [!] Frida failed to inject or the game crashed.
    powershell -Command "[Console]::Write([char]27 + '[31;1m')"

    
    echo Press any key to close this window...
    pause >nul
    exit
)
