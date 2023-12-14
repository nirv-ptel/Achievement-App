/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, TOKEN } from "../../helper/constant";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useLoginForm = (login: any) => {
  return useFormik<LoginFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      Cookies.set("Token", TOKEN || "");

      login(values.email, values.password);
    },
  });
};
