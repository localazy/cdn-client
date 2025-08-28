import type { Context } from '@/cdn/context/context';
import type { LocalesMapData } from '@/types/locales-map-data';
import type { LocalesMapOptions } from '@/types/locales-map-options';

export class LocalesMap {
  public data: LocalesMapData;

  protected context: Context;

  constructor(options: LocalesMapOptions) {
    this.context = options.context;
    this.data = options.data || {};
  }
}
