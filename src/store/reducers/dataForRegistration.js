import {
  setNameForRegistration,
  SET_NAME_FOR_REGISTRATION,
  setEmailForRegistration,
  SET_EMAIL_FOR_REGISTRATION,
  setPasswordForRegistration,
  SET_PASSWORD_FOR_REGISTRATION,
  setConfirmPasswordForRegistration,
  SET_CONFIRM_PASSWORD_FOR_REGISTRATION,
} from "../actions/dataForRegistration";

const initialState = {
  FullName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};

const changeFullName = (value) => (dispatch) => {
  dispatch(setNameForRegistration(value));
};

const changeEmail = (value) => (dispatch) => {
  dispatch(setEmailForRegistration(value));
};

const changePassword = (value) => (dispatch) => {
  dispatch(setPasswordForRegistration(value));
};

const changeConfirmPassword = (value) => (dispatch) => {
  dispatch(setConfirmPasswordForRegistration(value));
};

const dataForRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_FOR_REGISTRATION:
      return {
        ...state,
        FullName: action.payload,
      };
    case SET_EMAIL_FOR_REGISTRATION:
      return {
        ...state,
        Email: action.payload,
      };
    case SET_PASSWORD_FOR_REGISTRATION:
      return {
        ...state,
        Password: action.payload,
      };
    case SET_CONFIRM_PASSWORD_FOR_REGISTRATION:
      return {
        ...state,
        ConfirmPassword: action.payload,
      };
    default:
      return state;
  }
};

export {
  dataForRegistrationReducer,
  changeFullName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
};
