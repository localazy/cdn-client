import { AxiosResponse } from 'axios';
import { Context } from '@/cdn/context/context';
import { MetafileFile } from '@/cdn/metafile/metafile-file';
import { MetafileLocale } from '@/cdn/metafile/metafile-locale';
import { LocalesMap } from '@/cdn/request/locales-map';
import { CdnResponse } from '@/types/cdn-response';

export class Request {
  public files: MetafileFile[];

  public localesMap: LocalesMap;

  public hasSingleFileResponse: boolean;

  public hasSingleLocaleResponse: boolean;

  protected context: Context;

  constructor(context: Context) {
    this.files = [];
    this.localesMap = new LocalesMap({ context });
    this.hasSingleFileResponse = false;
    this.hasSingleLocaleResponse = false;
    this.context = context;
  }

  public async execute(): Promise<CdnResponse> {
    return this.context.responseFactory.createCdnResponse({
      responses: await Promise.all(this.getPromises()),
      localesMap: this.localesMap,
      hasSingleFileResponse: this.hasSingleFileResponse,
      hasSingleLocaleResponse: this.hasSingleLocaleResponse,
    });
  }

  protected getPromises(): Promise<AxiosResponse<CdnResponse>>[] {
    return this.files.reduce(
      (acc: Promise<AxiosResponse<CdnResponse>>[], cur: MetafileFile) => {
        if (this.localesMap.data[cur.id]) {
          acc.push(
            ...this.localesMap.data[cur.id].map(
              (metafileLocale: MetafileLocale) => this.context.api.fetchLocale({
                metafileFile: cur,
                metafileLocale,
              }),
            ),
          );
        }
        return acc;
      },
      [],
    );
  }
}
