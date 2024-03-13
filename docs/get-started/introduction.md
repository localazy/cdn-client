# Introduction

The **Localazy CDN Client** is a Node.js library that offers functionalities to fetch translation strings from JSON files published on
the [Localazy CDN](https://localazy.com/docs/cdn/cdn-introduction).

Content can be fetched from JSON file as object or as plain text for other file types.

## How it works

<zoom-img src="/localazy-cdn-client.svg" alt="Localazy CDN Client" />

When translators add translations to your project, they are automatically published to the [Localazy CDN](https://localazy.com/docs/cdn/cdn-introduction).

Every published project has its own [metafile](metafile.md) that contains information about the project files and their translated versions.

Under the hood, the CDN Client fetches the [metafile](metafile.md) and uses it to get the urls of the files and their translations.

You simply select files and languages you want to fetch and the CDN Client does the rest.
