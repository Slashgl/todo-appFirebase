import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { changeUser, deleteUser, getUser } from "store";

const HomePage = () => {
  const user = getUser();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(changeUser(user));
      }
    });
  }, []);

  return (
    <>
      <div>Welcome {user.email}</div>
      <button
        onClick={() => {
          dispatch(deleteUser());
          navigate("/login");
        }}
      >
        Выйти
      </button>
    </>
  );
};

export default HomePage;
