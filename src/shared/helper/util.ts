import Cookies from "js-cookie";

export const getItemFromCookie = (key: string) => Cookies.get(key);

export const removeItemInCookie = (key: string) => Cookies.remove(key);
