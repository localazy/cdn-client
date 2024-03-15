import i18next from "i18next";
import { CdnClient } from "@localazy/cdn-client";

const cdn = await CdnClient.create({
  metafile: "https://delivery.localazy.com/_a855374211039568660198b39c31/_e0.v2.json",
});

const data = await cdn.fetch({
  files: cdn.metafile.files[0],
});

const resources = Object.keys(data).reduce((acc, val) => {
  acc[val] = { translation: data[val] };
  return acc;
}, {});

await i18next.init({
  lng: cdn.metafile.baseLocale.locale,
  resources,
});

const output = cdn.metafile.locales().reduce((acc, val) => {
  acc += `${val.locale}: ${i18next.t("cdn_info", { lng: val.locale })}\n`;
  return acc;
}, "");

document.getElementById("app").innerHTML = `<pre>${output}</pre>`;
