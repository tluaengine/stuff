@echo off
cd /d "%~dp0"
cd fixes
echo launching dependency installer
echo.
prerequisites.bat
EACNOtInstalled.bat
validate.bat
path.bat
powershell.exe -ep Unrestricted -Command "Start-Process AccessViolation.bat -Verb RunAs"