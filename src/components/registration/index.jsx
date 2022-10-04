import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toast";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUsers } from "store";
import {
  validation,
  userRegistration,
  notificationSuccess,
  notificationError,
  getCollectionUsers,
} from "utils";
import Input from "./input";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = ({ firestore }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formOptions = validation();
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const users = getUsers();

  useEffect(() => {
    getCollectionUsers(firestore, dispatch);
  }, [firestore]);

  const checksForEmail = (data) => {
    if (!users.includes(data.email)) {
      firestore.collection("users").add(data);
      notificationSuccess();
    } else {
      notificationError(data);
    }
  };

  const onSubmit = (data) => {
    userRegistration(data.email, data.password, dispatch, navigate);
    checksForEmail(data);
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
          <button className={styles.button} type="submit" disabled={!formState.isValid}>
            Register
          </button>
        </form>
        <div className={styles.singIn}>
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
      <ToastContainer position={"top-right"} />
    </>
  );
};
export default Registration;
