export const SET_NAME_FOR_REGISTRATION = "dataForRegistration/SET_DATA_FOR_REGISTRATION";
export const SET_EMAIL_FOR_REGISTRATION = "dataForRegistration/SET_EMAIL_FOR_REGISTRATION";
export const SET_PASSWORD_FOR_REGISTRATION = "dataForRegistration/SET_PASSWORD_FOR_REGISTRATION";
export const SET_CONFIRM_PASSWORD_FOR_REGISTRATION =
  "dataForRegistration/SET_CONFIRM_PASSWORD_FOR_REGISTRATION";

export const setNameForRegistration = (payload) => ({
  type: SET_NAME_FOR_REGISTRATION,
  payload,
});

export const setEmailForRegistration = (payload) => ({
  type: SET_EMAIL_FOR_REGISTRATION,
  payload,
});

export const setPasswordForRegistration = (payload) => ({
  type: SET_PASSWORD_FOR_REGISTRATION,
  payload,
});

export const setConfirmPasswordForRegistration = (payload) => ({
  type: SET_CONFIRM_PASSWORD_FOR_REGISTRATION,
  payload,
});
