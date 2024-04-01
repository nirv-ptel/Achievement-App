import { useMutation } from "react-query";
import { createProduct } from "../api";
import { toast } from "react-toastify";

const useCreateProduct = ({ onCloseAddProduct }: any) => {
  return useMutation((data) => createProduct(data), {
    onSuccess: () => {
      toast?.success("Product created successfully");
      onCloseAddProduct();
    },
  });
};

export default useCreateProduct;
