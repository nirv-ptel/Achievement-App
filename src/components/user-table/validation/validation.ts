import { object, string } from "yup";

export const userSchema = object({
  name: string()
    .required("name is required.")
    .min(0)
    .max(100, "name must be less than 100 characters."),
  email: string().required("email name is required."),
  number: string().required("number name is required."),
  role: string().required("role name is required."),
  address: string().required("address name is required."),
});
