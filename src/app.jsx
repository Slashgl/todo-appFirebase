import React from "react";
import { firestore } from "./services/firebase";
import { Registration } from "components";
import { logoShape } from "./assets";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <>
      <img className={styles.img} src={logoShape} alt="img" />
      <Registration firestore={firestore} />
    </>
  );
};

export default App;
