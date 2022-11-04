import React from "react";
import { setProjectAsideBar } from "services";
import { changeModalNewProject, getProject, getUser, loadAllProjects } from "store";
import { useForm } from "react-hook-form";
import ModalInput from "../../../componentsModal/modalInput";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";

const ModalNewProject = () => {
  const { register, handleSubmit } = useForm();
  const user = getUser();
  const dispatch = useDispatch();
  const project = getProject() || [];

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
          <button className={styles.btnProject}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default ModalNewProject;
