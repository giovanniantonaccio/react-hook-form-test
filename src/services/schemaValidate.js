const validate = async (value, key, schema, params) => {
  return await schema.yupValidations[key]
    .validate(value)
    .then(value => {
      if (schema.customValidations[key])
        return schema.customValidations[key](value, params);
    })
    .catch(err => err.message);
};

export default validate;
