import { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
import { IMetafile } from '@/interfaces/i-metafile';
import { ApiLocaleRequest } from '@/types/api-locale-request';
import { Context } from '@/cdn/context/context';

export class Api {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  public async fetchLocale(options: ApiLocaleRequest): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = { reference: options };

    if (this.context.cache.has(options)) {
      return new Promise((resolve): void => {
        resolve({
          data: this.context.cache.get(options),
          config,
        } as AxiosResponse);
      });
    }

    const responseType: ResponseType = /\.(json|json5)$/.test(options.metafileFile.file) ? 'json' : 'text';

    return this.context.client.get<AxiosResponse>(options.metafileLocale.uri, { ...config, responseType });
  }

  public async fetchMetafile(config?: AxiosRequestConfig): Promise<AxiosResponse<IMetafile>> {
    return this.context.client.get(
      this.context.metafile.params.jsonPath,
      config,
    );
  }
}
