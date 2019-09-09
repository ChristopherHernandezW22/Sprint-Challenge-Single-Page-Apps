import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [toon, setToon] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setToon(response.data.results)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  if(!toon) {return null;}

  return (
    <div>
    <section className="character-list grid-view">
      {toon.map(result => (
        <CharacterCard key={result.id} toon={result} />
      ))}
    </section>
    </div>
  );
}
