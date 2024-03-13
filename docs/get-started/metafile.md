# Metafile

Metafile is a JSON file containing information about the project files and their translated versions.

Metafile is generated automatically when the Localazy project is published.

You can read more about the metafiles in the [Localazy CDN - Metafiles](https://localazy.com/docs/cdn/cdn-metafiles) documentation.

To use a CDN Client, you need to provide the [metafile URL](#metafile-url) of your project.

## Metafile URL

To get your project metafile URL use the following steps:

- select the project from your [Dashboard](https://localazy.com/my/dashboard)
- navigate to **Translation Delivery > CDN**
- click on the **Metafile URL** button

<zoom-img src="/metafile-url.png" alt="Metafile URL" />

The **CDN Meta File** dialog will appear and then:

- click on the **Copy** button to copy the metafile URL to your clipboard

<zoom-img src="/metafile-url-copy.png" alt="Metafile URL copy" />

## Example Metafile

In this documentation, we will use the following metafile to demonstrate the CDN Client functionalities.

https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json

<<< ../code-examples/metafile.json
