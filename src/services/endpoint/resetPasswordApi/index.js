import { sendPasswordResetEmail } from "firebase/auth";

const resetPasswordApi = {
  sendPasswordResetEmail: (auth, email) => sendPasswordResetEmail(auth, email),
};

export default resetPasswordApi;
