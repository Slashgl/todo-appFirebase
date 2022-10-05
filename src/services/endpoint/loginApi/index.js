import { signInWithEmailAndPassword } from "firebase/auth";

const signInApi = {
  signInWithEmailAndPassword: (auth, email, password) =>
    signInWithEmailAndPassword(auth, email, password),
};

export default signInApi;
