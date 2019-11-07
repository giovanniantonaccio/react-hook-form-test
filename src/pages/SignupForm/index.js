import React from "react";
import useForm from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import schemaValidate from "../../services/schemaValidate";

import schema from "../../schemas/SignupFormSchema";

// And now we can use these
export default function SignupForm() {
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.email}
          helperText={errors.email && errors.email.message}
          name="email"
          id="email"
          label="Email"
          defaultValue=""
          margin="normal"
          variant="outlined"
          onClick={() => clearError("email")}
          inputRef={register({
            validate: value => schemaValidate(value, "email", schema)
          })}
        />
        <TextField
          error={errors.name}
          helperText={errors.name && errors.name.message}
          name="name"
          id="name"
          label="Name"
          defaultValue=""
          margin="normal"
          variant="outlined"
          onClick={() => clearError("email")}
          inputRef={register({
            validate: value => schemaValidate(value, "name", schema)
          })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
