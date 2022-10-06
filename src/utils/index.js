import { validationRegister, validationLogin, validationResetPassword } from "./validation";
import { notificationSuccess, notificationError, notificationLogin } from "./notification";
import getCollectionUsers from "./firestoreCollectionUsers";
import toUpperCase from "./utilityFunction/toUpperCase";

import { loginPath, homePagePath, registerPath, newPasswordPath } from "./variablesRoutesPaths";

export {
  validationRegister,
  validationLogin,
  notificationSuccess,
  notificationError,
  getCollectionUsers,
  notificationLogin,
  validationResetPassword,
  registerPath,
  loginPath,
  homePagePath,
  newPasswordPath,
  toUpperCase,
};
