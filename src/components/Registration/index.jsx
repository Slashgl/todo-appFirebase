import React from "react";
import Header from "./Header";
import Button from "./Button";
import { logoShape } from "assets";
import styles from "./styles.module.scss";
import {
  changeFullName,
  getConfirmPassword,
  getEmail,
  getFullName,
  getPassword,
  changeConfirmPassword,
  changeEmail,
  changePassword,
} from "store";
import { useDispatch } from "react-redux";

const Registration = ({ firestore }) => {
  const dispatch = useDispatch();
  const setFullName = (value) => dispatch(changeFullName(value));
  const setEmail = (value) => dispatch(changeEmail(value));
  const setPassword = (value) => dispatch(changePassword(value));
  const setConfirmPassword = (value) => dispatch(changeConfirmPassword(value));

  const fullName = getFullName();
  const email = getEmail();
  const password = getPassword();
  const confirmPassword = getConfirmPassword();

  const setDataForRegistration = () => {
    firestore.collection("users").add({
      Name: fullName,
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
    });
  };

  return (
    <div className={styles.registration}>
      <img className={styles.img} src={logoShape} alt="img" />
      <Header />
      <form className={styles.wrapperForm}>
        <label className={styles.wrapperLabel}>
          <span>Full name</span>
          <input onChange={(e) => setFullName(e.target.value)} placeholder="Mary Elliot" />
        </label>
        <label className={styles.wrapperLabel}>
          <span>Email</span>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="mary.elliot@mail.com" />
        </label>
        <label className={styles.wrapperLabel}>
          <span>Password</span>
          <input onChange={(e) => setPassword(e.target.value)} placeholder="**************" />
        </label>
        <label className={styles.wrapperLabel}>
          <span>Confirm Password</span>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="**************"
          />
        </label>
      </form>
      <Button title={"Register"} onClick={setDataForRegistration} />
    </div>
  );
};
export default Registration;
