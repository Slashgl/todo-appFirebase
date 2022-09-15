import store from "./Store";
import {
  changeFullName,
  changeConfirmPassword,
  changePassword,
  changeEmail,
  dataForRegistrationReducer,
} from "./reducers/dataForRegistration";
import {
  getFullName,
  getEmail,
  getPassword,
  getConfirmPassword,
} from "./selectors/dataForRegistration";

export {
  store,
  changeFullName,
  getFullName,
  getEmail,
  getPassword,
  getConfirmPassword,
  changeEmail,
  changeConfirmPassword,
  changePassword,
  dataForRegistrationReducer,
};
