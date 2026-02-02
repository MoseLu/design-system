/**
 * Enterprise Workspace Design System - useBreakpoints Hook
 * Version: 1.0.0
 * 
 * React hook for responsive breakpoints.
 */

import { ref, onMounted, onUnmounted } from 'vue';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpointMap: Record<string, string> = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export interface BreakpointState {
  matches: Record<Breakpoint, boolean>;
  current: Breakpoint | null;
  isAtLeast(breakpoint: Breakpoint): boolean;
  isAtMost(breakpoint: Breakpoint): boolean;
}

export function useBreakpoints(): BreakpointState {
  const matches = ref<Record<Breakpoint, boolean>>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  const current = ref<Breakpoint | null>(null);

  const updateMatches = () => {
    let maxBreakpoint: Breakpoint | null = null;
    (Object.keys(breakpointMap) as Breakpoint[]).forEach((key) => {
      const isMatch = window.matchMedia(breakpointMap[key]).matches;
      matches.value[key] = isMatch;
      if (isMatch) {
        maxBreakpoint = key;
      }
    });
    current.value = maxBreakpoint;
  };

  onMounted(() => {
    updateMatches();
    const listeners: MediaQueryList[] = [];
    Object.values(breakpointMap).forEach((query) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', updateMatches);
      listeners.push(mediaQuery);
    });
    onUnmounted(() => {
      listeners.forEach((mq) => mq.removeEventListener('change', updateMatches));
    });
  });

  const isAtLeast = (breakpoint: Breakpoint): boolean => {
    return matches.value[breakpoint];
  };

  const isAtMost = (breakpoint: Breakpoint): boolean => {
    const index = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].indexOf(breakpoint);
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as Breakpoint[];
    for (let i = index + 1; i < breakpoints.length; i++) {
      if (matches.value[breakpoints[i]]) return false;
    }
    return true;
  };

  return { matches, current, isAtLeast, isAtMost };
}

export default useBreakpoints;
