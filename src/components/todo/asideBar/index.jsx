import React from "react";
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
  setModalEditProject,
  isModalEditProject,
}) => {
  const projects = getProject();
  const dispatch = useDispatch();

  const handleClick = (project, index) => {
    dispatch(changeActiveIndex(index));
    dispatch(changeActiveProject(project));
  };

  return (
    <div className={styles.AsideBar} hidden={isActiveAsideBar ? { left: 0 } : null}>
      <h1 className={styles.title}>Projects</h1>
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
              setIsActiveAsideBar(!isActiveAsideBar);
            }}
          >
            <div className={styles.subTitle} onClick={() => setIsActiveAsideBar(false)}>
              {project.data.project}
            </div>
            <button
              className={styles.options}
              onClick={(event) => {
                event.stopPropagation();
                handleClick(project, index);
                setModalEditProject(true);
              }}
            >
              <img src={editProjectImg} alt="img" />
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
