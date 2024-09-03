import { useQuery } from "react-query";
import { getTanstackData } from "../api";

const useTanstackData = () => {
  return useQuery(["get-tanstack"], () => getTanstackData());
};

export default useTanstackData;
