import React from "react";
import { setProjectAsideBar } from "services";
import { changeModalNewProject, getProject, getUser, loadAllProjects } from "store";
import { useForm } from "react-hook-form";
import ModalInput from "../../../componentsModal/modalInput";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";

const ModalNewProject = ({ updateAsideBar }) => {
  const { register, handleSubmit } = useForm();
  const user = getUser();
  const dispatch = useDispatch();
  const project = getProject() || [];
  console.log(project);

  const onSubmit = (data) => {
    if (data.project !== "") {
      setProjectAsideBar(user, project, data);
    }
    loadAllProjects();
    dispatch(changeModalNewProject());
  };

  return (
    <div className={styles.wrapper} onClick={() => dispatch(changeModalNewProject())}>
      <div className={styles.modal}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalInput register={register} name={"project"} placeholder={"New Project"} />
          <button className={styles.btnProject} onClick={updateAsideBar}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalNewProject;
