import type { ILocalesCacheItem } from '@/interfaces/i-locales-cache-item';

export type CacheStoreLocalesRequest = ILocalesCacheItem & {
  data: object | string;
};
