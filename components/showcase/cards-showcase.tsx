'use client';

import { TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CodeBlock } from '@/components/docs/code-block';

/**
 * 카드 컴포넌트 쇼케이스
 * StatCard, Card, Skeleton, EmptyState 예시
 */
export function CardsShowcase() {
  return (
    <div className="space-y-8">
      {/* StatCard 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">통계 카드 (StatCard)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 사용자 카드 */}
          <div className="border rounded-lg p-6 bg-muted/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">총 사용자</p>
                <h4 className="text-2xl font-bold">12,345</h4>
              </div>
              <div className="text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">
              +12.5% from last month
            </p>
          </div>

          {/* 수익 카드 */}
          <div className="border rounded-lg p-6 bg-muted/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">월간 수익</p>
                <h4 className="text-2xl font-bold">$45,231</h4>
              </div>
              <div className="text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">
              +8.2% from last month
            </p>
          </div>
        </div>
      </div>

      {/* 기본 Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">기본 카드 (Card)</h3>
        <Card>
          <CardHeader>
            <CardTitle>카드 제목</CardTitle>
            <CardDescription>카드 설명 텍스트</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              shadcn/ui의 Card 컴포넌트는 기본적인 컨테이너 역할을 합니다.
              CardHeader, CardContent, CardFooter 등으로 구성할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skeleton 로딩 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">스켈레톤 로딩</h3>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      </div>

      {/* 코드 스니펫 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">구현 코드</h3>
        <CodeBlock
          language="tsx"
          code={`import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// 기본 카드
export function StatCard({ title, value, change }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-green-600 mt-2">{change}</p>
      </CardContent>
    </Card>
  );
}

// 로딩 상태
export function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-1/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/3" />
      </CardContent>
    </Card>
  );
}`}
        />
      </div>
    </div>
  );
}
