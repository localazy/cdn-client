import fetchMock from '@tests/mocks/fetch-mock';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/single-file-metafile/_e0.v2.json`,
};

export const mockResponse = (status: number = 500): void => {
  fetchMock.reset();
  fetchMock.mock(url.metafile, { status, body: '', headers: { 'content-type': 'application/json' } });
};
