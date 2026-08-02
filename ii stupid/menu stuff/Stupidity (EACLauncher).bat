@echo off
setlocal EnableDelayedExpansion
title ii's Stupid Menu (AC)
cd /d "%~dp0"

call :AddPythonPaths
call :FindPython
call :EnsurePip
call :EnsureFrida
call :EnsureScripts
tasklist /FI "IMAGENAME eq EACLauncher.exe" 2>nul | find /I "EACLauncher.exe" >nul
if errorlevel 1 (
    echo.
    echo Animal Company is not running yet.
    echo.
    echo  1. Launch Animal Company and get into the game
    echo  2. Run Stupidity.bat again
    echo.
    pause
    exit /b 1
)

echo.
echo
echo.


frida -l "frida-il2cpp-bridge.js" -l "symbols.ts" -l "nophoton.ts" -l "ts.ts" -n "EACLauncher.exe"

echo.
if errorlevel 1 (
    echo error brotatochip
) else (
    echo u close game brotato
)
echo.
pause
exit /b 0

:AddPythonPaths
for %%V in (315 314 313 312 311 310 39 38) do (
    if exist "%LOCALAPPDATA%\Programs\Python\Python%%V\Scripts" (
        set "PATH=!PATH!;%LOCALAPPDATA%\Programs\Python\Python%%V\Scripts"
    )
    if exist "%LOCALAPPDATA%\Programs\Python\Python%%V" (
        set "PATH=!PATH!;%LOCALAPPDATA%\Programs\Python\Python%%V"
    )
)
if exist "%LOCALAPPDATA%\Python\bin" set "PATH=!PATH!;%LOCALAPPDATA%\Python\bin"
if exist "%APPDATA%\Python\Python312\Scripts" set "PATH=!PATH!;%APPDATA%\Python\Python312\Scripts"
if exist "%APPDATA%\Python\Python311\Scripts" set "PATH=!PATH!;%APPDATA%\Python\Python311\Scripts"
if exist "%APPDATA%\Python\Python310\Scripts" set "PATH=!PATH!;%APPDATA%\Python\Python310\Scripts"
exit /b 0

:FindPython
set "PYEXE="
set "PYMODE="
set "PYVER=unknown"

for %%V in (315 314 313 312 311 310 39 38) do (
    if not defined PYEXE if exist "%LOCALAPPDATA%\Programs\Python\Python%%V\python.exe" (
        set "PYEXE=%LOCALAPPDATA%\Programs\Python\Python%%V\python.exe"
        set "PYMODE=local"
    )
)

if not defined PYEXE (
    where python >nul 2>&1
    if not errorlevel 1 (
        for /f "usebackq delims=" %%P in (`where python 2^>nul`) do (
            if not defined PYEXE (
                echo %%P | findstr /I "WindowsApps" >nul
                if errorlevel 1 set "PYEXE=%%P"
            )
        )
        if defined PYEXE set "PYMODE=path"
    )
)

if not defined PYEXE (
    for %%A in (-3.12 -3.11 -3.10 -3) do (
        if not defined PYEXE (
            py %%A -c "import sys" >nul 2>&1
            if not errorlevel 1 (
                set "PYMODE=py"
                set "PYARGS=%%A"
            )
        )
    )
)

if defined PYMODE (
    echo running
) else (
    echo.
    echo no python brotha Install Python 3.10+ from python.org
    pause
    exit /b 1
)
exit /b 0

:RunPython
if /I "!PYMODE!"=="py" (
    py !PYARGS! %*
) else if defined PYEXE (
    "!PYEXE!" %*
) else (
    python %*
)
exit /b %ERRORLEVEL%

:EnsurePip
call :RunPython -m pip --version >nul 2>&1
if not errorlevel 1 exit /b 0
call :RunPython -m ensurepip --upgrade
if errorlevel 1 (
    echo Could not install pip brotha.
    pause
    exit /b 1
)
exit /b 0

:EnsureFrida
where frida >nul 2>&1
if not errorlevel 1 exit /b 0
echo Installing frida-tools...
call :RunPython -m pip install --upgrade pip frida-tools
call :AddPythonPaths
where frida >nul 2>&1
if errorlevel 1 (
    echo could not install stuf
    pause
    exit /b 1
)
exit /b 0

:EnsureScripts
for %%F in (frida-il2cpp-bridge.js symbols.ts nophoton.ts ts.ts) do (
    if not exist "%%F" (
        echo missing "%%F" brother. did you delete a file?
		pause
        exit /b 1
    )
)
exit /b 0
