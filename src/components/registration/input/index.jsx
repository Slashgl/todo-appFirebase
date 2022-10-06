import React from "react";
import Label from "./label";
import styles from "./styles.module.scss";

const Input = ({ register, errors, name, type, autoComplete, invalidEmail }) => {
  return (
    <Label>
      <span>{`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}</span>
      <input type={type} {...register(name)} autoComplete={autoComplete} />
      <div className={styles.invalidFeedback}>{errors}</div>
      <div className={styles.invalidEmail}>{invalidEmail && "Email is registered"}</div>
    </Label>
  );
};

export default Input;
