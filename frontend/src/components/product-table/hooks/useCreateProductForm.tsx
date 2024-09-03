import { useFormik } from "formik";
import { ProductProps } from "../types";
import { productSchema } from "../validation";

const useCreateProductForm = (action: () => void, data?: ProductProps) => {
  return useFormik({
    initialValues: {
      title: data?.title,
      price: data?.price,
      thumbnail: data?.thumbnail,
    },
    validateOnChange: false,
    validationSchema: productSchema,
    onSubmit: () => action(),
  });
};

export default useCreateProductForm;
