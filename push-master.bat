@echo off

:retry

echo ������...

git push --thin --progress "origin" master

if %errorlevel% NEQ 0 (
  goto retry
)
pause