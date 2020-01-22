import React from 'react';

function About() {
    return (
        <div className="Home" id="about">
            <h1 className="Title">Jasmine Amber Patel</h1>
            <br />
            <h2 className="Subtitle">Software Developer</h2>
            <br />
            <p className="Paragraph about">Hello my name is Jasmine, I am a 25 year old software developer based in the north west of England. On this website you can see a variety of different personal projects I have worked on, feel free to have a look around and get inspired.</p>
            <br />
            <div className="tech-logos">
                <img className="logos" src={require('../images/js-01.png')} alt="js logo"></img>
                <img className="logos" src={require('../images/html-01.png')} alt="html logo"></img>
                <img className="logos" src={require('../images/css-01.png')} alt="css logo"></img>
                <img className="logos" src={require('../images/react-01.png')} alt="react logo"></img>
                <img className="logos" src={require('../images/sass-01.png')} alt="sass logo"></img>
                <img className="logos" src={require('../images/node-01.png')} alt="node logo"></img>
            </div>
        </div>
    )
};


export default About;