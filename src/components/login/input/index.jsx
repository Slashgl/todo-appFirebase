import React from "react";
import styles from "./styles.module.scss";

const Input = ({ label, name, type, register }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <input type={type} {...register(name)} />
    </>
  );
};

export default Input;
