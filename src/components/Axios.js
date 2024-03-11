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
      const moviesData = response.data.results.map(movie => ({
        id: movie.id,
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
      }));
      setMovies(moviesData);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la récupération des films :', error);
    });
  }, []);

  return (
    <div>
      <h2>Axios Exemple</h2>
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
  );
}

export default AxiosExample;




