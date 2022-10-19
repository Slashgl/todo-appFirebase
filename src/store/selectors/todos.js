import { useSelector } from "react-redux";

export const getTodos = () => useSelector((state) => state.userReducer.todos);
