/**
 * TanStack Query (React Query) v5 QueryClientProvider 래퍼
 * app/layout.tsx의 ThemeProvider 안에 중첩되어야 함
 */

"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
