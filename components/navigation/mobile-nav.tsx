/**
 * 모바일 햄버거 메뉴 컴포넌트
 * shadcn Sheet를 사용한 사이드 슬라이드 패널
 */

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, MARKETING_NAV_LINKS } from "@/lib/constants";
import { useUIStore } from "@/lib/stores/ui-store";

export function MobileNav() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="모바일 메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{SITE_CONFIG.name}</SheetTitle>
        </SheetHeader>
        <nav
          className="flex flex-col gap-4 mt-6"
          aria-label="모바일 네비게이션"
        >
          {MARKETING_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
