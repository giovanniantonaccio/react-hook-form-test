const validate = async (value, key, schema, params) => {
  return schema.yupValidations[key]
    .validate(value)
    .then(v => {
      if (schema.customValidations[key])
        return schema.customValidations[key](v, params);

      return null;
    })
    .catch(err => err.message);
};

export default validate;
