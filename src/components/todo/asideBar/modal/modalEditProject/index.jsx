import React from "react";
import { useForm } from "react-hook-form";
import { editProjects } from "services";
import { getActiveIndex, getProject, getUser } from "store";
import ModalInput from "../../../componentsModal/modalInput";
import styles from "./styles.module.scss";

const ModalEditProject = ({ setModalEditProject }) => {
  const { register, handleSubmit } = useForm();
  const projects = getProject();
  const activeIndex = getActiveIndex();
  const user = getUser();

  const onSubmit = (data) => editProjects(projects, activeIndex, user, setModalEditProject, data);

  return (
    <div className={styles.wrapper} onClick={() => setModalEditProject(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.forEditProjects}>
          <ModalInput register={register} placeholder={"Edit Project"} name={"rename"} />
          <button className={styles.btnEdit}>Edit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProject;
