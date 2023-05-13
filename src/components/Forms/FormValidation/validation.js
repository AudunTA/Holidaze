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

export const validationCreateVenue = Yup.object({
  name: Yup.string().required("please enter a venue name"),
  description: Yup.string().required("please enter a description"),
  media: Yup.string(),
  price: Yup.string().required("please enter a price"),
  maxGuests: Yup.string().required("please enter max guests"),
  rating: Yup.string(),
  wifi: Yup.string(),
  parking: Yup.string(),
  breakfast: Yup.string(),
  pets: Yup.string(),
  city: Yup.string(),
});
