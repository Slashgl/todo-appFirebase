import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "store";

const HomePage = () => {
  const user = getUser();
  const navigate = useNavigate();
  const isAuth = !!user.email;

  useEffect(() => {
    !isAuth && navigate("/login");
  }, [!isAuth]);

  return isAuth && <div>Welcome {user.email}</div>;
};

export default HomePage;
