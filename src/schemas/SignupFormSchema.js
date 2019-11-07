import * as Yup from "yup";

const SignupFormSchema = {
  email: Yup.string()
    .required("Email is required")
    .email("Invalid format"),
  name: Yup.string()
    .required("Name is required")
    .min(5, "Min length is 5")
};

export default SignupFormSchema;
