import api from "../api";
import { LoginFormProps } from "./types";

export const me = () => {
  return api.get("/me");
};

export const signin = (data: LoginFormProps) => {
  return api.post("/me", data);
};
