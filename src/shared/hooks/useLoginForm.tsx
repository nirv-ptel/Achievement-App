/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { loginSchema } from "../auth/validation";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useLoginForm = (login: any) => {
  const navigate = useNavigate();
  const token = "test123";

  return useFormik<LoginFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      Cookies.set("authToken", token || "");
      navigate("/");
      login(values.email, values.password);
    },
  });
};
