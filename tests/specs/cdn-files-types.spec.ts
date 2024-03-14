import {
  describe, test, expect, beforeEach,
} from 'vitest';
import { fileTypesMetafile } from '@tests/fixtures';
import { CdnClient } from '@/main';

let cdn: CdnClient;

describe('File types', (): void => {
  beforeEach(async (): Promise<void> => {
    fileTypesMetafile.mockResponses();

    cdn = await CdnClient.create({
      metafile: fileTypesMetafile.url.metafile,
    });
  });

  test('JSON file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file01-json'],
      }),
    ).toStrictEqual({
      'file01-json': {
        en: fileTypesMetafile.serverResponses.file01.en,
        es: fileTypesMetafile.serverResponses.file01.es,
        fr: fileTypesMetafile.serverResponses.file01.fr,
      },
    });
  });

  test('JSON5 file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file02-json5'],
      }),
    ).toStrictEqual({
      'file02-json5': {
        en: fileTypesMetafile.serverResponses.file02.en,
        es: fileTypesMetafile.serverResponses.file02.es,
        fr: fileTypesMetafile.serverResponses.file02.fr,
      },
    });
  });

  test('NEON file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file03-neon'],
      }),
    ).toStrictEqual({
      'file03-neon': {
        en: fileTypesMetafile.serverResponses.file03.en,
        es: fileTypesMetafile.serverResponses.file03.es,
        fr: fileTypesMetafile.serverResponses.file03.fr,
      },
    });
  });

  test('YAML file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file04-yaml'],
      }),
    ).toStrictEqual({
      'file04-yaml': {
        en: fileTypesMetafile.serverResponses.file04.en,
        es: fileTypesMetafile.serverResponses.file04.es,
        fr: fileTypesMetafile.serverResponses.file04.fr,
      },
    });
  });

  test('XML file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file05-xml'],
      }),
    ).toStrictEqual({
      'file05-xml': {
        en: fileTypesMetafile.serverResponses.file05.en,
        es: fileTypesMetafile.serverResponses.file05.es,
        fr: fileTypesMetafile.serverResponses.file05.fr,
      },
    });
  });

  test('SRT file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file06-srt'],
      }),
    ).toStrictEqual({
      'file06-srt': {
        en: fileTypesMetafile.serverResponses.file06.en,
        es: fileTypesMetafile.serverResponses.file06.es,
        fr: fileTypesMetafile.serverResponses.file06.fr,
      },
    });
  });

  test('INI file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file07-ini'],
      }),
    ).toStrictEqual({
      'file07-ini': {
        en: fileTypesMetafile.serverResponses.file07.en,
        es: fileTypesMetafile.serverResponses.file07.es,
        fr: fileTypesMetafile.serverResponses.file07.fr,
      },
    });
  });

  test('strings file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file08-strings'],
      }),
    ).toStrictEqual({
      'file08-strings': {
        en: fileTypesMetafile.serverResponses.file08.en,
        es: fileTypesMetafile.serverResponses.file08.es,
        fr: fileTypesMetafile.serverResponses.file08.fr,
      },
    });
  });

  test('TOML file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file09-toml'],
      }),
    ).toStrictEqual({
      'file09-toml': {
        en: fileTypesMetafile.serverResponses.file09.en,
        es: fileTypesMetafile.serverResponses.file09.es,
        fr: fileTypesMetafile.serverResponses.file09.fr,
      },
    });
  });

  test('RESX file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file10-resx'],
      }),
    ).toStrictEqual({
      'file10-resx': {
        en: fileTypesMetafile.serverResponses.file10.en,
        es: fileTypesMetafile.serverResponses.file10.es,
        fr: fileTypesMetafile.serverResponses.file10.fr,
      },
    });
  });

  test('XLIFF file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file11-xliff'],
      }),
    ).toStrictEqual({
      'file11-xliff': {
        en: fileTypesMetafile.serverResponses.file11.en,
        es: fileTypesMetafile.serverResponses.file11.es,
        fr: fileTypesMetafile.serverResponses.file11.fr,
      },
    });
  });

  test('properties file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file12-properties'],
      }),
    ).toStrictEqual({
      'file12-properties': {
        en: fileTypesMetafile.serverResponses.file12.en,
        es: fileTypesMetafile.serverResponses.file12.es,
        fr: fileTypesMetafile.serverResponses.file12.fr,
      },
    });
  });

  test('CSV file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file13-csv'],
      }),
    ).toStrictEqual({
      'file13-csv': {
        en: fileTypesMetafile.serverResponses.file13.en,
        es: fileTypesMetafile.serverResponses.file13.es,
        fr: fileTypesMetafile.serverResponses.file13.fr,
      },
    });
  });

  test('QT-TS file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file14-ts'],
      }),
    ).toStrictEqual({
      'file14-ts': {
        en: fileTypesMetafile.serverResponses.file14.en,
        es: fileTypesMetafile.serverResponses.file14.es,
        fr: fileTypesMetafile.serverResponses.file14.fr,
      },
    });
  });

  test('JS file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file15-js'],
      }),
    ).toStrictEqual({
      'file15-js': {
        en: fileTypesMetafile.serverResponses.file15.en,
        es: fileTypesMetafile.serverResponses.file15.es,
        fr: fileTypesMetafile.serverResponses.file15.fr,
      },
    });
  });

  test('PHP file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file16-php'],
      }),
    ).toStrictEqual({
      'file16-php': {
        en: fileTypesMetafile.serverResponses.file16.en,
        es: fileTypesMetafile.serverResponses.file16.es,
        fr: fileTypesMetafile.serverResponses.file16.fr,
      },
    });
  });

  test('POT file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file17-pot'],
      }),
    ).toStrictEqual({
      'file17-pot': {
        en: fileTypesMetafile.serverResponses.file17.en,
        es: fileTypesMetafile.serverResponses.file17.es,
        fr: fileTypesMetafile.serverResponses.file17.fr,
      },
    });
  });

  test('PO file', async (): Promise<void> => {
    expect(
      await cdn.fetch({
        files: ['file18-po'],
      }),
    ).toStrictEqual({
      'file18-po': {
        en: fileTypesMetafile.serverResponses.file18.en,
        es: fileTypesMetafile.serverResponses.file18.es,
        fr: fileTypesMetafile.serverResponses.file18.fr,
      },
    });
  });
});
