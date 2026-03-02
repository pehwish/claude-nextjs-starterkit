'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// Zod 스키마 정의
const signupSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일을 입력해주세요.'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
  terms: z.boolean().refine((v) => v, '약관에 동의해야 합니다.'),
  marketing: z.boolean(),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

interface UseSignupFormReturn {
  form: ReturnType<typeof useForm<SignupFormValues>>;
  onSubmit: (values: SignupFormValues) => Promise<void>;
}

/**
 * 회원가입 폼 훅
 * React Hook Form + Zod를 사용하여 폼 상태 및 유효성 검사 관리
 */
export function useSignupForm(): UseSignupFormReturn {
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

  const onSubmit = async (values: SignupFormValues): Promise<void> => {
    try {
      // API 호출 시뮬레이션 (1초 대기)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('회원가입 데이터:', values);
      toast.success('회원가입이 완료되었습니다!');
      form.reset();
    } catch {
      toast.error('회원가입 중 오류가 발생했습니다.');
    }
  };

  return { form, onSubmit };
}
