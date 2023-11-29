/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { deleteUsers } from "../api";
import { AxiosError } from "axios";

const useDeleteUsers = (onCloseUsersModal: () => void) => {
  const queryClient = useQueryClient();

  return useMutation((id: any) => deleteUsers(id), {
    onSuccess: () => {
      toast("User deleted.", { type: "success" });
      onCloseUsersModal();
      queryClient.refetchQueries("get-user");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message || "something went wrong", {
        type: "error",
      });
    },
  });
};

export default useDeleteUsers;
