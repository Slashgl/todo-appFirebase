import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getActiveProject, changeActiveTodoId } from "store";
import ModalNewItem from "../modalNewItem";
import ModalDetails from "../modalDetails";
import styles from "./styles.module.scss";

const BoardWeekDay = () => {
  const [isModalNewItem, setModalNewItem] = useState(false);
  const [isModalDetails, setModalDetails] = useState(false);
  const activeProject = getActiveProject();
  const dispatch = useDispatch();

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
          <h1 className={styles.title}>{activeProject.data.project}</h1>
          <button className={styles.newItem} onClick={() => setModalNewItem(true)}>
            New Item
          </button>
          <ul className={styles.todos}>
            {sortingByDate(activeProject.todos).map((todo, index) => (
              <li
                key={index}
                className={(todo.checked && styles.completed) || setPriorityTodo(todo)}
                onClick={() => handleClick(todo)}
              >
                <div>{todo.todo}</div>
                <div>{todo.date}</div>
                <button className={styles.details} onClick={() => setModalDetails(true)}>
                  Details
                </button>
              </li>
            ))}
          </ul>
        </>
      )) || <div className={styles.title}>Create New Todo</div>}
      {isModalNewItem && <ModalNewItem setModalNewItem={setModalNewItem} />}
      {isModalDetails && <ModalDetails setModalDetails={setModalDetails} />}
    </div>
  );
};

export default BoardWeekDay;
