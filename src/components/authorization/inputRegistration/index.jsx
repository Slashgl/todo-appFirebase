import React from "react";
import { toUpperCase } from "utils";
import Label from "./label";
import styles from "../registration/styles.module.scss";

const Input = ({ register, errors, name, type, autoComplete, invalidEmail }) => {
  return (
    <Label>
      <span>{toUpperCase(name)}</span>
      <input className={styles.input} type={type} {...register(name)} autoComplete={autoComplete} />
      <div className={styles.invalidFeedback}>{errors}</div>
      <div className={styles.invalidEmail}>{invalidEmail && "Email is registered"}</div>
    </Label>
  );
};

export default Input;
