import React from "react";
import { useCustomer } from "../../bus/customer/hooks/useCustomer/useCustomer.ts";

export function Customer() {
  const { handleChange, values, save, userData } = useCustomer();

  return (
    <>
      <h2>Customer component</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values?.account.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values?.account.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values?.account.password}
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
