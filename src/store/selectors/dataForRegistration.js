import { useSelector } from "react-redux";

export const getFullName = () => useSelector((state) => state.dataForRegistrationReducer.FullName);
export const getEmail = () => useSelector((state) => state.dataForRegistrationReducer.Email);
export const getPassword = () => useSelector((state) => state.dataForRegistrationReducer.Password);
export const getConfirmPassword = () =>
  useSelector((state) => state.dataForRegistrationReducer.ConfirmPassword);
