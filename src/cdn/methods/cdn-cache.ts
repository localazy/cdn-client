import { CdnBase } from '@/cdn/methods/cdn-base';

export class CdnCache extends CdnBase {
  public flush = (): void => {
    this.context.cache.flush();
  };
}
