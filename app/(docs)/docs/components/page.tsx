'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormShowcase } from '@/components/showcase/form-showcase';
import { CardsShowcase } from '@/components/showcase/cards-showcase';
import { FeedbackShowcase } from '@/components/showcase/feedback-showcase';
import { DialogShowcase } from '@/components/showcase/dialog-showcase';
import { DataTableShowcase } from '@/components/showcase/data-table-showcase';

/**
 * 컴포넌트 쇼케이스 페이지
 * 5개의 탭으로 구분된 shadcn/ui 컴포넌트 예시
 */
export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">컴포넌트 쇼케이스</h1>
        <p className="text-muted-foreground">
          shadcn/ui 컴포넌트 사용법과 실제 예시를 확인하세요.
        </p>
      </div>

      <Tabs defaultValue="forms" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="forms">폼</TabsTrigger>
          <TabsTrigger value="cards">카드</TabsTrigger>
          <TabsTrigger value="feedback">피드백</TabsTrigger>
          <TabsTrigger value="dialogs">다이얼로그</TabsTrigger>
          <TabsTrigger value="tables">테이블</TabsTrigger>
        </TabsList>

        {/* 폼 탭 */}
        <TabsContent value="forms" className="space-y-4">
          <FormShowcase />
        </TabsContent>

        {/* 카드 탭 */}
        <TabsContent value="cards" className="space-y-4">
          <CardsShowcase />
        </TabsContent>

        {/* 피드백 탭 */}
        <TabsContent value="feedback" className="space-y-4">
          <FeedbackShowcase />
        </TabsContent>

        {/* 다이얼로그 탭 */}
        <TabsContent value="dialogs" className="space-y-4">
          <DialogShowcase />
        </TabsContent>

        {/* 테이블 탭 */}
        <TabsContent value="tables" className="space-y-4">
          <DataTableShowcase />
        </TabsContent>
      </Tabs>
    </div>
  );
}
