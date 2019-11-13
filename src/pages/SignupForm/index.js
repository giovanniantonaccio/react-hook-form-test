import React from 'react';
import useForm from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import schema from '../../schemas/SignupFormSchema';

import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';
import SwitchInput from '../../components/SwitchInput';
import DatePicker from '../../components/DatePicker';
import Button from '../../components/Button';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function SignupForm() {
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: 'onBlur',
  });

  const properties = {
    register,
    errors,
    clearError,
    schema,
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.tron.log(data);
  };

  return (
    <form>
      <Grid container direction="column">
        <TextInput properties={properties} field="email" label="Email" />
        <TextInput properties={properties} field="name" label="Name" />
        <TextInput
          properties={properties}
          field="amount"
          label="Amount"
          type="number"
        />
        <SelectInput
          properties={properties}
          field="currency"
          label="Currency"
          options={currencies}
        />
        <SwitchInput properties={properties} field="toggle" label="Toggle" />
        <SwitchInput
          properties={properties}
          field="toggleEdit"
          label="Toggle Edit"
          defaultValue
        />
        <DatePicker
          properties={properties}
          field="calendar"
          label="Calendar"
          defaultValue="2019-05-09T00:00:00-04:00"
          params={{
            format: 'dd/MM/yyyy',
            minDate: '2019-07-10T00:00:00-04:00',
            maxDate: '2019-12-10T00:00:00-04:00',
          }}
        />
        <DatePicker
          properties={properties}
          field="monthCalendar"
          label="Month Calendar"
          params={{
            format: 'MM/yyyy',
          }}
          views={['month', 'year']}
        />
        <Button
          handleSubmit={handleSubmit(onSubmit)}
          label="submit"
          color="primary"
        />
      </Grid>
    </form>
  );
}
