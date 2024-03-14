import { LocalesMap } from '@/cdn/request/locales-map';
import { ApiLocaleRequest } from '@/types/api-locale-request';

export type ResponseFactoryOptions = {
  requests: ApiLocaleRequest[];
  responses: (string | object)[];
  localesMap: LocalesMap;
  hasSingleFileResponse: boolean;
  hasSingleLocaleResponse: boolean;
};
