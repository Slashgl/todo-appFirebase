import React from "react";
import { useDispatch } from "react-redux";
import {
  changeModalNewProject,
  getIsAsideBar,
  getIsModalNewProject,
  getIsEditProject,
} from "store";
import ItemProject from "./itemProject";
import ModalEditProject from "./modal/modalEditProject";
import ModalNewProject from "./modal/modalNewProject";
import styles from "./styles.module.scss";

const AsideBar = () => {
  const dispatch = useDispatch();
  const isModalNewProject = getIsModalNewProject();
  const isAsideBar = getIsAsideBar();
  const isEditProject = getIsEditProject();

  return (
    <div className={isAsideBar ? styles.hidden : styles.AsideBar}>
      <div className={styles.title}>Projects</div>
      <button className={styles.btnNewProject} onClick={() => dispatch(changeModalNewProject())}>
        New Project
      </button>
      <ItemProject />
      {isModalNewProject && <ModalNewProject />}
      {isEditProject && <ModalEditProject />}
    </div>
  );
};

export default AsideBar;
