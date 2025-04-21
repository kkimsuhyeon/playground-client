import axios, { AxiosRequestConfig, Method } from 'axios';

import { API_URL } from '@/constants/url';

import { createFormData, createSearchParams } from '@/lib/utils';

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export interface CreateRequestOption {
  method: Method;
  endpoint: string;
  body?: { [key: string]: string | number | Array<string> | Array<number> | undefined };
  params?: { [key: string]: string | number | Array<string> | Array<number> | undefined };
  headers?: AxiosRequestConfig['headers'];
  responseType?: AxiosRequestConfig['responseType'];
}

export interface RequestFunction<Argument = void, Response = void> {
  (argument: Argument): Promise<Response>;
}

export const createRequest = async <T = void>({
  method,
  endpoint,
  headers = undefined,
  body = undefined,
  params = undefined,
  responseType = undefined,
}: CreateRequestOption): Promise<T> => {
  try {
    const { data } = await instance({
      method: method,
      url: `${endpoint}${createSearchParams(params)}`,
      data: createFormData(body),
      headers,
      responseType,
    });

    if (data instanceof Blob) return data as unknown as T;
    if (data.status !== 200 || data.code !== 0) throw data;
    return data.data as T;
  } catch (e) {
    throw e;
  }
};
