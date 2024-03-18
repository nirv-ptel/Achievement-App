import axios from "axios";

export const getProduct = () => {
  return axios.get("https://fakestoreapi.com/products");
};
