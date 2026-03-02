'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * 코드 스니펫 표시 컴포넌트
 * 언어 라벨과 복사 버튼 포함
 */
export function CodeBlock({
  code,
  language = 'tsx',
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative bg-muted rounded-lg overflow-hidden ${className}`}>
      {/* 언어 라벨 */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted-foreground/5 border-b">
        <span className="text-xs font-mono text-muted-foreground">
          {language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-6 w-6 p-0"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* 코드 */}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );
}
