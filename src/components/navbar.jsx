import React from 'react';

const Navbar = () => {
    return (
        <div className="NavBar">
            <ul className="Pageas">    
                <img className="logo" alt="logo" src={require('../images/logo.png')} />
                <a className="about" href="#about">About</a>
                <a className="projects" href="#projects">Projects</a>
                <a className="social" href="#social">Social</a>
            </ul>
        </div>
    );
};

export default Navbar;