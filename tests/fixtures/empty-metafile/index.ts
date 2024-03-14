import fetchMock from '@tests/mocks/fetch-mock';
import emptyFileMetafile from '@tests/fixtures/empty-metafile/metafile.json';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/empty-metafile/_e0.v2.json`,
};

export const serverResponses = {
  metafile: emptyFileMetafile,
};

export const mockResponses = (): void => {
  fetchMock.reset();
  fetchMock.get(url.metafile, serverResponses.metafile);
};
