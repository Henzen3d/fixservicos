@echo off
setlocal
set SCRIPT_DIR=%~dp0
if "%CLAUDE_SEO_DATA_DIR%"=="" set CLAUDE_SEO_DATA_DIR=%SCRIPT_DIR%
if exist "%SCRIPT_DIR%runtime.py" (
    py -3.12 "%SCRIPT_DIR%runtime.py" %*
) else if exist "%SCRIPT_DIR%scripts\runtime.py" (
    py -3.12 "%SCRIPT_DIR%scripts\runtime.py" %*
) else (
    python "%SCRIPT_DIR%scripts\runtime.py" %*
)
