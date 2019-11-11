import React from "react";
import useForm from "react-hook-form";

import schema from "../../schemas/SignupFormSchema";

import Grid from "@material-ui/core/Grid";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import SwitchInput from "../../components/SwitchInput";
import DatePicker from "../../components/DatePicker";
import Button from "../../components/Button";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

export default function SignupForm() {
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: "onBlur"
  });

  const props = {
    register,
    errors,
    clearError,
    schema
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form>
      <Grid container direction="column">
        <TextInput props={props} field="email" label="Email" />
        <TextInput props={props} field="name" label="Name" />
        <TextInput props={props} field="amount" label="Amount" type="number" />
        <SelectInput
          props={props}
          field="currency"
          label="Currency"
          options={currencies}
        />
        <SwitchInput props={props} field="toggle" label="Toggle" />
        <SwitchInput
          props={props}
          field="toggleEdit"
          label="Toggle Edit"
          defaultValue={true}
        />
        <DatePicker
          props={props}
          field="calendar"
          label="Calendar"
          // defaultValue="2019-05-09T00:00:00-04:00"
          params={{
            format: "dd/MM/yyyy",
            minDate: "2019-07-10T00:00:00-04:00",
            maxDate: "2019-12-10T00:00:00-04:00"
          }}
        />
        <DatePicker
          props={props}
          field="monthCalendar"
          label="Month Calendar"
          params={{
            format: "MM/yyyy"
          }}
          views={["month", "year"]}
        />
        <Button
          handleSubmit={handleSubmit(onSubmit)}
          label="submit"
          color="primary"
        />
      </Grid>
    </form>
  );
}
