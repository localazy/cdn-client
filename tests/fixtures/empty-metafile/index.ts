import axiosMock from '@tests/mocks/axios-mock';
import emptyFileMetafile from '@tests/fixtures/empty-metafile/metafile.json';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/empty-metafile/_e0.v2.json`,
};

export const serverResponses = {
  metafile: emptyFileMetafile,
};

export const mockAxios = (): void => {
  axiosMock.reset();
  axiosMock.onGet(url.metafile).reply(200, serverResponses.metafile);
};
