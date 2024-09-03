import { useQuery } from "react-query";
import { getUserData } from "../api";

const useUserTable = () => {
  return useQuery(["get-user"], () => getUserData());
};

export default useUserTable;
