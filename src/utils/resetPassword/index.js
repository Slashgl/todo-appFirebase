import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { changeUser } from "store";

const resetPassword = async (email, dispatch, reset, navigate) => {
  const auth = getAuth();
  try {
    sendPasswordResetEmail(auth, email).then(() => {
      dispatch(changeUser(email));
      reset();
      navigate("/login");
    });
  } catch (err) {
    alert(err.message);
  }
};

export default resetPassword;
