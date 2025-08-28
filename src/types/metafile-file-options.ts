import type { MetafileLocale } from '@/cdn/metafile/metafile-locale.js';
import type { IMetafileFile } from '@/interfaces/i-metafile-file.js';

export type MetafileFileOptions = Omit<IMetafileFile, 'locales'> & {
  id: string;
  locales: MetafileLocale[];
  baseUrl: string;
};
