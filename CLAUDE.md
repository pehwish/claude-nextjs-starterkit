# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드를 작업할 때 필요한 지침을 제공합니다.

## 프로젝트 개요

**StarterKit**은 개발팀 온보딩 도구로 설계된 현대적인 Next.js 15 + React 19 스타터킷입니다. 살아있는 대화형 예시와 함께 충분히 문서화된 컴포넌트, 훅, 패턴을 포괄적으로 제공합니다.

## 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **React**: React 19
- **스타일링**: TailwindCSS v4 + shadcn/ui 컴포넌트 라이브러리
- **폼 처리**: React Hook Form + Zod (스키마 검증)
- **상태 관리**: Zustand (최소한의 UI 상태만 관리)
- **데이터 페칭**: TanStack Query (React Query)
- **테이블**: TanStack Table (React Table)
- **테마**: next-themes (다크모드 지원)
- **UI 피드백**: sonner (토스트)
- **아이콘**: lucide-react
- **차트**: Recharts
- **타입 안전성**: TypeScript (strict 모드)

## 개발 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000에서 핫 리로드)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# ESLint 실행 (--fix 플래그로 자동 수정)
npm run lint
```

## 프로젝트 구조

### 디렉토리 레이아웃

```
/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # 라우트 그룹: 공개 페이지
│   │   ├── layout.tsx
│   │   ├── page.tsx             # 홈 랜딩 페이지
│   │   └── about/page.tsx
│   ├── (docs)/                   # 라우트 그룹: 사이드바가 있는 문서
│   │   ├── layout.tsx           # 사이드바가 있는 문서 레이아웃
│   │   └── docs/
│   │       ├── page.tsx         # Getting Started 가이드
│   │       ├── components/page.tsx  # 컴포넌트 쇼케이스
│   │       └── hooks/page.tsx       # 훅 가이드
│   ├── layout.tsx               # 프로바이더가 있는 루트 레이아웃
│   ├── page.tsx                 # 루트 페이지 (리다이렉트)
│   ├── globals.css              # 글로벌 스타일
│   └── favicon.ico
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트 (레지스트리에서)
│   │   ├── button.tsx, card.tsx, dialog.tsx, 등
│   │   └── form.tsx, input.tsx, select.tsx (폼 입력)
│   ├── common/                  # 전역 프로바이더 & 유틸리티
│   │   ├── theme-provider.tsx
│   │   ├── query-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── layout/                  # 레이아웃 빌딩 블록
│   │   ├── container.tsx        # 반응형 max-width 래퍼
│   │   ├── header.tsx           # 네비게이션이 있는 헤더
│   │   ├── footer.tsx
│   │   ├── page-header.tsx      # 페이지 제목 + 설명
│   │   └── section.tsx          # 간격이 있는 섹션
│   ├── navigation/
│   │   ├── nav-link.tsx
│   │   └── mobile-nav.tsx
│   ├── sections/                # 페이지 섹션 컴포넌트
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   └── cta-section.tsx
│   ├── docs/                    # 문서 전용
│   │   ├── code-block.tsx       # 복사 버튼이 있는 코드 스니펫 표시
│   │   └── docs-sidebar.tsx     # 문서 네비게이션 (use client)
│   └── showcase/                # 컴포넌트/패턴 예시
│       ├── form-showcase.tsx    # React Hook Form 예시
│       ├── cards-showcase.tsx   # 카드 변형
│       ├── feedback-showcase.tsx # Badge, Alert, Progress
│       ├── dialog-showcase.tsx  # 다이얼로그 패턴
│       └── data-table-showcase.tsx # TanStack Table 예시
├── lib/
│   ├── constants.ts             # 네비게이션 링크, 사이트 설정, 브레이크포인트
│   ├── types.ts                 # TypeScript 인터페이스
│   ├── utils.ts                 # cn(), formatDate(), 헬퍼 함수
│   ├── format.ts                # 포맷팅 유틸리티
│   ├── query-client.ts          # TanStack Query 설정
│   └── stores/
│       └── ui-store.ts          # Zustand 스토어 (UI 상태: 모바일 메뉴)
├── hooks/                       # 커스텀 React 훅
│   ├── use-mounted.ts           # Hydration 안전성
│   ├── use-media-query.ts       # 반응형 쿼리
│   └── use-signup-form.ts       # 폼 설정 예시
├── public/                      # 정적 애셋
├── node_modules/
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
└── CLAUDE.md (이 파일)
```

## 아키텍처 패턴

### 1. 라우트 그룹

앱은 Next.js 라우트 그룹을 사용하여 관심사를 분리합니다:
- **`(marketing)`** - 표준 헤더/푸터가 있는 공개 마케팅 페이지 (홈, 소개)
- **`(docs)`** - 사이드바 네비게이션이 있는 문서 섹션

각 그룹은 자체 레이아웃을 가지고 있어 섹션별로 다른 UI 패턴을 허용합니다.

### 2. 프로바이더 패턴

루트 레이아웃 (`app/layout.tsx`)은 다음과 같이 전체 앱을 래핑합니다:
```tsx
<ThemeProvider>           // 다크모드 지원
  <QueryProvider>         // TanStack Query 설정
    <TooltipProvider>     // Radix 툴팁 컨텍스트
      {children}
    </TooltipProvider>
  </QueryProvider>
</ThemeProvider>
```

### 3. 컴포넌트 조직

- **UI 컴포넌트** (`components/ui/`): 레지스트리의 스타일 없는 shadcn/ui 프리미티브
- **공통 컴포넌트** (`components/common/`): 프로바이더, 테마 토글, 유틸리티
- **레이아웃 컴포넌트** (`components/layout/`): 재사용 가능한 레이아웃 블록 (컨테이너, 섹션, 헤더)
- **쇼케이스 컴포넌트** (`components/showcase/`): 문서화용 완전한 작동 예시

### 4. 폼 패턴

폼은 **React Hook Form + Zod**를 사용합니다:
```tsx
// Zod로 스키마 정의
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// React Hook Form과 함께 사용
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { email: '', password: '' },
});
```

예시는 `components/showcase/form-showcase.tsx`와 `hooks/use-signup-form.ts`를 참고하세요.

### 5. 상태 관리

- **UI 상태만**: Zustand (`lib/stores/ui-store.ts`)를 사용하여 중요하지 않은 UI 상태 관리 (모바일 메뉴 표시/숨김)
- **서버 상태**: API에서 비동기 데이터에 TanStack Query 사용
- **폼 상태**: React Hook Form 사용 (내장 상태 관리)
- **테마 상태**: next-themes 내장 프로바이더 사용

### 6. 반응형 디자인

두 가지 접근 방식:
```tsx
// 1. Tailwind를 통한 CSS 미디어 쿼리 (권장)
<div className="hidden lg:block">데스크탑만</div>
<div className="block lg:hidden">모바일만</div>

// 2. JavaScript 미디어 쿼리 (복잡한 로직용)
import { useMediaQuery } from '@/hooks/use-media-query';
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

브레이크포인트는 `lib/constants.ts`에 정의되어 있습니다.

## 스타일링 & 테마

### TailwindCSS v4

- **설정**: `tailwind.config.ts`
- **PostCSS**: `postcss.config.mjs` (@tailwindcss/postcss 포함)
- **글로벌 스타일**: `app/globals.css` (Tailwind 유틸리티 임포트)

### 다크모드

`next-themes`를 통해 설정됨:
- 사용자 선호도는 localStorage에 저장됨
- 클래스 기반 테마 전환
- 다크모드 스타일에 `dark:` 접두사 사용: `bg-white dark:bg-slate-950`

## 핵심 파일 & 유틸리티

### 상수
**`lib/constants.ts`**
- `SITE_CONFIG`: 사이트 이름, 설명, URL
- `MARKETING_NAV_LINKS`: 홈/소개 네비게이션
- `DOCS_NAV_LINKS`: 문서 사이드바 링크
- `BREAKPOINTS`: 반응형 브레이크포인트

### 유틸리티
**`lib/utils.ts`**
- `cn()`: Tailwind 클래스 병합 (clsx + tailwind-merge)
- `formatDate()`: 날짜 포맷팅 헬퍼

**`lib/format.ts`**
- 추가 포맷팅 유틸리티

### 타입
**`lib/types.ts`**
- 공유되는 TypeScript 인터페이스 및 타입

### 훅
**`hooks/use-mounted.ts`**
- Hydration 후 true 반환 (hydration 불일치 방지)

**`hooks/use-media-query.ts`**
- 반응형 로직용 미디어 쿼리 훅

**`hooks/use-signup-form.ts`**
- React Hook Form + Zod를 사용한 폼 설정 예시

## 일반적인 개발 작업

### 새 UI 컴포넌트 추가

1. shadcn CLI 사용하거나 레지스트리에서 복사: `npx shadcn-ui@latest add button`
2. 컴포넌트는 `components/ui/`에 위치
3. 페이지나 다른 컴포넌트에서 임포트하여 사용

### 새 페이지 추가

1. `app/(route-group)/page-name/page.tsx` 생성
2. 라우트 그룹을 사용하여 레이아웃 결정
3. 필요하면 `lib/constants.ts`에 네비게이션 링크 추가

### 새 훅 추가

1. `hooks/use-feature-name.ts` 생성
2. 파일에서 export
3. 상태를 가진 React 훅을 사용하면 `'use client'` 지시자 사용

### 쇼케이스 컴포넌트 생성

1. `components/showcase/feature-showcase.tsx`에 생성
2. 대화형이면 `'use client'` 사용
3. 코드 예시와 함께 CodeBlock 포함
4. 관련 문서 페이지에 추가 (`app/(docs)/docs/*/page.tsx`)

### 폼 처리

1. Zod 스키마 정의
2. `useForm()`을 사용하여 커스텀 훅 생성
3. shadcn의 FormField 컴포넌트에 전달
4. 예시는 `components/showcase/form-showcase.tsx` 참고

## 코드 스타일 가이드

- **들여쓰기**: 2칸 스페이스
- **변수명**: camelCase
- **컴포넌트**: PascalCase
- **파일명**: 일반 파일은 kebab-case, 컴포넌트는 PascalCase
- **주석**: 인라인 설명용 한국어 주석
- **임포트**: `@/` 별칭을 사용한 절대 경로 임포트
- **타입 안전성**: TypeScript를 엄격하게 사용 (`any` 타입 금지)
- **반응형**: Tailwind 브레이크포인트를 사용한 모바일 우선 디자인

## 중요 사항

### 클라이언트/서버 컴포넌트
- 대화형 컴포넌트에 `'use client'` 표시
- 쇼케이스 컴포넌트, mobile-nav, docs-sidebar는 클라이언트 전용
- 대부분의 페이지는 성능을 위해 서버 컴포넌트로 유지

### Hydration 안전성
서버에서 클라이언트 전용 콘텐츠를 렌더링할 때 `useMounted` 훅 사용:
```tsx
const mounted = useMounted();
if (!mounted) return null;
// 클라이언트 콘텐츠 렌더링
```

### 쿼리 클라이언트
TanStack Query는 `components/common/query-provider.tsx`에서 미리 설정되어 있습니다. API 호출에 필요하면 확장하세요.

### ESLint 설정
- TypeScript 지원을 포함한 `eslint-config-next` 사용
- Next.js 모범 사례 및 웹 바이탈 강제
- 커밋 전에 `npm run lint` 실행

### 알려진 문제
- `sidebar.tsx`, `use-media-query.ts`, `use-mounted.ts`는 의존성 구조로 인해 React Compiler 경고가 있을 수 있지만 기능에는 영향이 없습니다

## 테스트 & 배포

- **로컬 테스트**: `npm run dev`를 실행한 후 `http://localhost:3000` 방문
- **프로덕션 빌드**: `npm run build && npm start`
- **배포**: Vercel, AWS 등에 대한 기본 제공 Next.js 지원

## 유용한 참고 자료

- [Next.js 15 문서](https://nextjs.org/docs)
- [React 19 문서](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod 검증](https://zod.dev)
- [Zustand 상태 관리](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)
