import React from "react";
import styles from "./styles.module.scss";

const ButtonSubmitForm = ({ title, formState }) => {
  return (
    <button className={styles.button} type="submit" disabled={formState}>
      {title}
    </button>
  );
};

export default ButtonSubmitForm;
