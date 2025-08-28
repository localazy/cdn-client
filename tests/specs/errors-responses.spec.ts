import type { CdnFile } from '@/main.js';
import { CdnClient } from '@/main.js';
import {
  completeMetafile,
  emptyMetafile,
  filesWithoutLocalesMetafile,
} from '@tests/fixtures/index.js';
import { describe, expect, test } from 'vitest';

describe('Test error responses', (): void => {
  test('Invalid metafile url', async (): Promise<void> => {
    completeMetafile.mockResponses();

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
    emptyMetafile.mockResponses();
    const cdn: CdnClient = await CdnClient.create({ metafile: emptyMetafile.url.metafile });

    expect(cdn.metafile.locales()).toStrictEqual([]);

    expect(cdn.metafile.files).toStrictEqual([]);

    expect(cdn.metafile.files.find((i: CdnFile): boolean => i.id === 'file01')).toBeUndefined();

    expect(cdn.metafile.files.filter((i: CdnFile): boolean => i.id === 'file01')).toStrictEqual([]);
  });

  test('Missing locales in metafile.json', async (): Promise<void> => {
    filesWithoutLocalesMetafile.mockResponses();
    const cdn: CdnClient = await CdnClient.create({
      metafile: filesWithoutLocalesMetafile.url.metafile,
    });

    expect(cdn.metafile.locales()).toStrictEqual([]);
  });

  test('Invalid cdn.fetch() params', async (): Promise<void> => {
    completeMetafile.mockResponses();
    const cdn: CdnClient = await CdnClient.create({ metafile: completeMetafile.url.metafile });

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: 123 });
    }).rejects.toThrowError(
      'Invalid param: "request.files" must be object, array, string or undefined.',
    );

    await expect(async (): Promise<void> => {
      // @ts-expect-error invalid param
      await cdn.fetch({ files: [123] });
    }).rejects.toThrowError(
      'Invalid param: array "request.files" must contain objects or strings.',
    );

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

    expect(await cdn.fetch({ locales: 'random-string' })).toStrictEqual({});

    expect(await cdn.fetch({ locales: ['random-string'] })).toStrictEqual({});
  });
});
