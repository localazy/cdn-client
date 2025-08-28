import { Api } from '@/cdn/api/api.js';
import { LocalesCache } from '@/cdn/cache/locales-cache.js';
import type { CdnClient } from '@/cdn/cdn-client.js';
import type { MetafileContext } from '@/cdn/context/metafile-context.js';
import { ResponseFactory } from '@/cdn/response/response-factory.js';
import type { IHttpAdapter } from '@/interfaces/i-http-adapter.js';
import type { ContextOptions } from '@/types/context-options.js';

export class Context {
  public metafile: MetafileContext;

  public cdn: CdnClient;

  public client: IHttpAdapter;

  public api: Api;

  public cache: LocalesCache;

  public responseFactory: ResponseFactory;

  constructor(options: ContextOptions) {
    this.metafile = options.metafileContext;
    this.cdn = options.cdn;
    this.client = options.client;
    this.api = new Api(this);
    this.cache = new LocalesCache(this);
    this.responseFactory = new ResponseFactory(this);
  }
}
