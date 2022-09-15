import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.title}>Welcome Onboard!</div>
      <div className={styles.subtitle}>Lets help you in completing your tasks</div>
    </>
  );
};

export default Header;
