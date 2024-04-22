import React, { useEffect } from "react";
import { useQueryPetProfile } from "../../bus/pet/hooks/useQueryProfile/useQueryProfile.ts";

export function PetProfile() {
  const { getPetProfile, error, loading, petProfile } = useQueryPetProfile();

  useEffect(() => {
    const loadProfile = () => {
      getPetProfile({ variables: { id: "S-4" } });
    };
    loadProfile();
  }, [getPetProfile]);

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
      <h2>Pet Profile</h2>
      <div>
        Name :<span style={{ fontWeight: 600 }}>{petProfile?.name}</span>
      </div>
      <div>
        Status :<span style={{ fontWeight: 600 }}>{petProfile?.status}</span>
      </div>
    </>
  );
}
