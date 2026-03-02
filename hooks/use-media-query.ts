'use client';

import { useMediaQuery as useResponsiveQuery } from 'react-responsive';

/**
 * CSS 미디어 쿼리 감지 훅 (react-responsive 기반)
 * @param query - CSS 미디어 쿼리 문자열 (예: "(min-width: 768px)")
 * @returns 쿼리 일치 여부
 */
export function useMediaQuery(query: string): boolean {
  return useResponsiveQuery({ query });
}
