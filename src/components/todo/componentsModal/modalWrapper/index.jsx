import React from "react";
import styles from "./styles.module.scss";

const ModalWrapper = ({ children, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
