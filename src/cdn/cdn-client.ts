import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import isString from 'lodash/isString';
import { CdnFetchOptions } from '@/types/cdn-fetch-options';
import { CdnResponse } from '@/types/cdn-response';
import { CdnCache } from '@/cdn/methods/cdn-cache';
import { MetafileContext } from '@/cdn/context/metafile-context';
import { Context } from '@/cdn/context/context';
import { CdnMetafile } from '@/cdn/methods/cdn-metafile';
import { RequestBuilder } from '@/cdn/request/request-builder';
import { AxiosHttpAdapter } from '@/cdn/http/axios-http-adapter';
import { CdnClientOptions } from '@/types/cdn-client-options';

export class CdnClient {
  public metafile: CdnMetafile;

  public cache: CdnCache;

  protected context: Context;

  protected constructor(options: CdnClientOptions, config?: CreateAxiosDefaults) {
    const metafileContext: MetafileContext = new MetafileContext(options);
    const client: AxiosHttpAdapter = new AxiosHttpAdapter(metafileContext.params.baseUrl, config);

    this.context = new Context({ metafileContext, cdn: this, client });
    this.metafile = new CdnMetafile(this.context);
    this.cache = new CdnCache(this.context);
  }

  public fetch = async (options?: CdnFetchOptions): Promise<CdnResponse> => {
    const { files, locales, excludeBaseLocale }: CdnFetchOptions = options || {};
    const requestBuilder: RequestBuilder = new RequestBuilder(this.context)
      .addFiles(files)
      .addLocales(locales, excludeBaseLocale);

    return requestBuilder.getCdnRequest().execute();
  };

  public static async create(options: CdnClientOptions, config?: CreateAxiosDefaults): Promise<CdnClient> {
    if (!options) {
      throw new Error('Invalid param: missing required "options" parameter.');
    }

    if (!isString(options.metafile)) {
      throw new Error('Invalid param: "options.metafile" must be string.');
    }

    const cdn: CdnClient = new CdnClient(options, config);

    await cdn.metafile.refresh(config as AxiosRequestConfig);

    return cdn;
  }
}
