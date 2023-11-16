import * as yup from "yup";
const isRequiredError = "This field is required";
const STR_REGEX = /^[a-zа-яё]+$/i;

export const BLOG_POST_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .min(1, "Write normal title")
    .max(100, "Too Long")
    .typeError("Write Real title")
    .required(isRequiredError),
  author: yup
    .string()
    .min(2, "Write Real Name")
    .max(20, "Too Long")
    .typeError("Write Real Name")
    .required(isRequiredError)
    .matches(STR_REGEX, "Invalid symbols, use only character"),
  date: yup
    .string()
    .min(1, "Too Short")
    .max(15, "Too Long")
    .required(isRequiredError),
  time: yup
    .string()
    .min(1, "Too Short")
    .max(5, "Too Long")
    .required(isRequiredError),
  thumbnail: yup
    .string()
    .min(5, "Write Real Address")
    .max(50, "Too Long")
    .required(isRequiredError),
  content: yup.string().min(10, "Write more"),
});

export const USER_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .min(6, "Write normal name(min 6 characters)")
    .max(100, "Too Long")
    .typeError("Write Real name")
    .required(isRequiredError),
  email: yup
    .string()
    .min(2, "Write Real email")
    .email("Must be a valid email")
    .max(255)
    .typeError("Write Real email")
    .required(isRequiredError),
  password: yup
    .string()
    .min(4, "Too Short")
    .max(255, "Too Long")
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
