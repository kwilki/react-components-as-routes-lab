import React from 'react';
import { directors } from '../data';

let directorInformation = directors.map(directors => {
  return  <div className="directorInfo">
            <h3>{directors.name}</h3>
            <p className="subHeading">Movies Directed:</p>
              <ul>
                {directors.movies.map(movie => {
                  return <li>{movie}</li>
                })}
              </ul>
          </div>
  
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorInformation}
    </div>
  );
}

export default Directors
