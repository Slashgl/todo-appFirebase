import { toast } from "react-toast";

const notificationSuccess = () => toast.success("registration was successful");
const notificationError = () => toast.error("email is registered");

export { notificationSuccess, notificationError };
