/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "../../button/Button";
import useLogin from "../hooks/useLogin";
import { useLoginForm } from "../../hooks/useLoginForm";

import authStyle from "../../../assets/css/auth.module.css";

const Login = () => {
  const { mutate: loginMutation } = useLogin();

  const { handleChange, handleSubmit, errors, values } = useLoginForm(
    (email: any, password: any) => {
      loginMutation({ email, password });
    }
  );

  return (
    <form className={authStyle.loginForm} onSubmit={handleSubmit}>
      <h3 className="py-8 text-[24px]">Login</h3>
      <div className="mb-6">
        <label htmlFor="email" className={authStyle.formLabel}>
          Your Username
        </label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={values.email}
          className={authStyle.formInput}
          placeholder="name@flowbite.com"
        />
        {errors.email ? (
          <span className="text-xs text-red-500 pl-1">{errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className={authStyle.formLabel}>
          Your password
        </label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
          className={authStyle.formInput}
        />
        {errors.password ? (
          <span className="text-xs text-red-500 pl-1">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <Button type="submit" className={authStyle.loginButton} title="Login" />
    </form>
  );
};

export default Login;
