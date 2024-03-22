import { useMutation } from "react-query";
import { createProduct } from "../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const useCreateProduct = () => {
  return useMutation(() => createProduct(), {
    onSuccess: () => {
      toast?.success("Product created successfully");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast?.error(
        error.response?.data.message || "Product create unsuccessfully."
      );
    },
  });
};

export default useCreateProduct;
