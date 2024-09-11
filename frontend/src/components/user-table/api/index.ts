import api from "../../../shared/api";
import { UserProps } from "../types/types";

export const getUserData = () => {
  return api.get(`/api`);
};

export const addUserData = (data: UserProps) => {
  return api.post(`/api/users`, data);
};

export const editUsers = (data: UserProps) => {
  return api.put(`/api/users/${data?.id}`, {
    name: data?.name,
    email: data?.email,
    number: data?.number,
    role: data?.role,
    address: data?.address,
  });
};

export const deleteUsers = (id: string) => {
  return api.delete(`/api/users/${id}`);
};
