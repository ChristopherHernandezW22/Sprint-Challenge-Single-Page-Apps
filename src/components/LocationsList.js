import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [location, setLocation] = useState();

    useEffect(() => {

    axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            
          setLocation(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, []);

    if(!location) {return null;}

    return (
        <section className="location-list grid-view">
        {location.map(result => (
            <LocationCard key={result.id} location={result} />
        ))}
        </section>
    );
}
