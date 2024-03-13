import 'axios';
import { MetafileFile } from '@/cdn/metafile/metafile-file';
import { MetafileLocale } from '@/cdn/metafile/metafile-locale';

declare module 'axios' {
  export interface AxiosRequestConfig {
    reference?: {
      metafileFile?: MetafileFile,
      metafileLocale?: MetafileLocale,
    },
  }
}
