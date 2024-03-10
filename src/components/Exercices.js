import React, { useState } from 'react';

function Exercices() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0); // Ajouter l'état pour le compteur

    const handleChangeNom = (event) => {
        setNom(event.target.value);
    };

    const handleChangePrenom = (event) => {
        setPrenom(event.target.value);
    };

    const handleClickBonjour = () => {
        setMessage(`Bonjour ${nom} ${prenom}`);
    };

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div>
            <div>
                <label>
                    Votre nom:
                    <input type="text" value={nom} onChange={handleChangeNom} />
                </label>
            </div>
            <div>
                <label>
                    Votre prénom:
                    <input type="text" value={prenom} onChange={handleChangePrenom} />
                </label>
            </div>
            <div>
                <button onClick={handleClickBonjour}>Bonjour</button>
            </div>
            <div>{message}</div>
            
            {/* Affichage du compteur */}
            <div>
                <h2>Compteur: {count}</h2>
                <button onClick={incrementCounter}>Incrémenter</button>
                <button onClick={resetCounter}>Remettre à zéro</button> {/* Bouton pour remettre le compteur à zéro */}
            </div>
        </div>
    );
}

export default Exercices;

