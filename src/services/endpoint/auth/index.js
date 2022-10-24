import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const authApi = {
  signIn: (auth, email, password) => signInWithEmailAndPassword(auth, email, password),
  createUsers: (auth, email, password) => createUserWithEmailAndPassword(auth, email, password),
  resetPassword: (auth, email) => sendPasswordResetEmail(auth, email),
};

export { authApi };
