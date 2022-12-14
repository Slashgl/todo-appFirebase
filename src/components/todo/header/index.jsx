import React from "react";
import ROUTES from "routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeActiveProject, changeAsideBar, deleteUser } from "store";
import { todoImg, menuBtn } from "assets";
import styles from "./styles.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearingStore = () => {
    dispatch(changeActiveProject(null));
  };

  const logOut = () => {
    dispatch(deleteUser());
    navigate(ROUTES.LOGIN);
    clearingStore();
  };

  return (
    <div className={styles.header}>
      <img
        src={menuBtn}
        className={styles.menu}
        alt="menu"
        onClick={() => dispatch(changeAsideBar())}
      />
      <div className={styles.title}>
        <img src={todoImg} alt="todo" className={styles.headerIcon} />
        <h1 className={styles.title}>Your Todo</h1>
      </div>
      <button className={styles.logOut} onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};

export default Header;
