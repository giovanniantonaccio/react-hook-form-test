import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import schemaValidate from "../../services/schemaValidate";

export default function SwitchLabels({
  errors,
  register,
  clearError,
  field,
  label,
  schema,
  options,
  ...rest
}) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            name={field}
            color="primary"
            inputRef={register({
              validate: value => schemaValidate(value, field, schema)
            })}
          />
        }
        label="Primary"
      />
    </FormGroup>
  );
}
