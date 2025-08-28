import type { Request } from '@/cdn/request/request';
import type { CdnFile } from '@/types/cdn-file';

export interface IRequestBuilder {
  addFiles(request?: (CdnFile | string)[] | CdnFile | string): IRequestBuilder;

  addLocales(request?: string[] | string, excludeBaseLocale?: boolean): IRequestBuilder;

  getCdnRequest(): Request;
}
