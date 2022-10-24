import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegistrationPage, LogInPage, NewPasswordPage, HomePage } from "pages";
import ROUTES from "routes";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegistrationPage />} />
      <Route path={ROUTES.LOGIN} element={<LogInPage />} />
      <Route path={ROUTES.NEW_PASSWORD} element={<NewPasswordPage />} />
    </Routes>
  );
};

export default App;
