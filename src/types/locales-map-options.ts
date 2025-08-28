import type { Context } from '@/cdn/context/context.js';

import type { LocalesMapData } from '@/types/locales-map-data.js';

export type LocalesMapOptions = {
  context: Context;
  data?: LocalesMapData;
};
