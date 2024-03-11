import React, { useState } from 'react';
import axios from 'axios';

function Themoviedb() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    axios.get(`http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${query}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la recherche des films :', error);
      });
  };

  return (
    <div>
    <h1>Recherche de films</h1>
    <div>
      <input
        type="text"
        placeholder="Entrez un titre de film"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
    <div>
      <h2>Résultats de la recherche</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Titre</th>
            <th>Date de sortie</th>
            <th>Langue</th>
            <th>Popularité</th>
            <th>Vote moyen</th>
            <th>Nombre de votes</th>
            <th>Vue d'ensemble</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '100px', height: '150px' }} />
                )}
              </td>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.original_language}</td>
              <td>{movie.popularity}</td>
              <td>{movie.vote_average}</td>
              <td>{movie.vote_count}</td>
              <td>{movie.overview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Themoviedb;
