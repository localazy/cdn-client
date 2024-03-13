import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { IHttpAdapter } from '@/interfaces/i-http-adapter';

export class AxiosHttpAdapter implements IHttpAdapter {
  public client: AxiosInstance;

  constructor(baseUrl: string, config?: CreateAxiosDefaults) {
    this.client = AxiosHttpAdapter.clientFactory(baseUrl, config);
  }

  protected static clientFactory(baseURL: string, config?: CreateAxiosDefaults): AxiosInstance {
    const clientConfig: CreateAxiosDefaults = { baseURL, ...config };

    return axios.create(clientConfig);
  }

  get<T = unknown, D = unknown>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
    return this.client.get(url, config);
  }
}
