export const SET_NEW_PROJECT = "setNewProject/SET_NEW_PROJECT";
export const SET_ACTIVE_INDEX = "setNewProject/SET_ACTIVE_INDEX";
export const SET_ACTIVE_PROJECT = "setNewProject/SET_ACTIVE_PROJECT";
export const SET_ACTIVE_TODO_ID = "setNewProject/SET_ACTIVE_INDEX_TODO";
export const TOGGLE_MODAL_NEW_PROJECT = "setNewProject/TOGGLE_MODAL_NEW_PROJECT";
export const TOGGLE_ASIDE_BAR = "setNewProject/TOGGLE_ASIDE_BAR";
export const TOGGLE_MODAL_EDIT_PROJECT = "setNewProject/TOGGLE_MODAL_EDIT_PROJECT";

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

export const toggleAsideBar = () => ({
  type: TOGGLE_ASIDE_BAR,
});

export const toggleModalNewProject = () => ({
  type: TOGGLE_MODAL_NEW_PROJECT,
});

export const toggleModalEditProject = () => ({
  type: TOGGLE_MODAL_EDIT_PROJECT,
});
