import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes";
import { firestore } from "services/firebase";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addNewProject, changeUser } from "store";
import { Header, AsideBar, BoardWeekDay, Footer } from "components";
import styles from "./styles.module.scss";

const HomePage = () => {
  const [isModalNewProject, setModalNewProject] = useState(false);
  const [isActiveAsideBar, setIsActiveAsideBar] = useState(false);
  const [isModalEditProject, setModalEditProject] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const fireStore = firestore;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate(ROUTES.LOGIN);
    }
  });

  const updateAsideBar = () => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fireStore
          .collection("projects")
          .doc(user.uid)
          .get()
          .then((doc) => dispatch(addNewProject(doc.data())));
        dispatch(changeUser(user));
      }
    });
  };

  useEffect(() => {
    updateAsideBar();
  });

  return (
    <div className={styles.homePage}>
      <Header setIsActiveAsideBar={setIsActiveAsideBar} isActiveAsideBar={isActiveAsideBar} />
      <div className={styles.main}>
        <AsideBar
          setIsActiveAsideBar={setIsActiveAsideBar}
          isActiveAsideBar={isActiveAsideBar}
          setModalNewProject={setModalNewProject}
          isModalNewProject={isModalNewProject}
          updateAsideBar={updateAsideBar}
          setModalEditProject={setModalEditProject}
          isModalEditProject={isModalEditProject}
        />
        <BoardWeekDay />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
