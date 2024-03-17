import { IMetafile } from '@/interfaces/i-metafile';
import { ApiLocaleRequest } from '@/types/api-locale-request';
import { Context } from '@/cdn/context/context';

export class Api {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  public async fetchLocale(options: ApiLocaleRequest): Promise<object | string> {
    if (this.context.cache.has(options)) {
      return new Promise((resolve): void => {
        resolve(this.context.cache.get(options) as object | string);
      });
    }

    return this.context.client.get(options.metafileLocale.uri);
  }

  public async fetchMetafile(): Promise<IMetafile> {
    return (await this.context.client.get(this.context.metafile.params.jsonPath)) as IMetafile;
  }
}
