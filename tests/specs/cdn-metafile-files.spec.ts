import { CdnClient, CdnFile } from '@/main';
import { completeMetafile } from '@tests/fixtures';
import { beforeEach, describe, expectTypeOf, test } from 'vitest';

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

    expectTypeOf(result).toMatchTypeOf<CdnFile[]>();
  });

  test('List first metafile file', (): void => {
    const result: CdnFile = cdn.metafile.files[0];

    expectTypeOf(result).toMatchTypeOf<CdnFile>();
  });

  test('Find metafile file', (): void => {
    const result: CdnFile | undefined = cdn.metafile.files.find(
      (metafileFile: CdnFile): boolean => metafileFile.id === 'file01',
    );

    expectTypeOf(result).toMatchTypeOf<CdnFile | undefined>();
  });

  test('Filter metafile files', (): void => {
    const result: CdnFile[] = cdn.metafile.files.filter((metafileFile: CdnFile) =>
      ['file01', 'file03'].includes(metafileFile.id),
    );

    expectTypeOf(result).toMatchTypeOf<CdnFile[]>();
  });
});
