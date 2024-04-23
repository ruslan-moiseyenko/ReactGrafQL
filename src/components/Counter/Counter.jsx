import React from 'react'
import { useQueryAvailablePets } from '../../hooks/useQueryAvailablePets.ts';

export function Counter() {
  const { data, loading, error } = useQueryAvailablePets();

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return (
      <div>
        <h2>We have a problem:</h2>
        <p>{ error }</p>
      </div>
    );
  }


  return (
    <>
      <div>Available Pets: { data?.availablePets }</div>
    </>
  )
}
