# @enterprise-workspace/design-system

> Enterprise Workspace 统一设计系统 - 提供设计令牌、通用组件和主题系统

## 简介

Design System 是一个独立的前端设计资产仓库，为 Enterprise Workspace 下的所有产品（pc-admin、devstation 等）提供统一的设计语言。通过 Git Submodule 的方式集成，确保设计语言的全局一致性，同时保留各产品仓库的独立性。

## 核心特性

- **原子化设计令牌**：颜色、间距、字体、效果等设计规则抽象为可配置的 CSS 变量
- **框架无关**：同时提供 React 和 Vue 组件实现
- **主题系统**：内置亮色和暗色主题支持
- **版本化管理**：独立版本控制，支持按需更新
- **渐进式采用**：可根据需求选择采用不同层级的设计系统

## 安装

### 作为 Git Submodule 集成（推荐）

```bash
# 在子产品仓库根目录
git submodule add https://github.com/BellisGit/design-system.git common/design-system
git submodule init
git submodule update
```

### 直接安装（未来支持 npm）

```bash
npm install @enterprise-workspace/design-system
```

## 快速开始

### 导入设计令牌

在项目的入口 CSS 文件中导入设计令牌：

```css
/* 在你的主 CSS 文件中 */
@import "./common/design-system/tokens/css/index.css";
```

### 使用组件

```tsx
// React
import { Button, Topbar } from '../../common/design-system/components';

function App() {
  return (
    <Topbar title="我的应用" buttons={[{ text: '首页' }, { text: '设置' }]} />
    <div className="content">
      <Button variant="primary" onClick={() => alert('点击!')}>
        点击我
      </Button>
    </div>
  );
}
```

### 主题切换

```tsx
import { useTheme } from '../../common/design-system/hooks';

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  
  return (
    <Button onClick={() => setTheme(theme.mode === 'dark' ? 'light' : 'dark')}>
      当前主题: {theme.resolved}
    </Button>
  );
}
```

## 设计令牌

### 颜色系统

```css
:root {
  /* 主色调 */
  --color-primary-500: #0ea5e9;
  --color-primary-hover: #38bdf8;
  --color-primary-active: #0284c7;
  
  /* 语义化颜色 */
  --color-success-main: #22c55e;
  --color-warning-main: #f59e0b;
  --color-danger-main: #ef4444;
  --color-info-main: #3b82f6;
}
```

### 间距系统

```css
:root {
  /* 4px 基础网格 */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  
  /* 语义化间距 */
  --topbar-button-gap: 40px;
  --card-padding-x: 24px;
  --page-padding-x: 24px;
}
```

### 主题变量

```css
:root,
:root[data-theme="light"] {
  --theme-bg-page: #fafafa;
  --theme-text-primary: #171717;
  --theme-border-main: #d4d4d4;
}

:root[data-theme="dark"] {
  --theme-bg-page: #020617;
  --theme-text-primary: #f1f5f9;
  --theme-border-main: #475569;
}
```

## 组件库

### 基础组件

- [Button](./components/Button/README.md) - 按钮组件
- [Topbar](./components/Topbar/README.md) - 顶栏组件

### 布局组件

- Card - 卡片组件
- Modal - 模态框组件
- Drawer - 抽屉组件

### 表单组件

- Input - 输入框组件
- Select - 选择器组件
- Checkbox - 复选框组件
- Radio - 单选框组件
- Switch - 开关组件

### 展示组件

- Table - 表格组件
- Badge - 徽章组件
- Progress - 进度条组件
- Empty - 空状态组件

### 反馈组件

- Toast - Toast 通知
- Loading - 加载组件
- Alert - 警告提示

## 更新日志

### v1.0.0 (2026-02-02)

- 初始版本发布
- 基础设计令牌（颜色、间距、字体、效果、主题）
- 基础组件（Button、Topbar）
- 基础 Hooks（useTheme、useBreakpoints）
- 工程化配置（ESLint、StyleLint）

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: 添加 amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系

- 仓库地址: https://github.com/BellisGit/design-system
- Issue: https://github.com/BellisGit/design-system/issues
