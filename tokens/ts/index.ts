/**
 * Enterprise Workspace Design System - TypeScript Design Tokens
 * Version: 1.0.0
 * 
 * This file exports all design tokens as TypeScript constants and types.
 */

// ========================================
// Color Tokens
// ========================================

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string;
};

export type SemanticColorScale = ColorScale & {
  main: string;
  light: string;
  dark: string;
  hover: string;
  active: string;
};

export interface Colors {
  primary: ColorScale & {
    lightest: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    darkest: string;
    hover: string;
    active: string;
    focus: string;
    disabled: string;
  };
  success: SemanticColorScale;
  warning: SemanticColorScale;
  danger: SemanticColorScale;
  info: SemanticColorScale;
  neutral: ColorScale;
  neutralText: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
  };
  neutralBorder: {
    light: string;
    main: string;
    dark: string;
    focus: string;
  };
  neutralBg: {
    page: string;
    surface: string;
    elevated: string;
    overlay: string;
    hover: string;
    active: string;
    disabled: string;
  };
  dark: ColorScale;
  darkText: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
  };
  darkBorder: {
    light: string;
    main: string;
    dark: string;
    focus: string;
  };
  darkBg: {
    page: string;
    surface: string;
    elevated: string;
    overlay: string;
    hover: string;
    active: string;
    disabled: string;
  };
}

export const colors: Colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
    lightest: '#f0f9ff',
    lighter: '#e0f2fe',
    light: '#7dd3fc',
    main: '#0ea5e9',
    dark: '#0284c7',
    darker: '#0369a1',
    darkest: '#0c4a6e',
    hover: '#38bdf8',
    active: '#0284c7',
    focus: '#38bdf8',
    disabled: '#bae6fd',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    main: '#22c55e',
    light: '#4ade80',
    dark: '#16a34a',
    hover: '#4ade80',
    active: '#16a34a',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
    hover: '#fbbf24',
    active: '#d97706',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    main: '#ef4444',
    light: '#f87171',
    dark: '#dc2626',
    hover: '#f87171',
    active: '#dc2626',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    main: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
    hover: '#60a5fa',
    active: '#2563eb',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  neutralText: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#737373',
    disabled: '#a3a3a3',
    inverse: '#fafafa',
  },
  neutralBorder: {
    light: '#e5e5e5',
    main: '#d4d4d4',
    dark: '#a3a3a3',
    focus: '#0ea5e9',
  },
  neutralBg: {
    page: '#fafafa',
    surface: '#fafafa',
    elevated: '#fafafa',
    overlay: 'rgba(0, 0, 0, 0.5)',
    hover: '#f5f5f5',
    active: '#e5e5e5',
    disabled: '#f5f5f5',
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  darkText: {
    primary: '#f1f5f9',
    secondary: '#94a3b8',
    tertiary: '#64748b',
    disabled: '#475569',
    inverse: '#0f172a',
  },
  darkBorder: {
    light: '#334155',
    main: '#475569',
    dark: '#    focus: '#0ea5e9',
  },
64748b',
  darkBg: {
    page: '#020617',
    surface: '#0f172a',
    elevated: '#1e293b',
    overlay: 'rgba(0, 0, 0, 0.7)',
    hover: '#1e293b',
    active: '#334155',
    disabled: '#1e293b',
  },
};

// ========================================
// Spacing Tokens
// ========================================

export interface Spacing {
  unit: string;
  scale: Record<number, string>;
  page: {
    paddingX: string;
    paddingY: string;
    gap: string;
  };
  card: {
    paddingX: string;
    paddingY: string;
    gap: string;
    marginBottom: string;
  };
  topbar: {
    height: string;
    paddingX: string;
    paddingY: string;
    buttonGap: string;
    itemGap: string;
  };
  sidebar: {
    width: string;
    collapsedWidth: string;
    paddingX: string;
    paddingY: string;
    itemGap: string;
  };
  list: {
    itemPaddingX: string;
    itemPaddingY: string;
    gap: string;
  };
  form: {
    itemGap: string;
    labelGap: string;
    inputHeight: string;
    inputPaddingX: string;
    inputPaddingY: string;
  };
  button: {
    paddingXSm: string;
    paddingYSm: string;
    paddingXMd: string;
    paddingYMd: string;
    paddingXLg: string;
    paddingYLg: string;
    iconGap: string;
  };
  table: {
    cellPaddingX: string;
    cellPaddingY: string;
    headerHeight: string;
    rowHeight: string;
  };
  modal: {
    headerPaddingX: string;
    headerPaddingY: string;
    bodyPaddingX: string;
    bodyPaddingY: string;
    footerPaddingX: string;
    footerPaddingY: string;
    widthSm: string;
    widthMd: string;
    widthLg: string;
    widthXl: string;
  };
  popup: {
    paddingX: string;
    paddingY: string;
    minWidth: string;
    maxWidth: string;
    itemGap: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  zIndex: {
    dropdown: number;
    sticky: number;
    fixed: number;
    modalBackdrop: number;
    modal: number;
    popover: number;
    tooltip: number;
    notification: number;
  };
}

export const spacing: Spacing = {
  unit: '4px',
  scale: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
  },
  page: {
    paddingX: '24px',
    paddingY: '32px',
    gap: '24px',
  },
  card: {
    paddingX: '24px',
    paddingY: '24px',
    gap: '24px',
    marginBottom: '24px',
  },
  topbar: {
    height: '64px',
    paddingX: '32px',
    paddingY: '16px',
    buttonGap: '40px',
    itemGap: '16px',
  },
  sidebar: {
    width: '260px',
    collapsedWidth: '72px',
    paddingX: '16px',
    paddingY: '16px',
    itemGap: '8px',
  },
  list: {
    itemPaddingX: '16px',
    itemPaddingY: '12px',
    gap: '8px',
  },
  form: {
    itemGap: '16px',
    labelGap: '8px',
    inputHeight: '40px',
    inputPaddingX: '12px',
    inputPaddingY: '8px',
  },
  button: {
    paddingXSm: '12px',
    paddingYSm: '4px',
    paddingXMd: '16px',
    paddingYMd: '8px',
    paddingXLg: '24px',
    paddingYLg: '12px',
    iconGap: '8px',
  },
  table: {
    cellPaddingX: '16px',
    cellPaddingY: '12px',
    headerHeight: '48px',
    rowHeight: '52px',
  },
  modal: {
    headerPaddingX: '24px',
    headerPaddingY: '20px',
    bodyPaddingX: '24px',
    bodyPaddingY: '20px',
    footerPaddingX: '24px',
    footerPaddingY: '16px',
    widthSm: '400px',
    widthMd: '560px',
    widthLg: '720px',
    widthXl: '960px',
  },
  popup: {
    paddingX: '16px',
    paddingY: '12px',
    minWidth: '160px',
    maxWidth: '280px',
    itemGap: '4px',
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    notification: 1080,
  },
};

// ========================================
// Typography Tokens
// ========================================

export interface Typography {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
  };
  heading: {
    h1: { size: string; weight: number; lineHeight: number; letterSpacing: string };
    h2: { size: string; weight: number; lineHeight: number; letterSpacing: string };
    h3: { size: string; weight: number; lineHeight: number; letterSpacing: string };
    h4: { size: string; weight: number; lineHeight: number; letterSpacing: string };
    h5: { size: string; weight: number; lineHeight: number; letterSpacing: string };
    h6: { size: string; weight: number; lineHeight: number; letterSpacing: string };
  };
  body: {
    lg: { size: string; weight: number; lineHeight: number };
    base: { size: string; weight: number; lineHeight: number };
    sm: { size: string; weight: number; lineHeight: number };
    xs: { size: string; weight: number; lineHeight: number };
  };
  code: {
    size: string;
    sizeLg: string;
    family: string;
    lineHeight: number;
  };
}

export const typography: Typography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans SC', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
  heading: {
    h1: { size: '36px', weight: 700, lineHeight: 1.25, letterSpacing: '-0.05em' },
    h2: { size: '30px', weight: 600, lineHeight: 1.25, letterSpacing: '-0.025em' },
    h3: { size: '24px', weight: 600, lineHeight: 1.375, letterSpacing: '0' },
    h4: { size: '20px', weight: 600, lineHeight: 1.375, letterSpacing: '0' },
    h5: { size: '18px', weight: 500, lineHeight: 1.5, letterSpacing: '0' },
    h6: { size: '16px', weight: 500, lineHeight: 1.5, letterSpacing: '0' },
  },
  body: {
    lg: { size: '18px', weight: 400, lineHeight: 1.625 },
    base: { size: '16px', weight: 400, lineHeight: 1.5 },
    sm: { size: '14px', weight: 400, lineHeight: 1.5 },
    xs: { size: '12px', weight: 400, lineHeight: 1.5 },
  },
  code: {
    size: '14px',
    sizeLg: '16px',
    family: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
    lineHeight: 1.5,
  },
};

// ========================================
// Theme Types and Constants
// ========================================

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  bgPage: string;
  bgSurface: string;
  bgElevated: string;
  bgOverlay: string;
  bgHover: string;
  bgActive: string;
  bgDisabled: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  textInverse: string;
  borderLight: string;
  borderMain: string;
  borderDark: string;
  borderFocus: string;
  cardBg: string;
  cardBorder: string;
  glassBg: string;
  glassBorder: string;
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  shadowXl: string;
  buttonPrimaryBg: string;
  buttonPrimaryText: string;
  buttonHoverBg: string;
  buttonActiveBg: string;
  linkColor: string;
  linkHoverColor: string;
}

export const lightTheme: ThemeColors = {
  bgPage: '#fafafa',
  bgSurface: '#fafafa',
  bgElevated: '#fafafa',
  bgOverlay: 'rgba(0, 0, 0, 0.5)',
  bgHover: '#f5f5f5',
  bgActive: '#e5e5e5',
  bgDisabled: '#f5f5f5',
  textPrimary: '#171717',
  textSecondary: '#525252',
  textTertiary: '#737373',
  textDisabled: '#a3a3a3',
  textInverse: '#fafafa',
  borderLight: '#e5e5e5',
  borderMain: '#d4d4d4',
  borderDark: '#a3a3a3',
  borderFocus: '#0ea5e9',
  cardBg: '#fafafa',
  cardBorder: '#e5e5e5',
  glassBg: 'rgba(255, 255, 255, 0.8)',
  glassBorder: 'rgba(255, 255, 255, 0.5)',
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  buttonPrimaryBg: '#0ea5e9',
  buttonPrimaryText: '#ffffff',
  buttonHoverBg: '#38bdf8',
  buttonActiveBg: '#0284c7',
  linkColor: '#0ea5e9',
  linkHoverColor: '#38bdf8',
};

export const darkTheme: ThemeColors = {
  bgPage: '#020617',
  bgSurface: '#0f172a',
  bgElevated: '#1e293b',
  bgOverlay: 'rgba(0, 0, 0, 0.7)',
  bgHover: '#1e293b',
  bgActive: '#334155',
  bgDisabled: '#1e293b',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textTertiary: '#64748b',
  textDisabled: '#475569',
  textInverse: '#0f172a',
  borderLight: '#334155',
  borderMain: '#475569',
  borderDark: '#64748b',
  borderFocus: '#0ea5e9',
  cardBg: '#0f172a',
  cardBorder: '#334155',
  glassBg: 'rgba(15, 23, 42, 0.8)',
  glassBorder: 'rgba(30, 41, 59, 0.5)',
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
  buttonPrimaryBg: '#0ea5e9',
  buttonPrimaryText: '#ffffff',
  buttonHoverBg: '#38bdf8',
  buttonActiveBg: '#0284c7',
  linkColor: '#38bdf8',
  linkHoverColor: '#7dd3fc',
};

// ========================================
// Export All Tokens
// ========================================

export interface DesignTokens {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
}

export const designTokens: DesignTokens = {
  colors,
  spacing,
  typography,
  lightTheme,
  darkTheme,
};

export default designTokens;
