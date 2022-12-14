import React from "react";
import { useDispatch } from "react-redux";
import {
  getActiveProject,
  changeActiveTodoId,
  changeModalNewItem,
  getIsModalNewItem,
  getIsModalDetails,
  changeModalDetails,
} from "store";
import ModalNewItem from "../asideBar/modal/modalNewItem";
import ModalDetails from "../asideBar/modal/modalDetails";
import styles from "./styles.module.scss";

const BoardWeekDay = () => {
  const activeProject = getActiveProject();
  const dispatch = useDispatch();
  const isModalNewItem = getIsModalNewItem();
  const isModalDetails = getIsModalDetails();

  const setPriorityTodo = (todo) => {
    if (todo.priority === "High Priority") {
      return styles.high;
    } else if (todo.priority === "Medium Priority") {
      return styles.medium;
    } else {
      return styles.low;
    }
  };

  const sortingByDate = (arr) => {
    return arr.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  };

  const handleClick = (todo) => {
    dispatch(changeActiveTodoId(todo.id));
  };

  return (
    <div className={styles.board}>
      {(activeProject && (
        <>
          <div className={styles.title}>{activeProject.data.project}</div>
          <button className={styles.newItem} onClick={() => dispatch(changeModalNewItem())}>
            New Item
          </button>
          <ul className={styles.todos}>
            {sortingByDate(activeProject.todos).map((todo, index) => (
              <li
                key={index}
                className={todo.checked ? styles.completed : setPriorityTodo(todo)}
                onClick={() => handleClick(todo)}
              >
                <div>{todo.todo}</div>
                <div>{todo.date}</div>
                <button className={styles.details} onClick={() => dispatch(changeModalDetails())}>
                  Details
                </button>
              </li>
            ))}
          </ul>
        </>
      )) || <div className={styles.title}>Create New Todo</div>}
      {isModalNewItem && <ModalNewItem />}
      {isModalDetails && <ModalDetails />}
    </div>
  );
};

export default BoardWeekDay;
