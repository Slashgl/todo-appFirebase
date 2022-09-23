import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toast";
import { useForm } from "react-hook-form";
import { validator, wave } from "utils";
import Input from "./input";
import Header from "./header";
import styles from "./styles.module.scss";

const Registration = ({ firestore }) => {
  const formOptions = validator();
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [fireStore, setFireStore] = useState([""]);
  const [invalidEmail, setInvalidEmail] = useState(false);

  useEffect(() => {
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((documentSnapshot) =>
          setFireStore((old) => [...old, documentSnapshot.data().Email])
        )
      );
  }, [firestore]);

  const onSubmit = (data) => {
    if (!fireStore.includes(data.Email)) {
      firestore.collection("users").add(data);
      setFireStore(data.Email);
    } else {
      setInvalidEmail(true);
    }
  };

  return (
    <div className={styles.registration}>
      <Header />
      <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          label={"Full Name"}
          name={"FullName"}
          errors={errors?.FullName?.message}
        />
        <Input
          register={register}
          label={"Email"}
          name={"Email"}
          type={"email"}
          errors={errors?.Email?.message}
          invalidEmail={invalidEmail}
        />
        <Input
          register={register}
          label={"Password"}
          error={errors?.Password?.message}
          name={"Password"}
          type={"password"}
          autoComplete={"new-password"}
        />
        <Input
          register={register}
          label={"Confirm Password"}
          name={"ConfirmPassword"}
          type={"password"}
          autoComplete={"new-password"}
          errors={errors?.ConfirmPassword?.message}
        />
        <button
          className={styles.button}
          type="submit"
          disabled={!formState.isValid}
          onClick={wave}
        >
          Register
        </button>
      </form>
      <div className={styles.singIn}>
        Already have an account? <a href="#">Sign In</a>
      </div>
      {!invalidEmail ? <ToastContainer position="top-right" /> : null}
    </div>
  );
};
export default Registration;
