import React from "react";
import Label from "./label";
import styles from "./styles.module.scss";

const Input = ({ register, name, errors, nameRegister }) => {
  return (
    <Label>
      <span>{name}</span>
      <input type="text" {...register(nameRegister)} />
      <div className={styles.invalidFeedback}>{errors}</div>
    </Label>
  );
};

export default Input;
