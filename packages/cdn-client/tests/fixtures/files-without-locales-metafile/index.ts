import fetchMock from '@tests/mocks/fetch-mock.js';
import filesWithoutLocalesMetafile
  from '@tests/fixtures/files-without-locales-metafile/metafile.json';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/files-without-locales-metafile/_e0.v2.json`,
};

export const serverResponses = {
  metafile: filesWithoutLocalesMetafile,
};

export const mockResponses = (): void => {
  fetchMock.hardReset();
  fetchMock.mockGlobal();
  fetchMock.get(url.metafile, serverResponses.metafile);
};
