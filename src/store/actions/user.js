export const SET_USER = "user/SET_USER";
export const SET_USERS_FIRESTORE = "user/SET_USERS_FIRESTORE";

export const setUsersFireStore = (payload) => ({
  type: SET_USERS_FIRESTORE,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});
