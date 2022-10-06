import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  registerPath,
  homePage,
  registrationPage,
  loginPage,
  loginPath,
  newPasswordPath,
  newPasswordPage,
  homePagePath,
} from "utils";

const App = () => {
  return (
    <Routes>
      <Route path={homePagePath} element={homePage} />
      <Route path={registerPath} element={registrationPage} />
      <Route path={loginPath} element={loginPage} />
      <Route path={newPasswordPath} element={newPasswordPage} />
    </Routes>
  );
};

export default App;
