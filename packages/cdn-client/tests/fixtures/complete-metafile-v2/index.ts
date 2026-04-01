import fetchMock from '@tests/mocks/fetch-mock.js';
import { url } from '@tests/fixtures/complete-metafile/index.js';
import completeMetafileV2 from '@tests/fixtures/complete-metafile-v2/metafile.json';
import file01En from '@tests/fixtures/complete-metafile-v2/file01/en/file.json';
import file01MSBn from '@tests/fixtures/complete-metafile-v2/file01/ms-BN/file.json';

export const serverResponses = {
  metafile: completeMetafileV2,
  file01: {
    en: file01En,
    msBn: file01MSBn,
    msArab: {},
    msIdLatn: {},
  },
  file02: {
    en: {},
    msBn: {},
    msArab: {},
    msIdLatn: {},
  },
  file03: {
    en: {},
    msBn: {},
    msArab: {},
    msIdLatn: {},
  },
};

export const cdnResponses = {
  allFilesAllLocales: {
    file01: {
      en: serverResponses.file01.en,
      ms_BN: serverResponses.file01.msBn,
      'ms#Arab': serverResponses.file01.msArab,
      'ms_ID#Latn': serverResponses.file01.msIdLatn,
    },
    file02: {
      en: serverResponses.file02.en,
      ms_BN: serverResponses.file02.msBn,
      'ms#Arab': serverResponses.file02.msArab,
      'ms_ID#Latn': serverResponses.file02.msIdLatn,
    },
    file03: {
      en: serverResponses.file03.en,
      ms_BN: serverResponses.file03.msBn,
      'ms#Arab': serverResponses.file03.msArab,
      'ms_ID#Latn': serverResponses.file03.msIdLatn,
    },
  },
};

export const mockResponses = (): void => {
  fetchMock.hardReset();
  fetchMock.mockGlobal();
  fetchMock.get(url.metafile, serverResponses.metafile);
  fetchMock.get(url.file01.en, serverResponses.file01.en);
  fetchMock.get(url.file01.msBn, serverResponses.file01.msBn);
  fetchMock.get(url.file01.msArab, serverResponses.file01.msArab);
  fetchMock.get(url.file01.msIdLatn, serverResponses.file01.msIdLatn);
  fetchMock.get(url.file02.en, serverResponses.file02.en);
  fetchMock.get(url.file02.msBn, serverResponses.file02.msBn);
  fetchMock.get(url.file02.msArab, serverResponses.file02.msArab);
  fetchMock.get(url.file02.msIdLatn, serverResponses.file02.msIdLatn);
  fetchMock.get(url.file03.en, serverResponses.file03.en);
  fetchMock.get(url.file03.msBn, serverResponses.file03.msBn);
  fetchMock.get(url.file03.msArab, serverResponses.file03.msArab);
  fetchMock.get(url.file03.msIdLatn, serverResponses.file03.msIdLatn);
};
