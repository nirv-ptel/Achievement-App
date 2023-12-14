/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import Cookies from "js-cookie";
import { TOKEN } from "../../helper/constant";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useLoginForm = (loginMutation: () => void) => {
  return useFormik<LoginFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => loginMutation(),
  });
};
