import React from "react";
import { logoLogin } from "assets";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Welcome Back!</h1>
      <img src={logoLogin} alt="img" />
    </div>
  );
};

export default Header;
