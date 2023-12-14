import api from "../api";
import { ACCESS_TOKEN } from "../helper/constant";
import { LoginFormProps, SignupRequestParams } from "./types";

export const me = () => {
  return api.get("/me");
};

export const signUp = (data: SignupRequestParams) => {
  return api.post("/login", data);
};

export const signIn = async (data: LoginFormProps) => {
  const users = await api.get("/users-list");
  const user = await users.data.find((user: any) => user.email === data.email);
  if (user) {
    return { data: ACCESS_TOKEN };
  } else {
    return Promise.reject(new Error("User not found"));
  }
};
