import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetPassword, validationResetPassword } from "utils";
import Input from "../login/input";
import ButtonSubmitForm from "../registration/buttonSubmitForm";
import Header from "./header";
import styles from "./styles.module.scss";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formOptions = validationResetPassword();
  const { register, handleSubmit, formState, reset } = useForm(formOptions);

  const onSubmit = (data) => {
    resetPassword(data.email, dispatch, reset, navigate);
    reset();
  };

  return (
    <div className={styles.newPassword}>
      <Header />
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} label={"Email"} type={"email"} name={"email"} />
        <ButtonSubmitForm formState={!formState.isValid} title={"Reset Password"} />
      </form>
    </div>
  );
};

export default NewPassword;
