import { CdnBase } from '@/cdn/methods/cdn-base.js';

export class CdnCache extends CdnBase {
  public flush = (): void => {
    this.context.cache.flush();
  };
}
