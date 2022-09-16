import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Header from "./Header";
import { logoShape } from "assets";
import styles from "./styles.module.scss";

const Registration = ({ firestore }) => {
  const validationSchema = Yup.object().shape({
    FullName: Yup.string()
      .required("Full name is required")
      .max(20, "the length of the name should not exceed 20 characters"),
    Email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        "Mail is not entered correctly"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    firestore.collection("users").add(data);
    reset();
  };

  return (
    <div className={styles.registration}>
      <img className={styles.img} src={logoShape} alt="img" />
      <Header />
      <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.wrapperLabel}>
          <span>Full name</span>
          <input name="FullName" type="text" {...register("FullName")} />
          <div className={styles.invalidFeedback}>
            {errors?.FullName && <p>{errors?.FullName.message}</p>}
          </div>
        </label>
        <label className={styles.wrapperLabel}>
          <span>Email</span>
          <input name="Email" type="text" {...register("Email")} />
          <div className={styles.invalidFeedback}>
            {errors?.Email && <p>{errors?.Email.message}</p>}
          </div>
        </label>
        <label className={styles.wrapperLabel}>
          <span>Password</span>
          <input name="password" type="password" {...register("password")} />
          <div className={styles.invalidFeedback}>{errors.password?.message}</div>
        </label>
        <label className={styles.wrapperLabel}>
          <span>Confirm Password</span>
          <input name="confirmPassword" type="password" {...register("confirmPassword")} />
          <div className={styles.invalidFeedback}>{errors.confirmPassword?.message}</div>
        </label>
        <input className={styles.btnSubmit} type="submit" />
      </form>
      <div className={styles.changeToSingIn}>
        Already have an account? <a href="#">Sign In</a>
      </div>
    </div>
  );
};
export default Registration;
