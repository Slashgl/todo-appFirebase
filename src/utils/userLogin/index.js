import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { changeUser } from "store";

const userLogin = async (email, password, dispatch, navigate, notificationLogin) => {
  const auth = getAuth();
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await dispatch(changeUser(user));
    navigate("/homePage");
  } catch {
    notificationLogin();
  }
};

export default userLogin;
