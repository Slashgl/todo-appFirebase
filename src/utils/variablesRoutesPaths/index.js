import React from "react";
import { HomePage, Login, NewPassword, Registration } from "components";

const registerPath = "/";
const homePagePath = "/homePage";
const loginPath = "/login";
const newPasswordPath = "/reset-password";
const registrationPage = <Registration />;
const homePage = <HomePage />;
const loginPage = <Login />;
const newPasswordPage = <NewPassword />;

export {
  registrationPage,
  registerPath,
  homePage,
  homePagePath,
  loginPage,
  loginPath,
  newPasswordPage,
  newPasswordPath,
};
