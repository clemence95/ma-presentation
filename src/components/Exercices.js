// Exercices.js
import React, { useState } from 'react';

function Exercices() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeNom = (event) => {
        setNom(event.target.value);
    };

    const handleChangePrenom = (event) => {
        setPrenom(event.target.value);
    };

    const handleClickBonjour = () => {
        setMessage(`Bonjour ${nom} ${prenom}`);
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
        </div>
    );
}

export default Exercices;
