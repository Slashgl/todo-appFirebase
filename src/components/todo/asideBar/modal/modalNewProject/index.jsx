import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firestore } from "services/firebase";
import { setProjectAsideBar } from "services";
import { addNewProject, changeModalNewProject, changeUser, getProject, getUser } from "store";
import { useForm } from "react-hook-form";
import ModalInput from "../../../componentsModal/modalInput";
import styles from "./styles.module.scss";

const ModalNewProject = () => {
  const { register, handleSubmit } = useForm();
  const user = getUser();
  const dispatch = useDispatch();
  const project = getProject() || [];

  const updateAsideBar = () => {
    const auth = getAuth();

    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        await firestore
          .collection("projects")
          .doc(user.uid)
          .get()
          .then((doc) => dispatch(addNewProject(doc.data())));
        dispatch(changeUser(user));
      }
    });
  };

  const onSubmit = (data) => {
    if (data.project !== "") {
      setProjectAsideBar(user, project, data);
    }
    updateAsideBar();
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
