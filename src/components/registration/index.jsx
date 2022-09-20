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
          name={"Full Name"}
          nameRegister={"FullName"}
          errors={errors?.FullName && <div>{errors?.FullName?.message}</div>}
        />
        <Input
          register={register}
          name={"Email"}
          nameRegister={"Email"}
          errors={errors?.Email && <div>{errors?.Email?.message}</div>}
        />
        <Input
          register={register}
          name={"Password"}
          error={errors?.Password?.message}
          nameRegister={"Password"}
        />
        <Input
          register={register}
          name={"Confirm Password"}
          nameRegister={"ConfirmPassword"}
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
