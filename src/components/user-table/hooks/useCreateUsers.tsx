import { useMutation, useQueryClient } from "react-query";
import { addUserData } from "../api";
import { toast } from "react-toastify";
import { UserProps } from "../types/types";
import useCreateUsersForm from "./useCreateUsersForm";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type onCloseAddUsers = {
  onCloseAddUsers: () => void;
};

const useCreateUsers = ({ onCloseAddUsers }: onCloseAddUsers) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { resetForm } = useCreateUsersForm(() => {
    return "";
  });

  return useMutation((data: UserProps) => addUserData(data), {
    onSuccess: () => {
      queryClient.refetchQueries(["get-user"]);
      resetForm();
      navigate("/login");
      onCloseAddUsers();
      toast("User has been created!", { type: "success" });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message || "cannot update the user.", {
        type: "error",
      });
    },
  });
};

export default useCreateUsers;
