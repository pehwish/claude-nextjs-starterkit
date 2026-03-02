/**
 * date-fns 기반 날짜 포맷 유틸 함수
 */

import { format, formatDistanceToNow, isValid } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 날짜를 "2026년 3월 2일" 형식으로 포맷
 */
export function formatDate(date: Date | string | number, formatStr: string = "yyyy년 M월 d일"): string {
  try {
    const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
    if (!isValid(dateObj)) return "";
    return format(dateObj, formatStr, { locale: ko });
  } catch {
    return "";
  }
}

/**
 * 날짜를 상대 시간으로 포맷 ("5분 전", "2시간 전" 등)
 */
export function formatRelativeTime(date: Date | string | number): string {
  try {
    const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
    if (!isValid(dateObj)) return "";
    return formatDistanceToNow(dateObj, { locale: ko, addSuffix: true });
  } catch {
    return "";
  }
}

/**
 * 날짜를 시간까지 포함하여 포맷 ("2026년 3월 2일 14:30")
 */
export function formatDateTime(date: Date | string | number): string {
  return formatDate(date, "yyyy년 M월 d일 HH:mm");
}

/**
 * 날짜만 포맷 ("2026-03-02")
 */
export function formatDateOnly(date: Date | string | number): string {
  return formatDate(date, "yyyy-MM-dd");
}
