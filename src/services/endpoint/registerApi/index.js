import { createUserWithEmailAndPassword } from "firebase/auth";

const registerApi = {
  createUsers: (auth, email, password) => createUserWithEmailAndPassword(auth, email, password),
};

export default registerApi;
