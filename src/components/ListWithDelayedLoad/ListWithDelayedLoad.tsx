import React from "react";
import { useQueryAllAvailablePets } from "../../bus/pet/hooks/useQueryAllAvailablePets/useQueryAllAvailablePets.ts";

export function ListWithDelayedLoad() {
  const { getAllAvailablePets, error, loading, pets } =
    useQueryAllAvailablePets();

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

  const petsJSX = pets?.map((pet) => (
    <p key={pet.id}>
      <span>Name is:</span>
      <span>{pet.name}</span>
      <span>Status is:</span>
      <span>{pet.status}</span>
    </p>
  ));

  return (
    <>
      <h2>ListWithDelayedLoad</h2>
      <button onClick={() => getAllAvailablePets()}>
        Get All Available Pets
      </button>
      {petsJSX}
    </>
  );
}
