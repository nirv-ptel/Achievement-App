import axios from "axios";

export const me = () => {
  return axios.get("/me");
};
