import type { Context } from '@/cdn/context/context.js';
import type { MetafileFile } from '@/cdn/metafile/metafile-file.js';
import type { MetafileLocale } from '@/cdn/metafile/metafile-locale.js';
import { LocalesMap } from '@/cdn/request/locales-map.js';
import type { ApiLocaleRequest } from '@/types/api-locale-request.js';
import type { CdnResponse } from '@/types/cdn-response.js';

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
    const payload: [Promise<string | object>, ApiLocaleRequest][] = this.getPromises();
    const promises: Promise<string | object>[] = payload.map(
      (item: [Promise<string | object>, ApiLocaleRequest]) => item[0],
    );
    const requests: ApiLocaleRequest[] = payload.map(
      (item: [Promise<string | object>, ApiLocaleRequest]) => item[1],
    );
    const responses: (string | object)[] = await Promise.all(promises);

    return this.context.responseFactory.createCdnResponse({
      requests,
      responses,
      localesMap: this.localesMap,
      hasSingleFileResponse: this.hasSingleFileResponse,
      hasSingleLocaleResponse: this.hasSingleLocaleResponse,
    });
  }

  protected getPromises(): [Promise<string | object>, ApiLocaleRequest][] {
    return this.files.reduce(
      (acc: [Promise<string | object>, ApiLocaleRequest][], cur: MetafileFile) => {
        if (typeof this.localesMap.data?.[cur.id] !== 'undefined') {
          acc.push(
            // @ts-expect-error TODO fix type
            ...this.localesMap.data[cur.id].map(
              (metafileLocale: MetafileLocale): [Promise<string | object>, ApiLocaleRequest] => {
                const request: ApiLocaleRequest = {
                  metafileFile: cur,
                  metafileLocale,
                };

                return [this.context.api.fetchLocale(request), request];
              },
            ),
          );
        }
        return acc;
      },
      [],
    );
  }
}
