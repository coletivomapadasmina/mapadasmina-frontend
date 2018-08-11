import React from 'react';
import Logomarca from '../img/Logo.png';
import Lista from './Lista';
import './Nav.css';

function Nav(props) {
    return (
        <nav className="nav">
            <img className="logomarca navbar-brand" src={Logomarca} />
            <Lista />
        </nav >
    )
}

export default Nav
