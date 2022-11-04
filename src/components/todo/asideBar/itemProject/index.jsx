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

  const handleClickEditProject = (event) => {
    event.stopPropagation();
    dispatch(changeEditProject());
  };

  return (
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
            <img src={editProjectImg} alt={"edit"} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemProject;
