# i18next

## Install

```shell
npm install @localazy/cdn-client // [!=npm auto]
```

## Usage

```javascript
import i18next from 'i18next';
import { CdnClient } from '@localazy/cdn-client';

class LocalazyI18next {
  constructor(cdn, file) {
    this.cdn = cdn;
    this.file = file;
    this.type = 'backend';
  }

  read(language, namespace, callback) {
    this.cdn.fetch({ files: this.file, locales: language })
        .then((value) => callback(null, value))
        .catch((e) => callback(e, null));
  }
}

const cdn = new CdnClient({ metafile: 'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json' });
const file = cdn.metafile.files[0];
const cdnPlugin = new LocalazyI18next(cdn, file);

i18next
  .use(cdnPlugin)
  .init(
    {
      lng: 'en',
      fallbackLng: false
    },
    () => {
      document.getElementById('output').innerHTML = i18next.t('cdn_info');
    }
  );
```
