import React from "react";
import Label from "./label";
import styles from "./styles.module.scss";

const Input = ({ register, label, errors, name }) => {
  return (
    <Label>
      <span>{label}</span>
      <input type="text" {...register(name)} />
      <div className={styles.invalidFeedback}>{errors}</div>
    </Label>
  );
};

export default Input;
