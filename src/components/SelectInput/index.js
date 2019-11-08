import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import schemaValidate from "../../services/schemaValidate";

export default function TextInput({
  errors,
  register,
  clearError,
  field,
  label,
  schema,
  options,
  ...rest
}) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" error={errors[field] && true}>
      <InputLabel ref={inputLabel} id={field}>
        {label}
      </InputLabel>
      <Select
        native
        name={field}
        id={field}
        label={label}
        labelWidth={labelWidth}
        onClick={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema)
        })}
        {...rest}
      >
        <option />
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      {errors[field] && (
        <FormHelperText>{errors[field].message}</FormHelperText>
      )}
    </FormControl>
  );
}
