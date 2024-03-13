import { MetafileData } from '@/cdn/metafile/metafile-data';
import { IMetafile } from '@/interfaces/i-metafile';
import { MetafileParams } from '@/cdn/metafile/metafile-params';
import { CdnClientOptions } from '@/types/cdn-client-options';

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
