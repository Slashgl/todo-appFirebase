import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLogin, validationLogin, notificationLogin } from "utils";
import Header from "./header";
import Input from "./input";
import ButtonSubmitForm from "../registration/buttonSubmitForm";
import { ToastContainer } from "react-toast";
import styles from "./styles.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formOptions = validationLogin();
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    userLogin(data.email, data.password, dispatch, navigate, notificationLogin);
  };

  return (
    <>
      <div className={styles.login}>
        <Header />
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
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
          />
          <a className={styles.forgotPassword}>Forgot Password?</a>
          <ButtonSubmitForm title={"Login"} formState={!formState.isValid} />
        </form>
        <div className={styles.footer}>
          Don’t have an account? <Link to={"/"}>Sign Up</Link>
        </div>
      </div>
      <ToastContainer position={"top-right"} />
    </>
  );
};

export default Login;
