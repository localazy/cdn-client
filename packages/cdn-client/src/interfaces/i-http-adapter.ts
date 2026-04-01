export interface IHttpAdapter<T = object> {
  get: (url: string, config?: T) => Promise<object | string>;
}
