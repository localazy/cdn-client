import { IHttpAdapter } from '@/interfaces/i-http-adapter';

export class FetchHttpAdapter implements IHttpAdapter {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(url: string): Promise<string | object> {
    const response: Response = await fetch(`${this.baseUrl}${url}`);
    const contentType: string | null = response.headers.get('content-type');
    const isJson: boolean = contentType === 'application/json5' || contentType === 'application/json';

    if (response.status >= 400) {
      throw new Error(`Request failed with status code ${response.status.toString()}`);
    }

    let result: string | object;

    if (isJson) {
      result = (await response.json()) as object;
    } else {
      result = await response.text();
    }

    return result;
  }
}
