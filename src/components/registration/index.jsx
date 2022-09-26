import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toast";
import { useForm } from "react-hook-form";
import { validation, notificationSuccess, getCollectionUsers } from "utils";
import Input from "./input";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = ({ firestore }) => {
  const formOptions = validation();
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [fireStore, setFireStore] = useState([""]);
  const [invalidEmail, setInvalidEmail] = useState(false);

  useEffect(() => {
    getCollectionUsers(firestore, setFireStore);
  }, [firestore]);

  const onSubmit = (data) => {
    if (!fireStore.includes(data.email)) {
      firestore.collection("users").add(data);
      setFireStore(data.email);
    } else {
      setInvalidEmail(true);
    }
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
            invalidEmail={invalidEmail}
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
          <button
            className={styles.button}
            type="submit"
            disabled={!formState.isValid}
            onClick={notificationSuccess}
          >
            Register
          </button>
        </form>
        <div className={styles.singIn}>
          Already have an account? <a href="#">Sign In</a>
        </div>
      </div>
      {!invalidEmail ? <ToastContainer position="top-right" /> : null}
    </>
  );
};
export default Registration;
