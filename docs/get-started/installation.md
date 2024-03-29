# Installation

You can install the CDN Client as a Node.js module or import it directly in the browser.

## Node.js module

Use your favourite package manager to install the CDN Client.

```shell
npm install @localazy/cdn-client // [!=npm auto]
```

CDN Client is written in TypeScript and provides type definitions. You can import it using TypeScript, ESM, or CommonJS syntax.

:::tabs

== TS

```typescript
import { CdnClient } from '@localazy/cdn-client';
```

== ESM

```javascript
import { CdnClient } from '@localazy/cdn-client';
```

== CommonJS

```javascript
const { CdnClient } = require('@localazy/cdn-client');
```

:::

## Browser

You can import the CDN Client directly in the browser using a script tag. Choose between ESM or UMD bundle.

:::tabs

== ESM <script type="module">

```html
<script type="module">
  import { CdnClient } from 'https://cdn.jsdelivr.net/npm/@localazy/cdn-client/+esm';
</script>
```

== UMD <script>

```html
<script src="https://cdn.jsdelivr.net/npm/@localazy/cdn-client/dist/localazy-cdn-client.min.js"></script>
<script>
  const { CdnClient } = LocalazyCDN;
</script>
```

:::
