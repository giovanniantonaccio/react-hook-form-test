import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

export default function Button({ handleSubmit, label, ...rest }) {
  return (
    <MuiButton onClick={handleSubmit} variant="contained" {...rest}>
      {label}
    </MuiButton>
  );
}

Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
