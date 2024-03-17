import { describe, test, expect } from 'vitest';
import { serverErrorMetafile } from '@tests/fixtures';
import { CdnClient } from '@/main';

describe('Test error responses', (): void => {
  test('Server returns 404 when fetching metafile', async (): Promise<void> => {
    serverErrorMetafile.mockResponse(404);

    await expect(async (): Promise<void> => {
      await CdnClient.create({ metafile: serverErrorMetafile.url.metafile });
    }).rejects.toThrowError('Request failed with status code 404');
  });

  test('Server returns 500 when fetching metafile', async (): Promise<void> => {
    serverErrorMetafile.mockResponse(500);

    await expect(async (): Promise<void> => {
      await CdnClient.create({ metafile: serverErrorMetafile.url.metafile });
    }).rejects.toThrowError('Request failed with status code 500');
  });
});
