import { CdnClient } from '@/cdn/cdn-client';
import { MetafileContext } from '@/cdn/context/metafile-context';
import { IHttpAdapter } from '@/interfaces/i-http-adapter';

export type ContextOptions = {
  metafileContext: MetafileContext;
  cdn: CdnClient;
  client: IHttpAdapter;
};
