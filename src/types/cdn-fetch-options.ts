import { CdnFile } from '@/types/cdn-file';

// #region typedef
export type CdnFetchOptions = {
  /**
   * Select single or multiple files to fetch from the CDN.
   *
   * Default: all files in the metafile.
   */
  files?: (CdnFile | string)[] | CdnFile | string;

  /**
   * Select single or multiple locales to fetch from the CDN.
   *
   * Default: all locales in the metafile.
   */
  locales?: string[] | string;

  /**
   * Exclude the base locale from the list of locales to fetch.
   */
  excludeBaseLocale?: boolean;
};
// #endregion typedef
