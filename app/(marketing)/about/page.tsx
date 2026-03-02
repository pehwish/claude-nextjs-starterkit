/**
 * 소개 페이지 (About)
 */

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        title="스타터킷 소개"
        description="빠른 웹 개발을 위한 현대적인 스타터킷입니다."
      />
      <div className="mt-12 prose prose-sm dark:prose-invert max-w-none">
        <p>
          이 스타터킷은 Next.js 16, React 19, TypeScript를 기반으로 만들어졌으며,
          모던 웹 개발에 필요한 모든 도구와 패턴을 포함하고 있습니다.
        </p>
        <h2>포함된 기술</h2>
        <ul>
          <li>Next.js 16 App Router</li>
          <li>TypeScript strict mode</li>
          <li>Tailwind CSS v4</li>
          <li>shadcn/ui 컴포넌트</li>
          <li>TanStack Query (React Query)</li>
          <li>TanStack Table</li>
          <li>Zustand 상태관리</li>
          <li>React Hook Form + Zod</li>
          <li>date-fns 날짜 처리</li>
          <li>recharts 차트</li>
        </ul>
        <h2>시작하기</h2>
        <p>
          왼쪽 상단의 &quot;시작하기&quot; 버튼을 클릭하여 문서로 이동할 수 있습니다.
        </p>
      </div>
    </Container>
  );
}
