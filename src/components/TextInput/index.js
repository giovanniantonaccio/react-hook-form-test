import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import schemaValidate from "../../services/schemaValidate";

export default function TextInput({
  props,
  field,
  label,
  defaultValue,
  params,
  ...rest
}) {
  const { register, errors, clearError, schema } = props;

  return (
    <TextField
      error={errors[field] && true}
      helperText={errors[field] && errors[field].message}
      name={field}
      id={field}
      label={label}
      defaultValue={defaultValue}
      margin="normal"
      variant="outlined"
      onBlur={() => clearError(field)}
      inputRef={register({
        validate: value => schemaValidate(value, field, schema, params)
      })}
      {...rest}
    />
  );
}

TextInput.propTypes = {
  props: PropTypes.shape({
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired
  }),
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  params: PropTypes.object
};

TextInput.defaultProps = {
  type: "text",
  defaultValue: "",
  params: null
};
