import React from "react";
import { firestore } from "./services/firebase";
import { Registration } from "components";
import { logoShape } from "./assets";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={logoShape} alt="img" />
      <Registration firestore={firestore} />
    </div>
  );
};

export default App;
