'use client';

import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CodeBlock } from '@/components/docs/code-block';

/**
 * 피드백 컴포넌트 쇼케이스
 * Badge, Alert, Progress, Toast 예시
 */
export function FeedbackShowcase() {
  const handleShowToast = (type: string) => {
    switch (type) {
      case 'success':
        toast.success('성공 메시지입니다!');
        break;
      case 'error':
        toast.error('오류가 발생했습니다.');
        break;
      case 'info':
        toast.info('정보 메시지입니다.');
        break;
      case 'warning':
        toast.warning('경고 메시지입니다.');
        break;
    }
  };

  return (
    <div className="space-y-8">
      {/* Badge 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">배지 (Badge)</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* Alert 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">알림 (Alert)</h3>
        <div className="space-y-4">
          {/* 정보 */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>정보</AlertTitle>
            <AlertDescription>
              이것은 정보성 알림 메시지입니다.
            </AlertDescription>
          </Alert>

          {/* 성공 */}
          <Alert className="border-green-600/50 bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">
              성공
            </AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              작업이 성공적으로 완료되었습니다.
            </AlertDescription>
          </Alert>

          {/* 경고 */}
          <Alert className="border-yellow-600/50 bg-yellow-50 dark:bg-yellow-950">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">
              경고
            </AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              이 작업은 돌이킬 수 없습니다.
            </AlertDescription>
          </Alert>

          {/* 오류 */}
          <Alert className="border-red-600/50 bg-red-50 dark:bg-red-950">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-900 dark:text-red-100">
              오류
            </AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              처리 중 오류가 발생했습니다.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Progress 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">진행률 (Progress)</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">25% 완료</p>
            <Progress value={25} />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">50% 완료</p>
            <Progress value={50} />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">75% 완료</p>
            <Progress value={75} />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">100% 완료</p>
            <Progress value={100} />
          </div>
        </div>
      </div>

      {/* Toast 예시 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">토스트 알림 (Toast)</h3>
        <p className="text-sm text-muted-foreground">
          아래 버튼을 클릭하여 각 종류의 토스트를 확인하세요.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShowToast('success')}
          >
            성공
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShowToast('error')}
          >
            오류
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShowToast('info')}
          >
            정보
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShowToast('warning')}
          >
            경고
          </Button>
        </div>
      </div>

      {/* 코드 스니펫 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">구현 코드</h3>
        <CodeBlock
          language="tsx"
          code={`import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';

// Badge
<Badge variant="secondary">New</Badge>

// Alert
<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>성공</AlertTitle>
  <AlertDescription>작업 완료!</AlertDescription>
</Alert>

// Progress
<Progress value={75} />

// Toast
toast.success('완료되었습니다!');
toast.error('오류가 발생했습니다.');`}
        />
      </div>
    </div>
  );
}
