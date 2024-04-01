import api from "../api";
import { ACCESS_TOKEN } from "../helper/constant";
import { LoginFormProps, SignupRequestParams } from "./types";

export const me = () => {
  return api.get("/me");
};

export const signUp = (data: SignupRequestParams) => {
  return api.post("/register", data);
};

export const signIn = async (data: LoginFormProps) => {
  const users = await api.get("/users");
  const user = await users.data.find((user: any) => user.email === data.email);
  console.log(user);
  if (user) {
    return { data: ACCESS_TOKEN };
  } else {
    return Promise.reject(new Error("User not found"));
  }
};

export const getCurrentUser = (token: string | undefined) =>
  api.get(`/users/${token}`);
