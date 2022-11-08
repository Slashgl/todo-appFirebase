import React, { useEffect } from "react";
import ROUTES from "routes";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toast";
import { getAuth } from "firebase/auth";
import { firestore } from "services/firebase";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "services";
import {
  getCollectionUsers,
  notificationError,
  notificationSuccess,
  validationRegister,
} from "utils";
import Header from "../header";
import ButtonSubmitForm from "../buttonSubmitForm";
import Input from "../input";
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
  };

  return (
    <>
      <div className={styles.registration}>
        <Header title={"Welcome Onboard!"} subTitle={"Lets help you in completing your tasks"} />
        <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name={"fullName"}
            errors={errors?.fullName?.message}
            label={"FullName"}
          />
          <Input
            register={register}
            name={"email"}
            errors={errors?.email?.message}
            label={"Email"}
          />
          <Input
            register={register}
            error={errors?.password?.message}
            name={"password"}
            autoComplete={"new-password"}
            label={"Password"}
            type={"password"}
          />
          <Input
            register={register}
            name={"confirmPassword"}
            autoComplete={"new-password"}
            errors={errors?.confirmPassword?.message}
            label={"ConfirmPassword"}
            type={"password"}
          />
          <ButtonSubmitForm title={"Register"} formState={!formState.isValid} />
        </form>
        <div className={styles.singIn}>
          Already have an account? <Link to={ROUTES.LOGIN}>Sign In</Link>
        </div>
      </div>
      <ToastContainer position={"top-right"} />
    </>
  );
};
export default Registration;
