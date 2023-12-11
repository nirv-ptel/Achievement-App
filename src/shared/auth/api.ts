import api from "../api";
import { ACCESS_TOKEN } from "../helper/constant";
import { setToken } from "../helper/util";
import { LoginFormProps } from "./types";

export const me = () => {
  return api.get("/me");
};

export const signin = (data: LoginFormProps) => {
  return api.post("/me", data).then(() => {
    setToken(ACCESS_TOKEN);
  });
};
