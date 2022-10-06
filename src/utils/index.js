import { validationRegister, validationLogin, validationResetPassword } from "./validation";
import { notificationSuccess, notificationError, notificationLogin } from "./notification";
import getCollectionUsers from "./firestoreCollectionUsers";
import {
  registrationPage,
  homePage,
  loginPath,
  loginPage,
  homePagePath,
  newPasswordPage,
  registerPath,
  newPasswordPath,
} from "./variablesRoutesPaths";

export {
  validationRegister,
  validationLogin,
  notificationSuccess,
  notificationError,
  getCollectionUsers,
  notificationLogin,
  validationResetPassword,
  registerPath,
  homePage,
  loginPath,
  loginPage,
  homePagePath,
  registrationPage,
  newPasswordPage,
  newPasswordPath,
};
