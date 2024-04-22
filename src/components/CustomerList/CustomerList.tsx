import React from "react";
import { useQueryAllCustomers } from "../../bus/customer/hooks/useQueryAllCustomers/useQueryAllCustomers.ts";

export function CustomerList() {
  const { allCustomers, loading, error } = useQueryAllCustomers();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>We have a problem:</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <h1>Customer list</h1>
      {allCustomers.map((customer) => (
        <div key={`${customer.dateCreated}${customer.username}`}>
          <span style={{ marginRight: "10px" }}>Username is:</span>
          <span style={{ fontWeight: 600 }}>{customer.username}</span>
          <span style={{ marginRight: "10px" }}>Name is:</span>
          <span style={{ fontWeight: 600 }}>{customer.name}</span>
          <span style={{ marginLeft: "10px" }}>
            Created at: {customer.dateCreated}{" "}
          </span>
        </div>
      ))}
    </>
  );
}
