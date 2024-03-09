// Importe React depuis la bibliothèque React
import React from 'react';

// Définis ton composant fonctionnel About
function About() {
    return (
        <section className='about-container' id="about"> {/* Utilise une section avec un identifiant unique */}
            <h2 className='about-title'>À propos de moi</h2> {/* Ajoute un titre à ta section */}
            <p className='about-description'>Je suis Clémence Boitelle, une professionnelle passionnée par la technologie et le développement d'applications. Après avoir développé mes compétences en service clientèle pendant plusieurs années, j'ai récemment suivi une formation en développement d'applications à l'AFPA, marquant ainsi le début d'une nouvelle aventure dans le monde de l'informatique.

                Mon parcours professionnel m'a permis de travailler au sein d'équipes multidisciplinaires et de répondre efficacement aux besoins des clients. En tant que téléconseillère pour des entreprises telles que Comdata et CCA International, j'ai acquis une expérience précieuse dans la résolution de problèmes et la fourniture d'un service de qualité.

                Ma transition vers le développement d'applications a été motivée par ma passion pour la technologie et mon désir d'apprendre continuellement. Bien que je sois réservée de nature, je suis déterminée à relever de nouveaux défis et à m'adapter à de nouveaux environnements. Ma capacité à apprendre rapidement et à m'engager dans des tâches techniques est un atout que je compte mettre à profit dans mes futures missions.

                Dotée de compétences techniques en langages web tels que HTML, CSS, JavaScript et Symfony, ainsi qu'en bases de données MySQL, je suis prête à explorer de nouvelles possibilités et à contribuer positivement à des projets innovants dans le domaine du développement informatique.

                Je suis convaincue que mon enthousiasme pour la technologie et ma volonté d'apprendre peuvent être des atouts précieux au sein d'une équipe dynamique et collaborative. Je suis ouverte aux opportunités qui se présenteront et suis impatiente de mettre mes compétences au service de projets stimulants et enrichissants.</p> {/* Ajoute un paragraphe avec tes informations */}
        </section>
    );
}

// Exporte ton composant About pour qu'il puisse être utilisé ailleurs dans ton application
export default About;
