import api from "../api";

export const me = () => {
  return api.get("/me");
};
