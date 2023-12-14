import api from "../api";
import { ACCESS_TOKEN } from "../helper/constant";
import { setToken } from "../helper/util";
import { LoginFormProps, SignupRequestParams } from "./types";

export const me = () => {
  return api.get("/me");
};

export const signUp = (data: SignupRequestParams) => {
  return api.post("/register", data);
};

export const signIn = (data: LoginFormProps) => {
  return api.post("/me", data).then(() => {
    setToken(ACCESS_TOKEN);
  });
};

// export const getCurrentUser = () => {
//   return api.get("/auth-user");
// };
