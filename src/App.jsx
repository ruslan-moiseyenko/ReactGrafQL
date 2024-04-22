import React from 'react'
import './index.css'
// import { Pet } from './components/Pet';
// import { CustomerList } from './components/CustomerList/CustomerList.tsx';
// import { PetProfile } from './components/Profile/PetProfile.tsx';
// import { Customer } from './components/Customer/Customer.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';

function App() {

  return (

    <div className="app">
      <h1>Welcome to my React with GraphQL App!</h1>
      <LoginPage />
      {/* <Customer /> */ }
      {/* <PetProfile />
      <Pet />
      <CustomerList /> */}

    </div>
  );
}

export { App };
