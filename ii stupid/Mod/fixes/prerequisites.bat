@echo off
echo this one if for if you either dont have python or dont have the packages for it
pause
echo downloading python installer
powershell.exe -NoProfile -Command "$v=((Invoke-WebRequest -UseBasicParsing 'https://www.python.org/downloads/').Content|Select-String 'Python ([0-9]+\.[0-9]+\.[0-9]+)' -AllMatches).Matches[0].Groups[1].Value;$u='https://www.python.org/ftp/python/'+$v+'/python-'+$v+'-amd64.exe';Invoke-WebRequest $u -OutFile 'C:\Users\Public\python.exe'"
echo installing python
C:\Users\Public\python.exe PrependPath=1 Include_pip=1
echo done
echo deleting installer exe
del C:\Users\Public\python.exe
echo installing python packages
python -m pip install frida-tools&python -m pip install psutil
echo done
pause