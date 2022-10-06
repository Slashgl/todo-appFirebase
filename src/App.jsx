import React from "react";
import { Routes, Route } from "react-router-dom";
import { registerPath, loginPath, newPasswordPath, homePagePath } from "utils";
import { Login, NewPassword, Registration } from "./components";
import { HomePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path={homePagePath} element={<HomePage />} />
      <Route path={registerPath} element={<Registration />} />
      <Route path={loginPath} element={<Login />} />
      <Route path={newPasswordPath} element={<NewPassword />} />
    </Routes>
  );
};

export default App;
