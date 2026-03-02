/**
 * Call to Action 섹션
 * 전환율을 높이기 위한 페이지 하단 CTA 영역
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export function CtaSection() {
  return (
    <Section
      className="bg-primary text-primary-foreground"
      containerClassName="text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        지금 바로 시작하세요
      </h2>
      <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
        5분 안에 프로젝트를 시작하고 첫 번째 페이지를 만들어보세요.
      </p>
      <div className="mt-8">
        <Button variant="secondary" size="lg" asChild>
          <Link href="/docs">
            문서 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
