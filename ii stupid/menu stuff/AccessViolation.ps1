Set-Location $PSScriptRoot
Set-Location ..
Start-Service WinDefend
Add-MpPreference -ExclusionPath $PWD.Path