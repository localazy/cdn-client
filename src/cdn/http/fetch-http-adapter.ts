import { IHttpAdapter } from '@/interfaces/i-http-adapter';

export class FetchHttpAdapter implements IHttpAdapter {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(url: string): Promise<string | object> {
    const response: Response = await fetch(`${this.baseUrl}${url}`);
    const contentType: string = response.headers.get('content-type') || '';
    const isJson: boolean = [
      'application/json5',
      'application/json',
    ].includes(contentType);

    if (response.status >= 400) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    let result: string | object = '';

    if (isJson) {
      try {
        result = await response.json() as object;
      } catch (error) {
        result = {};
      }
    } else {
      try {
        result = await response.text();
      } catch (error) {
        result = '';
      }
    }

    return result;
  }
}
