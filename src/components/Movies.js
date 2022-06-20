import React from 'react';
import { movies } from '../data';

let movieInformation = movies.map((element) => {
  return <div className="movieInformation">
            <h3>Title: {element.title}</h3>
            <span><strong>Length: </strong>{element.time} minutes</span>
            <ul>
              {element.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
          </div>
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieInformation}
    </div>
  );
};

export default Movies;
