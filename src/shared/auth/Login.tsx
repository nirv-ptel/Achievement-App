/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoginForm } from "../hooks/useLoginForm";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";

const loginUser = async ({ email, password }: any) => {
  if (email === "test@example.com" && password === "12345678") {
    return { email: email };
  } else {
    throw new Error("Login failed");
  }
};

const Login = () => {
  const queryClient = useQueryClient();

  const { mutate: loginMutation } = useMutation(loginUser, {
    onSuccess: (data) => {
      console.log(data, "data");
      queryClient.invalidateQueries("get-users");
      const token = "test123";
      localStorage.setItem("authToken", token);
      Cookies.set("authToken", token);
    },
  });

  const { handleChange, handleSubmit, setFieldValue, errors, values } =
    useLoginForm((email: any, password: any) => {
      loginMutation({ email, password });
    });

  useEffect(() => {
    setFieldValue("email", values.email);
  }, [values]);

  console.log(values, errors);

  return (
    <form
      className="max-w-[500px] m-autoRemember me m-auto mt-[8rem]"
      onSubmit={handleSubmit}
    >
      <h3 className="py-8 text-[24px]">Login</h3>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={values.email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
        {errors.email ? (
          <span className="text-xs text-red-500 pl-1">{errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900  "
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.password ? (
          <span className="text-xs text-red-500 pl-1">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
