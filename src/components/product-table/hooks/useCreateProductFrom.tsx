import { useFormik } from "formik";

const useCreateProductFrom = (action: () => void, data?: any) => {
  return useFormik({
    initialValues: {
      id: data?.id,
    },
    validateOnChange: false,
    onSubmit: () => action(),
  });
};

export default useCreateProductFrom;
