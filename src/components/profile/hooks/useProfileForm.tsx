import { useFormik } from "formik";
import { useUser } from "../../../shared/provider/user-provider/UserProvider";
import { ProfileFormProps } from "../types";

const useProfileForm = (action: CallableFunction) => {
  const { user }: any = useUser();

  return useFormik<ProfileFormProps>({
    initialValues: {
      email: user?.email || "",
    },
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => action(),
  });
};

export default useProfileForm;
