'use client';

import { useMediaQuery } from 'react-responsive';

const MOBILE_BREAKPOINT = 767;

/**
 * 모바일 뷰포트 감지 훅 (react-responsive 기반)
 * @returns 모바일 화면 여부
 */
export function useIsMobile(): boolean {
  return useMediaQuery({ maxWidth: MOBILE_BREAKPOINT });
}
