/**
 * 사이트 헤더 컴포넌트
 * 로고, 데스크탑 네비게이션, 모바일 메뉴, 테마 토글을 포함
 * 스크롤 시 배경 처리를 위한 sticky 포지션 사용
 */

"use client";

import Link from "next/link";
import { SITE_CONFIG, MARKETING_NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavLink } from "@/components/navigation/nav-link";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="font-bold text-lg"
            aria-label={`${SITE_CONFIG.name} 홈으로`}
          >
            {SITE_CONFIG.name}
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="주 네비게이션"
          >
            {MARKETING_NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* 액션 버튼들 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex" size="sm">
              <Link href="/docs">시작하기</Link>
            </Button>
            {/* 모바일 메뉴 */}
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
