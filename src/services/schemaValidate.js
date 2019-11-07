const validate = (value, key, schema) => {
  console.log(`value: ${value}`);
  console.log(`key: ${key}`);
  return schema[key]
    .validate(value)
    .then(() => {})
    .catch(err => {
      return err.message;
    });
};

export default validate;
