import { JsonResponse } from '@/types/json-response';

export type LocaleResponse = {
  [locale: string]: JsonResponse;
};
