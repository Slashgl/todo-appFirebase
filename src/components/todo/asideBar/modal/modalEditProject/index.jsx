import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { editProjects } from "services";
import { getActiveIndex, getProject, getUser, changeEditProject } from "store";
import ModalInput from "../../../componentsModal/modalInput";
import styles from "./styles.module.scss";

const ModalEditProject = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const projects = getProject();
  const activeIndex = getActiveIndex();
  const user = getUser();

  const onSubmit = (data) => {
    editProjects(projects, activeIndex, dispatch, user, data);
  };

  return (
    <div className={styles.wrapper} onClick={() => dispatch(changeEditProject())}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.forEditProjects}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalInput register={register} placeholder={"Edit Project"} name={"rename"} />
        <button className={styles.btnEdit}>Edit</button>
      </form>
    </div>
  );
};

export default ModalEditProject;
