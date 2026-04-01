import { MemoryCacheAdapter } from '@/cdn/cache/memory-cache-adapter.js';
import type { Context } from '@/cdn/context/context.js';
import { uniq } from '@/cdn/utils.js';
import type { ICacheAdapter } from '@/interfaces/i-cache-adapter.js';
import type { CacheGetLocalesRequest } from '@/types/cache-get-locales-request.js';
import type { CacheHasLocalesRequest } from '@/types/cache-has-locales-request.js';
import type { CacheKeyMetafileOptions } from '@/types/cache-key-metafile-options.js';
import type { CacheStoreLocalesRequest } from '@/types/cache-store-locales-request.js';

export class LocalesCache {
  protected context: Context;

  protected cacheAdapter: ICacheAdapter<string, object | string>;

  constructor(context: Context) {
    this.context = context;
    this.cacheAdapter = new MemoryCacheAdapter();
  }

  public setIfMissed(options: CacheStoreLocalesRequest): void {
    const { metafileFile, metafileLocale, data }: CacheStoreLocalesRequest = options;

    const key: string = this.keyFromMetafile({
      metafileFile,
      metafileLocale,
    });

    if (!this.cacheAdapter.has(key)) {
      this.cacheAdapter.set(key, data);
    }
  }

  public has(options: CacheHasLocalesRequest): boolean {
    const key: string = this.keyFromMetafile(options);

    return this.cacheAdapter.has(key);
  }

  public get(options: CacheGetLocalesRequest): object | string | undefined {
    const key: string = this.keyFromMetafile(options);

    return this.cacheAdapter.get(key);
  }

  public flush(): void {
    this.cacheAdapter.flush();
  }

  protected keyFromMetafile(options: CacheKeyMetafileOptions): string {
    const { metafileFile, metafileLocale }: CacheKeyMetafileOptions = options;
    const productFlavors: string = [...uniq(metafileFile.productFlavors)].sort().join('-');

    const indices: string[] = [
      this.context.metafile.params.cdnId,
      metafileFile.id,
      metafileFile.file,
      metafileFile.path,
      metafileFile.library,
      metafileFile.module,
      metafileFile.buildType,
      productFlavors,
      metafileLocale.locale,
      metafileLocale.timestamp.toString(),
    ];

    return indices.filter((key: string): boolean => key !== '').join('-');
  }
}
