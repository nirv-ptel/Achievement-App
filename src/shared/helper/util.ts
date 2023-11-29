import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { TOKEN } from "./constant";

const getItemFromCookie = (key: string) => Cookies.get(key);

const removeItemInCookie = (key: string) => Cookies.remove(key);

const clientConfig = (config: InternalAxiosRequestConfig) => {
  const token = getItemFromCookie(TOKEN);

  if (token) {
    config.headers = config.headers ?? {};
    config.headers[`Authorization`] = "Bearer " + token;
  }

  return config;
};

const handleAxiosError = () => {
  removeItemInCookie(TOKEN);
};

export {
  removeItemInCookie,
  clientConfig,
  getItemFromCookie,
  handleAxiosError,
};
