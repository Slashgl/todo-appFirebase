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

const validationResetPassword = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        "Mail is not entered correctly"
      ),
  });

  return { mode: "onChange", resolver: yupResolver(validationSchema) };
};

const validationDateTodo = () => {
  const validationSchema = Yup.object().shape({
    date: Yup.string()
      .required("Email is required")
      .matches(
        /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
      ),
  });

  return { mode: "onChange", resolver: yupResolver(validationSchema) };
};

export { validationLogin, validationRegister, validationResetPassword, validationDateTodo };
