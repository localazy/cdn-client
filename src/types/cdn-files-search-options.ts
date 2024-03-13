import { CdnFile } from '@/types/cdn-file';

// #region typedef
export type CdnFilesSearchOptions =
  | ((file: CdnFile, index?: number, array?: CdnFile[]) => boolean)
  | {
    id?: string;
    file?: string;
    path?: string;
    library?: string;
    module?: string;
    buildType?: string;
    productFlavors?: string[];
  };
// #endregion typedef
