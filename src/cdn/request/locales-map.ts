import { Context } from '@/cdn/context/context';
import { LocalesMapData } from '@/types/locales-map-data';
import { LocalesMapOptions } from '@/types/locales-map-options';

export class LocalesMap {
  public data: LocalesMapData;

  protected context: Context;

  constructor(options: LocalesMapOptions) {
    this.context = options.context;
    this.data = options.data || {};
  }
}
