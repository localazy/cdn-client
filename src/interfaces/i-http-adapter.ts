import { AxiosRequestConfig } from 'axios';

export interface IHttpAdapter {
  get<T = unknown, D = unknown>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
}
