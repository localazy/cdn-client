export type CdnResponse =
  /**
   * Map of file IDs with locales map as value.
   */
  | {
    [fileId: string]: {
      /**
       * Map of locales with file content as value.
       */
      [locale: string]: object | string;
    };
  }
  /**
   * Map of locales with file content as value.
   */
  | {
    [locale: string]: object | string;
  }
  /**
   * File content.
   */
  | object
  /**
   * File content as string for non-JSON files.
   */
  | string;
