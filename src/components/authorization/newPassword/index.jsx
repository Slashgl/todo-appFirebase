import React from "react";
import ROUTES from "routes";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { authApi } from "services";
import { changeUser } from "store";
import { validationResetPassword } from "utils";
import ButtonSubmitForm from "../buttonSubmitForm";
import Input from "../input";
import Header from "./header";
import styles from "./styles.module.scss";

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = validationResetPassword();
  const { register, handleSubmit, formState, reset } = useForm(validation);

  const resetPassword = async (email) => {
    const auth = getAuth();
    try {
      await authApi.resetPassword(auth, email).then(() => {
        dispatch(changeUser(email));
        navigate(ROUTES.LOGIN);
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const onSubmit = (data) => {
    resetPassword(data.email);
    reset();
  };

  return (
    <div className={styles.newPassword}>
      <Header />
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} label={"Email"} name={"email"} />
        <Link className={styles.signIn} to={ROUTES.LOGIN}>
          Sign-In
        </Link>
        <ButtonSubmitForm formState={!formState.isValid} title={"Reset Password"} />
      </form>
    </div>
  );
};

export default NewPassword;
