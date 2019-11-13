import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import schemaValidate from '../../services/schemaValidate';

export default function TextInput({
  properties,
  field,
  label,
  defaultValue,
  params,
  ...rest
}) {
  const { register, errors, clearError, schema } = properties;
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
      onFocus={() => clearError(field)}
      inputRef={register({
        validate: value => schemaValidate(value, field, schema, params),
      })}
      {...rest}
    />
  );
}

TextInput.propTypes = {
  properties: PropTypes.shape({
    register: PropTypes.func,
    errors: PropTypes.object,
    clearError: PropTypes.func,
    schema: PropTypes.shape({
      yupValidations: PropTypes.object,
      customValidations: PropTypes.object,
    }),
  }).isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  params: PropTypes.shape(),
};

TextInput.defaultProps = {
  type: 'text',
  defaultValue: '',
  params: null,
};
