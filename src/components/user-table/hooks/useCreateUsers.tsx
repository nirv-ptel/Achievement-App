import { useMutation, useQueryClient } from "react-query";
import { addUserData } from "../api";
import { toast } from "react-toastify";
import { UserProps } from "../types/types";
import useCreateUsersForm from "./useCreateUsersForm";
import { AxiosError } from "axios";

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
      onCloseAddUsers();
      toast("User has been created!", { type: "success" });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error, "errorerrorerror");
      toast(error.response?.data.message || "cannot update the user.", {
        type: "error",
      });
    },
  });
};

export default useCreateUsers;
