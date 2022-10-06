import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Registration, Login, NewPassword } from "components";

const App = () => {
  const registerPath = "/";
  const homePagePath = "/homePage";
  const loginPath = "/login";
  const newPasswordPath = "/reset-password";
  const registrationPage = <Registration />;
  const homePage = <HomePage />;
  const loginPage = <Login />;
  const newPasswordPage = <NewPassword />;

  return (
    <Routes>
      <Route path={registerPath} element={registrationPage} />
      <Route path={homePagePath} element={homePage} />
      <Route path={loginPath} element={loginPage} />
      <Route path={newPasswordPath} element={newPasswordPage} />
    </Routes>
  );
};

export default App;
