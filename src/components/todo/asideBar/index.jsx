import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeActiveIndex, changeActiveProject, getProject } from "store";
import ModalEditProject from "./modal/modalEditProject";
import ModalNewProject from "./modal/modalNewProject";
import { editProjectImg } from "assets";
import styles from "./styles.module.scss";

const AsideBar = ({
  setModalNewProject,
  isModalNewProject,
  updateAsideBar,
  isActiveAsideBar,
  setIsActiveAsideBar,
}) => {
  const [isModalEditProject, setModalEditProject] = useState(false);
  const projects = getProject();
  const dispatch = useDispatch();

  const handleClick = (project, index) => {
    dispatch(changeActiveIndex(index));
    dispatch(changeActiveProject(project));
  };

  const hiddenAsideBarMobile = () => {
    if (window.screen.width < 577) {
      setIsActiveAsideBar(!isActiveAsideBar);
    }
  };

  const handleClickEditProject = (event) => {
    event.stopPropagation();
    setModalEditProject(true);
  };

  return (
    <div className={styles.AsideBar} hidden={isActiveAsideBar ? { left: 0 } : null}>
      <div className={styles.title}>Projects</div>
      <button className={styles.btnNewProject} onClick={() => setModalNewProject(true)}>
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
            <div className={styles.subTitle} onClick={() => setIsActiveAsideBar(false)}>
              {project.data.project}
            </div>
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
      {isModalNewProject && (
        <ModalNewProject updateAsideBar={updateAsideBar} setModalNewProject={setModalNewProject} />
      )}
      {isModalEditProject && <ModalEditProject setModalEditProject={setModalEditProject} />}
    </div>
  );
};

export default AsideBar;
