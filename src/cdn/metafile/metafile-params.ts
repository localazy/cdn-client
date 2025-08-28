import type { IMetafileParams } from '@/interfaces/i-metafile-params';

export class MetafileParams implements IMetafileParams {
  protected options: IMetafileParams;

  constructor(metafileUrl: string) {
    this.options = MetafileParams.parseMetafileUrl(metafileUrl);
  }

  get url(): string {
    return this.options.url;
  }

  get baseUrl(): string {
    return this.options.baseUrl;
  }

  get cdnId(): string {
    return this.options.cdnId;
  }

  get jsonPath(): string {
    return this.options.jsonPath;
  }

  protected static parseMetafileUrl(metafileUrl: string): IMetafileParams {
    let url: URL;

    try {
      url = new URL(metafileUrl);
    } catch {
      throw new Error('Invalid param: "options.metafile" cannot be parsed as url.');
    }

    const matches: string[] | null = /^\/(.*?)\/(.*?)\.(v2.json|js|ts)$/.exec(url.pathname);

    if (
      matches === null ||
      matches.length !== 4 ||
      typeof matches[1] === 'undefined' ||
      typeof matches[2] === 'undefined'
    ) {
      throw new Error('Invalid param: "options.metafile" contains invalid metafile url.');
    }

    const cdnId: string = matches[1];
    const tagId: string = matches[2];

    return {
      url: metafileUrl,
      baseUrl: url.origin,
      cdnId,
      jsonPath: `/${cdnId}/${tagId}.v2.json`,
    };
  }
}
