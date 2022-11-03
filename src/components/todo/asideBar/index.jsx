import React from "react";
import { useDispatch } from "react-redux";
import {
  changeActiveIndex,
  changeActiveProject,
  changeModalNewProject,
  getIsAsideBar,
  getIsModalNewProject,
  getProject,
  getIsEditProject,
  changeAsideBar,
  changeEditProject,
} from "store";
import ModalEditProject from "./modal/modalEditProject";
import ModalNewProject from "./modal/modalNewProject";
import { editProjectImg } from "assets";
import styles from "./styles.module.scss";

const AsideBar = ({ updateAsideBar }) => {
  const projects = getProject();
  const dispatch = useDispatch();
  const isModalNewProject = getIsModalNewProject();
  const isAsideBar = getIsAsideBar();
  const isEditProject = getIsEditProject();

  const handleClick = (project, index) => {
    dispatch(changeActiveIndex(index));
    dispatch(changeActiveProject(project));
  };

  const hiddenAsideBarMobile = () => {
    if (window.screen.width < 577) {
      dispatch(changeAsideBar());
    }
  };

  const handleClickEditProject = (event) => {
    event.stopPropagation();
    dispatch(changeEditProject());
  };

  return (
    <div className={styles.AsideBar} hidden={isAsideBar ? { left: 0 } : null}>
      <div className={styles.title}>Projects</div>
      <button className={styles.btnNewProject} onClick={() => dispatch(changeModalNewProject())}>
        New Project
      </button>
      <ul className={styles.weeks}>
        {projects?.project?.map((project, index) => (
          <li
            key={project.id}
            className={styles.item}
            onClick={() => {
              handleClick(project, index);
              hiddenAsideBarMobile();
            }}
          >
            <div className={styles.subTitle}>{project.data.project}</div>
            <button
              className={styles.options}
              onClick={(event) => {
                handleClick(project, index);
                handleClickEditProject(event);
              }}
            >
              <img src={editProjectImg} alt={"img"} />
            </button>
          </li>
        ))}
      </ul>
      {isModalNewProject && <ModalNewProject updateAsideBar={updateAsideBar} />}
      {isEditProject && <ModalEditProject />}
    </div>
  );
};

export default AsideBar;
