import React from "react";
import { setProjectAsideBar } from "services";
import { getProject, getUser } from "store";
import { useForm } from "react-hook-form";
import { ModalInput } from "components";
import styles from "./styles.module.scss";

const ModalNewProject = ({ updateAsideBar, setModalNewProject }) => {
  const { register, handleSubmit } = useForm();
  const user = getUser();
  const project = getProject() || [];

  const onSubmit = async (data) => {
    if (data.project !== "") {
      await setProjectAsideBar(user, project, data);
    }
    setModalNewProject(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
