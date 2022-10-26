import React from "react";
import Label from "../label";
import styles from "./styles.module.scss";

const Input = ({ label, name, type, register }) => {
  return (
    <Label>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} type={type} {...register(name)} />
    </Label>
  );
};

export default Input;
