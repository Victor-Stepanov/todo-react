import { useState } from 'react';
import { IUseFormProps } from './useForm.props';

const useForm = (inputValues: any) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
};

export default useForm;
