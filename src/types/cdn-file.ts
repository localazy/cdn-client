import { CdnFileLocale } from '@/types/cdn-file-locale';

// #region typedef
export type CdnFile = {
  /**
   * File ID.
   */
  id: string;

  /**
   * File name.
   */
  file: string;

  /**
   * File path.
   */
  path: string;

  /**
   * File library.
   */
  library: string;

  /**
   * File module.
   */
  module: string;

  /**
   * File build type.
   */
  buildType: string;

  /**
   * File product flavors.
   */
  productFlavors: string[];

  /**
   * File locales.
   */
  locales: CdnFileLocale[];
};
// #endregion typedef
