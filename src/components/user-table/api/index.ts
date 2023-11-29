import api from "../../../shared/api";
import { UserProps } from "../types/types";

export const getUserData = () => {
  return api.get(`/users`);
};

export const addUserData = (data: UserProps) => {
  return api.post(`/users`, data);
};

export const editUsers = (data: UserProps) => {
  return api.patch(`/users/${data?.id}`, data);
};

export const deleteUsers = (data: UserProps) => {
  return api.delete(`/users/${data}`);
};
