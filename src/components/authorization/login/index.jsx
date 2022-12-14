import React from "react";
import ROUTES from "routes";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toast";
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { changeUser } from "store";
import { validationLogin, notificationLogin } from "utils";
import { authApi } from "services";
import Header from "../header";
import ButtonSubmitForm from "../buttonSubmitForm";
import Input from "../input";
import { logoLogin } from "assets";
import styles from "./styles.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const validation = validationLogin();
  const { register, handleSubmit, formState } = useForm(validation);
  const { errors } = formState;
  const navigate = useNavigate();
  const auth = getAuth();

  const logToAccount = async (email, password) => {
    try {
      const res = await authApi.signIn(auth, email, password);
      const user = res.user;
      await dispatch(changeUser(user));
      navigate(ROUTES.HOME);
    } catch {
      notificationLogin();
    }
  };

  const onSubmit = (data) => {
    logToAccount(data.email, data.password);
  };

  return (
    <>
      <div className={styles.login}>
        <Header title={"Welcome Back!"} img={logoLogin} />
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            label={"Email"}
            name={"email"}
            errors={errors?.email?.message}
          />
          <Input
            register={register}
            label={"Password"}
            error={errors?.password?.message}
            name={"password"}
            type={"password"}
          />
          <Link to={ROUTES.NEW_PASSWORD} className={styles.forgotPassword}>
            <div>Forgot Password?</div>
          </Link>
          <ButtonSubmitForm title={"Login"} formState={!formState.isValid} />
        </form>
        <div className={styles.footer}>
          Don???t have an account? <Link to={ROUTES.REGISTER}>Sign Up</Link>
        </div>
      </div>
      <ToastContainer position={"top-right"} />
    </>
  );
};

export default Login;
