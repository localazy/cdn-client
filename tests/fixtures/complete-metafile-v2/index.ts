import axiosMock from '@tests/mocks/axios-mock';
import { url } from '@tests/fixtures/complete-metafile';
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

export const mockAxios = (): void => {
  axiosMock.reset();
  axiosMock.onGet(url.metafile).reply(200, serverResponses.metafile);
  axiosMock.onGet(url.file01.en).reply(200, serverResponses.file01.en);
  axiosMock.onGet(url.file01.msBn).reply(200, serverResponses.file01.msBn);
  axiosMock.onGet(url.file01.msArab).reply(200, serverResponses.file01.msArab);
  axiosMock.onGet(url.file01.msIdLatn).reply(200, serverResponses.file01.msIdLatn);
  axiosMock.onGet(url.file02.en).reply(200, serverResponses.file02.en);
  axiosMock.onGet(url.file02.msBn).reply(200, serverResponses.file02.msBn);
  axiosMock.onGet(url.file02.msArab).reply(200, serverResponses.file02.msArab);
  axiosMock.onGet(url.file02.msIdLatn).reply(200, serverResponses.file02.msIdLatn);
  axiosMock.onGet(url.file03.en).reply(200, serverResponses.file03.en);
  axiosMock.onGet(url.file03.msBn).reply(200, serverResponses.file03.msBn);
  axiosMock.onGet(url.file03.msArab).reply(200, serverResponses.file03.msArab);
  axiosMock.onGet(url.file03.msIdLatn).reply(200, serverResponses.file03.msIdLatn);
};
