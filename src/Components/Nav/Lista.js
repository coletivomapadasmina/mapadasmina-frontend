import React from 'react';
import './Nav.css';

function Lista(props) {

    return (
        <ul className="links">
            <li>
                <a href="#mapa">o mapa</a>
            </li>
            <li>
                <a href="#motivation">por que votar em mulheres?</a>
            </li>
            <li>
                <a href="#about">quem somos</a>
            </li>
            <li className="d-none">
                <a href="#"><button className="btn btn-doe">doe para o #mapa</button></a>
            </li>
        </ul >
    )
}

export default Lista
