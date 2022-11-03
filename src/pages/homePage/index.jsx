import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes";
import { loadAllProjects } from "store";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { Header, AsideBar, BoardWeekDay, Footer } from "components";
import styles from "./styles.module.scss";

const HomePage = () => {
  const [isModalNewProject, setModalNewProject] = useState(false);
  const [isActiveAsideBar, setIsActiveAsideBar] = useState(false);
  const [isModalEditProject, setModalEditProject] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Header setIsActiveAsideBar={setIsActiveAsideBar} isActiveAsideBar={isActiveAsideBar} />
      <div className={isActiveAsideBar ? styles.hiddenAsideBar : styles.main}>
        <AsideBar
          setIsActiveAsideBar={setIsActiveAsideBar}
          isActiveAsideBar={isActiveAsideBar}
          setModalNewProject={setModalNewProject}
          isModalNewProject={isModalNewProject}
          setModalEditProject={setModalEditProject}
          isModalEditProject={isModalEditProject}
        />
        <BoardWeekDay
          isActiveAsideBar={isActiveAsideBar}
          setIsActiveAsideBar={setIsActiveAsideBar}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
