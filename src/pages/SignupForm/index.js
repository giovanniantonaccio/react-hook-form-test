import React from "react";
import useForm from "react-hook-form";

import schema from "../../schemas/SignupFormSchema";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import SwitchInput from "../../components/SwitchInput";
import DatePicker from "../../components/DatePicker";

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
    console.log(`submit: ${data}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
          <TextInput props={props} field="email" label="Email" />
          <TextInput props={props} field="name" label="Name" />
          <TextInput
            props={props}
            field="amount"
            label="Amount"
            type="number"
          />
          <SelectInput
            props={props}
            field="currency"
            label="Currency"
            options={currencies}
          />
          <SwitchInput props={props} field="toggle" label="Toggle" />
          <DatePicker
            props={props}
            field="calendar"
            label="Calendar"
            params={{
              minDate: "2019-07-10T15:00:00-04:00",
              maxDate: "2019-12-10T15:00:00-04:00"
            }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}
