---
outline: [ 2, 3 ]
---

# Get content

Once you have initialized the [CdnClient](../reference/client-api.md#constructor), you can get content of one or multiple files that are present in
the [metafile](../get-started/metafile.md).

## Selecting data

You can select the data you want by specifying the `files` and the `locales` parameters in the [`fetch()`](../reference/client-api.md#fetch-options) function.

As the `files` parameter, you can pass single or multiple [`CdnFile`](../reference/types.md#cdnfile) objects, which are returned by the metafile content
functions [`metafile.files.list()`](../reference/client-api.md#metafile-files-list), [`metafile.files.filter()`](../reference/client-api.md#metafile-files-filter-options), [`metafile.files.find()`](../reference/client-api.md#metafile-files-find-options), [`metafile.files.first()`](../reference/client-api.md#metafile-files-first).
Alternatively, you can use the file id or an array of file ids. If none is provided, all files are fetched.

As the `locales` parameter, you can pass a locale code or an array of locale codes. If none is provided, all locales are fetched.

## Single file

In following examples, a single file returned from [`metafile.files.first()`](../reference/client-api.md#metafile-files-first) is used to demonstrate the usage of the [`fetch()`](../reference/client-api.md#fetch-options) function.

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
