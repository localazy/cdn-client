import { Context } from '@/cdn/context/context';

import { LocalesMapData } from '@/types/locales-map-data';

export type LocalesMapOptions = {
  context: Context;
  data?: LocalesMapData;
};
