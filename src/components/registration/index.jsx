import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toast";
import { getAuth } from "firebase/auth";
import { firestore } from "services/firebase";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { changeUser, getUsers } from "store";
import {
  notificationSuccess,
  notificationError,
  getCollectionUsers,
  validationRegister,
} from "utils";
import { registerApi } from "services";
import Input from "./input";
import Header from "./header";
import ButtonSubmitForm from "../button";
import styles from "./styles.module.scss";

const Registration = () => {
  const fireStore = firestore;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = validationRegister();
  const { register, handleSubmit, formState, reset } = useForm(validation);
  const { errors } = formState;
  const users = getUsers();

  useEffect(() => {
    getCollectionUsers(fireStore, dispatch);
  }, [fireStore]);

  const userRegistration = async (email, password, dispatch, navigate) => {
    const auth = getAuth();
    try {
      const res = await registerApi.createUsers(auth, email, password);
      const user = res.user;
      await dispatch(changeUser(user));
      navigate("/homePage");
    } catch (e) {
      console.log(e);
    }
  };

  const checksForEmail = (data) => {
    if (!users.includes(data.email)) {
      fireStore.collection("users").add(data);
      notificationSuccess();
    } else {
      notificationError();
    }
  };

  const onSubmit = (data) => {
    userRegistration(data.email, data.password, dispatch, navigate, reset);
    checksForEmail(data);
    reset();
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
          <ButtonSubmitForm title={"Register"} formState={!formState.isValid} />
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
