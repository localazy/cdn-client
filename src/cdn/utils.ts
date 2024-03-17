export const isString = (value: unknown): value is string => typeof value === 'string';

export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';

export const isArray = <T>(value: unknown): value is T[] => Array.isArray(value);

export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  Object.prototype.toString.call(value) === '[object Object]';

export const uniq = <T>(array: T[]): T[] => [...new Set(array)];

export const uniqBy = <T>(array: T[], predicate: (item: T) => string): T[] => {
  const seen: Record<string, boolean> = {};

  return array.filter((item: T): boolean => {
    const key: string = predicate(item);

    if (!Object.hasOwn(seen, key)) {
      seen[key] = true;

      return true;
    }

    return false;
  });
};
