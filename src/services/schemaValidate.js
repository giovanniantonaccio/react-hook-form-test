const validate = async (value, key, schema) => {
  return await schema.yupValidations[key]
    .validate(value)
    .then(value => {
      if (schema.customValidations[key])
        return schema.customValidations[key](value);
    })
    .catch(err => {
      return err.message;
    });
};

export default validate;
