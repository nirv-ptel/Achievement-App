import { useMutation } from "react-query";
import { signin } from "../api";
import { LoginFormProps } from "../types";
import { toast } from "react-toastify";

const useLogin = () => {
  return useMutation((data: LoginFormProps) => signin(data), {
    onSuccess: () => {
      toast("Login successful!", { type: "success" });
    },
  });
};

export default useLogin;
