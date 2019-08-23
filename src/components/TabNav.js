import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <div>
          <div className="App">
            <div class="navLink">
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </div>
            <div class="navLink">
              <NavLink to="/characterList/.id" activeClassName="active">Characters</NavLink>
            </div>
            <div class="navLink">
              <NavLink to="/locationList/.id" activeClassName="active">Locations</NavLink>
            </div>
            <div class="navLink">
              <NavLink to="/episodesList/.id" activeClassName="active">Episodes</NavLink>
            </div>
          </div>
        </div>
    );
};
