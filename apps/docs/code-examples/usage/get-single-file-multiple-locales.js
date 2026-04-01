import { CdnClient } from '@localazy/cdn-client';

const cdn = await CdnClient.create({
  metafile: 'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json',
});

const result = await cdn.fetch({ // [!code focus]
  files: cdn.metafile.files[0], // [!code focus]
  locales: ['en', 'de'], // [!code focus]
}); // [!code focus]
