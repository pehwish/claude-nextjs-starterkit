'use client';

import useLocalStorageLib from 'use-local-storage';

/**
 * localStorage에 데이터를 저장하고 동기화하는 훅
 * use-local-storage 라이브러리 기반
 * @param key - localStorage 키
 * @param defaultValue - 기본값
 * @returns [값, 값 설정 함수]
 */
export const useLocalStorage = useLocalStorageLib;
