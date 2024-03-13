import {
  describe, test, expect,
} from 'vitest';
import { completeMetafile, emptyMetafile, filesWithoutLocalesMetafile } from '@tests/fixtures';
import { CdnClient, CdnFile } from '@/main';

describe('Test error responses', (): void => {
  test('Invalid metafile url', async (): Promise<void> => {
    completeMetafile.mockAxios();

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await CdnClient.create();
    }).rejects.toThrowError('Invalid param: missing required "options" parameter.');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await CdnClient.create({ metafile: false });
    }).rejects.toThrowError('Invalid param: "options.metafile" must be string.');

    await expect(async (): Promise<void> => {
      await CdnClient.create({ metafile: 'random-string' });
    }).rejects.toThrowError('Invalid param: "options.metafile" cannot be parsed as url.');

    await expect(async (): Promise<void> => {
      await CdnClient.create({ metafile: 'https://wrong-link' });
    }).rejects.toThrowError('Invalid param: "options.metafile" contains invalid metafile url.');
  });

  test('Missing files in metafile.json', async (): Promise<void> => {
    emptyMetafile.mockAxios();
    const cdn: CdnClient = await CdnClient.create({ metafile: emptyMetafile.url.metafile });

    expect((): void => {
      cdn.metafile.files.first();
    }).toThrowError('File is missing in downloaded metafile.');

    expect(cdn.metafile.locales()).toStrictEqual([]);

    expect(cdn.metafile.files.list()).toStrictEqual([]);

    expect(cdn.metafile.files.find({ id: 'file01' })).toBeUndefined();

    expect(cdn.metafile.files.find((i: CdnFile): boolean => i.id === 'file01')).toBeUndefined();

    expect(cdn.metafile.files.filter({ id: 'file01' })).toStrictEqual([]);

    expect(cdn.metafile.files.filter((i: CdnFile): boolean => i.id === 'file01')).toStrictEqual([]);
  });

  test('Missing locales in metafile.json', async (): Promise<void> => {
    filesWithoutLocalesMetafile.mockAxios();
    const cdn: CdnClient = await CdnClient.create({ metafile: filesWithoutLocalesMetafile.url.metafile });

    expect(cdn.metafile.locales()).toStrictEqual([]);
  });

  test('Invalid cdn.metafile.files.find() parameters', async (): Promise<void> => {
    emptyMetafile.mockAxios();
    const cdn: CdnClient = await CdnClient.create({ metafile: emptyMetafile.url.metafile });

    expect((): void => {
      // @ts-expect-error invalid param
      cdn.metafile.files.find();
    }).toThrowError('Invalid param: missing required "options" parameter.');

    expect((): void => {
      // @ts-expect-error invalid param
      cdn.metafile.files.find([]);
    }).toThrowError('Invalid param: "options" must be function or object.');
  });

  test('Invalid cdn.metafile.files.filter() parameters', async (): Promise<void> => {
    emptyMetafile.mockAxios();
    const cdn: CdnClient = await CdnClient.create({ metafile: emptyMetafile.url.metafile });

    expect((): void => {
      // @ts-expect-error invalid param
      cdn.metafile.files.filter();
    }).toThrowError('Invalid param: missing required "options" parameter.');

    expect((): void => {
      // @ts-expect-error invalid param
      cdn.metafile.files.filter([]);
    }).toThrowError('Invalid param: "options" must be function or object.');
  });

  test('Invalid cdn.fetch() params', async (): Promise<void> => {
    completeMetafile.mockAxios();
    const cdn: CdnClient = await CdnClient.create({ metafile: completeMetafile.url.metafile });

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: 123 });
    }).rejects.toThrowError('Invalid param: "request.files" must be object, array, string or undefined.');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: [123] });
    }).rejects.toThrowError('Invalid param: array "request.files" must contain objects or strings.');

    await expect(async (): Promise<void> => {
      await cdn.fetch({ files: 'random-string' });
    }).rejects.toThrowError('File not found: "random-string".');

    await expect(async (): Promise<void> => {
      await cdn.fetch({ files: ['random-string'] });
    }).rejects.toThrowError('File not found: "random-string".');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: { id: 'random-string' } });
    }).rejects.toThrowError('File not found: "random-string".');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: [{ id: 'random-string' }] });
    }).rejects.toThrowError('File not found: "random-string".');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ locales: 123 });
    }).rejects.toThrowError('Invalid param: "request.locales" must be array, string or undefined.');

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ locales: [123] });
    }).rejects.toThrowError('Invalid param: array "request.locales" must contain strings.');

    expect(
      await cdn.fetch({ locales: 'random-string' }),
    ).toStrictEqual({});

    expect(
      await cdn.fetch({ locales: ['random-string'] }),
    ).toStrictEqual({});
  });
});
