import React from "react";
import styles from "./styles.module.scss";

const ModalWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
