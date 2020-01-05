import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="NavBar">
            <ul className="PageLinks">    
            <img className="logo" alt="logo" src={require('../images/logo.png')} />
                <Link className="about" to="/about">About</Link>
                <Link className="projects" to="/projects">Projects</Link>
                <Link className="social" to="/social">Social</Link>
            </ul>
        </div>
    );
};

export default Navbar;