import React from "react";
import styles from "./styles.module.scss";

const Header = ({ title, subTitle, img }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subTitle}</div>
      {img ? <img src={img} alt="login" /> : null}
    </div>
  );
};

export default Header;
