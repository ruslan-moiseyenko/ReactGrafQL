import React from "react";
import { useQueryAllPets } from "../../bus/pet/hooks/useQueryAllPets/index.ts";

export function List() {
  const { error, loading, pets } = useQueryAllPets();

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
      {pets.map((pet) => (
        <div key={pet.id}>
          <span style={{ marginRight: "10px" }}>Name is:</span>
          <span style={{ fontWeight: 600 }}>{pet.name}</span>
          <span style={{ marginLeft: "10px" }}>Weight is: {pet.weight} </span>
        </div>
      ))}
    </>
  );
}
