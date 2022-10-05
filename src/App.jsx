import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Registration, Login, NewPassword } from "components";

const App = () => {
  const register = "/";
  const homePage = "/homePage";
  const login = "/login";
  const newPassword = "/reset-password";

  return (
    <Routes>
      <Route path={register} element={<Registration />} />
      <Route path={homePage} element={<HomePage />} />
      <Route path={login} element={<Login />} />
      <Route path={newPassword} element={<NewPassword />} />
    </Routes>
  );
};

export default App;
