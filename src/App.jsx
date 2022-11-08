import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages";
import ROUTES from "routes";
import { Registration, Login, NewPassword } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<Registration />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.NEW_PASSWORD} element={<NewPassword />} />
    </Routes>
  );
};

export default App;
