# Changelog

All notable changes to the design system will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-02

### Added

- Initial release of the design system
- Design tokens:
  - Color system (primary, semantic colors, neutral colors)
  - Spacing system (4px grid, semantic spacing)
  - Typography system (font sizes, weights, line heights)
  - Effects system (shadows, border radius, transitions, animations)
  - Theme system (light/dark theme support)
- Base components:
  - Button (React version)
  - Topbar (React version)
- Hooks:
  - useTheme (theme switching)
  - useBreakpoints (responsive breakpoints)
- Utility functions (classNames, deepMerge, debounce, etc.)
- Engineering configuration:
  - ESLint rules
  - StyleLint rules
  - TypeScript configuration
  - Package.json configuration

### Features

- Framework-agnostic design tokens using CSS variables
- Dark mode support with automatic system preference detection
- Responsive breakpoint system
- Component theming through CSS variables
- TypeScript type definitions for all tokens

### Documentation

- README with quick start guide
- Component documentation
- Design token documentation
- Integration guide for sub-projects

## [Unreleased]

### Planned

- Vue component implementations
- Additional base components (Card, Modal, Input, etc.)
- Design token generation scripts
- Figma plugin integration
- Storybook documentation site
- Visual regression testing
