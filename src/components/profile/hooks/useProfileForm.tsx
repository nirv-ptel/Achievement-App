import { useFormik } from "formik";
import { useUser } from "../../../shared/provider/user-provider/UserProvider";
import { ProfileFormProps } from "../types";

const useProfileForm = (action: CallableFunction) => {
  const { user }: any = useUser();

  return useFormik<ProfileFormProps>({
    initialValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => action(),
  });
};

export default useProfileForm;
