import { Api } from '@/cdn/api/api';
import { LocalesCache } from '@/cdn/cache/locales-cache';
import { CdnClient } from '@/cdn/cdn-client';
import { MetafileContext } from '@/cdn/context/metafile-context';
import { ResponseFactory } from '@/cdn/response/response-factory';
import { IHttpAdapter } from '@/interfaces/i-http-adapter';
import { ContextOptions } from '@/types/context-options';

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
