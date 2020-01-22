import React from 'react';

const Navbar = () => {
    return (
        <div className="NavBar">
            <img id="logo" src={require('../images/logo-01.png')} alt="logo"></img>
            <ul className="Paragraph Link">    
                <a className="PageLinks" href="#about">About</a>
                <a className="PageLinks" href="#projects">Projects</a>
                <a className="PageLinks" href="#social">Social</a>
            </ul>
        </div>
    );
};

export default Navbar;