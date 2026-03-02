'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DOCS_NAV_LINKS } from '@/lib/constants';

/**
 * Docs 사이드바 네비게이션
 * 현재 경로에 따라 활성 상태 표시
 */
export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-border/40 bg-background/95 py-8 px-6">
      <nav className="space-y-1">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
            문서
          </h3>
          <ul className="space-y-2">
            {DOCS_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-3 py-2 text-sm rounded-md transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
