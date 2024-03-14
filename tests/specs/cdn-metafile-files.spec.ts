import {
  describe, test, expectTypeOf, beforeEach,
} from 'vitest';
import { completeMetafile } from '@tests/fixtures';
import { CdnClient, CdnFile } from '@/main';

let cdn: CdnClient;

describe('cdn.metafile.files', (): void => {
  beforeEach(async (): Promise<void> => {
    completeMetafile.mockResponses();

    cdn = await CdnClient.create({
      metafile: completeMetafile.url.metafile,
    });
  });

  test('List all metafile files', (): void => {
    const result: CdnFile[] = cdn.metafile.files.list();

    expectTypeOf(result).toMatchTypeOf<CdnFile[]>();
  });

  test('List first metafile file', (): void => {
    const result: CdnFile = cdn.metafile.files.first();

    expectTypeOf(result).toMatchTypeOf<CdnFile>();
  });

  test('Find metafile file', (): void => {
    const result: CdnFile | undefined = cdn.metafile.files.find({ id: 'file01' });

    expectTypeOf(result).toMatchTypeOf<CdnFile | undefined>();
  });

  test('Filter metafile files', (): void => {
    const result: CdnFile[] = cdn.metafile.files.filter(
      (metafileFile: CdnFile) => ['file01', 'file03'].includes(metafileFile.id),
    );

    expectTypeOf(result).toMatchTypeOf<CdnFile[]>();
  });
});
