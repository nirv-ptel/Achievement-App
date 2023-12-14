import { useMutation } from "react-query";
import { LoginFormProps } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation((data: LoginFormProps) => signIn(data), {
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/");
    },
    onError: () => {
      toast.error("Login unsuccessful!");
    },
  });
};

export default useLogin;
