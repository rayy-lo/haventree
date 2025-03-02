import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.params = {
    ...config.params,
    key: env.WEATHER_API_KEY,
  };

  return config;
}

export const api = Axios.create({
  baseURL: env.WEATHER_API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const message = error.response?.data?.message || error.message;
    //TODO: Handle error
    return Promise.reject(error);
  }
);
