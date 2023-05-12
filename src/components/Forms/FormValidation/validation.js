import * as Yup from "yup";

export const validationSignUp = Yup.object({
  email: Yup.string()
    .required()
    .matches(
      /^[\w\-.]+@(stud\.)?noroff\.no$/,
      "please enter a valid @stud.noroff email"
    ),
  name: Yup.string()
    .required("name is required")
    .max(20, "name must be less than 20 characters"),
  password: Yup.string()
    .required()
    .min(8, "Password must be more than 8 characters."),
  avatar: Yup.string(),
});

export const validationLogIn = Yup.object({
  email: Yup.string().required("please enter your email"),
  password: Yup.string().required("please enter your password"),
});
