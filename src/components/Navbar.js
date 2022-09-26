import React from 'react';
import world from '../images/worldwide.png';

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={world} alt="World Logo" className="navbar-logo"/>
            <h1 className="navbar-title">my travel journal.</h1>
        </nav>
    )
}