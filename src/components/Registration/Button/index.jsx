import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = ({ title, onClick }) => {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
