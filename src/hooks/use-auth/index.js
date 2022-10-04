import { getUser } from "store";

const useAuth = () => {
  const user = getUser();
  const { email, uid } = user;

  return {
    isAuth: !!email,
    email,
    uid,
  };
};

export default useAuth;
