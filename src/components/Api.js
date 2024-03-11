import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectue une requête GET vers l'API
    axios.get('https://api.exemple.com/data')
      .then(response => {
        // Met à jour le state avec les données reçues de l'API
        setData(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      });
  }, []); // Le tableau vide [] en tant que second argument signifie que useEffect ne s'exécutera qu'une fois après le premier rendu

  return (
    <div>
      <h1>Données de l'API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;