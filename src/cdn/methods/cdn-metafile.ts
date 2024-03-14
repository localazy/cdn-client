import { MetafileParams } from '@/cdn/metafile/metafile-params';
import { CdnClientOptions } from '@/types/cdn-client-options';
import { Context } from '@/cdn/context/context';
import { MetafileData } from '@/cdn/metafile/metafile-data';
import { CdnBase } from '@/cdn/methods/cdn-base';
import { CdnMetafileFiles } from '@/cdn/methods/cdn-metafile-files';
import { CdnLocalesOptions } from '@/types/cdn-locales-options';
import { IMetafile } from '@/interfaces/i-metafile';
import { CdnLocale } from '@/types/cdn-locale';

export class CdnMetafile extends CdnBase {
  public files: CdnMetafileFiles;

  constructor(context: Context) {
    super(context);

    this.files = new CdnMetafileFiles(context);
  }

  get projectUrl(): string {
    return this.context.metafile.data.projectUrl;
  }

  get baseLocale(): CdnLocale {
    return this.context.metafile.data.baseLocale;
  }

  get url(): string {
    return this.context.metafile.params.url;
  }

  public locales = (options?: CdnLocalesOptions): CdnLocale[] => {
    const { excludeBaseLocale }: CdnLocalesOptions = options || {};
    const { locales }: MetafileData = this.context.metafile.data;

    return excludeBaseLocale
      ? locales.filter((cdnLocale: CdnLocale): boolean => !cdnLocale.isBaseLocale)
      : locales;
  };

  public refresh = async (): Promise<void> => {
    const response: IMetafile = await this.context.api.fetchMetafile();

    this.context.metafile.setMetafile(response);
  };

  public switch = async (options: CdnClientOptions): Promise<void> => {
    this.context.metafile.params = new MetafileParams(options.metafile);

    await this.refresh();
  };
}
