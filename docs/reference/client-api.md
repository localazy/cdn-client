---
outline: [ 2, 3 ]
---

# Client API

## Constructor

---

### create(options, config?) <Badge type="info" text="async function" />

Fetch the metafile and create a new CDN client instance.

<<< ../code-examples/reference/create.js

#### Parameters

| Name                                         | Type                                                            | Description           |
|----------------------------------------------|-----------------------------------------------------------------|:----------------------|
| options                                      | [`CdnClientOptions`](types.md#cdnclientoptions)                 | CDN client options.   |
| config <Badge type="info" text="optional" /> | [`CreateAxiosDefaults`](https://axios-http.com/docs/req_config) | Axios request config. |

#### Returns

| Type                                                                                           | Description          |
|:-----------------------------------------------------------------------------------------------|:---------------------|
| Promise<[`CdnClient`](https://github.com/localazy/cdn-client/blob/main/src/cdn/cdn-client.ts)> | CDN client instance. |

> [!NOTE]
> Metafile is fetched only once and then cached. If you want to refresh the metafile, use the [`metafile.refresh()`](#metafile-refresh-config) function.

## Locales

---

### metafile.locales(options?) <Badge type="info" text="function" />

Get all project locales.

<<< ../code-examples/reference/metafile-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-locales.js
</details>

#### Parameters

| Name                                          | Type                                              | Description      |
|-----------------------------------------------|---------------------------------------------------|:-----------------|
| options <Badge type="info" text="optional" /> | [`CdnLocalesOptions`](types.md#cdnlocalesoptions) | Locales options. |

#### Returns

| Type                                | Description      | 
|-------------------------------------|:-----------------|
| [`CdnLocale[]`](types.md#cdnlocale) | Project locales. |

---

### metafile.baseLocale <Badge type="info" text="accessor" />

Get the base locale of the project.

<<< ../code-examples/reference/metafile-base-locale.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-base-locale.js
</details>

#### Returns

| Type                              | Description                 | 
|-----------------------------------|:----------------------------|
| [`CdnLocale`](types.md#cdnlocale) | Base locale of the project. |

## Files content

---

### fetch(options?) <Badge type="info" text="async function" />

Get the content of the project files.

Optional parameter `options.files` can be a single [`CdnFile`](types.md#cdnfile) object or an array of [`CdnFile`](types.md#cdnfile) objects. [`CdnFile`](types.md#cdnfile) objects
are returned by the metafile functions [`metafile.files.list()`](#metafile-files-list), [`metafile.files.filter()`](#metafile-files-filter-options),
[`metafile.files.find()`](#metafile-files-find-options), [`metafile.files.first()`](#metafile-files-first).
Alternatively, it can be a single file ID or an array of file IDs. If not provided, all files are fetched.

Optional parameter `options.locales` can be a single locale or an array of locales. If not provided, all locales are fetched.

<<< ../code-examples/reference/fetch.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/fetch.js
</details>

#### Parameters

| Name                                          | Type                                          | Description                                           |
|-----------------------------------------------|-----------------------------------------------|:------------------------------------------------------|
| options <Badge type="info" text="optional" /> | [`CdnFetchOptions`](types.md#cdnfetchoptions) | Options object containing selected files and locales. |

#### Returns

| Type                                           | Description                                                      | 
|------------------------------------------------|:-----------------------------------------------------------------|
| Promise<[`CdnResponse`](types.md#cdnresponse)> | Object containing the content of the selected files and locales. |

## Metafile content

---

### metafile.files.list() <Badge type="info" text="function" />

Get all project files.

<<< ../code-examples/reference/metafile-files-list.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-files-list.js
</details>

#### Returns

| Type                            | Description        | 
|---------------------------------|:-------------------|
| [`CdnFile[]`](types.md#cdnfile) | All project files. |

---

### metafile.files.filter(options) <Badge type="info" text="function" />

Filter project files.

Parameter `options` can be an object with file properties to filter by or a function that returns a boolean value. Check
the [`CdnFilesSearchOptions`](types.md#cdnfilessearchoptions) type for more details.

<<< ../code-examples/reference/metafile-files-filter.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-files-filter.js
</details>

#### Parameters

| Name    | Type                                                      | Description           |
|---------|-----------------------------------------------------------|:----------------------|
| options | [`CdnFilesSearchOptions`](types.md#cdnfilessearchoptions) | Files filter options. |

#### Returns

| Type                            | Description    | 
|---------------------------------|:---------------|
| [`CdnFile[]`](types.md#cdnfile) | Project files. |

---

### metafile.files.find(options) <Badge type="info" text="function" />

Get a project file.

Parameter `options` can be an object with file properties to find by or a function that returns a boolean value. Check the
[`CdnFilesSearchOptions`](types.md#cdnfilessearchoptions) type for more details.

<<< ../code-examples/reference/metafile-files-find.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-files-find.js
</details>

#### Parameters

| Name    | Type                                                      | Description        |
|---------|-----------------------------------------------------------|:-------------------|
| options | [`CdnFilesSearchOptions`](types.md#cdnfilessearchoptions) | Find file options. |

#### Returns

| Type                                         | Description                  | 
|----------------------------------------------|:-----------------------------|
| [`CdnFile`](types.md#cdnfile) \| `undefined` | Project file or `undefined`. |
 
---

### metafile.files.first() <Badge type="info" text="function" />

Get first project file.

<<< ../code-examples/reference/metafile-files-first.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-files-first.js
</details>

#### Returns

| Type                          | Description         | 
|-------------------------------|:--------------------|
| [`CdnFile`](types.md#cdnfile) | First project file. |

---

### metafile.url <Badge type="info" text="accessor" />

Get URL of current metafile.

<<< ../code-examples/reference/metafile-url.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-url.js
</details>

#### Returns

| Type     | Description   | 
|----------|:--------------|
| `string` | Metafile URL. |

---

### metafile.projectUrl <Badge type="info" text="accessor" />

Get URL of the project to which the metafile belongs.

<<< ../code-examples/reference/metafile-project-url.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/reference/results/metafile-project-url.js
</details>

#### Returns

| Type     | Description  | 
|----------|:-------------|
| `string` | Project URL. |

---

### metafile.refresh(config?) <Badge type="info" text="async function" />

Refresh the [metafile](../get-started/metafile.md).

<<< ../code-examples/reference/metafile-refresh.js

#### Parameters

| Name                                         | Type                                                            | Description           |
|----------------------------------------------|-----------------------------------------------------------------|:----------------------|
| config <Badge type="info" text="optional" /> | [`CreateAxiosDefaults`](https://axios-http.com/docs/req_config) | Axios request config. |

#### Returns

| Type            |
|:----------------|
| Promise<`void`> |

---

### metafile.switch(options, config?) <Badge type="info" text="async function" />

Switch to a different [metafile](../get-started/metafile.md).

<<< ../code-examples/reference/metafile-switch.js

#### Parameters

| Name                                         | Type                                                            | Description           |
|----------------------------------------------|-----------------------------------------------------------------|:----------------------|
| options                                      | [`CdnClientOptions`](types.md#cdnclientoptions)                 | CDN client options.   |
| config <Badge type="info" text="optional" /> | [`CreateAxiosDefaults`](https://axios-http.com/docs/req_config) | Axios request config. |

| Type            |
|:----------------|
| Promise<`void`> |
