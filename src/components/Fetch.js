import React, { useState, useEffect } from 'react';

function FetchExample() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=b`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des films');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des films :', error);
      });
  }, []);

  return (
    <div>
      <h2>Fetch Exemple</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchExample;
