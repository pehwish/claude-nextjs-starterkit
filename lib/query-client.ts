/**
 * TanStack Query (React Query) v5 설정
 * 서버 상태 관리를 위한 QueryClient 싱글톤
 */

import { QueryClient } from "@tanstack/react-query";

export function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 데이터가 "신선한" 상태로 유지되는 시간 (기본 1분)
        staleTime: 60 * 1000,
        // 메모리에 캐시된 비활성 쿼리를 유지하는 시간 (기본 5분)
        gcTime: 5 * 60 * 1000,
        // 실패 시 재시도 횟수
        retry: 1,
      },
      mutations: {
        // mutation 재시도 횟수
        retry: 1,
      },
    },
  });
}

let clientSingleton: QueryClient | undefined = undefined;

export function getQueryClient(): QueryClient {
  if (typeof window === "undefined") {
    // Server: 항상 새로운 client 생성
    return makeQueryClient();
  }
  // Client: 싱글톤 재사용
  if (!clientSingleton) {
    clientSingleton = makeQueryClient();
  }
  return clientSingleton;
}
