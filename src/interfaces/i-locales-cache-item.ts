import type { MetafileFile } from '@/cdn/metafile/metafile-file.js';
import type { MetafileLocale } from '@/cdn/metafile/metafile-locale.js';

export interface ILocalesCacheItem {
  metafileFile: MetafileFile;
  metafileLocale: MetafileLocale;
}
