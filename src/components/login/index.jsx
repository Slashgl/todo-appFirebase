import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toast";
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { validationLogin, notificationLogin } from "utils";
import { signInApi } from "services";
import { changeUser } from "store";
import Header from "./header";
import Input from "./input";
import ButtonSubmitForm from "../button";
import styles from "./styles.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formOptions = validationLogin();
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const userLogin = async (email, password) => {
    const auth = getAuth();
    try {
      const res = await signInApi.signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await dispatch(changeUser(user));
      navigate("/homePage");
    } catch {
      notificationLogin();
    }
  };

  const onSubmit = async (data) => {
    await userLogin(data.email, data.password);
    reset();
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
          <Link to={"/reset-password"} className={styles.forgotPassword}>
            Forgot Password?
          </Link>
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
