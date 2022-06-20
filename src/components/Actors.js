import React from 'react';
import { actors } from '../data';

let actorsInformation = actors.map(actor => {
  return  <div>
            <h3>{actor.name}</h3>
            <p className="subHeading">Movies starred in:</p>
            <ul>
              {actor.movies.map(movie => {
                return  <li>{movie}</li>
              })}
            </ul>
          </div>
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsInformation}
    </div>
  );
};

export default Actors;
