import axiosMock from '@tests/mocks/axios-mock';

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/single-file-metafile/_e0.v2.json`,
};

export const mockAxios = (code: number = 500): void => {
  axiosMock.reset();
  axiosMock.onGet(url.metafile).reply(code);
};
