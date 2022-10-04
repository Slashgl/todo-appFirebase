import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { changeUser } from "store";

const userLogin = (email, password, dispatch, navigate, notificationLogin) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      dispatch(changeUser(user));
      navigate("/homePage");
    })
    .catch(() => {
      notificationLogin();
    });
};

export default userLogin;
