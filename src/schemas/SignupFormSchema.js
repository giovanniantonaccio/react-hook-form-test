import * as Yup from "yup";
import api from "../services/api";

const SignupFormSchema = {
  email: Yup.string()
    .required("Email is required")
    .email("Invalid format"),
  name: Yup.string()
    .required("Name is required")
    .min(5, "Min length is 5"),
  amount: Yup.number()
    .required("Amount is required")
    .integer("Amount must be integer")
    .min(0, "Minimum value is 0")
    .max(10, "Maximum value is 10")
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    ),
  currency: Yup.string().min(1, "Currency is required"),
  toggle: Yup.boolean("Invalid value")
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
