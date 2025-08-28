import type { CdnClient } from '@/cdn/cdn-client.js';
import type { MetafileContext } from '@/cdn/context/metafile-context.js';
import type { IHttpAdapter } from '@/interfaces/i-http-adapter.js';

export type ContextOptions = {
  metafileContext: MetafileContext;
  cdn: CdnClient;
  client: IHttpAdapter;
};
