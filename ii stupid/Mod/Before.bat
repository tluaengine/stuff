@echo off
cd /d "%~dp0"
if not exist "game_dir.txt" call get_game_dir.bat
set /p game_dir=<game_dir.txt
echo game directory?: %game_dir%

if not exist "%game_dir%" (
	echo change ur ac diractory&pause&exit /b
)
if not exist "%game_dir%\EACLauncher.exe" (
    echo EACLauncher.exe not found.
	echo continue to validate ac
	pause
	start "" "steam://validate/4551040"
	echo validating ac now. relanuch this when it's done.
	pause
	exit
)

cd menu stuff
start "" bypass.py
echo wait for the other window to say you can launch ac

:wait
tasklist /FI "IMAGENAME eq EACLauncher.exe" | find /I "EACLauncher.exe" >nul
if not errorlevel 1 (
    goto good
)
goto wait
:good
echo ac detected waiting to load menu
timeout /t 3 /nobreak >nul
start "" questservers.bat
call "Stupidity.bat"
