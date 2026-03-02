/**
 * CSS 미디어 쿼리를 React에서 사용하기 위한 훅
 * 반응형 컴포넌트에서 현재 뷰포트 상태를 감지할 때 사용
 */

import { useEffect, useState } from "react";

/**
 * 미디어 쿼리 상태를 반환하는 훅
 * @param query - 미디어 쿼리 문자열 (예: "(min-width: 768px)")
 * @returns 쿼리 일치 여부
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
