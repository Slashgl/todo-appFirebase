import store from "./Store";
import { userReducer, changeUser, deleteUser, addNewItemTodo } from "./reducers/user";
import { changeUsers } from "./reducers/usersFirestore";
import { getUser, getUsers } from "./selectors/usersFirestore";
import { getTodos } from "./selectors/todos";
import {
  addNewProject,
  projectReducer,
  changeActiveIndex,
  changeActiveProject,
  changeActiveTodoId,
} from "./reducers/newProject";
import {
  getProject,
  getActiveIndex,
  getActiveProject,
  getActiveTodoId,
} from "./selectors/newProject";

import { loadAllProjects } from "./actions/asyncAction/loadAllProjects";

export {
  store,
  userReducer,
  getUser,
  changeUser,
  changeUsers,
  getUsers,
  deleteUser,
  addNewItemTodo,
  getTodos,
  projectReducer,
  addNewProject,
  getProject,
  changeActiveIndex,
  getActiveIndex,
  changeActiveProject,
  getActiveProject,
  changeActiveTodoId,
  getActiveTodoId,
  loadAllProjects,
};
