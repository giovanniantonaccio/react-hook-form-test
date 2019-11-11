import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import schemaValidate from "../../services/schemaValidate";

export default function SwitchInput({
  props,
  field,
  label,
  defaultValue,
  params,
  ...rest
}) {
  const { register, schema } = props;

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            name={field}
            color="primary"
            defaultChecked={defaultValue}
            inputRef={register({
              validate: value => schemaValidate(value, field, schema, params)
            })}
            {...rest}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

SwitchInput.propTypes = {
  props: PropTypes.shape({
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired
  }),
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
  params: PropTypes.object
};

SwitchInput.defaultProps = {
  defaultValue: false,
  params: null
};
