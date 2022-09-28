import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>Welcome Onboard!</h1>
      <h2 className={styles.subtitle}>Lets help you in completing your tasks</h2>
    </header>
  );
};

export default Header;
