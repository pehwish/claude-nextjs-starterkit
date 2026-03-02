/**
 * UI 전역 상태 관리 스토어 (Zustand)
 * 사이드바, 모바일 메뉴 등의 UI 상태를 관리
 */

import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
