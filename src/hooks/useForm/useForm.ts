import { useState } from "react";

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return { values, handleChange };
};
