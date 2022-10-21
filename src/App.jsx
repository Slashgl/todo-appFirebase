import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, NewPassword, Registration } from "components";
import { HomePage } from "pages";
import ROUTES from "routes";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.REGISTER} element={<Registration />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.NEW_PASSWORD} element={<NewPassword />} />
      </Routes>
    </div>
  );
};

export default App;
