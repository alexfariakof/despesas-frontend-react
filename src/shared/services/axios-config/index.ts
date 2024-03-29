import axios, { AxiosInstance } from 'axios';
import { environment } from '../../environment';
import { resposeInterceptor, errorInterceptor, requestInterceptor } from './interceptors';

const createApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: environment.URL_BASE,
    responseType: 'json',
    responseEncoding: 'utf8',
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  api.interceptors.request.use(
    (config) => requestInterceptor(config),
  );

  api.interceptors.response.use(
    (response) => resposeInterceptor(response),
    (error) => errorInterceptor(error)
  );

  return api;
};

export default createApiInstance;