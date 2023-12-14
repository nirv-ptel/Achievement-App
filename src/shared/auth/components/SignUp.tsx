// import { useQuery } from "react-query";
import authStyle from "../../../assets/css/auth.module.css";
import Button from "../../button/Button";
import useSignup from "../hooks/useSignup";

import { useSignupForm } from "../hooks/useSignupForm";
// import { getCurrentUser } from "../api";
import FormLabel from "../../form-control/FormLabel";
import FormInput from "../../form-control/FormInput";
import FormError from "../../form-control/FormError";

const SignUp = () => {
  // const { data: response } = useQuery(["get-users"], () => {
  //   getCurrentUser();
  // });

  // console.log(response, "response");

  const { mutate: signupFn } = useSignup();

  const { values, handleSubmit, handleChange, errors } = useSignupForm(() =>
    signupFn({ ...values })
  );

  return (
    <form className={authStyle.loginForm} onSubmit={handleSubmit}>
      <h3 className="py-8 text-[24px]">Signup</h3>
      <div className="form-group">
        <FormLabel title="User name" />
        <FormInput
          onChange={handleChange}
          name="username"
          type="text"
          value={values?.username || ""}
          className={errors.username ? "is-error" : ""}
        />
        <FormError error={errors.username} />
      </div>

      <div className="form-group">
        <FormLabel title="Email address" />
        <FormInput
          onChange={handleChange}
          name="email"
          type="text"
          value={values?.email || ""}
          className={errors.email ? "is-error" : ""}
        />
        <FormError error={errors.email} />
      </div>

      <div className="form-group">
        <FormLabel title="Password" />
        <div className="mt-2 relative">
          <FormInput
            value={values?.password}
            onChange={handleChange}
            type={"password"}
            name="password"
            className={errors.password ? "is-error" : ""}
          />
        </div>
        <FormError error={errors.password} />
      </div>
      <Button type="submit" className={authStyle.loginButton} title="Signup" />
    </form>
  );
};

export default SignUp;
