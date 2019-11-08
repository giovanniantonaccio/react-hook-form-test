import React from "react";
import useForm from "react-hook-form";

import schema from "../../schemas/SignupFormSchema";

import TextInput from "../../components/TextInput";

export default function SignupForm() {
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          errors={errors}
          register={register}
          clearError={clearError}
          field="email"
          label="Email"
          schema={schema}
        />
        <TextInput
          errors={errors}
          register={register}
          clearError={clearError}
          field="name"
          label="Name"
          schema={schema}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
