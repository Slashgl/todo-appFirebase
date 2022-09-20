import React from "react";
import { ToastContainer } from "react-toast";
import { useForm } from "react-hook-form";
import { validator, wave } from "utils";
import Input from "./input";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = ({ firestore }) => {
  const formOptions = validator();

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    firestore.collection("users").add(data);
    reset();
  };

  return (
    <div className={styles.registration}>
      <Header />
      <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          label={"Full Name"}
          name={"FullName"}
          errors={errors?.FullName?.message}
        />
        <Input register={register} label={"Email"} name={"Email"} errors={errors?.Email?.message} />
        <Input
          register={register}
          label={"Password"}
          error={errors?.Password?.message}
          name={"Password"}
          type={"password"}
          autoComplete={"new-password"}
        />
        <Input
          register={register}
          label={"Confirm Password"}
          name={"ConfirmPassword"}
          autoComplete={"new-password"}
          errors={errors?.ConfirmPassword?.message}
        />
        <button
          className={styles.button}
          type="submit"
          onClick={wave}
          disabled={!formState.isValid}
        >
          Register
        </button>
      </form>
      <div className={styles.singIn}>
        Already have an account? <a href="#">Sign In</a>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Registration;
