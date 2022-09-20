import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const validator = () => {
  const validationSchema = Yup.object().shape({
    FullName: Yup.string()
      .required("Full name is required")
      .max(20, "the length of the name should not exceed 20 characters"),

    Email: Yup.string()
      .required("Email is required")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        "Mail is not entered correctly"
      ),
    Password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    ConfirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("Password")], "Passwords must match"),
  });

  return { mode: "onChange", resolver: yupResolver(validationSchema) };
};

export default validator;
