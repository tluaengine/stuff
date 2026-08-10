@echo off
setlocal EnableDelayedExpansion

echo validate your files before you use this
pause

start "" "steam://run/4551040"
timeout /t 5 /nobreak >nul

set "out=%~dp0game_dir.txt"

powershell.exe -ExecutionPolicy Unrestricted -Command "[System.IO.File]::WriteAllText($env:out, (Split-Path (Get-Process EACLauncher).Path))"

taskkill /f /im EACLauncher.exe
taskkill /f /im AnimalCompany.exe

pause