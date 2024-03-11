import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS de Bootstrap

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Accueil</Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">À propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/api">API</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/themoviedb">TheMoviedb</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exercices">Exercices</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;



