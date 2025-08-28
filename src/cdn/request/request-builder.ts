import { Context } from '@/cdn/context/context';
import { MetafileFile } from '@/cdn/metafile/metafile-file';
import { MetafileLocale } from '@/cdn/metafile/metafile-locale';
import { LocalesMap } from '@/cdn/request/locales-map';
import { Request } from '@/cdn/request/request';
import { isArray, isPlainObject, isString, isUndefined } from '@/cdn/utils';
import { IRequestBuilder } from '@/interfaces/i-request-builder';
import { CdnFile } from '@/types/cdn-file';

export class RequestBuilder implements IRequestBuilder {
  protected context: Context;

  protected request: Request;

  constructor(context: Context) {
    this.context = context;
    this.request = new Request(this.context);
  }

  public addFiles(files?: (CdnFile | string)[] | CdnFile | string): this {
    if (!(isPlainObject(files) || isString(files) || isUndefined(files) || isArray(files))) {
      throw new Error('Invalid param: "request.files" must be object, array, string or undefined.');
    }

    if (isArray(files)) {
      files.forEach((i: CdnFile | string): void => {
        if (!(isPlainObject(i) || isString(i))) {
          throw new Error('Invalid param: array "request.files" must contain objects or strings.');
        }
      });
    }

    if (isString(files)) {
      this.request.hasSingleFileResponse = true;

      const file: MetafileFile | undefined = this.context.metafile.data.files.find(
        (i: MetafileFile): boolean => i.id === files,
      );

      if (!(file instanceof MetafileFile)) {
        throw new Error(`File not found: "${files}".`);
      }

      this.request.files = [file];
    } else if (isUndefined(files)) {
      this.request.files = [...this.context.metafile.data.files];
    } else if (isArray(files)) {
      this.request.files = files.map((file: CdnFile | string): MetafileFile => {
        let metafileFile: MetafileFile;

        if (isString(file)) {
          const foundFile: MetafileFile | undefined = this.context.metafile.data.files.find(
            (i: MetafileFile): boolean => i.id === file,
          );

          if (isUndefined(foundFile)) {
            throw new Error(`File not found: "${file}".`);
          }

          metafileFile = foundFile;
        } else {
          const foundFile: MetafileFile | undefined = this.context.metafile.data.files.find(
            (i: MetafileFile): boolean => i.id === file.id,
          );

          if (isUndefined(foundFile)) {
            throw new Error(`File not found: "${file.id}".`);
          }

          metafileFile = foundFile;
        }

        return metafileFile;
      });
    } else if (isPlainObject(files)) {
      this.request.hasSingleFileResponse = true;

      const foundFile: MetafileFile | undefined = this.context.metafile.data.files.find(
        (i: MetafileFile): boolean => i.id === files.id,
      );

      if (isUndefined(foundFile)) {
        throw new Error(`File not found: "${files.id}".`);
      }

      this.request.files = [foundFile];
    }

    return this;
  }

  public addLocales(locales?: string[] | string, excludeBaseLocale?: boolean): this {
    if (!(isString(locales) || isUndefined(locales) || isArray(locales))) {
      throw new Error('Invalid param: "request.locales" must be array, string or undefined.');
    }

    if (isArray(locales)) {
      locales.forEach((i: MetafileFile | string): void => {
        if (!isString(i)) {
          throw new Error('Invalid param: array "request.locales" must contain strings.');
        }
      });
    }

    if (isString(locales)) {
      this.request.hasSingleLocaleResponse = true;
      this.request.files.reduce((acc: LocalesMap, cur: MetafileFile) => {
        acc.data[cur.id] = cur.locales.filter(
          (metafileLocale: MetafileLocale): boolean => metafileLocale.locale === locales,
        );

        return acc;
      }, this.request.localesMap);
    } else if (isUndefined(locales)) {
      this.request.files.reduce((acc: LocalesMap, cur: MetafileFile) => {
        acc.data[cur.id] = excludeBaseLocale
          ? cur.locales.filter(
              (metafileLocale: MetafileLocale): boolean => !metafileLocale.isBaseLocale,
            )
          : cur.locales;

        return acc;
      }, this.request.localesMap);
    } else if (isArray(locales)) {
      this.request.files.reduce((acc: LocalesMap, cur: MetafileFile) => {
        acc.data[cur.id] = cur.locales.filter((metafileLocale: MetafileLocale) =>
          locales.includes(metafileLocale.locale),
        );

        return acc;
      }, this.request.localesMap);
    }

    return this;
  }

  public getCdnRequest(): Request {
    const result: Request = this.request;
    this.request = new Request(this.context);
    return result;
  }
}
