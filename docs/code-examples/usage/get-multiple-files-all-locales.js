import { CdnClient } from '@localazy/cdn-client';

const cdn = await CdnClient.create({
  metafile: 'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json',
});

const response = await cdn.fetch({ // [!code warning]
  files: cdn.metafile.files.list(), // [!code warning]
}); // [!code warning]
