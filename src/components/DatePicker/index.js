import React, { useState } from "react";
import PropTypes from "prop-types";
import schemaValidate from "../../services/schemaValidate";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export default function DatePicker({
  props,
  field,
  label,
  defaultValue,
  params,
  ...rest
}) {
  console.log(defaultValue);
  const { register, errors, clearError, schema } = props;
  const [selectedDate, handleDateChange] = useState(defaultValue);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        error={errors[field] && true}
        helperText={errors[field] && errors[field].message}
        name={field}
        id={field}
        label={label}
        locale="pt"
        margin="normal"
        disableToolbar
        inputVariant="outlined"
        format={params.format}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        onBlur={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema, params)
        })}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  props: PropTypes.shape({
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired
  }),
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  params: PropTypes.object
};

DatePicker.defaultProps = {
  defaultValue: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"),
  params: null
};
