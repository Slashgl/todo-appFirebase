import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegistrationPage, NewPasswordPage, HomePage } from "pages";
import ROUTES from "routes";

const App = () => {
  return (
    <div className={styles}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.REGISTER} element={<RegistrationPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.NEW_PASSWORD} element={<NewPasswordPage />} />
      </Routes>
    </div>
  );
};

export default App;
