import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const signInApi = {
  signIn: (auth, email, password) => signInWithEmailAndPassword(auth, email, password),
};

const registerApi = {
  createUsers: (auth, email, password) => createUserWithEmailAndPassword(auth, email, password),
};

export { signInApi, registerApi };
