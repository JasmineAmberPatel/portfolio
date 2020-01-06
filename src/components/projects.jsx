import React from 'react';

function Projects() {
    return (
        <h1 className="Title">Projects
        <div className="Projects" id="projects">
                <div className="Projects_box">
                    <h2 className="Subtitle">Green Queens</h2>
                    <br />
                    <img className="Projects_image" src={require('../images/GQ-Laptop-Small.png')} alt="green queens project on laptop"></img>
                    <br/>
                </div>
                <div className="Projects_box">
                    <h2 className="Subtitle">Quotes from Queens</h2>
                    <br />
                    <img className="Projects_image" src={require('../images/Quotes-small.png')} alt="quotes from queens project on mobile"></img>
                    <br/>
                </div>
                <div className="Projects_box">
                    <h2 className="Subtitle">Weather App</h2>
                    <br />
                    <img className="Projects_image" src={require('../images/Weather-small.png')} alt="weather app on laptop"></img>
                    <br/>
                </div>
            </div>
        </h1>
    )
};


export default Projects;