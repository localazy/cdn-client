import type { MetafileFile } from '@/cdn/metafile/metafile-file';
import type { MetafileLocale } from '@/cdn/metafile/metafile-locale';

export interface ILocalesCacheItem {
  metafileFile: MetafileFile;
  metafileLocale: MetafileLocale;
}
