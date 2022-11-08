import { useSelector } from "react-redux";

export const getProject = () => useSelector((state) => state.projectReducer.project);
export const getActiveIndex = () => useSelector((state) => state.projectReducer.activeIndex);
export const getActiveProject = () => useSelector((state) => state.projectReducer.activeProject);
export const getActiveTodoId = () => useSelector((state) => state.projectReducer.activeTodoId);
export const getIsModalNewProject = () =>
  useSelector((state) => state.projectReducer.isModalNewProject);
export const getIsAsideBar = () => useSelector((state) => state.projectReducer.isAsideBar);
export const getIsEditProject = () =>
  useSelector((state) => state.projectReducer.isModalEditProject);
