import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {getToken} from './token';
import { BACKEND_URL, Time, ErrorRoute } from '../const';

type UnauthorizedCallback = () => void;


enum HttpCode {
  Unauthorized = ErrorRoute.ErrorNoAuth,
}

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: Time.RequestTimeout,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
