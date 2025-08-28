import type { Context } from '@/cdn/context/context';

import type { LocalesMapData } from '@/types/locales-map-data';

export type LocalesMapOptions = {
  context: Context;
  data?: LocalesMapData;
};
