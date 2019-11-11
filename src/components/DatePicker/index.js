import React, { useState } from "react";
import schemaValidate from "../../services/schemaValidate";
import DateFnsUtils from "@date-io/date-fns";
import pt from "date-fns/locale/pt";
// import moment from "moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export default function DatePicker({ props, field, label, ...rest }) {
  const { register, errors, clearError, schema } = props;
  const [selectedDate, handleDateChange] = useState(new Date());

  // console.log(errors);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
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
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        onClick={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema, rest.params)
        })}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
}
