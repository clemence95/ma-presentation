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
        const moviesData = data.results.map(movie => ({
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
      <h2>Fetch Exemple</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Titre</th>
            <th>Langue originale</th>
            <th>Titre original</th>
            <th>Vue d'ensemble</th>
            <th>Popularité</th>
            <th>Date de sortie</th>
            <th>Vidéo</th>
            <th>Vote moyen</th>
            <th>Nombre de votes</th>
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
              <td>{movie.original_language}</td>
              <td>{movie.original_title}</td>
              <td>{movie.overview}</td>
              <td>{movie.popularity}</td>
              <td>{movie.release_date}</td>
              <td>{movie.video ? 'Oui' : 'Non'}</td>
              <td>{movie.vote_average}</td>
              <td>{movie.vote_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchExample;

