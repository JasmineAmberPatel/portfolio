import React from 'react';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <br />
            <h1 className="Title">Projects</h1>
            <div className="Projects_container">
                <div className="Projects_box">
                    <img className="Projects_image gq" src={require('../images/gq-cover.png')} alt="green queens"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Green Queens</h2>
                        <p className="Paragraph">Green Queens is a website which highlights the impact of the fast fashion industry on the environment.
                        This was a group project for which i took on the role of team leader.
                        I built the calculator functionality using a React form, the form passes the submitted information into a JavaScript function which then calculates the volume of CO2 and Water and outputs the message to the user.
                        I also did all of the styling for the website using CSS and assisted with the API integration using Axios.</p>
                        <div className="buttons">
                            <button className="btn btn-dark">View Source</button>
                            <button className="btn btn-dark">View Website</button>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                <img className="Projects_image queens" src={require('../images/queens.png')} alt="quotes from queens"></img>
                    <div className="Project-info queens-info">
                        <h2 className="Subtitle">Quotes From Queens</h2>
                        <p className="Paragraph">I built an Express API containing quotes from inspirational female artists and celebrities using MongoDB as the database. 
                        I deployed the API using Heroku i then created a frontend using React and styled it using CSS to display the API information. 
                        I deployed the frontend using Zeit.</p>
                        <div className="buttons">
                            <button className="btn btn-dark">View Source</button>
                            <button className="btn btn-dark">View Website</button>
                        </div>
                    </div>
                </div>
                <div className="Projects_box  weather">
                <img className="Projects_image" src={require('../images/weather.png')} alt="weather app"></img>
                    <div className="Project-info weather-info">
                        <h2 className="Subtitle">Weather Forecast</h2>
                        <p className="Paragraph">A 5 day weather forecasting app built with React with the data coming from a Web API. Styling done using CSS.</p>
                        <div className="buttons">
                            <button className="btn btn-dark">View Source</button>
                            <button className="btn btn-dark">View Website</button>
                        </div>
                    </div>
                </div>
                <div className="Projects_box golden">
                <img className="Projects_image" src={require('../images/golden-shoe.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Golden Shoe</h2>
                        <p className="Paragraph">Golden Shoe is a prototype of an ecommerce website created with react and styled with bootstrap and sass.
                        The prototype allows you to filter shoes by price, size and popularity. It also allows you to add and remove shoes from the basket.
                        </p>
                        <div className="buttons">
                            <button className="btn btn-dark">View Source</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Projects;