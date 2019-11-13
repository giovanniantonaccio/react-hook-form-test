import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import schemaValidate from '../../services/schemaValidate';

export default function SelectInput({
  properties,
  field,
  label,
  options,
  defaultValue,
  params,
  ...rest
}) {
  const { register, errors, clearError, schema } = properties;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl
      variant="outlined"
      margin="normal"
      error={errors[field] && true}
    >
      <InputLabel ref={inputLabel} id={field}>
        {label}
      </InputLabel>
      <Select
        native
        name={field}
        id={field}
        label={label}
        labelWidth={labelWidth}
        defaultValue={defaultValue}
        onFocus={() => clearError(field)}
        inputRef={register({
          validate: value => schemaValidate(value, field, schema, params),
        })}
        {...rest}
      >
        <option aria-label="empty-select-option" />
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

SelectInput.propTypes = {
  properties: PropTypes.shape({
    register: PropTypes.func,
    errors: PropTypes.object,
    clearError: PropTypes.func,
    schema: PropTypes.object,
  }).isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  params: PropTypes.shape({}),
};

SelectInput.defaultProps = {
  defaultValue: '',
  params: null,
};
