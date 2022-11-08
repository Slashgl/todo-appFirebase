import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getUser, getActiveIndex, getProject, changeModalNewItem, loadAllProjects } from "store";
import { addNewTodo } from "services";
import { validationDateTodo } from "utils";
import ModalInput from "../../../componentsModal/modalInput";
import SingleSelect from "../../../componentsModal/singleSelect";
import styles from "./styles.module.scss";

const ModalNewItem = () => {
  const dispatch = useDispatch();
  const validation = validationDateTodo();
  const { register, handleSubmit, reset, formState } = useForm(validation);
  const activeIndex = getActiveIndex();
  const user = getUser();
  const projects = getProject();

  const onSubmit = (data) => {
    addNewTodo(projects, activeIndex, data, user, dispatch);
    loadAllProjects();
    reset();
  };

  return (
    <div className={styles.wrapper} onClick={() => dispatch(changeModalNewItem())}>
      <form
        className={styles.modal}
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
      >
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
