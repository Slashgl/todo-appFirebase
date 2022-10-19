export const SET_NEW_PROJECT = "setNewProject/SET_NEW_PROJECT";
export const SET_ACTIVE_INDEX = "setNewProject/SET_ACTIVE_INDEX";
export const SET_ACTIVE_PROJECT = "setNewProject/SET_ACTIVE_PROJECT";
export const SET_ACTIVE_TODO_ID = "setNewProject/SET_ACTIVE_INDEX_TODO";

export const setActiveProject = (payload) => ({
  type: SET_ACTIVE_PROJECT,
  payload,
});

export const setActiveIndex = (payload) => ({
  type: SET_ACTIVE_INDEX,
  payload,
});

export const setActiveTodoId = (payload) => ({
  type: SET_ACTIVE_TODO_ID,
  payload,
});

export const setNewProject = (payload) => ({
  type: SET_NEW_PROJECT,
  payload,
});
