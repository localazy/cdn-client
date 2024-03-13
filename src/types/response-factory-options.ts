import { AxiosResponse } from 'axios';
import { LocalesMap } from '@/cdn/request/locales-map';
import { CdnResponse } from '@/types/cdn-response';

export type ResponseFactoryOptions = {
  responses: AxiosResponse<CdnResponse>[];
  localesMap: LocalesMap;
  hasSingleFileResponse: boolean;
  hasSingleLocaleResponse: boolean;
};
