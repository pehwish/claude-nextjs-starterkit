/**
 * 애플리케이션 공통 타입 정의
 */

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
}
