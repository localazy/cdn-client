# Live demo

[//]: # (::: sandbox {template=vanilla})

[//]: # ()
[//]: # (```js index.js)

[//]: # (import { CdnClient } from '@localazy/cdn-client';)

[//]: # ()
[//]: # (const fetch = async &#40;&#41; => {)

[//]: # (  const cdn = await CdnClient.create&#40;{)

[//]: # (    metafile: 'https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json')

[//]: # (  }&#41;;)

[//]: # ()
[//]: # (  const response = await cdn.files&#40;{ only: cdn.metafile.files.first&#40;&#41; }&#41;)

[//]: # (    .locales&#40;{ only: 'en' }&#41;)

[//]: # (    .fetch&#40;&#41;;  )

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (:::)
