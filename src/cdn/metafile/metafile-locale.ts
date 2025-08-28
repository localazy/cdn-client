import type { IMetafileFileLocale } from '@/interfaces/i-metafile-file-locale';
import type { CdnLocale } from '@/types/cdn-locale';

export class MetafileLocale implements IMetafileFileLocale {
  public language: string;

  public region: string;

  public script: string;

  public isRtl: boolean;

  public name: string;

  public localizedName: string;

  public uri: string;

  public timestamp: number;

  protected baseLocale: string;

  constructor(options: IMetafileFileLocale, baseLocale: string) {
    this.language = options.language;
    this.region = options.region;
    this.script = options.script;
    this.isRtl = options.isRtl;
    this.name = options.name;
    this.localizedName = options.localizedName;
    this.uri = options.uri;
    this.timestamp = options.timestamp;
    this.baseLocale = baseLocale;
  }

  get locale(): string {
    if (this.language && this.region && this.script) {
      return `${this.language}_${this.region}#${this.script}`;
    }

    if (this.language && this.script) {
      return `${this.language}#${this.script}`;
    }

    if (this.language && this.region) {
      return `${this.language}_${this.region}`;
    }

    return this.language;
  }

  get isBaseLocale(): boolean {
    return this.locale === this.baseLocale;
  }

  public toCdnLocale(): CdnLocale {
    return {
      locale: this.locale,
      isBaseLocale: this.isBaseLocale,
      language: this.language,
      region: this.region,
      script: this.script,
      isRtl: this.isRtl,
      name: this.name,
      localizedName: this.localizedName,
    };
  }
}
