import {
  SET_NEW_PROJECT,
  setNewProject,
  SET_ACTIVE_INDEX,
  setActiveIndex,
  setActiveProject,
  SET_ACTIVE_PROJECT,
  SET_ACTIVE_TODO_ID,
  setActiveTodoId,
  toggleModalNewProject,
  TOGGLE_MODAL_NEW_PROJECT,
  TOGGLE_ASIDE_BAR,
  toggleAsideBar,
  TOGGLE_MODAL_EDIT_PROJECT,
  toggleModalEditProject,
} from "../actions/setNewProject";

const initialState = {
  project: [],
  activeIndex: null,
  activeProject: null,
  activeTodoId: null,
  isModalNewProject: false,
  isAsideBar: false,
  isModalEditProject: false,
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

const changeModalNewProject = () => (dispatch) => {
  dispatch(toggleModalNewProject());
};

const changeAsideBar = () => (dispatch) => {
  dispatch(toggleAsideBar());
};

const changeEditProject = () => (dispatch) => {
  dispatch(toggleModalEditProject());
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
    case TOGGLE_MODAL_NEW_PROJECT:
      return {
        ...state,
        isModalNewProject: !state.isModalNewProject,
      };
    case TOGGLE_ASIDE_BAR:
      return {
        ...state,
        isAsideBar: !state.isAsideBar,
      };
    case TOGGLE_MODAL_EDIT_PROJECT:
      return {
        ...state,
        isModalEditProject: !state.isModalEditProject,
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
  changeModalNewProject,
  changeAsideBar,
  changeEditProject,
};
