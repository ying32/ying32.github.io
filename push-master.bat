@echo off

:retry

echo Õ∆ÀÕ÷–...

git push --thin --progress "origin" master

if %errorlevel% NEQ 0 (
  goto retry
)
pause