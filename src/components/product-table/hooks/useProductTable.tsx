import { useQuery } from "react-query";
import { getProduct } from "../api";

const useProductTable = (searchKeyword: string) => {
  return useQuery(["get-product"], () => getProduct(searchKeyword));
};

export default useProductTable;
