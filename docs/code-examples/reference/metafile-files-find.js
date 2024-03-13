import { CdnClient } from '@localazy/cdn-client';

const cdn = await CdnClient.create({
  metafile: 'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json',
});

const file = cdn.metafile.files.find({ // [!code warning]
  id: 'dfe5b84c1598c8c56b6f1a11efcd483bb3f417ea', // [!code warning]
}); // [!code warning]
