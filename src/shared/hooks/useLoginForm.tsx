/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { loginSchema } from "../auth/validation";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../helper/constant";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useLoginForm = (login: any) => {
  const navigate = useNavigate();

  return useFormik<LoginFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      Cookies.set("authToken", ACCESS_TOKEN || "");
      navigate("/");
      login(values.email, values.password);
    },
  });
};
