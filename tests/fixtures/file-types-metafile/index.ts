import fetchMock from '@tests/mocks/fetch-mock';
import fileTypesMetafile from '@tests/fixtures/file-types-metafile/metafile.json';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

const file01En: object = JSON.parse(readFileSync(resolve(__dirname, 'file01-json/en/plain.json')).toString()) as object;
const file01Es: object = JSON.parse(readFileSync(resolve(__dirname, 'file01-json/es/plain.json')).toString()) as object;
const file01Fr: object = JSON.parse(readFileSync(resolve(__dirname, 'file01-json/fr/plain.json')).toString()) as object;
const file02En: object = JSON.parse(
  readFileSync(resolve(__dirname, 'file02-json5/en/texts.json5')).toString(),
) as object;
const file02Es: object = JSON.parse(
  readFileSync(resolve(__dirname, 'file02-json5/es/texts.json5')).toString(),
) as object;
const file02Fr: object = JSON.parse(
  readFileSync(resolve(__dirname, 'file02-json5/fr/texts.json5')).toString(),
) as object;
const file03En: string = readFileSync(resolve(__dirname, 'file03-neon/en/plain.neon')).toString();
const file03Es: string = readFileSync(resolve(__dirname, 'file03-neon/es/plain.neon')).toString();
const file03Fr: string = readFileSync(resolve(__dirname, 'file03-neon/fr/plain.neon')).toString();
const file04En: string = readFileSync(resolve(__dirname, 'file04-yaml/en/plain.yaml')).toString();
const file04Es: string = readFileSync(resolve(__dirname, 'file04-yaml/es/plain.yaml')).toString();
const file04Fr: string = readFileSync(resolve(__dirname, 'file04-yaml/fr/plain.yaml')).toString();
const file05En: string = readFileSync(resolve(__dirname, 'file05-xml/en/resources.xml')).toString();
const file05Es: string = readFileSync(resolve(__dirname, 'file05-xml/es/resources.xml')).toString();
const file05Fr: string = readFileSync(resolve(__dirname, 'file05-xml/fr/resources.xml')).toString();
const file06En: string = readFileSync(resolve(__dirname, 'file06-srt/en/subtitles.srt')).toString();
const file06Es: string = readFileSync(resolve(__dirname, 'file06-srt/es/subtitles.srt')).toString();
const file06Fr: string = readFileSync(resolve(__dirname, 'file06-srt/fr/subtitles.srt')).toString();
const file07En: string = readFileSync(resolve(__dirname, 'file07-ini/en/plain.ini')).toString();
const file07Es: string = readFileSync(resolve(__dirname, 'file07-ini/es/plain.ini')).toString();
const file07Fr: string = readFileSync(resolve(__dirname, 'file07-ini/fr/plain.ini')).toString();
const file08En: string = readFileSync(resolve(__dirname, 'file08-strings/en/Localizable.strings')).toString();
const file08Es: string = readFileSync(resolve(__dirname, 'file08-strings/es/Localizable.strings')).toString();
const file08Fr: string = readFileSync(resolve(__dirname, 'file08-strings/fr/Localizable.strings')).toString();
const file09En: string = readFileSync(resolve(__dirname, 'file09-toml/en/file.toml')).toString();
const file09Es: string = readFileSync(resolve(__dirname, 'file09-toml/es/file.toml')).toString();
const file09Fr: string = readFileSync(resolve(__dirname, 'file09-toml/fr/file.toml')).toString();
const file10En: string = readFileSync(resolve(__dirname, 'file10-resx/en/resources.resx')).toString();
const file10Es: string = readFileSync(resolve(__dirname, 'file10-resx/es/resources.resx')).toString();
const file10Fr: string = readFileSync(resolve(__dirname, 'file10-resx/fr/resources.resx')).toString();
const file11En: string = readFileSync(resolve(__dirname, 'file11-xliff/en/translate.xliff')).toString();
const file11Es: string = readFileSync(resolve(__dirname, 'file11-xliff/es/translate.xliff')).toString();
const file11Fr: string = readFileSync(resolve(__dirname, 'file11-xliff/fr/translate.xliff')).toString();
const file12En: string = readFileSync(resolve(__dirname, 'file12-properties/en/local.properties')).toString();
const file12Es: string = readFileSync(resolve(__dirname, 'file12-properties/es/local.properties')).toString();
const file12Fr: string = readFileSync(resolve(__dirname, 'file12-properties/fr/local.properties')).toString();
const file13En: string = readFileSync(resolve(__dirname, 'file13-csv/en/export.csv')).toString();
const file13Es: string = readFileSync(resolve(__dirname, 'file13-csv/es/export.csv')).toString();
const file13Fr: string = readFileSync(resolve(__dirname, 'file13-csv/fr/export.csv')).toString();
const file14En: string = readFileSync(resolve(__dirname, 'file14-ts/en/resources.ts')).toString();
const file14Es: string = readFileSync(resolve(__dirname, 'file14-ts/es/resources.ts')).toString();
const file14Fr: string = readFileSync(resolve(__dirname, 'file14-ts/fr/resources.ts')).toString();
const file15En: string = readFileSync(resolve(__dirname, 'file15-js/en/default.js')).toString();
const file15Es: string = readFileSync(resolve(__dirname, 'file15-js/es/default.js')).toString();
const file15Fr: string = readFileSync(resolve(__dirname, 'file15-js/fr/default.js')).toString();
const file16En: string = readFileSync(resolve(__dirname, 'file16-php/en/structured.php')).toString();
const file16Es: string = readFileSync(resolve(__dirname, 'file16-php/es/structured.php')).toString();
const file16Fr: string = readFileSync(resolve(__dirname, 'file16-php/fr/structured.php')).toString();
const file17En: string = readFileSync(resolve(__dirname, 'file17-pot/en/messages.pot')).toString();
const file17Es: string = readFileSync(resolve(__dirname, 'file17-pot/es/messages.pot')).toString();
const file17Fr: string = readFileSync(resolve(__dirname, 'file17-pot/fr/messages.pot')).toString();
const file18En: string = readFileSync(resolve(__dirname, 'file18-po/en/messages.po')).toString();
const file18Es: string = readFileSync(resolve(__dirname, 'file18-po/es/messages.po')).toString();
const file18Fr: string = readFileSync(resolve(__dirname, 'file18-po/fr/messages.po')).toString();

const baseUrl: string = 'https://delivery.localazy.com';

export const url = {
  metafile: `${baseUrl}/file-types-metafile/_e0.v2.json`,
  file01: {
    en: `${baseUrl}/file-types-metafile/_e0/file01-json/en/plain.json`,
    es: `${baseUrl}/file-types-metafile/_e0/file01-json/es/plain.json`,
    fr: `${baseUrl}/file-types-metafile/_e0/file01-json/fr/plain.json`,
  },
  file02: {
    en: `${baseUrl}/file-types-metafile/_e0/file02-json5/en/texts.json5`,
    es: `${baseUrl}/file-types-metafile/_e0/file02-json5/es/texts.json5`,
    fr: `${baseUrl}/file-types-metafile/_e0/file02-json5/fr/texts.json5`,
  },
  file03: {
    en: `${baseUrl}/file-types-metafile/_e0/file03-neon/en/plain.neon`,
    es: `${baseUrl}/file-types-metafile/_e0/file03-neon/es/plain.neon`,
    fr: `${baseUrl}/file-types-metafile/_e0/file03-neon/fr/plain.neon`,
  },
  file04: {
    en: `${baseUrl}/file-types-metafile/_e0/file04-yaml/en/plain.yaml`,
    es: `${baseUrl}/file-types-metafile/_e0/file04-yaml/es/plain.yaml`,
    fr: `${baseUrl}/file-types-metafile/_e0/file04-yaml/fr/plain.yaml`,
  },
  file05: {
    en: `${baseUrl}/file-types-metafile/_e0/file05-xml/en/resources.xml`,
    es: `${baseUrl}/file-types-metafile/_e0/file05-xml/es/resources.xml`,
    fr: `${baseUrl}/file-types-metafile/_e0/file05-xml/fr/resources.xml`,
  },
  file06: {
    en: `${baseUrl}/file-types-metafile/_e0/file06-srt/en/subtitles.srt`,
    es: `${baseUrl}/file-types-metafile/_e0/file06-srt/es/subtitles.srt`,
    fr: `${baseUrl}/file-types-metafile/_e0/file06-srt/fr/subtitles.srt`,
  },
  file07: {
    en: `${baseUrl}/file-types-metafile/_e0/file07-ini/en/plain.ini`,
    es: `${baseUrl}/file-types-metafile/_e0/file07-ini/es/plain.ini`,
    fr: `${baseUrl}/file-types-metafile/_e0/file07-ini/fr/plain.ini`,
  },
  file08: {
    en: `${baseUrl}/file-types-metafile/_e0/file08-strings/en/Localizable.strings`,
    es: `${baseUrl}/file-types-metafile/_e0/file08-strings/es/Localizable.strings`,
    fr: `${baseUrl}/file-types-metafile/_e0/file08-strings/fr/Localizable.strings`,
  },
  file09: {
    en: `${baseUrl}/file-types-metafile/_e0/file09-toml/en/file.toml`,
    es: `${baseUrl}/file-types-metafile/_e0/file09-toml/es/file.toml`,
    fr: `${baseUrl}/file-types-metafile/_e0/file09-toml/fr/file.toml`,
  },
  file10: {
    en: `${baseUrl}/file-types-metafile/_e0/file10-resx/en/resources.resx`,
    es: `${baseUrl}/file-types-metafile/_e0/file10-resx/es/resources.resx`,
    fr: `${baseUrl}/file-types-metafile/_e0/file10-resx/fr/resources.resx`,
  },
  file11: {
    en: `${baseUrl}/file-types-metafile/_e0/file11-xliff/en/translate.xliff`,
    es: `${baseUrl}/file-types-metafile/_e0/file11-xliff/es/translate.xliff`,
    fr: `${baseUrl}/file-types-metafile/_e0/file11-xliff/fr/translate.xliff`,
  },
  file12: {
    en: `${baseUrl}/file-types-metafile/_e0/file12-properties/en/local.properties`,
    es: `${baseUrl}/file-types-metafile/_e0/file12-properties/es/local.properties`,
    fr: `${baseUrl}/file-types-metafile/_e0/file12-properties/fr/local.properties`,
  },
  file13: {
    en: `${baseUrl}/file-types-metafile/_e0/file13-csv/en/export.csv`,
    es: `${baseUrl}/file-types-metafile/_e0/file13-csv/es/export.csv`,
    fr: `${baseUrl}/file-types-metafile/_e0/file13-csv/fr/export.csv`,
  },
  file14: {
    en: `${baseUrl}/file-types-metafile/_e0/file14-ts/en/resources.ts`,
    es: `${baseUrl}/file-types-metafile/_e0/file14-ts/es/resources.ts`,
    fr: `${baseUrl}/file-types-metafile/_e0/file14-ts/fr/resources.ts`,
  },
  file15: {
    en: `${baseUrl}/file-types-metafile/_e0/file15-js/en/default.js`,
    es: `${baseUrl}/file-types-metafile/_e0/file15-js/es/default.js`,
    fr: `${baseUrl}/file-types-metafile/_e0/file15-js/fr/default.js`,
  },
  file16: {
    en: `${baseUrl}/file-types-metafile/_e0/file16-php/en/structured.php`,
    es: `${baseUrl}/file-types-metafile/_e0/file16-php/es/structured.php`,
    fr: `${baseUrl}/file-types-metafile/_e0/file16-php/fr/structured.php`,
  },
  file17: {
    en: `${baseUrl}/file-types-metafile/_e0/file17-pot/en/messages.pot`,
    es: `${baseUrl}/file-types-metafile/_e0/file17-pot/es/messages.pot`,
    fr: `${baseUrl}/file-types-metafile/_e0/file17-pot/fr/messages.pot`,
  },
  file18: {
    en: `${baseUrl}/file-types-metafile/_e0/file18-po/en/messages.po`,
    es: `${baseUrl}/file-types-metafile/_e0/file18-po/es/messages.po`,
    fr: `${baseUrl}/file-types-metafile/_e0/file18-po/fr/messages.po`,
  },
};

export const serverResponses = {
  metafile: fileTypesMetafile,
  file01: {
    en: file01En,
    es: file01Es,
    fr: file01Fr,
  },
  file02: {
    en: file02En,
    es: file02Es,
    fr: file02Fr,
  },
  file03: {
    en: file03En,
    es: file03Es,
    fr: file03Fr,
  },
  file04: {
    en: file04En,
    es: file04Es,
    fr: file04Fr,
  },
  file05: {
    en: file05En,
    es: file05Es,
    fr: file05Fr,
  },
  file06: {
    en: file06En,
    es: file06Es,
    fr: file06Fr,
  },
  file07: {
    en: file07En,
    es: file07Es,
    fr: file07Fr,
  },
  file08: {
    en: file08En,
    es: file08Es,
    fr: file08Fr,
  },
  file09: {
    en: file09En,
    es: file09Es,
    fr: file09Fr,
  },
  file10: {
    en: file10En,
    es: file10Es,
    fr: file10Fr,
  },
  file11: {
    en: file11En,
    es: file11Es,
    fr: file11Fr,
  },
  file12: {
    en: file12En,
    es: file12Es,
    fr: file12Fr,
  },
  file13: {
    en: file13En,
    es: file13Es,
    fr: file13Fr,
  },
  file14: {
    en: file14En,
    es: file14Es,
    fr: file14Fr,
  },
  file15: {
    en: file15En,
    es: file15Es,
    fr: file15Fr,
  },
  file16: {
    en: file16En,
    es: file16Es,
    fr: file16Fr,
  },
  file17: {
    en: file17En,
    es: file17Es,
    fr: file17Fr,
  },
  file18: {
    en: file18En,
    es: file18Es,
    fr: file18Fr,
  },
};

export const mockResponses = (): void => {
  fetchMock.hardReset();
  fetchMock.mockGlobal();
  fetchMock.get(url.metafile, serverResponses.metafile);
  fetchMock.get(url.file01.en, serverResponses.file01.en);
  fetchMock.get(url.file01.es, serverResponses.file01.es);
  fetchMock.get(url.file01.fr, serverResponses.file01.fr);
  fetchMock.get(url.file02.en, serverResponses.file02.en);
  fetchMock.get(url.file02.es, serverResponses.file02.es);
  fetchMock.get(url.file02.fr, serverResponses.file02.fr);
  fetchMock.get(url.file03.en, serverResponses.file03.en);
  fetchMock.get(url.file03.es, serverResponses.file03.es);
  fetchMock.get(url.file03.fr, serverResponses.file03.fr);
  fetchMock.get(url.file04.en, serverResponses.file04.en);
  fetchMock.get(url.file04.es, serverResponses.file04.es);
  fetchMock.get(url.file04.fr, serverResponses.file04.fr);
  fetchMock.get(url.file05.en, serverResponses.file05.en);
  fetchMock.get(url.file05.es, serverResponses.file05.es);
  fetchMock.get(url.file05.fr, serverResponses.file05.fr);
  fetchMock.get(url.file06.en, serverResponses.file06.en);
  fetchMock.get(url.file06.es, serverResponses.file06.es);
  fetchMock.get(url.file06.fr, serverResponses.file06.fr);
  fetchMock.get(url.file07.en, serverResponses.file07.en);
  fetchMock.get(url.file07.es, serverResponses.file07.es);
  fetchMock.get(url.file07.fr, serverResponses.file07.fr);
  fetchMock.get(url.file08.en, serverResponses.file08.en);
  fetchMock.get(url.file08.es, serverResponses.file08.es);
  fetchMock.get(url.file08.fr, serverResponses.file08.fr);
  fetchMock.get(url.file09.en, serverResponses.file09.en);
  fetchMock.get(url.file09.es, serverResponses.file09.es);
  fetchMock.get(url.file09.fr, serverResponses.file09.fr);
  fetchMock.get(url.file10.en, serverResponses.file10.en);
  fetchMock.get(url.file10.es, serverResponses.file10.es);
  fetchMock.get(url.file10.fr, serverResponses.file10.fr);
  fetchMock.get(url.file11.en, serverResponses.file11.en);
  fetchMock.get(url.file11.es, serverResponses.file11.es);
  fetchMock.get(url.file11.fr, serverResponses.file11.fr);
  fetchMock.get(url.file12.en, serverResponses.file12.en);
  fetchMock.get(url.file12.es, serverResponses.file12.es);
  fetchMock.get(url.file12.fr, serverResponses.file12.fr);
  fetchMock.get(url.file13.en, serverResponses.file13.en);
  fetchMock.get(url.file13.es, serverResponses.file13.es);
  fetchMock.get(url.file13.fr, serverResponses.file13.fr);
  fetchMock.get(url.file14.en, serverResponses.file14.en);
  fetchMock.get(url.file14.es, serverResponses.file14.es);
  fetchMock.get(url.file14.fr, serverResponses.file14.fr);
  fetchMock.get(url.file15.en, serverResponses.file15.en);
  fetchMock.get(url.file15.es, serverResponses.file15.es);
  fetchMock.get(url.file15.fr, serverResponses.file15.fr);
  fetchMock.get(url.file16.en, serverResponses.file16.en);
  fetchMock.get(url.file16.es, serverResponses.file16.es);
  fetchMock.get(url.file16.fr, serverResponses.file16.fr);
  fetchMock.get(url.file17.en, serverResponses.file17.en);
  fetchMock.get(url.file17.es, serverResponses.file17.es);
  fetchMock.get(url.file17.fr, serverResponses.file17.fr);
  fetchMock.get(url.file18.en, serverResponses.file18.en);
  fetchMock.get(url.file18.es, serverResponses.file18.es);
  fetchMock.get(url.file18.fr, serverResponses.file18.fr);
};
