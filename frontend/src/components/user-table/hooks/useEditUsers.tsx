/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { editUsers } from "../api";

const useEditUsers = (onCloseUsersModal: () => void) => {
  const queryClient = useQueryClient();

  return useMutation((data: any) => editUsers(data), {
    onSuccess: () => {
      toast("Users update successfully", { type: "success" });
      onCloseUsersModal();
      queryClient.refetchQueries(["get-user"]);
    },
    onError: () => {
      toast("cannot update the users.", { type: "error" });
    },
  });
};

export default useEditUsers;
