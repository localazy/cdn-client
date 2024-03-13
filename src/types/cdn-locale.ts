// #region typedef
export type CdnLocale = {
  /**
   * Locale code.
   */
  locale: string;

  /**
   * Boolean indicating if this is the base locale.
   */
  isBaseLocale: boolean;

  /**
   * Language code.
   */
  language: string;

  /**
   * Region code.
   */
  region?: string;

  /**
   * Script code.
   */
  script?: string;

  /**
   * Boolean indicating if the locale is right-to-left.
   */
  isRtl: boolean;

  /**
   * Locale name.
   */
  name: string;

  /**
   * Localized locale name.
   */
  localizedName: string;
};
// #endregion typedef
