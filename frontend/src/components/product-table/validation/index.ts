import { object, string } from "yup";

export const productSchema = object({
  title: string().required("title is required."),
  price: string().required("price name is required."),
  thumbnail: string().required("thumbnail name is required."),
});
