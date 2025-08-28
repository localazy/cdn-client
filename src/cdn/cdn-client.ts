import { Context } from '@/cdn/context/context.js';
import { MetafileContext } from '@/cdn/context/metafile-context.js';
import { FetchHttpAdapter } from '@/cdn/http/fetch-http-adapter.js';
import { CdnCache } from '@/cdn/methods/cdn-cache.js';
import { CdnMetafile } from '@/cdn/methods/cdn-metafile.js';
import { RequestBuilder } from '@/cdn/request/request-builder.js';
import { isString } from '@/cdn/utils.js';
import type { CdnClientOptions } from '@/types/cdn-client-options.js';
import type { CdnFetchOptions } from '@/types/cdn-fetch-options.js';
import type { CdnResponse } from '@/types/cdn-response.js';

export class CdnClient {
  public metafile: CdnMetafile;

  public cache: CdnCache;

  protected context: Context;

  public static version = '__CLIENT_VERSION__';

  protected constructor(options: CdnClientOptions) {
    const metafileContext: MetafileContext = new MetafileContext(options);
    const client: FetchHttpAdapter = new FetchHttpAdapter(metafileContext.params.baseUrl);

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

  public static async create(options: CdnClientOptions): Promise<CdnClient> {
    if (!options) {
      throw new Error('Invalid param: missing required "options" parameter.');
    }

    if (!isString(options.metafile)) {
      throw new Error('Invalid param: "options.metafile" must be string.');
    }

    const cdn: CdnClient = new CdnClient(options);

    await cdn.metafile.refresh();

    return cdn;
  }
}
