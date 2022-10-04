import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validation, notificationSuccess, userRegistration } from "utils";
import Input from "./input";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = () => {
  const formOptions = validation();
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    userRegistration(data.email, data.password);
  };

  return (
    <>
      <div className={styles.registration}>
        <Header />
        <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            label={"Full Name"}
            name={"fullName"}
            errors={errors?.fullName?.message}
          />
          <Input
            register={register}
            label={"Email"}
            name={"email"}
            type={"email"}
            errors={errors?.email?.message}
          />
          <Input
            register={register}
            label={"Password"}
            error={errors?.password?.message}
            name={"password"}
            type={"password"}
            autoComplete={"new-password"}
          />
          <Input
            register={register}
            label={"Confirm Password"}
            name={"confirmPassword"}
            type={"password"}
            autoComplete={"new-password"}
            errors={errors?.confirmPassword?.message}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={!formState.isValid}
            onClick={notificationSuccess}
          >
            Register
          </button>
        </form>
        <div className={styles.singIn}>
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </>
  );
};
export default Registration;
