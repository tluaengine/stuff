@echo off
cd /d "%~dp0ouuuushiitsthestuffforthemenu"
setlocal EnableDelayedExpansion
for /F "delims=" %%A in ('echo prompt $E^| "%ComSpec%" /Q') do set "ESC=%%A"
set ver=2.7.1
title ii's Stupid Menu V%ver%
set "slowtext=ii's Stupid Menu V%ver%"
set i=1
set "GREEN=!ESC![38;2;0;255;0m"
set "RED=!ESC![38;2;255;0;0m"
set "RESET=!ESC![0m"
set "ORANGE=!ESC![38;2;255;165;0m"
:slowtextshow
echo !ORANGE!!slowtext:~0,%i%!!RESET!
call :wait
set "cur=!slowtext:~0,%i%!"
set /a i+=1
if "!cur!"=="!slowtext:~0,%i%!" goto stopslowtext
cls
goto slowtextshow
:wait
for /L %%i in (1,1,5) do ping 127.0.0.1 -n 1 -w 25 >nul
exit /b
:stopslowtext
set failed=0
echo.
echo !ORANGE![CHECKS]!RESET!
echo.
<nul set /p "=Python: "
where python >nul 2>&1
if errorlevel 1 (
    echo !RED!FAIL.!RESET!
	set /a failed+=1
) else (
    echo !GREEN!PASS.!RESET!
)
<nul set /p "=frida-tools: "
python -m pip show frida-tools >nul 2>&1
if errorlevel 1 (
    echo !RED!FAIL. ATTEMPTING FIX...!RESET!
	set /a failed+=1
    python -m pip install frida-tools >nul 2>&1
) else (
    echo !GREEN!PASS.!RESET!
)
<nul set /p "=psutil: "
python -m pip show psutil >nul 2>&1
if errorlevel 1 (
    echo !RED!FAIL. ATTEMPTING FIX...!RESET!
	set /a failed+=1
    python -m pip install psutil >nul 2>&1
) else (
    echo !GREEN!PASS.!RESET!
)
timeout /nobreak /t 1 >nul
echo.
if !failed! gtr 0 (
	echo !failed! checks have failed.
	echo.
	echo Fix these before using the menu.
	echo This will close when you continue.
	pause
	exit
)
echo !ORANGE![BEFORE]!RESET!
echo.
echo Starting Bypass...
start "" "cmd /q /c python bypass.py"
echo.
echo !ORANGE![WAITING FOR ANIMAL COMPANY]!RESET!
:waitEAC
tasklist /FI "IMAGENAME eq EACLauncher.exe" | find /I "EACLauncher.exe" >nul
if errorlevel 1 (
    timeout /t 1 /nobreak >nul
    goto waitEAC
)
echo.
echo Animal Company detected.
timeout /nobreak /t 1 >nul
cls
echo Injecting menu...
echo.
frida -l "frida-il2cpp-bridge.js" -l "symbols.ts" -l "ts.ts" "EACLauncher.exe"
pause