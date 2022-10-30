import React from "react";
import Label from "../label";
import styles from "./styles.module.scss";

const Input = ({ register, errors, name, type, autoComplete, invalidEmail }) => {
  const capitalize = (name) => {
    return name[0] + name.slice(1);
  };

  return (
    <Label>
      <span>{capitalize(name)}</span>
      <input className={styles.input} type={type} {...register(name)} autoComplete={autoComplete} />
      <div className={styles.invalidFeedback}>{errors}</div>
      <div className={styles.invalidEmail}>{invalidEmail && "Email is registered"}</div>
    </Label>
  );
};

export default Input;
