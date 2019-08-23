import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList.js";
import EpisodesList from "./components/EpisodesList.js";
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/characterList/.id" component={CharacterList} />
      <Route path="/locationList/.id" component={LocationList} />
      <Route path="/episodesList/.id" component={EpisodesList} />
    </main>
  );
}
