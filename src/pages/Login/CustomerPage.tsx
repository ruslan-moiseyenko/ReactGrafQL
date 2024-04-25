import React from "react";
import { Customer } from "../../components/Customer/Customer.tsx";
import { CustomerList } from "../../components/CustomerList/CustomerList.tsx";

export function CustomerPage() {
  return (
    <div>
      <Customer />
      <CustomerList />
    </div>
  );
}
