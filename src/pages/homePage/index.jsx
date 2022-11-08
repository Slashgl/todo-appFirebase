import React, { useEffect } from "react";
import ROUTES from "routes";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIsAsideBar, loadAllProjects } from "store";
import { Header, AsideBar, BoardWeekDay, Footer } from "components";
import styles from "./styles.module.scss";

const HomePage = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAsideBar = getIsAsideBar();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate(ROUTES.LOGIN);
    }
  });

  useEffect(() => {
    dispatch(loadAllProjects());
  }, []);

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={isAsideBar ? styles.hiddenAsideBar : styles.main}>
        <AsideBar />
        <BoardWeekDay />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
