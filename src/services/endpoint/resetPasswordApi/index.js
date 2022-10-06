import { sendPasswordResetEmail } from "firebase/auth";

const resetPasswordApi = {
  resetPassword: (auth, email) => sendPasswordResetEmail(auth, email),
};

export { resetPasswordApi };
