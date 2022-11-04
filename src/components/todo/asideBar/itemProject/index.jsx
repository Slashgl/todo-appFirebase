import React from "react";
import {
  changeActiveIndex,
  changeActiveProject,
  changeAsideBar,
  changeEditProject,
  getProject,
} from "store";
import { useDispatch } from "react-redux";
import { editProjectImg } from "assets";
import styles from "../styles.module.scss";

const ItemProject = () => {
  const dispatch = useDispatch();
  const projects = getProject();

  const handleClick = (project, index) => {
    dispatch(changeActiveIndex(index));
    dispatch(changeActiveProject(project));
  };

  const hiddenAsideBarMobile = () => {
    if (window.screen.width < 577) {
      dispatch(changeAsideBar());
    }
  };

  const handleClickEditProject = (event, project, index) => {
    event.stopPropagation();
    dispatch(changeEditProject());
    handleClick(project, index);
  };

  const handleClickProject = (project, index) => {
    handleClick(project, index);
    hiddenAsideBarMobile();
  };

  return (
    <ul className={styles.weeks}>
      {projects?.project?.map((project, index) => (
        <li
          key={project.id}
          className={styles.item}
          onClick={() => {
            handleClickProject(project, index);
          }}
        >
          <div className={styles.subTitle}>{project.data.project}</div>
          <button
            className={styles.options}
            onClick={(event) => {
              handleClickEditProject(event, project, index);
            }}
          >
            <img src={editProjectImg} alt={"edit"} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemProject;
