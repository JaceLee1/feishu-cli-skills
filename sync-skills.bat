@echo off
REM 飞书 CLI 技能包 - 同步脚本
REM 功能：将 D:\claude 技能包\skills 同步到 Claude Code 工作目录

setlocal enabledelayedexpansion

REM 获取当前用户名
for /f "tokens=*" %%i in ('whoami') do set FULL_USERNAME=%%i
for /f "tokens=2 delims=\" %%i in ("!FULL_USERNAME!") do set USERNAME=%%i

REM 设置路径
set SKILLS_SOURCE=D:\claude 技能包\skills
set SKILLS_TARGET=C:\Users\%USERNAME%\.openclaw\workspace\skills

echo ========================================
echo 飞书 CLI 技能包 - 同步脚本
echo ========================================
echo.
echo 源目录：!SKILLS_SOURCE!
echo 目标目录：!SKILLS_TARGET!
echo.

REM 检查源目录是否存在
if not exist "!SKILLS_SOURCE!" (
    echo [错误] 源目录不存在：!SKILLS_SOURCE!
    pause
    exit /b 1
)

REM 检查目标目录是否存在
if not exist "!SKILLS_TARGET!" (
    echo [提示] 目标目录不存在，正在创建...
    mkdir "!SKILLS_TARGET!"
)

REM 复制 Skills（覆盖模式）
echo [开始] 复制 Skills...
xcopy "!SKILLS_SOURCE!\*" "!SKILLS_TARGET!\" /E /I /Y

echo.
echo [完成] Skills 同步完成！
echo.
echo 请重启 Claude Code 以应用更新。
echo.
pause
