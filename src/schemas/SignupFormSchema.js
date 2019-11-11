import * as Yup from "yup";
import api from "../services/api";
import { format, parse, parseISO } from "date-fns";

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
  toggle: Yup.boolean("Invalid value"),
  toggleEdit: Yup.boolean("Invalid value"),
  calendar: Yup.string().required("Date is required"),
  monthCalendar: Yup.string().required("Date is required")
};

async function NameValidation(value) {
  try {
    const result = await api.get("https://swapi.co/api/people/1/?format=json");
    if (value !== result.data.name) return "Invalid name";
  } catch (err) {
    return "Could not validate name. Network error";
  }
}

async function DateValidation(value, params) {
  const { minDate, maxDate } = params;
  const parsedDate = parse(value, "dd/MM/yyyy", new Date());
  return await Yup.date()
    .typeError("Invalid date")
    .min(minDate, `Min date is ${format(parseISO(minDate), "dd/MM/yyyy")}`)
    .max(maxDate, `Max date is ${format(parseISO(maxDate), "dd/MM/yyyy")}`)
    .validate(parsedDate)
    .then(value => {})
    .catch(err => {
      return err.message;
    });
}

async function MonthCalendarValidation(value, params) {
  const { format } = params;
  const parsedDate = parse(value, format, new Date());
  return await Yup.date()
    .typeError("Invalid date")
    .validate(parsedDate)
    .then(value => {})
    .catch(err => {
      return err.message;
    });
}

export default {
  yupValidations: SignupFormSchema,
  customValidations: {
    name: NameValidation,
    calendar: DateValidation,
    monthCalendar: MonthCalendarValidation
  }
};
