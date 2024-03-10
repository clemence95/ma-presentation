import React, { useState } from 'react';

function Exercices() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0); // Ajouter l'état pour le compteur
    const [listeCourses, setListeCourses] = useState([]); // Ajouter l'état pour la liste de courses
    const [nouvelElement, setNouvelElement] = useState(''); // Ajouter l'état pour le nouvel élément de la liste de courses

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

    const resetListeCourses = () => {
        setListeCourses([]);
    };

    const handleChangeNouvelElement = (event) => {
        setNouvelElement(event.target.value);
    };

    const ajouterElementListeCourses = () => {
        if (nouvelElement.trim() !== '') {
            setListeCourses([...listeCourses, nouvelElement]);
            setNouvelElement(''); // Réinitialise le champ texte
        }
    };

    const supprimerElementListeCourses = (index) => {
        const nouvelleListe = [...listeCourses];
        nouvelleListe.splice(index, 1); // Supprime l'élément à l'index spécifié
        setListeCourses(nouvelleListe);
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

            {/* Gestion de la liste de courses */}
            <div>
                <h2>Liste de courses</h2>
                {/* Champ texte pour ajouter un nouvel élément à la liste de courses */}
                <input type="text" value={nouvelElement} onChange={handleChangeNouvelElement} />
                <button onClick={ajouterElementListeCourses}>Ajouter</button>
                {/* Bouton pour remettre la liste de courses à vide */}
                <button onClick={resetListeCourses}>Remettre la liste à vide</button>
                {/* Affichage de la liste de courses */}
                <ul>
                    {listeCourses.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => supprimerElementListeCourses(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Exercices;





