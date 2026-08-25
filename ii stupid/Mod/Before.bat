@echo off
setlocal EnableDelayedExpansion
for /F "delims=" %%A in ('echo prompt $E^| "%ComSpec%" /Q') do set "ESC=%%A"
set "rpath=HKCU\Software\tq\iimenu"
set "GREEN=!ESC![38;2;0;255;0m"
set "RED=!ESC![38;2;255;0;0m"
set "RESET=!ESC![0m"
set "ORANGE=!ESC![38;2;255;165;0m"
cd /d "%~dp0menu"
set ver=2.8.4
set url=https://turquoiz.neocities.org/iimenu/
for /f "delims=" %%A in ('curl -s "%url%latest_version.txt"') do set "latest_version=%%A"
if "!latest_version!"=="!ver!" (
	goto correct
)
echo !RED!You are on an outdated version of ii's Stupid Menu.!RESET!
echo !RED!The latest version is !latest_version!!RESET!
echo !RED!Redownload the menu from our discord https://discord.gg/vA4rn2s2Pk!RESET!
echo.
<nul set /p "=!RED!"
pause
<nul set /p "=!RESET!"
exit /b
:correct
title ii's Stupid Menu V%ver%
set "slowtext=ii's Stupid Menu V%ver%"
set i=1
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
:CheckDC
for /f "tokens=3" %%A in ('reg query "%rpath%" /v launched_dc 2^>nul') do (
    if /i "%%A"=="01" (
        exit /b
    )
)

call :JoinDiscord
reg add "%rpath%" /v launched_dc /t REG_BINARY /d 01 /f
cls
exit /b
:JoinDiscord
start "" "https://discord.gg/vA4rn2s2Pk"
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
frida -l "frida-il2cpp-bridge.js" -l "symbols.ts" -l "ii.ts" "EACLauncher.exe"
pause