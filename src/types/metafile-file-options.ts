import type { MetafileLocale } from '@/cdn/metafile/metafile-locale';
import type { IMetafileFile } from '@/interfaces/i-metafile-file';

export type MetafileFileOptions = Omit<IMetafileFile, 'locales'> & {
  id: string;
  locales: MetafileLocale[];
  baseUrl: string;
};
