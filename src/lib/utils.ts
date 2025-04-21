import _ from 'lodash';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSearchParams(
  obj: { [key: string]: string | Array<string> | number | Array<number> | undefined } = {},
  base?: string,
) {
  const result = _.reduce(
    obj,
    (searchParams, value, key) => {
      if (value instanceof Array) {
        searchParams.delete(key);
        _.forEach(value, item => searchParams.append(key, String(item)));
      } else if (value !== undefined && value !== '') {
        searchParams.set(key, value.toString());
      } else {
        searchParams.delete(key);
      }
      return searchParams;
    },
    new URLSearchParams(base),
  ).toString();

  return result === '' ? '' : `?${result}`;
}

export function createFormData(obj: { [key: string]: string | number | Array<string> | Array<number> | undefined } = {}) {
  return _.reduce(
    obj,
    (form, value, key) => {
      if (value !== null && value !== undefined && value !== '') {
        if (value instanceof Array) {
          _.forEach(value, item => form.append(key, String(item)));
        } else {
          form.append(key, value.toString());
        }
      } else {
        form.delete(key);
      }
      return form;
    },
    new FormData(),
  );
}
