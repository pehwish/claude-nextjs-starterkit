import { CodeBlock } from '@/components/docs/code-block';

export default function GettingStarted() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      {/* 제목 */}
      <h1>Getting Started</h1>
      <p className="lead">
        이 스타터킷을 사용하여 몇 분 안에 모던 Next.js 프로젝트를 시작하세요.
      </p>

      {/* 1. 설치 */}
      <h2>1. 프로젝트 설치</h2>
      <p>저장소를 클론하고 의존성을 설치하세요.</p>
      <CodeBlock
        language="bash"
        code={`git clone <repository-url> my-project
cd my-project
npm install`}
      />

      {/* 2. 개발 서버 */}
      <h2>2. 개발 서버 실행</h2>
      <p>개발 서버를 시작하여 프로젝트를 확인하세요.</p>
      <CodeBlock
        language="bash"
        code={`npm run dev`}
      />
      <p>
        브라우저에서 <code>http://localhost:3000</code>를 열어 확인하세요.
      </p>

      {/* 3. 프로젝트 구조 */}
      <h2>3. 프로젝트 구조</h2>
      <CodeBlock
        language="bash"
        code={`app/                           # Next.js App Router
├── layout.tsx                 # 루트 레이아웃
├── page.tsx                   # 홈 페이지
├── (marketing)/               # 마케팅 라우트 그룹
│   ├── layout.tsx
│   └── about/page.tsx
└── (docs)/                    # 문서 라우트 그룹
    ├── layout.tsx
    └── docs/
        ├── page.tsx           # Getting Started
        ├── components/page.tsx
        └── hooks/page.tsx

components/                    # React 컴포넌트
├── ui/                        # shadcn/ui 컴포넌트
├── common/                    # 공통 컴포넌트
├── layout/                    # 레이아웃 컴포넌트
├── navigation/                # 네비게이션
├── sections/                  # 랜딩 페이지 섹션
├── docs/                      # 문서 컴포넌트
└── showcase/                  # 컴포넌트 예시

hooks/                         # 커스텀 훅
lib/                           # 유틸리티 및 설정
public/                        # 정적 자산`}
      />

      {/* 4. 기술 스택 */}
      <h2>4. 기술 스택</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4">분야</th>
              <th className="text-left py-2 px-4">기술</th>
              <th className="text-left py-2 px-4">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">프레임워크</td>
              <td className="py-2 px-4">Next.js 15</td>
              <td className="py-2 px-4">App Router, Server Components</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">라이브러리</td>
              <td className="py-2 px-4">React 19</td>
              <td className="py-2 px-4">UI 라이브러리</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">스타일링</td>
              <td className="py-2 px-4">Tailwind CSS v4</td>
              <td className="py-2 px-4">Utility-first CSS</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">컴포넌트</td>
              <td className="py-2 px-4">shadcn/ui</td>
              <td className="py-2 px-4">접근성 높은 UI 컴포넌트</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">상태관리</td>
              <td className="py-2 px-4">Zustand</td>
              <td className="py-2 px-4">간단한 상태 관리</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-medium">폼</td>
              <td className="py-2 px-4">React Hook Form + Zod</td>
              <td className="py-2 px-4">폼 관리 및 유효성 검사</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium">서버 통신</td>
              <td className="py-2 px-4">TanStack Query</td>
              <td className="py-2 px-4">서버 상태 관리</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. 주요 명령어 */}
      <h2>5. 주요 명령어</h2>
      <div className="grid gap-4">
        <div>
          <h4>개발</h4>
          <CodeBlock language="bash" code="npm run dev" />
        </div>
        <div>
          <h4>빌드</h4>
          <CodeBlock language="bash" code="npm run build" />
        </div>
        <div>
          <h4>린트</h4>
          <CodeBlock language="bash" code="npm run lint" />
        </div>
      </div>

      {/* 6. 다음 단계 */}
      <h2>6. 다음 단계</h2>
      <ul>
        <li>
          <a href="/docs/components">컴포넌트 예시</a>를 보고 shadcn/ui 컴포넌트 사용법을 배우세요.
        </li>
        <li>
          <a href="/docs/hooks">커스텀 훅 가이드</a>를 통해 자주 사용되는 패턴을 알아보세요.
        </li>
        <li>
          <code>components/</code> 폴더에서 레이아웃과 섹션 컴포넌트를 참고하세요.
        </li>
      </ul>
    </div>
  );
}
