import React from 'react';
import Logomarca from '../../assets/img/Logo.png';
import Lista from './Lista';
import './Nav.css';

function Nav(props) {
    return (
        <nav className="nav navbar navbar-expand-md navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img alt="Logo do Mapa das Mina" className="logomarca navbar-brand" src={Logomarca} />
                </a>
                <Lista />
            </div>
        </nav >
    )
}

export default Nav
