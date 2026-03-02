import { CodeBlock } from '@/components/docs/code-block';

export default function HooksGuide() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h1>커스텀 훅 가이드</h1>
      <p className="lead">
        자주 사용되는 커스텀 훅과 패턴을 소개합니다.
      </p>

      {/* useMounted */}
      <h2>useMounted</h2>
      <p>
        하이드레이션(hydration) 불일치를 방지하기 위해 클라이언트에서만 컴포넌트를 렌더링합니다.
      </p>

      <h3>구현</h3>
      <CodeBlock
        language="tsx"
        code={`'use client';

import { useEffect, useState } from 'react';

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}`}
      />

      <h3>사용 예시</h3>
      <CodeBlock
        language="tsx"
        code={`import { useMounted } from '@/hooks/use-mounted';

export function Component() {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return <div>클라이언트 전용 콘텐츠</div>;
}`}
      />

      {/* useMediaQuery */}
      <h2>useMediaQuery</h2>
      <p>미디어 쿼리를 감지하여 반응형 로직을 구현합니다.</p>

      <h3>구현</h3>
      <CodeBlock
        language="tsx"
        code={`'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}`}
      />

      <h3>사용 예시</h3>
      <CodeBlock
        language="tsx"
        code={`import { useMediaQuery } from '@/hooks/use-media-query';

export function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? '모바일 레이아웃' : '데스크탑 레이아웃'}
    </div>
  );
}`}
      />

      {/* useSignupForm */}
      <h2>useSignupForm</h2>
      <p>회원가입 폼 로직을 캡슐화한 훅입니다. React Hook Form과 Zod를 사용합니다.</p>

      <h3>구현</h3>
      <CodeBlock
        language="tsx"
        code={`'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const signupSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일을 입력해주세요.'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
  terms: z.boolean().refine((v) => v, '약관에 동의해야 합니다.'),
  marketing: z.boolean().default(false),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

export function useSignupForm() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      terms: false,
      marketing: false,
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    try {
      // API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('회원가입:', values);
      toast.success('회원가입이 완료되었습니다!');
      form.reset();
    } catch (error) {
      toast.error('회원가입 중 오류가 발생했습니다.');
    }
  };

  return { form, onSubmit };
}`}
      />

      <h3>사용 예시</h3>
      <CodeBlock
        language="tsx"
        code={`'use client';

import { useSignupForm } from '@/hooks/use-signup-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export function SignupForm() {
  const { form, onSubmit } = useSignupForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">회원가입</Button>
      </form>
    </Form>
  );
}`}
      />

      {/* 모범 사례 */}
      <h2>훅 작성 모범 사례</h2>
      <ul>
        <li><code>&apos;use client&apos;</code> directive를 사용합니다.</li>
        <li>훅 이름은 <code>use</code>로 시작합니다.</li>
        <li>사이드 이펙트는 <code>useEffect</code> 내에서만 수행합니다.</li>
        <li>의존성 배열(dependency array)을 정확히 지정합니다.</li>
        <li>복잡한 로직은 훅으로 분리하여 재사용성을 높입니다.</li>
      </ul>
    </div>
  );
}
