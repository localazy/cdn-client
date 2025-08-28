import type { ILocalesCacheItem } from '@/interfaces/i-locales-cache-item.js';

export type CacheStoreLocalesRequest = ILocalesCacheItem & {
  data: object | string;
};
