@echo off
echo validate your game files before you do this
pause

:a
set /p "ans=input your Animal Company path (example: C:\Program Files (x86)\Steam\steamapps\common\Animal Company): "

if not exist "%ans%\EasyAntiCheat\EasyAntiCheat_EOS_Setup.exe" (
    echo EasyAntiCheat_EOS_Setup.exe not found
	goto a
)

powershell.exe -NoProfile -Command "Start-Process -FilePath '%ans%\EasyAntiCheat\EasyAntiCheat_EOS_Setup.exe' -Verb RunAs"