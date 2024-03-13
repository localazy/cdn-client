import axiosMock from '@tests/mocks/axios-mock';
import singleFileMetafile from '@tests/fixtures/single-file-metafile/metafile.json';
import file01En from '@tests/fixtures/single-file-metafile/file01/en/file.json';
import file01Ms from '@tests/fixtures/single-file-metafile/file01/ms/file.json';

const baseUrl: string = 'https://delivery.localazy.com';
const file01Locales = singleFileMetafile.files.file01.locales;

export const url = {
  metafile: `${baseUrl}/single-file-metafile/_e0.v2.json`,
  file01: {
    en: `${baseUrl}${file01Locales[0].uri}`,
    ms: `${baseUrl}${file01Locales[1].uri}`,
  },
};

export const serverResponses = {
  metafile: singleFileMetafile,
  file01: {
    en: file01En,
    ms: file01Ms,
  },
};

export const cdnResponses = {
  allFilesAllLocales: {
    file01: {
      en: serverResponses.file01.en,
      ms: serverResponses.file01.ms,
    },
  },
};

export const mockAxios = (): void => {
  axiosMock.reset();
  axiosMock.onGet(url.metafile).reply(200, serverResponses.metafile);
  axiosMock.onGet(url.file01.en).reply(200, serverResponses.file01.en);
  axiosMock.onGet(url.file01.ms).reply(200, serverResponses.file01.ms);
};
