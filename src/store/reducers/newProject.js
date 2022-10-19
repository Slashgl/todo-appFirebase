import {
  SET_NEW_PROJECT,
  setNewProject,
  SET_ACTIVE_INDEX,
  setActiveIndex,
  setActiveProject,
  SET_ACTIVE_PROJECT,
  SET_ACTIVE_TODO_ID,
  setActiveTodoId,
} from "../actions/setNewProject";

const initialState = {
  project: [],
  activeIndex: null,
  activeProject: null,
  activeTodoId: null,
};

const addNewProject = (project) => (dispatch) => {
  dispatch(setNewProject(project));
};

const changeActiveIndex = (index) => (dispatch) => {
  dispatch(setActiveIndex(index));
};

const changeActiveTodoId = (index) => (dispatch) => {
  dispatch(setActiveTodoId(index));
};

const changeActiveProject = (project) => (dispatch) => {
  dispatch(setActiveProject(project));
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case SET_ACTIVE_INDEX:
      return {
        ...state,
        activeIndex: action.payload,
      };
    case SET_ACTIVE_TODO_ID:
      return {
        ...state,
        activeTodoId: action.payload,
      };
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };
    default:
      return state;
  }
};

export {
  projectReducer,
  addNewProject,
  changeActiveIndex,
  changeActiveProject,
  changeActiveTodoId,
};
