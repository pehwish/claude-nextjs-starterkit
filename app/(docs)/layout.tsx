import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { Container } from '@/components/layout/container';

/**
 * Docs 레이아웃
 * 사이드바 + 콘텐츠 영역 구성
 */
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* 데스크탑 사이드바 */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <DocsSidebar />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 w-full">
        <Container className="py-12">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
}
