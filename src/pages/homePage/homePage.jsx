import React from "react";
import { getUser } from "store";

const HomePage = () => {
  const user = getUser();
  return <div>Welcome {user.email}</div>;
};

export default HomePage;
