export type CdnResponse =
  /**
   * Map of file IDs with locales map as value.
   */
  | Record<string, Record<string, object | string>>
  /**
   * Map of locales with file content as value.
   */
  | Record<string, object | string>
  /**
   * File content.
   */
  | object
  /**
   * File content as string for non-JSON files.
   */
  | string;
