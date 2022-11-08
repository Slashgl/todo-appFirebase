import { useSelector } from "react-redux";

export const getIsModalNewItem = () => useSelector((state) => state.newItemReducer.isModalNewItem);
export const getIsModalDetails = () => useSelector((state) => state.newItemReducer.isModalDetails);
