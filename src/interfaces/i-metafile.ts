import { IMetafileFiles } from '@/interfaces/i-metafile-files';

export interface IMetafile {
  projectUrl: string;
  baseLocale: string;
  timestamp: number;
  files: IMetafileFiles;
}
