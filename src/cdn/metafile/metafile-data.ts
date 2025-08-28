import { MetafileFile } from '@/cdn/metafile/metafile-file.js';
import { MetafileLocale } from '@/cdn/metafile/metafile-locale.js';
import type { MetafileParams } from '@/cdn/metafile/metafile-params.js';
import { uniqBy } from '@/cdn/utils.js';
import type { IMetafileFileLocale } from '@/interfaces/i-metafile-file-locale.js';
import type { IMetafileFiles } from '@/interfaces/i-metafile-files.js';
import type { IMetafile } from '@/interfaces/i-metafile.js';
import type { CdnLocale } from '@/types/cdn-locale.js';
import type { FilesMap } from '@/types/files-map.js';
import type { MetafileOptions } from '@/types/metafile-options.js';

export class MetafileData implements Omit<IMetafile, 'files' | 'baseLocale'> {
  public projectUrl: string;

  public baseLocale: CdnLocale;

  public locales: CdnLocale[];

  public timestamp: number;

  public files: MetafileFile[];

  public filesMap: FilesMap;

  constructor(options: MetafileOptions, params: MetafileParams) {
    this.projectUrl = options.projectUrl;
    this.timestamp = options.timestamp;
    this.files = MetafileData.filesFactory(options.files, options.baseLocale, params);
    this.filesMap = MetafileData.filesMapFactory(this.files);
    this.locales = MetafileData.localesFactory(this.files);
    this.baseLocale = this.locales.find((locale: CdnLocale) => locale.isBaseLocale) as CdnLocale;
  }

  public static createEmpty(params: MetafileParams): MetafileData {
    return new MetafileData(
      {
        projectUrl: '',
        baseLocale: '',
        timestamp: 0,
        files: {},
      },
      params,
    );
  }

  protected static filesFactory(
    files: IMetafileFiles,
    baseLocale: string,
    params: MetafileParams,
  ): MetafileFile[] {
    return Object.keys(files).reduce((acc: MetafileFile[], cur: string) => {
      if (typeof files[cur] !== 'undefined') {
        const locales: MetafileLocale[] = files[cur].locales.map(
          (locale: IMetafileFileLocale) => new MetafileLocale(locale, baseLocale),
        );

        acc.push(
          new MetafileFile({
            ...files[cur],
            id: cur,
            locales,
            baseUrl: params.baseUrl,
          }),
        );
      }

      return acc;
    }, []);
  }

  protected static filesMapFactory(files: MetafileFile[]): FilesMap {
    return files.reduce((acc: FilesMap, cur: MetafileFile) => {
      acc[cur.id] = cur;

      return acc;
    }, {});
  }

  protected static localesFactory(files: MetafileFile[]): CdnLocale[] {
    const locales: CdnLocale[] = files.reduce((acc: CdnLocale[], cur: MetafileFile) => {
      acc.push(...cur.locales.map((locale: MetafileLocale): CdnLocale => locale.toCdnLocale()));
      return acc;
    }, []);

    return uniqBy(locales, (cdnLocale: CdnLocale): string => cdnLocale.locale);
  }
}
