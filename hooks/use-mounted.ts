/**
 * 컴포넌트가 클라이언트에서 마운트되었는지 확인하는 훅
 * next-themes, localStorage, useMediaQuery 등 클라이언트 전용 작업 시 SSR 오류 방지용
 */

import { useEffect, useState } from "react";

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
