import React from "react";
import { useForm } from "react-hook-form";
import { addNewTodo } from "services";
import { getUser, getActiveIndex, getProject } from "store";
import { ModalInput } from "components";
import SingleSelect from "../componentsModal/singleSelect";
import { validationDateTodo } from "utils";
import styles from "./styles.module.scss";

const ModalNewItem = ({ setModalNewItem }) => {
  const validation = validationDateTodo();
  const { register, handleSubmit, reset, formState } = useForm(validation);
  const activeIndex = getActiveIndex();
  const user = getUser();
  const projects = getProject();

  const onSubmit = (data) => {
    addNewTodo(projects, activeIndex, data, user, setModalNewItem);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.modal} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>New Item</div>
        <ModalInput register={register} placeholder={"New Item"} name={"todo"} />
        <ModalInput register={register} placeholder={"dd/mm/yy"} name={"date"} />
        <SingleSelect register={register} />
        <textarea {...register("description")} className={styles.description} />
        <button disabled={!formState.isValid} className={styles.addNewItem}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ModalNewItem;
