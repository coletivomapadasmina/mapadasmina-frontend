import React from 'react';
import './Nav.css';

function Lista(props) {

    return (
        <ul className="links">
            <li>
                <a href="#">vamos começar</a>
            </li>
            <li>
                <a href="#">saiba mais</a>
            </li>
            <li>
                <a href="#">fale com a gente</a>
            </li>
            <li>
                <a href="#"><button className="btn btn-doe">doe para o #mapa</button></a>
            </li>
        </ul >
    )
}

export default Lista
