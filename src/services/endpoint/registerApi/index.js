import { createUserWithEmailAndPassword } from "firebase/auth";

const registerApi = {
  createUserWithEmailAndPassword: (auth, email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
};

export default registerApi;
