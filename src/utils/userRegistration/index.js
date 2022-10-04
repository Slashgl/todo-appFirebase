import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const userRegistration = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {});
};

export default userRegistration;
