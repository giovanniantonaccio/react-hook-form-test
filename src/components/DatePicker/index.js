import React, { useState } from 'react';
import schemaValidate from '../../services/schemaValidate';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function DatePicker({
  errors,
  register,
  clearError,
  field,
  label,
  schema,
  ...rest
}) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        error={errors[field] && true}
        helperText={errors[field] && errors[field].message}
        name={field}
        id={field}
        label={label}
        // views={["year", "month"]}
        format="DD/MM/YYYY"
        margin="normal"
        disableToolbar
        inputVariant="outlined"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        onClick={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema),
        })}
        // value={this.state.lastDateSelected}
        // onChange={this.handleDateChange}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
}
