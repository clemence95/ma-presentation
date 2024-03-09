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
                {/* Ajoute d'autres liens de navigation si nécessaire */}
            </ul>
        </nav>
    );
}

export default Navigation;
