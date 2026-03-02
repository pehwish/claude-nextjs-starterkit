/**
 * 애플리케이션 전역 상수 정의
 */

export const SITE_CONFIG = {
  name: "StarterKit",
  description: "모던 Next.js 스타터킷",
  url: "https://example.com",
} as const;

export const MARKETING_NAV_LINKS = [
  { label: "기능", href: "/#features" },
  { label: "소개", href: "/about" },
] as const;

export const DOCS_NAV_LINKS = [
  { label: "Getting Started", href: "/docs" },
  { label: "컴포넌트", href: "/docs/components" },
  { label: "훅", href: "/docs/hooks" },
] as const;

export const BREAKPOINTS = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
} as const;
