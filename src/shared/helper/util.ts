import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { TOKEN } from "./constant";

const getItemFromCookie = (key: string) => {
  return Cookies.get(key);
};

const setToken = (token: string) => {
  return Cookies.set(TOKEN, token);
};

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

// style={dropDownArrowStyle}
const dropDownArrowStyle = {
  dropdownIndicator: (
    base: any,
    state: { selectProps: { menuIsOpen: any } }
  ) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
};

function capitalizeFirstLetter(str: string | undefined): string {
  if (str) {
    return str.charAt(0).toUpperCase();
  }
  return "";
}

export {
  removeItemInCookie,
  clientConfig,
  getItemFromCookie,
  handleAxiosError,
  dropDownArrowStyle,
  capitalizeFirstLetter,
  setToken,
};
