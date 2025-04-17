import { MetafileLocale } from '@/cdn/metafile/metafile-locale';
import { IMetafileFile } from '@/interfaces/i-metafile-file';
import { CdnFile } from '@/types/cdn-file';
import { CdnFileLocale } from '@/types/cdn-file-locale';
import { MetafileFileOptions } from '@/types/metafile-file-options';

export class MetafileFile implements Omit<IMetafileFile, 'locales'> {
  public id: string;

  public file: string;

  public path: string;

  public library: string;

  public module: string;

  public buildType: string;

  public timestamp: number;

  public productFlavors: string[];

  public locales: MetafileLocale[];

  protected baseUrl: string;

  constructor(options: MetafileFileOptions) {
    this.id = options.id;
    this.file = options.file;
    this.path = options.path;
    this.library = options.library;
    this.module = options.module;
    this.buildType = options.buildType;
    this.timestamp = options.timestamp;
    this.productFlavors = options.productFlavors;
    this.locales = options.locales;
    this.baseUrl = options.baseUrl;
  }

  public toCdnFile(): CdnFile {
    return {
      id: this.id,
      file: this.file,
      path: this.path,
      library: this.library,
      module: this.module,
      buildType: this.buildType,
      productFlavors: this.productFlavors,
      locales: this.locales.map(
        (locale: MetafileLocale): CdnFileLocale => ({
          locale: locale.locale,
          isBaseLocale: locale.isBaseLocale,
          uri: `${this.baseUrl}${locale.uri}`,
        }),
      ),
    };
  }
}
