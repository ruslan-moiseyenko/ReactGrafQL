import React from "react";
import { useCustomer } from "../../hooks/useCustomer/useCustomer.ts";
import { useForm } from "../../hooks/useForm/useForm.ts";

const initialFormState = {
  name: "",
  username: "",
  password: ""
};

export function Customer() {
  const { values, handleChange } = useForm(initialFormState);
  const { save, userData } = useCustomer(values);

  return (
    <>
      <h2>Create Customer component</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values?.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values?.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values?.password}
          onChange={handleChange}
        />
        <button type="button" onClick={save}>
          Save
        </button>
        <h3>Created account data:</h3>
        <p>Name is: {userData?.name}</p>
        <p>Username is: {userData?.username}</p>
        <p>Creation date is: {userData?.dateCreated}</p>
      </div>
    </>
  );
}
