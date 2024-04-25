import React from 'react'
import './index.css'
// import { Pet } from './components/Pet';
// import { PetProfile } from './components/Profile/PetProfile.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';

export const App = () => {

  return (

    <div className="app">
      <h1>Welcome to my React with GraphQL App!</h1>
      <LoginPage />


    </div>
  );
}


