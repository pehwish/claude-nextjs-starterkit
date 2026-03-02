/**
 * 기능 소개 그리드 섹션
 * 카드 형태로 핵심 기능들을 소개
 */

import {
  LayoutDashboard,
  Palette,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/section";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "빠른 개발",
    description:
      "shadcn/ui 컴포넌트로 UI를 빠르게 구성하고, 비즈니스 로직에 집중하세요.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "다크모드 지원",
    description:
      "next-themes와 CSS 변수 기반의 완성된 라이트/다크 테마 시스템을 제공합니다.",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "대시보드 레이아웃",
    description:
      "마케팅 페이지와 대시보드 두 가지 레이아웃이 라우트 그룹으로 분리되어 있습니다.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "타입 안전성",
    description:
      "TypeScript strict 모드와 Zod 스키마로 런타임 오류를 사전에 방지합니다.",
  },
] as const;

function FeatureCard({ icon, title, description }: FeatureItem) {
  return (
    <Card className="border-border/50 hover:border-border transition-colors">
      <CardHeader>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <Section id="features" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          왜 이 스타터킷인가요?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          반복되는 초기 설정 없이 핵심 기능 개발에 바로 착수할 수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
