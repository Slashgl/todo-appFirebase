import { toast } from "react-toast";

const notificationSuccess = () => toast.success("registration was successful");
const notificationError = () => toast.error("email is registered");
const notificationLogin = () => toast.error("invalid username or password");

export { notificationSuccess, notificationError, notificationLogin };
