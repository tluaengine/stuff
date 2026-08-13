cd /d "%~dp0"
timeout /nobreak /t 3 >nul
frida -l frida-il2cpp-bridge.js -l symbols.ts -l DabeansSkiddedMenu.js "EACLauncher.exe"
pause
