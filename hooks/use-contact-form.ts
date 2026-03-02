/**
 * 문의 폼 비즈니스 로직 훅
 * Zod 스키마 정의, react-hook-form 초기화, 제출 처리를 담당
 */

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

/** 문의 폼 유효성 검사 스키마 */
const contactFormSchema = z.object({
  name: z.string()
    .min(2, "이름은 2자 이상 입력해주세요.")
    .max(50, "이름은 50자 이하여야 합니다."),
  email: z.string()
    .email("올바른 이메일 주소를 입력해주세요.")
    .max(100),
  message: z.string()
    .min(10, "메시지는 10자 이상 입력해주세요.")
    .max(500, "메시지는 500자 이하여야 합니다."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  /**
   * 폼 제출 처리
   * 실제 환경에서는 API 호출로 교체
   */
  const onSubmit = async (values: ContactFormValues) => {
    setIsPending(true);
    try {
      // 실제 API 호출 예시
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      // });

      // 데모용 지연
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.info("문의 제출:", values);
      toast.success("문의가 성공적으로 전송되었습니다.");
      form.reset();
    } catch (error) {
      console.error("제출 오류:", error);
      toast.error(
        "전송 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsPending(false);
    }
  };

  return { form, onSubmit, isPending };
}
