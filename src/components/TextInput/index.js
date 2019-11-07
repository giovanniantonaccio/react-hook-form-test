import React from "react";

import MaterialTextField from "@material-ui/core/TextField";

export default function TextField(label) {
  return (
    <MaterialTextField
      error
      id="outlined-error"
      label="Error"
      defaultValue="Hello World"
      margin="normal"
      variant="outlined"
    />
  );
}
