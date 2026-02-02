#!/bin/bash
# Enterprise Workspace Design System - GitHub 初始化脚本

echo "========================================"
echo "Design System GitHub 初始化脚本"
echo "========================================"

# 检查是否已安装 GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "[警告] 未检测到 GitHub CLI (gh)"
    echo "请先安装: https://cli.github.com/"
    echo ""
    echo "手动设置步骤："
    echo "1. 访问 https://github.com/new 创建新仓库"
    echo "   - Repository name: design-system"
    echo "   - Description: Enterprise Workspace 统一设计系统"
    echo "   - 选择 Public"
    echo "   - 不要初始化 README、.gitignore 或 license"
    echo ""
    echo "2. 运行以下命令推送代码："
    echo "   cd design-system"
    echo "   git remote add origin https://github.com/BellisGit/design-system.git"
    echo "   git push -u origin main"
    exit 1
fi

# 检查 GitHub 认证状态
if ! gh auth status &> /dev/null; then
    echo "[信息] 需要登录 GitHub"
    gh auth login
fi

# 创建仓库并推送
echo "[信息] 创建 GitHub 仓库..."
gh repo create design-system \
    --public \
    --description "Enterprise Workspace 统一设计系统 - 提供设计令牌、通用组件和主题系统" \
    --source . \
    --push

if [ $? -eq 0 ]; then
    echo "[成功] 仓库创建并推送成功！"
    echo "仓库地址: https://github.com/BellisGit/design-system"
    
    echo ""
    echo "下一步：在子产品仓库中添加 Submodule"
    echo "cd products/pc-admin"
    echo "git submodule add https://github.com/BellisGit/design-system.git common/design-system"
else
    echo "[错误] 仓库创建失败"
    echo ""
    echo "请手动创建仓库："
    echo "1. 访问 https://github.com/new 创建 design-system 仓库"
    echo "2. 运行: git remote add origin https://github.com/BellisGit/design-system.git"
    echo "3. 运行: git push -u origin main"
fi
