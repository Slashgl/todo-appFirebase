import React from "react";
import Label from "../label";
import styles from "./styles.module.scss";

const Input = ({ label, name, type, register, errors, invalidEmail }) => {
  return (
    <Label>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} type={type} {...register(name)} />
      <div className={styles.invalidFeedback}>{errors}</div>
      <div className={styles.invalidEmail}>{invalidEmail && "Email is registered"}</div>
    </Label>
  );
};

export default Input;
