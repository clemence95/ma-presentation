import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                <li>
                    <Link to="/music">Musiques</Link>
                </li>
                <li>
                    <Link to="/films">films</Link>
                </li>
                <li>
                    <Link to="/exercises">Exercices</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
