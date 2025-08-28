import fetchMock from '@tests/mocks/fetch-mock.js';
import completeMetafile from '@tests/fixtures/complete-metafile/metafile.json';
import file01En from '@tests/fixtures/complete-metafile/file01/en/file.json';
import file01MsBn from '@tests/fixtures/complete-metafile/file01/ms-BN/file.json';
import file01MsArab from '@tests/fixtures/complete-metafile/file01/ms-Arab/file.json';
import file01MsIdLatn from '@tests/fixtures/complete-metafile/file01/ms-ID-Latn/file.json';
import file02En from '@tests/fixtures/complete-metafile/file02/en/file.json';
import file02MsBn from '@tests/fixtures/complete-metafile/file02/ms-BN/file.json';
import file02MsArab from '@tests/fixtures/complete-metafile/file02/ms-Arab/file.json';
import file02MsIdLatn from '@tests/fixtures/complete-metafile/file02/ms-ID-Latn/file.json';
import file03En from '@tests/fixtures/complete-metafile/file03/en/file.json';
import file03MsBn from '@tests/fixtures/complete-metafile/file03/ms-BN/file.json';
import file03MsArab from '@tests/fixtures/complete-metafile/file03/ms-Arab/file.json';
import file03MsIdLatn from '@tests/fixtures/complete-metafile/file03/ms-ID-Latn/file.json';

const baseUrl: string = 'https://delivery.localazy.com';
const file01Locales = completeMetafile.files.file01.locales;
const file02Locales = completeMetafile.files.file02.locales;
const file03Locales = completeMetafile.files.file03.locales;

export const url = {
  metafile: `${baseUrl}/complete-metafile/_e0.v2.json`,

  file01: {
    en: `${baseUrl}${file01Locales?.[0]?.uri ?? ''}`,
    msBn: `${baseUrl}${file01Locales?.[1]?.uri ?? ''}`,
    msArab: `${baseUrl}${file01Locales?.[2]?.uri ?? ''}`,
    msIdLatn: `${baseUrl}${file01Locales?.[3]?.uri ?? ''}`,
  },
  file02: {
    en: `${baseUrl}${file02Locales?.[0]?.uri ?? ''}`,
    msBn: `${baseUrl}${file02Locales?.[1]?.uri ?? ''}`,
    msArab: `${baseUrl}${file02Locales?.[2]?.uri ?? ''}`,
    msIdLatn: `${baseUrl}${file02Locales?.[3]?.uri ?? ''}`,
  },
  file03: {
    en: `${baseUrl}${file03Locales?.[0]?.uri ?? ''}`,
    msBn: `${baseUrl}${file03Locales?.[1]?.uri ?? ''}`,
    msArab: `${baseUrl}${file03Locales?.[2]?.uri ?? ''}`,
    msIdLatn: `${baseUrl}${file03Locales?.[3]?.uri ?? ''}`,
  },
};

export const serverResponses = {
  metafile: completeMetafile,
  file01: {
    en: file01En,
    msBn: file01MsBn,
    msArab: file01MsArab,
    msIdLatn: file01MsIdLatn,
  },
  file02: {
    en: file02En,
    msBn: file02MsBn,
    msArab: file02MsArab,
    msIdLatn: file02MsIdLatn,
  },
  file03: {
    en: file03En,
    msBn: file03MsBn,
    msArab: file03MsArab,
    msIdLatn: file03MsIdLatn,
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
  allFilesAllLocalesExcludeBase: {
    file01: {
      ms_BN: serverResponses.file01.msBn,
      'ms#Arab': serverResponses.file01.msArab,
      'ms_ID#Latn': serverResponses.file01.msIdLatn,
    },
    file02: {
      ms_BN: serverResponses.file02.msBn,
      'ms#Arab': serverResponses.file02.msArab,
      'ms_ID#Latn': serverResponses.file02.msIdLatn,
    },
    file03: {
      ms_BN: serverResponses.file03.msBn,
      'ms#Arab': serverResponses.file03.msArab,
      'ms_ID#Latn': serverResponses.file03.msIdLatn,
    },
  },
  allFilesSelectedLocales: {
    file01: {
      en: serverResponses.file01.en,
      'ms_ID#Latn': serverResponses.file01.msIdLatn,
    },
    file02: {
      en: serverResponses.file02.en,
      'ms_ID#Latn': serverResponses.file02.msIdLatn,
    },
    file03: {
      en: serverResponses.file03.en,
      'ms_ID#Latn': serverResponses.file03.msIdLatn,
    },
  },
  selectedFilesAllLocales: {
    file01: {
      en: serverResponses.file01.en,
      ms_BN: serverResponses.file01.msBn,
      'ms#Arab': serverResponses.file01.msArab,
      'ms_ID#Latn': serverResponses.file01.msIdLatn,
    },
  },
  selectedFilesAllLocalesExcludeBase: {
    file01: {
      ms_BN: serverResponses.file01.msBn,
      'ms#Arab': serverResponses.file01.msArab,
      'ms_ID#Latn': serverResponses.file01.msIdLatn,
    },
  },
  selectedFilesSelectedLocales: {
    file01: {
      en: serverResponses.file01.en,
      ms_BN: serverResponses.file01.msBn,
    },
    file03: {
      en: serverResponses.file03.en,
      ms_BN: serverResponses.file03.msBn,
    },
  },
  singleFileAllLocales: {
    en: serverResponses.file01.en,
    ms_BN: serverResponses.file01.msBn,
    'ms#Arab': serverResponses.file01.msArab,
    'ms_ID#Latn': serverResponses.file01.msIdLatn,
  },
  singleFileAllLocalesExcludeBase: {
    ms_BN: serverResponses.file01.msBn,
    'ms#Arab': serverResponses.file01.msArab,
    'ms_ID#Latn': serverResponses.file01.msIdLatn,
  },
  singleFileSelectedLocales: {
    en: serverResponses.file01.en,
  },
  firstFileLocales: [
    'en',
    'ms',
    'ms_BN',
    'ms#Arab',
    'ms_ID#Latn',
  ],
  locales: [
    {
      isBaseLocale: true,
      isRtl: false,
      language: 'en',
      locale: 'en',
      localizedName: 'English',
      name: 'English',
      region: '',
      script: '',
    },
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms_BN',
      localizedName: 'Malay (Brunei)',
      name: 'Malay (Brunei)',
      region: 'BN',
      script: '',
    },
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms#Arab',
      localizedName: 'Malay (Arabic)',
      name: 'Malay (Arabic)',
      region: '',
      script: 'Arab',
    },
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms_ID#Latn',
      localizedName: 'Malay (Indonesia, Latin)',
      name: 'Malay (Indonesia, Latin)',
      region: 'ID',
      script: 'Latn',
    },
  ],
  localesExceptBaseLocale: [
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms_BN',
      localizedName: 'Malay (Brunei)',
      name: 'Malay (Brunei)',
      region: 'BN',
      script: '',
    },
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms#Arab',
      localizedName: 'Malay (Arabic)',
      name: 'Malay (Arabic)',
      region: '',
      script: 'Arab',
    },
    {
      isBaseLocale: false,
      isRtl: false,
      language: 'ms',
      locale: 'ms_ID#Latn',
      localizedName: 'Malay (Indonesia, Latin)',
      name: 'Malay (Indonesia, Latin)',
      region: 'ID',
      script: 'Latn',
    },
  ],
  baseLocale: {
    isBaseLocale: true,
    isRtl: false,
    language: 'en',
    locale: 'en',
    localizedName: 'English',
    name: 'English',
    region: '',
    script: '',
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
