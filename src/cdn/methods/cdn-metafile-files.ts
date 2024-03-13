import filter from 'lodash/filter';
import find from 'lodash/find';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import matches from 'lodash/matches';
import { CdnFile } from '@/types/cdn-file';
import { MetafileFile } from '@/cdn/metafile/metafile-file';
import { CdnBase } from '@/cdn/methods/cdn-base';
import { CdnFilesSearchOptions } from '@/types/cdn-files-search-options';

export class CdnMetafileFiles extends CdnBase {
  public list = (): CdnFile[] => CdnMetafileFiles.transformFiles(this.context.metafile.data.files);

  public filter = (options: CdnFilesSearchOptions): CdnFile[] => {
    if (!options) {
      throw new Error('Invalid param: missing required "options" parameter.');
    }

    if (!isFunction(options) && !(isPlainObject(options))) {
      throw new Error('Invalid param: "options" must be function or object.');
    }

    const files: CdnFile[] = CdnMetafileFiles.transformFiles(this.context.metafile.data.files);

    if (isFunction(options)) {
      return files.filter(options);
    }

    return filter(files, matches(options));
  };

  public find = (options: CdnFilesSearchOptions): CdnFile | undefined => {
    if (!options) {
      throw new Error('Invalid param: missing required "options" parameter.');
    }

    if (!isFunction(options) && !isPlainObject(options)) {
      throw new Error('Invalid param: "options" must be function or object.');
    }

    const files: CdnFile[] = CdnMetafileFiles.transformFiles(this.context.metafile.data.files);

    if (isFunction(options)) {
      return files.find(options);
    }

    return find(files, matches(options));
  };

  public first = (): CdnFile => {
    if (this.context.metafile.data.files.length === 0) {
      throw new Error('File is missing in downloaded metafile.');
    }

    const files: CdnFile[] = CdnMetafileFiles.transformFiles(this.context.metafile.data.files);

    return files[0];
  };

  protected static transformFiles = (files: MetafileFile[]): CdnFile[] => files.map(
    (file: MetafileFile) => file.toCdnFile(),
  );
}
