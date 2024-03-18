import { useQuery } from "react-query";
import { getProduct } from "../api";

const useProductTable = () => {
  return useQuery(["get-product"], () => getProduct());
};

export default useProductTable;
