import { useSelector } from "react-redux";

export const getUser = () => useSelector((state) => state.userReducer.user);
export const getUsers = () => useSelector((state) => state.usersReducer.users);
