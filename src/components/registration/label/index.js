import React from "react";
import styles from "./styles.module.scss";

const Label = ({ children }) => {
  return <label className={styles.wrapper}>{children}</label>;
};

export default Label;
