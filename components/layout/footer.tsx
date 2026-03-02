/**
 * 사이트 푸터 컴포넌트
 * 저작권, 소셜 링크, 서브 네비게이션 포함
 */

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "./container";

const FOOTER_LINKS = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <Container>
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <nav
              className="flex items-center gap-4"
              aria-label="푸터 네비게이션"
            >
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
