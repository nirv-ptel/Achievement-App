import { useMutation } from "react-query";
import { signin } from "../api";
import { LoginFormProps } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation((data: LoginFormProps) => signin(data), {
    onSuccess: () => {
      console.log("meert :: first");
      toast("Login successful!", { type: "success" });
      navigate("/");
    },
    onError: () => {
      console.log("error");
    },
  });
};

export default useLogin;
