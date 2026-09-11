@echo off
echo make sure this is admin
pause
cd /d "%~dp0"
cd..
cd menu
powershell.exe -ep Unrestricted -File "AccessViolation.ps1"
echo if theres no error it worked
pause