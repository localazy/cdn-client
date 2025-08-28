import fetchMock from '@tests/mocks/fetch-mock';
import singleFileMetafile from '@tests/fixtures/single-file-metafile/metafile.json';
import file01En from '@tests/fixtures/single-file-metafile/file01/en/file.json';
import file01Ms from '@tests/fixtures/single-file-metafile/file01/ms/file.json';
import { assertNotNull } from '@tests/support/assert-not-null';

const baseUrl: string = 'https://delivery.localazy.com';
const file01Locales = singleFileMetafile.files.file01.locales;

export const url = {
  metafile: `${baseUrl}/single-file-metafile/_e0.v2.json`,
  file01: {
    en: `${baseUrl}${assertNotNull(file01Locales[0]).uri}`,
    ms: `${baseUrl}${assertNotNull(file01Locales[1]).uri}`,
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

export const mockResponses = (): void => {
  fetchMock.hardReset();
  fetchMock.mockGlobal();
  fetchMock.get(url.metafile, serverResponses.metafile);
  fetchMock.get(url.file01.en, serverResponses.file01.en);
  fetchMock.get(url.file01.ms, serverResponses.file01.ms);
};
