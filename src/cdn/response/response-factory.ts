import { Context } from '@/cdn/context/context';
import { ApiLocaleRequest } from '@/types/api-locale-request';
import { CacheStoreLocalesRequest } from '@/types/cache-store-locales-request';
import { CdnResponse } from '@/types/cdn-response';
import { ResponseFactoryOptions } from '@/types/response-factory-options';

export class ResponseFactory {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  public createCdnResponse(options: ResponseFactoryOptions): CdnResponse {
    const { requests, responses, hasSingleFileResponse, hasSingleLocaleResponse }: ResponseFactoryOptions = options;

    if (responses.length === 0 || typeof responses[0] === 'undefined') {
      return {};
    }

    this.cacheResponses(requests, responses);

    return hasSingleFileResponse && hasSingleLocaleResponse
      ? responses[0]
      : ResponseFactory.transformResponses(options);
  }

  protected cacheResponses(requests: ApiLocaleRequest[], responses: (object | string)[]): void {
    responses.forEach((response: object | string, index: number): void => {
      if (typeof requests[index] !== 'undefined') {
        const { metafileFile, metafileLocale }: Partial<CacheStoreLocalesRequest> = requests[index];

        if (metafileFile && metafileLocale) {
          this.context.cache.setIfMissed({ metafileFile, metafileLocale, data: response });
        }
      }
    });
  }

  protected static transformResponses(options: ResponseFactoryOptions): CdnResponse {
    const { requests, responses, hasSingleFileResponse }: ResponseFactoryOptions = options;

    return responses.reduce((acc: CdnResponse, cur: object | string, index: number) => {
      if (typeof requests[index] !== 'undefined') {
        const { metafileFile, metafileLocale }: Partial<CacheStoreLocalesRequest> = requests[index];

        if (metafileFile && metafileLocale) {
          if (hasSingleFileResponse) {
            // @ts-expect-error fix output type
            acc[metafileLocale.locale] = cur;
          } else {
            // @ts-expect-error fix output type
            if (!acc[metafileFile.id]) {
              // @ts-expect-error fix output type
              acc[metafileFile.id] = {};
            }

            // @ts-expect-error fix output type
            acc[metafileFile.id][metafileLocale.locale] = cur;
          }
        }
      }

      return acc;
    }, {});
  }
}
