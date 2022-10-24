export const SET_USER = "user/SET_USER";
export const REMOVE_USER = "user/REMOVE_USER";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const removeUser = (payload) => ({
  type: REMOVE_USER,
  payload,
});
