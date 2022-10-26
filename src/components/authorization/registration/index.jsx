import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toast";
import { getAuth } from "firebase/auth";
import { firestore } from "services/firebase";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  getCollectionUsers,
  notificationError,
  notificationSuccess,
  validationRegister,
} from "utils";
import ButtonSubmitForm from "../buttonSubmitForm";
import { authApi } from "services";
import ROUTES from "routes";
import Input from "../inputRegistration";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = () => {
  const fireStore = firestore;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = validationRegister();
  const { register, handleSubmit, formState, reset } = useForm(validation);
  const { errors } = formState;

  useEffect(() => {
    getCollectionUsers(fireStore, dispatch);
  }, [fireStore]);

  const userRegistration = async (email, password, dispatch, navigate) => {
    const auth = getAuth();
    try {
      await authApi.createUsers(auth, email, password).then((cred) => {
        return fireStore.collection("users").doc(cred.user.uid).set({
          email: cred.user.email,
        });
      });
      notificationSuccess();
      navigate(ROUTES.HOME);
    } catch (e) {
      notificationError();
    }
  };

  const onSubmit = (data) => {
    userRegistration(data.email, data.password, dispatch, navigate, reset);
    reset();
  };

  return (
    <>
      <div className={styles.registration}>
        <Header />
        <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name={"fullName"} errors={errors?.fullName?.message} />
          <Input register={register} name={"email"} errors={errors?.email?.message} />
          <Input
            register={register}
            error={errors?.password?.message}
            name={"password"}
            autoComplete={"new-password"}
          />
          <Input
            register={register}
            name={"confirmPassword"}
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
