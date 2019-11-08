import * as Yup from "yup";
import api from "../services/api";

const SignupFormSchema = {
  email: Yup.string()
    .required("Email is required")
    .email("Invalid format"),
  name: Yup.string()
    .required("Name is required")
    .min(5, "Min length is 5"),
  teste: Yup.string()
    .required("Name is required")
    .min(5, "Min length is 5")
};

async function NameValidation(value) {
  const result = await api.get("https://swapi.co/api/people/1/?format=json");
  console.log(result.data);
  if (value !== result.data.name) return "Nome inválido";
}

export default {
  yupValidations: SignupFormSchema,
  customValidations: {
    name: NameValidation
  }
};

// export default SignupFormSchema;
