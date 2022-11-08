import React from "react";
import styles from "./styles.module.scss";

const ModalInput = ({ placeholder, register, name }) => {
  return <input placeholder={placeholder} className={styles.newItemTitle} {...register(name)} />;
};

export default ModalInput;
