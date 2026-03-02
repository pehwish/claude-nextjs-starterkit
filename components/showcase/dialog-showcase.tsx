'use client';

import { useState } from 'react';
import { Settings, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CodeBlock } from '@/components/docs/code-block';
import { toast } from 'sonner';

/**
 * 다이얼로그 컴포넌트 쇼케이스
 * Dialog, AlertDialog, Sheet, Popover, Tooltip 예시
 */
export function DialogShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    toast.success('삭제되었습니다.');
  };

  return (
    <div className="space-y-8">
      {/* Dialog 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">다이얼로그 (Dialog)</h3>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">프로필 편집</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로필 편집</DialogTitle>
              <DialogDescription>
                프로필 정보를 수정하고 저장하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  이름
                </Label>
                <Input
                  id="name"
                  defaultValue="홍길동"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  이메일
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="user@example.com"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                취소
              </Button>
              <Button
                onClick={() => {
                  toast.success('저장되었습니다.');
                  setIsOpen(false);
                }}
              >
                저장
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* AlertDialog 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">경고 다이얼로그 (AlertDialog)</h3>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              삭제
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다. 항목을 영구적으로 삭제합니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex justify-end gap-3">
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                삭제
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Sheet 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">시트 (Sheet)</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              설정
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>설정</SheetTitle>
              <SheetDescription>
                앱 설정을 관리하세요.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>테마</Label>
                <Input placeholder="기본값" defaultValue="라이트" />
              </div>
              <div className="space-y-2">
                <Label>언어</Label>
                <Input placeholder="기본값" defaultValue="한국어" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Popover + Tooltip */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">팝오버 & 툴팁</h3>
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                팝오버 열기
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">설명</h4>
                  <p className="text-sm text-muted-foreground">
                    팝오버는 작은 팝업 윈도우를 표시합니다.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  툴팁 호버
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>이것은 툴팁입니다.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* 코드 스니펫 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">구현 코드</h3>
        <CodeBlock
          language="tsx"
          code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

// Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
    </DialogHeader>
    내용
  </DialogContent>
</Dialog>

// AlertDialog
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">삭제</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <h2>정말 삭제하시겠습니까?</h2>
    <AlertDialogAction>확인</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>`}
        />
      </div>
    </div>
  );
}
