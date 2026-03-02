/**
 * 반응형 최대 너비 컨테이너
 * 모든 페이지 콘텐츠의 기본 래퍼로 사용
 */

import { cn } from "@/lib/utils";

const MAX_WIDTH_CLASSES = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(MAX_WIDTH_CLASSES, className)}>
      {children}
    </Tag>
  );
}
