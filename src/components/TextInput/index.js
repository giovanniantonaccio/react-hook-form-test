import React from "react";
import TextField from "@material-ui/core/TextField";
import schemaValidate from "../../services/schemaValidate";

export default function TextInput({
  errors,
  register,
  clearError,
  field,
  label,
  schema,
  ...rest
}) {
  return (
    <TextField
      error={errors[field] && true}
      helperText={errors[field] && errors[field].message}
      name={field}
      id={field}
      label={label}
      defaultValue=""
      margin="normal"
      variant="outlined"
      onClick={() => clearError(field)}
      inputRef={register({
        validate: value => schemaValidate(value, field, schema)
      })}
      {...rest}
    />
  );
}
