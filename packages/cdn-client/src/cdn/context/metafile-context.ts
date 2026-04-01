import { MetafileData } from '@/cdn/metafile/metafile-data.js';
import { MetafileParams } from '@/cdn/metafile/metafile-params.js';
import type { IMetafile } from '@/interfaces/i-metafile.js';
import type { CdnClientOptions } from '@/types/cdn-client-options.js';

export class MetafileContext {
  public params: MetafileParams;

  public parsedData: IMetafile | null;

  public data: MetafileData;

  constructor(options: CdnClientOptions) {
    this.params = new MetafileParams(options.metafile);
    this.parsedData = null;
    this.data = MetafileData.createEmpty(this.params);
  }

  public setMetafile(metafile: IMetafile): void {
    this.parsedData = metafile;

    this.data = new MetafileData(metafile, this.params);
  }
}
