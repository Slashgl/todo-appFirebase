import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const validationRegister = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .max(20, "the length of the name should not exceed 20 characters"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        "Mail is not entered correctly"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  return { mode: "onChange", resolver: yupResolver(validationSchema) };
};

const validationLogin = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        "Mail is not entered correctly"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  return { mode: "onChange", resolver: yupResolver(validationSchema) };
};

export { validationLogin, validationRegister };
