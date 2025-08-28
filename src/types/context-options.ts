import type { CdnClient } from '@/cdn/cdn-client';
import type { MetafileContext } from '@/cdn/context/metafile-context';
import type { IHttpAdapter } from '@/interfaces/i-http-adapter';

export type ContextOptions = {
  metafileContext: MetafileContext;
  cdn: CdnClient;
  client: IHttpAdapter;
};
