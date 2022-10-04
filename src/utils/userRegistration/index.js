import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { changeUser } from "store";

const userRegistration = (email, password, dispatch, navigate) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      dispatch(changeUser(user));
      navigate("/homePage");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export default userRegistration;
