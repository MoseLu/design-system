# @enterprise-workspace/design-system

> Enterprise Workspace 统一设计系统，作为共享包通过 Verdaccio 发布和消费。

## 定位

Design System 是独立共享仓库，为工作区内多个产品提供设计令牌、通用组件、主题系统和基础 hooks。

- 原子化设计令牌
- React / Vue 双栈兼容
- 主题切换能力
- 版本化发布

## 集成方式

### 正式方式：私有包发布

在消费仓库根目录配置 `.npmrc`：

```ini
@enterprise-workspace:registry=http://localhost:4873
registry=https://registry.npmjs.org/
save-exact=true
```

安装：

```bash
pnpm add @enterprise-workspace/design-system
```

### 已废止方式：Git Submodule

Submodule 只保留给历史参考仓库，不再作为 Enterprise Workspace 的正式共享策略。

## 快速开始

### 导入设计令牌

```css
@import "@enterprise-workspace/design-system/tokens/css";
```

### 使用组件

```tsx
import { Button } from '@enterprise-workspace/design-system/components';
```

### 主题切换

```tsx
import { useTheme } from '@enterprise-workspace/design-system/hooks';
```

## 发布

```bash
npm version patch
npm publish --registry http://localhost:4873
```

`publishConfig` 已指向 Verdaccio，本仓库默认走私有注册表发布。
