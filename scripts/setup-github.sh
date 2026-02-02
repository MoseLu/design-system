@echo off
REM Enterprise Workspace Design System - GitHub 初始化脚本
REM 运行此脚本将 design-system 仓库推送到 GitHub

echo ========================================
echo Design System GitHub 初始化脚本
echo ========================================

REM 检查是否已安装 GitHub CLI
where gh >nul 2>&1
if %errorlevel% neq 0 (
    echo [警告] 未检测到 GitHub CLI (gh)
    echo 请先安装: https://cli.github.com/
    goto :manual
)

REM 检查 GitHub 认证状态
gh auth status >nul 2>&1
if %errorlevel% neq 0 (
    echo [信息] 需要登录 GitHub
    gh auth login
)

REM 创建仓库并推送
echo [信息] 创建 GitHub 仓库...
gh repo create design-system --public --description "Enterprise Workspace 统一设计系统 - 提供设计令牌、通用组件和主题系统" --source . --push

if %errorlevel% equ 0 (
    echo [成功] 仓库创建并推送成功！
    echo 仓库地址: https://github.com/BellisGit/design-system
) else (
    echo [错误] 仓库创建失败，请手动创建
    goto :manual
)

goto :end

:manual
echo.
echo ========================================
echo 手动设置步骤
echo ========================================
echo 1. 访问 https://github.com/new 创建新仓库
echo    - Repository name: design-system
echo    - Description: Enterprise Workspace 统一设计系统 - 提供设计令牌、通用组件和主题系统
echo    - 选择 Public
echo    - 不要初始化 README、.gitignore 或 license
echo.
echo 2. 运行以下命令推送代码：
echo    cd design-system
echo    git remote add origin https://github.com/BellisGit/design-system.git
echo    git push -u origin main
echo.
echo 3. 添加 Submodule 到各产品仓库：
echo    cd products/pc-admin
echo    git submodule add https://github.com/BellisGit/design-system.git common/design-system

:end
echo.
echo ========================================
echo 脚本完成
echo ========================================
pause
