import React from "react";
import ROUTES from "routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "store";
import { todoImg, menuBtn } from "assets";
import styles from "./styles.module.scss";

const Header = ({ setIsActiveAsideBar, isActiveAsideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(deleteUser());
    navigate(ROUTES.LOGIN);
    window.location.reload();
  };

  return (
    <div className={styles.header}>
      <img
        src={menuBtn}
        className={styles.menu}
        alt="img"
        onClick={() => setIsActiveAsideBar(!isActiveAsideBar)}
      />
      <div className={styles.title}>
        <img src={todoImg} alt="img" className={styles.headerIcon} />
        <h1>Your Todo</h1>
      </div>
      <button className={styles.logOut} onClick={() => logOut()}>
        LogOut
      </button>
    </div>
  );
};

export default Header;
