import type { IMetafileFiles } from '@/interfaces/i-metafile-files.js';

export interface IMetafile {
  projectUrl: string;
  baseLocale: string;
  timestamp: number;
  files: IMetafileFiles;
}
