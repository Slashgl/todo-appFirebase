import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { changeUser } from "store";

const userRegistration = async (email, password, dispatch, navigate) => {
  const auth = getAuth();
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await dispatch(changeUser(user));
    navigate("/homePage");
  } catch (e) {
    console.log(e);
  }
};

export default userRegistration;
