@echo off
setlocal
cd /d "%~dp0"
frida -l frida-il2cpp-bridge.js -l symbols.ts -l m4literallymadethisinaminute.ts "EACLauncher.exe" -q
color a
pause