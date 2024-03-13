import { AxiosResponse } from 'axios';
import { Context } from '@/cdn/context/context';
import { MetafileFile } from '@/cdn/metafile/metafile-file';
import { MetafileLocale } from '@/cdn/metafile/metafile-locale';
import { ResponseFactoryOptions } from '@/types/response-factory-options';
import { CacheStoreLocalesRequest } from '@/types/cache-store-locales-request';
import { CdnResponse } from '@/types/cdn-response';

export class ResponseFactory {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  public createCdnResponse(options: ResponseFactoryOptions): CdnResponse {
    const { responses, hasSingleFileResponse, hasSingleLocaleResponse }: ResponseFactoryOptions = options;

    if (responses.length === 0) {
      return {};
    }

    this.cacheResponses(responses);

    return hasSingleFileResponse && hasSingleLocaleResponse
      ? responses[0].data
      : ResponseFactory.transformResponsesToOutput(options);
  }

  protected cacheResponses(responses: AxiosResponse<CdnResponse>[]): void {
    responses.forEach((response: AxiosResponse<CdnResponse>): void => {
      const {
        metafileFile,
        metafileLocale,
      }: Partial<CacheStoreLocalesRequest> = ResponseFactory.extractReference(response);

      if (metafileFile && metafileLocale) {
        this.context.cache.setIfMissed({ metafileFile, metafileLocale, data: response.data });
      }
    });
  }

  protected static transformResponsesToOutput(options: ResponseFactoryOptions): CdnResponse {
    const { responses, hasSingleFileResponse }: ResponseFactoryOptions = options;

    return responses.reduce(
      (acc: CdnResponse, cur: AxiosResponse<CdnResponse>) => {
        const {
          metafileFile,
          metafileLocale,
        }: Partial<CacheStoreLocalesRequest> = ResponseFactory.extractReference(cur);

        if (metafileFile && metafileLocale) {
          if (hasSingleFileResponse) {
            // @ts-expect-error fix output type
            acc[metafileLocale.locale] = cur.data;
          } else {
            // @ts-expect-error fix output type
            if (!acc[metafileFile.id]) {
              // @ts-expect-error fix output type
              acc[metafileFile.id] = {};
            }

            // @ts-expect-error fix output type
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            acc[metafileFile.id][metafileLocale.locale] = cur.data;
          }
        }

        return acc;
      },
      {},
    );
  }

  protected static extractReference(response: AxiosResponse<CdnResponse>): Partial<CacheStoreLocalesRequest> {
    const metafileFile: MetafileFile | undefined = response.config.reference?.metafileFile;
    const metafileLocale: MetafileLocale | undefined = response.config.reference?.metafileLocale;
    const { data }: AxiosResponse<CdnResponse> = response;

    return {
      metafileFile,
      metafileLocale,
      data,
    };
  }
}
