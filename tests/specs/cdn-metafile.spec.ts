import { CdnClient, CdnLocale, CdnResponse } from '@/main';
import { completeMetafile, completeMetafileV2, singleFileMetafile } from '@tests/fixtures';
import { beforeEach, describe, expect, test } from 'vitest';

let cdn: CdnClient;

describe('cdn.metafile', (): void => {
  beforeEach(async (): Promise<void> => {
    completeMetafile.mockResponses();

    cdn = await CdnClient.create({
      metafile: completeMetafile.url.metafile,
    });
  });

  test('Get metafile URL', (): void => {
    expect(cdn.metafile.url).toBe(completeMetafile.url.metafile);
  });

  test('Get project URL', (): void => {
    expect(cdn.metafile.projectUrl).toBe(completeMetafile.serverResponses.metafile.projectUrl);
  });

  test('Refresh metafile, flush cache and fetch all files', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch();
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesAllLocales);

    completeMetafileV2.mockResponses();
    await cdn.metafile.refresh();
    cdn.cache.flush();

    const result2: CdnResponse = await cdn.fetch();
    expect(result2).toStrictEqual(completeMetafileV2.cdnResponses.allFilesAllLocales);
  });

  test('Refresh metafile and fetch only files with changed timestamp', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch();
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesAllLocales);

    completeMetafileV2.mockResponses();
    await cdn.metafile.refresh();

    const result2: CdnResponse = await cdn.fetch();
    expect(result2).toStrictEqual({
      file01: {
        en: completeMetafileV2.serverResponses.file01.en,
        ms_BN: completeMetafileV2.serverResponses.file01.msBn,
        'ms#Arab': completeMetafile.serverResponses.file01.msArab,
        'ms_ID#Latn': completeMetafile.serverResponses.file01.msIdLatn,
      },
      file02: {
        en: completeMetafile.serverResponses.file02.en,
        ms_BN: completeMetafile.serverResponses.file02.msBn,
        'ms#Arab': completeMetafile.serverResponses.file02.msArab,
        'ms_ID#Latn': completeMetafile.serverResponses.file02.msIdLatn,
      },
      file03: {
        en: completeMetafile.serverResponses.file03.en,
        ms_BN: completeMetafile.serverResponses.file03.msBn,
        'ms#Arab': completeMetafile.serverResponses.file03.msArab,
        'ms_ID#Latn': completeMetafile.serverResponses.file03.msIdLatn,
      },
    });
  });

  test('Switch metafile', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch();
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesAllLocales);

    singleFileMetafile.mockResponses();
    await cdn.metafile.switch({ metafile: singleFileMetafile.url.metafile });

    const result2: CdnResponse = await cdn.fetch();
    expect(result2).toStrictEqual(singleFileMetafile.cdnResponses.allFilesAllLocales);
  });

  test('Get base locale', (): void => {
    expect(cdn.metafile.baseLocale).toStrictEqual(completeMetafile.cdnResponses.baseLocale);
  });

  test('Get all locales', (): void => {
    const result: CdnLocale[] = cdn.metafile.locales();
    expect(result).toStrictEqual(completeMetafile.cdnResponses.locales);

    const result2: CdnLocale[] = cdn.metafile.locales({ excludeBaseLocale: true });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.localesExceptBaseLocale);
  });
});
