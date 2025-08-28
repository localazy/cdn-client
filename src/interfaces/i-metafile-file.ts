import type { IMetafileFileLocale } from '@/interfaces/i-metafile-file-locale';

export interface IMetafileFile {
  file: string;
  path: string;
  library: string;
  module: string;
  buildType: string;
  timestamp: number;
  productFlavors: string[];
  locales: IMetafileFileLocale[];
}
