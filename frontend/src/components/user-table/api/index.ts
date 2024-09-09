import api from "../../../shared/api";
import { UserProps } from "../types/types";

export const getUserData = () => {
  return api.get(`/api`);
};

export const addUserData = (data: UserProps) => {
  return api.post(`/api/users`, data);
};

export const editUsers = (data: UserProps) => {
  const { id, ...userData } = data;
  return api.put(`/api/users/${data?.id}`, userData);
};

export const deleteUsers = (id: string) => {
  return api.delete(`/api/users/${id}`);
};
