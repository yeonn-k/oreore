import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  requestInterceptor,
  successInterceptor,
  errorInterceptor,
} from "./interceptors";

import { BASE_URL } from "../config/config";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export const getAxios = async (url: string) => {
  const res = await api.get(url);
  return res;
};

export const postAxios = async <T>(
  url: string,
  option: T,
  config?: AxiosRequestConfig,
) => {
  const res = await api.post(url, option, config);
  return res;
};

export const putAxios = async <T>(
  url: string,
  option: T,
  config?: AxiosRequestConfig,
) => {
  const res = await api.put(url, option, config);
  return res;
};

export const deleteAxios = async (url: string) => {
  const res = await api.delete(url);
  return res;
};
