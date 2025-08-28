import type { LocalesMap } from '@/cdn/request/locales-map.js';
import type { ApiLocaleRequest } from '@/types/api-locale-request.js';

export type ResponseFactoryOptions = {
  requests: ApiLocaleRequest[];
  responses: (string | object)[];
  localesMap: LocalesMap;
  hasSingleFileResponse: boolean;
  hasSingleLocaleResponse: boolean;
};
