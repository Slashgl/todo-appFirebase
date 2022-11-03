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

const AsideBar = ({ updateAsideBar }) => {
  const dispatch = useDispatch();
  const isModalNewProject = getIsModalNewProject();
  const isAsideBar = getIsAsideBar();
  const isEditProject = getIsEditProject();

  return (
    <div className={styles.AsideBar} hidden={isAsideBar ? { left: 0 } : null}>
      <div className={styles.title}>Projects</div>
      <button className={styles.btnNewProject} onClick={() => dispatch(changeModalNewProject())}>
        New Project
      </button>
      <ItemProject />
      {isModalNewProject && <ModalNewProject updateAsideBar={updateAsideBar} />}
      {isEditProject && <ModalEditProject />}
    </div>
  );
};

export default AsideBar;
