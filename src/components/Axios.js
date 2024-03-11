import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'f33cd318f5135dba306176c13104506a',
        query: 'avenger'
      }
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la récupération des films :', error);
    });
  }, []);

  return (
    <div>
      <h2>Axios Example</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;
