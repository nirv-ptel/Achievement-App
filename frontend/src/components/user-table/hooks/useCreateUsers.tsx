import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";

import { addUserData } from "../api";
import { UserProps } from "../types/types";
import useCreateUsersForm from "./useCreateUsersForm";

type onCloseAddUsers = {
  onCloseAddUsers: () => void;
};

const useCreateUsers = ({ onCloseAddUsers }: onCloseAddUsers) => {
  const queryClient = useQueryClient();

  const { resetForm } = useCreateUsersForm(() => {
    return "";
  });

  return useMutation((data: UserProps) => addUserData(data), {
    onSuccess: () => {
      queryClient.refetchQueries(["get-user"]);
      resetForm();
      toast("User has been created!", { type: "success" });
      onCloseAddUsers();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message || "cannot add user.", {
        type: "error",
      });
    },
  });
};

export default useCreateUsers;
