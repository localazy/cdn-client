import { CdnClient } from '@localazy/cdn-client';

const cdn = await CdnClient.create({
  metafile:
    'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json',
});

const result = await cdn.fetch({
  files: cdn.metafile.files,
  locales: ['en', 'de'],
});

const html = `<pre>${JSON.stringify(result, undefined, 2)}</pre>`;

document.getElementById('app').innerHTML = html;
