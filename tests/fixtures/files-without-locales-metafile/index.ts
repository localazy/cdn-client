import axiosMock from '@tests/mocks/axios-mock';
import filesWithoutLocalesMetafile
  from '@tests/fixtures/files-without-locales-metafile/metafile.json';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/files-without-locales-metafile/_e0.v2.json`,
};

export const serverResponses = {
  metafile: filesWithoutLocalesMetafile,
};

export const mockAxios = (): void => {
  axiosMock.reset();
  axiosMock.onGet(url.metafile).reply(200, serverResponses.metafile);
};
