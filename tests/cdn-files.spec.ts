import {
  describe, test, expect, beforeEach,
} from 'vitest';
import { completeMetafile } from '@tests/fixtures';
import { CdnResponse, CdnClient, CdnFile } from '@/main';

describe('cdn.fetch()', (): void => {
  let cdn: CdnClient;

  beforeEach(async (): Promise<void> => {
    completeMetafile.mockAxios();

    cdn = await CdnClient.create({
      metafile: completeMetafile.url.metafile,
    });
  });

  test('Fetch all files with all locales', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch();
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesAllLocales);
  });

  test('Fetch all files with all locales, exclude base locale', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      excludeBaseLocale: true,
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesAllLocalesExcludeBase);
  });

  test('Fetch all files with selected locales only', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      locales: ['en', 'ms_ID#Latn'],
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.allFilesSelectedLocales);
  });

  test('Fetch selected files with all locales', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: [cdn.metafile.files.first()],
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocales);

    const result2: CdnResponse = await cdn.fetch({
      files: ['file01'],
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocales);

    const result3: CdnResponse = await cdn.fetch({
      files: [cdn.metafile.files.first()],
    });
    expect(result3).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocales);

    const result4: CdnResponse = await cdn.fetch({
      files: ['file01'],
    });
    expect(result4).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocales);
  });

  test('Fetch selected files with all locales, exclude base locale', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: [cdn.metafile.files.first()],
      excludeBaseLocale: true,
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocalesExcludeBase);

    const result2: CdnResponse = await cdn.fetch({
      files: ['file01'],
      excludeBaseLocale: true,
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.selectedFilesAllLocalesExcludeBase);
  });

  test('Fetch selected files with selected locales only', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: cdn.metafile.files.filter(
        (metafileFile: CdnFile) => ['file01', 'file03'].includes(metafileFile.id),
      ),
      locales: ['en', 'ms_BN'],
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.selectedFilesSelectedLocales);

    const result2: CdnResponse = await cdn.fetch({
      files: ['file01', 'file03'],
      locales: ['en', 'ms_BN'],
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.selectedFilesSelectedLocales);
  });

  test('Fetch single file with all locales', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: cdn.metafile.files.first(),
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.singleFileAllLocales);

    const result2: CdnResponse = await cdn.fetch({
      files: 'file01',
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.singleFileAllLocales);
  });

  test('Fetch single file with all locales, exclude base locale', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: cdn.metafile.files.first(),
      excludeBaseLocale: true,
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.singleFileAllLocalesExcludeBase);

    const result2: CdnResponse = await cdn.fetch({
      files: 'file01',
      excludeBaseLocale: true,
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.singleFileAllLocalesExcludeBase);
  });

  test('Fetch single file with selected locales only', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: cdn.metafile.files.first(),
      locales: ['en', 'ms'],
    });
    expect(result).toStrictEqual(completeMetafile.cdnResponses.singleFileSelectedLocales);

    const result2: CdnResponse = await cdn.fetch({
      files: 'file01',
      locales: ['en', 'ms'],
    });
    expect(result2).toStrictEqual(completeMetafile.cdnResponses.singleFileSelectedLocales);
  });

  test('Fetch single file with single locale', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      files: cdn.metafile.files.first(),
      locales: 'en',
    });
    expect(result).toStrictEqual(completeMetafile.serverResponses.file01.en);
  });

  test('Ignore non-existing locales', async (): Promise<void> => {
    const result: CdnResponse = await cdn.fetch({
      locales: ['jp', 'es', 'fi'],
    });
    expect(result).toStrictEqual({});
  });
});
