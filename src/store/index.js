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
  changeModalNewProject,
  changeAsideBar,
  changeEditProject,
} from "./reducers/newProject";
import {
  getProject,
  getActiveIndex,
  getActiveProject,
  getActiveTodoId,
  getIsModalNewProject,
  getIsAsideBar,
  getIsEditProject,
} from "./selectors/newProject";

import { getIsModalNewItem, getIsModalDetails } from "./selectors/newItemTodo";
import { changeModalNewItem, changeModalDetails } from "./reducers/newItemTodo";

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
  changeModalNewProject,
  getIsModalNewProject,
  changeAsideBar,
  getIsAsideBar,
  changeEditProject,
  getIsEditProject,
  getIsModalNewItem,
  changeModalNewItem,
  changeModalDetails,
  getIsModalDetails,
};
