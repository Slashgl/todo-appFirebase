import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { changeModalDetails, getActiveTodoId, getProject, getUser } from "store";
import { changeCheckedTodo, deleteTodo, editTodo } from "services";
import ModalInput from "../../../componentsModal/modalInput";
import ModalWrapper from "../../../componentsModal/modalWrapper";
import SingleSelect from "../../../componentsModal/singleSelect";
import { checkedImg, deleteImg, saveImg } from "assets";
import styles from "./style.module.scss";

const ModalDetails = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const user = getUser();
  const projects = getProject();
  const activeTodoId = getActiveTodoId();

  const onSubmit = (data) => editTodo(projects, activeTodoId, user, dispatch, data);

  return (
    <ModalWrapper onClick={() => dispatch(changeModalDetails())}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.title}>Details</div>
        <ModalInput register={register} placeholder={"New Item"} name={"todo"} />
        <ModalInput register={register} placeholder={"dd/mm/yy"} name={"date"} />
        <SingleSelect register={register} />
        <textarea {...register("description")} className={styles.description} />
        <button className={styles.save}>
          <img src={saveImg} alt={"img"} />
          <div>Save</div>
        </button>
      </form>
      <button
        className={styles.checked}
        onClick={() => changeCheckedTodo(projects, user, activeTodoId, dispatch)}
      >
        <img src={checkedImg} alt={"img"} />
        Mark Done/Not Done
      </button>
      <button
        className={styles.delete}
        type={"button"}
        onClick={() => deleteTodo(projects, activeTodoId, user, dispatch)}
      >
        <img src={deleteImg} alt={"img"} />
        Delete
      </button>
    </ModalWrapper>
  );
};

export default ModalDetails;
