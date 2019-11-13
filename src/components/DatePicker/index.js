import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import schemaValidate from '../../services/schemaValidate';

export default function DatePicker({
  properties,
  field,
  label,
  defaultValue,
  params,
  ...rest
}) {
  const { register, errors, clearError, schema } = properties;
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
        onChange={date => {
          handleDateChange(date);
        }}
        onFocus={() => clearError(field)}
        onOpen={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema, params),
        })}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  properties: PropTypes.shape({
    register: PropTypes.func,
    errors: PropTypes.object,
    clearError: PropTypes.func,
    schema: PropTypes.object,
  }).isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  params: PropTypes.shape(),
};

DatePicker.defaultProps = {
  defaultValue: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"),
  params: null,
};
