import type { Context } from '@/cdn/context/context.js';
import type { LocalesMapData } from '@/types/locales-map-data.js';
import type { LocalesMapOptions } from '@/types/locales-map-options.js';

export class LocalesMap {
  public data: LocalesMapData;

  protected context: Context;

  constructor(options: LocalesMapOptions) {
    this.context = options.context;
    this.data = options.data || {};
  }
}
