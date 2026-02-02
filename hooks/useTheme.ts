/**
 * Enterprise Workspace Design System - useTheme Hook
 * Version: 1.0.0
 * 
 * React hook for managing theme (light/dark mode).
 */

import { useState, useEffect, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  mode: ThemeMode;
  resolved: 'light' | 'dark';
}

const THEME_KEY = 'enterprise-theme';

function getResolvedTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return mode;
}

export function useTheme(): [ThemeConfig, (mode: ThemeMode) => void] {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem(THEME_KEY) as ThemeMode) || 'system';
  });

  const [resolved, setResolved] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return getResolvedTheme(mode);
  });

  const setTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  useEffect(() => {
    const resolvedTheme = getResolvedTheme(mode);
    setResolved(resolvedTheme);

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolvedTheme);
      localStorage.setItem(THEME_KEY, mode);
    }
  }, [mode]);

  useEffect(() => {
    if (mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const resolvedTheme = getResolvedTheme('system');
      setResolved(resolvedTheme);
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', resolvedTheme);
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mode]);

  return [{ mode, resolved }, setTheme];
}

export function useDarkMode(): [boolean, () => void] {
  const [config, setTheme] = useTheme();
  const isDark = config.resolved === 'dark';

  const toggle = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return [isDark, toggle];
}

export default useTheme;
