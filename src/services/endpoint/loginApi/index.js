import { signInWithEmailAndPassword } from "firebase/auth";

const signInApi = {
  signIn: (auth, email, password) => signInWithEmailAndPassword(auth, email, password),
};

export default signInApi;
