import type { CdnFile } from '@/main';
import { CdnClient } from '@/main';
import { completeMetafile } from '@tests/fixtures';
import { beforeEach, describe, expect, test } from 'vitest';

let cdn: CdnClient;

describe('cdn.metafile.files', (): void => {
  beforeEach(async (): Promise<void> => {
    completeMetafile.mockResponses();

    cdn = await CdnClient.create({
      metafile: completeMetafile.url.metafile,
    });
  });

  test('List all metafile files', (): void => {
    const result: CdnFile[] = cdn.metafile.files;

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Object);
  });

  test('List first metafile file', (): void => {
    const result: CdnFile | undefined = cdn.metafile.files[0];

    expect(result).toBeDefined();
    expect(result).toHaveProperty('id');
  });

  test('Find metafile file', (): void => {
    const result: CdnFile | undefined = cdn.metafile.files.find(
      (metafileFile: CdnFile): boolean => metafileFile.id === 'file01',
    );

    expect(result).toBeDefined();
    expect(result).toHaveProperty('id');
  });

  test('Filter metafile files', (): void => {
    const result: CdnFile[] = cdn.metafile.files.filter((metafileFile: CdnFile) =>
      ['file01', 'file03'].includes(metafileFile.id),
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
  });
});
