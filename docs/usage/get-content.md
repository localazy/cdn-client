---
outline: [ 2, 3 ]
---

# Get content

Once you have initialized the [CdnClient](../reference/client-api.md#constructor), you can get content of one or multiple files that are present in
the [metafile](../get-started/metafile.md).

## Selecting data

You can select the data you want by specifying the `files` and the `locales` parameters in the [`fetch()`](../reference/client-api.md#fetch-options) function.

Optional parameter `options.files` can be a single [`CdnFile`](../reference/types.md#cdnfile) object or an array of [`CdnFile`](../reference/types.md#cdnfile)
objects. [`CdnFile`](../reference/types.md#cdnfile) objects are returned by the [`metafile.files`](../reference/client-api.md#metafile-files) accessor. Alternatively, it can be a single file ID or an array of file
IDs. If not provided, all files are fetched.

Optional parameter `options.locales` can be a single locale or an array of locales. If not provided, all locales are fetched.

## Single file

In following examples, a single file returned from [`metafile.files[0]`](../reference/client-api.md#metafile-files) is used to demonstrate the usage of the [`fetch()`](../reference/client-api.md#fetch-options)
function.

### Get single locale

Get the locale keys for single file and single locale.

<<< ../code-examples/usage/get-single-file-single-locale.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-single-file-single-locale.js
</details>

### Get multiple locales

Get the locale keys for single file and multiple locales.

<<< ../code-examples/usage/get-single-file-multiple-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-single-file-multiple-locales.js
</details>

### Get all locales

Get the locale keys for single file and all locales.

<<< ../code-examples/usage/get-single-file-all-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-single-file-all-locales.js
</details>

## Multiple files

In following examples, all files returned from [`metafile.files`](../reference/client-api.md#metafile-files) are used to demonstrate the usage of the [`fetch()`](../reference/client-api.md#fetch-options) function.

### Get single locale

Get the locale keys for multiple files and single locale.

<<< ../code-examples/usage/get-multiple-files-single-locale.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-multiple-files-single-locale.js
</details>

### Get multiple locales

Get the locale keys for multiple files and multiple locales.

<<< ../code-examples/usage/get-multiple-files-multiple-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-multiple-files-multiple-locales.js
</details>

### Get all locales

Get the locale keys for multiple files and all locales.

<<< ../code-examples/usage/get-multiple-files-all-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-multiple-files-all-locales.js
</details>

## All files content

### Get all locales

Get the locale keys for all files and all locales.

<<< ../code-examples/usage/get-all-files-all-locales.js

<details><summary><i><samp>example result</samp></i></summary>

<<< ../code-examples/usage/results/get-all-files-all-locales.js
</details>
