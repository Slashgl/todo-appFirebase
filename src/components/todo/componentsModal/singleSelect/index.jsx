import React from "react";
import styles from "./styles.module.scss";

const SingleSelect = ({ register }) => {
  return (
    <select className={styles.select} {...register("priority")}>
      <option value="High Priority">High Priority</option>
      <option value="Medium Priority">Medium Priority</option>
      <option value="Low Priority">Low Priority</option>
    </select>
  );
};

export default SingleSelect;
