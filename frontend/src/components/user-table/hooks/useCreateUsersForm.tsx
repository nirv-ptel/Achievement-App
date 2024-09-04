import { useFormik } from "formik";
import { UserProps } from "../types/types";
import { userSchema } from "../validation/validation";

const useCreateUsersForm = (action: () => void, data?: UserProps) => {
  return useFormik({
    initialValues: {
      id: data?.id || "",
      name: data?.name || "",
      number: data?.number || "",
      email: data?.email || "",
      role: data?.role || "",
      address: data?.address || "",
      password: "111111111",
    },
    enableReinitialize: true,
    validationSchema: userSchema,
    validateOnChange: false,
    onSubmit: () => action(),
  });
};

export default useCreateUsersForm;
