import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesCard from './EpisodesCard';

export default function EpisodesList() {

    const [episodes, setEpisodes] = useState();

    useEffect(() => {

    axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {

          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, []);

    if(!episodes) {return null;}

    return (
        <section className="episodes-list grid-view">
        {episodes.map(result => (
            <EpisodesCard key={result.id} episodes={result} />
        ))}
        </section>
    );
}