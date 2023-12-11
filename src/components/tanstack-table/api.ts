import api from "../../shared/api";

export const getTanstackData = () => {
  return api.get("/data");
};
