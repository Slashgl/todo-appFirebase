import React from "react";
import Label from "./label";
import styles from "./styles.module.scss";

const Input = ({ register, label, errors, name, type, autoComplete, invalidEmail }) => {
  return (
    <Label>
      <span>{label}</span>
      <input type={type} {...register(name)} autoComplete={autoComplete} />
      <div className={styles.invalidFeedback}>{errors}</div>
      <div className={styles.invalidEmail}>{invalidEmail ? "This email is registered" : null}</div>
    </Label>
  );
};

export default Input;
