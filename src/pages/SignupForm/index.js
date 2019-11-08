import React from "react";
import useForm from "react-hook-form";

import schema from "../../schemas/SignupFormSchema";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import SwitchInput from "../../components/SwitchInput";

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

  const onSubmit = (data, e) => {
    console.log("aqui");
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
          <TextInput
            errors={errors}
            register={register}
            clearError={clearError}
            field="email"
            label="Email"
            schema={schema}
          />
          <TextInput
            errors={errors}
            register={register}
            clearError={clearError}
            field="name"
            label="Name"
            schema={schema}
          />
          <SelectInput
            errors={errors}
            register={register}
            clearError={clearError}
            field="currency"
            label="Currency"
            schema={schema}
            options={currencies}
          />
          <SwitchInput
            errors={errors}
            register={register}
            field="toggle"
            label="Toggle"
            schema={schema}
            options={currencies}
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
