import React from "react";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  return (isAuth && <div>Welcome {email}</div>) || navigate("/");
};

export default HomePage;
