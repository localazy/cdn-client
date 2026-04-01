import { CdnClient } from '@/main.js';
import { completeMetafile } from '@tests/fixtures/index.js';
import { beforeEach, describe, expectTypeOf, test } from 'vitest';

let cdn: CdnClient;

describe('cdn', (): void => {
  beforeEach(async (): Promise<void> => {
    completeMetafile.mockResponses();

    cdn = await CdnClient.create({
      metafile: completeMetafile.url.metafile,
    });
  });

  test('Verify methods', (): void => {
    expectTypeOf(cdn.metafile.url).toBeString();
    expectTypeOf(cdn.metafile.projectUrl).toBeString();
    expectTypeOf(cdn.metafile.refresh).toBeFunction();
    expectTypeOf(cdn.metafile.switch).toBeFunction();
    expectTypeOf(cdn.metafile.baseLocale).toBeObject();
    expectTypeOf(cdn.metafile.locales).toBeFunction();
    expectTypeOf(cdn.metafile.files).toBeArray();
    expectTypeOf(cdn.fetch).toBeFunction();
    expectTypeOf(cdn.cache.flush).toBeFunction();
  });
});
