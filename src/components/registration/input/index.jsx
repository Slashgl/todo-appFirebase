import React from "react";
import Label from "./label";
import styles from "./styles.module.scss";

const Input = ({ register, label, errors, name, type, autoComplete }) => {
  return (
    <Label>
      <span>{label}</span>
      <input type={type} {...register(name)} autoComplete={autoComplete} />
      <div className={styles.invalidFeedback}>{errors}</div>
    </Label>
  );
};

export default Input;
