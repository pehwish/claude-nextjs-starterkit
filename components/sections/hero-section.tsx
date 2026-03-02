/**
 * 랜딩 페이지 히어로 섹션
 * 배지, 제목, 설명, CTA 버튼으로 구성
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";

export function HeroSection() {
  return (
    <Section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="flex flex-col items-center text-center gap-6">
        <Badge variant="secondary" className="px-3 py-1">
          Next.js 16 + React 19
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl">
          모던 웹 개발을 위한{" "}
          <span className="text-primary">완성된 스타터킷</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          shadcn/ui, Tailwind CSS v4, Zustand, React Hook Form이 모두 구성된
          즉시 사용 가능한 Next.js 스타터킷입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <Link href="/docs">
              시작하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">더 알아보기</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
