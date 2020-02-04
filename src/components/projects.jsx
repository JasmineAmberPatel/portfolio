import React from 'react';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <h2 className="Subtitle project-title">Projects</h2>
            <div className="Projects_container">
            <div className="Projects_box golden">
                    <img className="Projects_image" src={require('../images/golden-shoe-01.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Golden Shoe</h2>
                        <p className="Paragraph">Golden Shoe is a prototype of an ecommerce website created with React and styled with Bootstrap and Sass.
                        The prototype allows you to filter shoes by price, size and popularity. It also allows you to add and remove shoes from the basket.
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Golden-Shoe" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image queens" src={require('../images/queens-01.png')} alt="quotes from queens"></img>
                    <div className="Project-info queens-info">
                        <h2 className="Subtitle">Quotes From Queens</h2>
                        <p className="Paragraph">I built an Express API containing quotes from inspirational female artists and celebrities using MongoDB as the database.
                        I deployed the API using Heroku then created a frontend using React and styled it using CSS to display the API information.
                        I deployed the frontend using Zeit.</p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens" target="_blank" rel="noopener noreferrer">View Backend</a>
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens-Frontend" target="_blank" rel="noopener noreferrer">View Frontend</a>
                            <a className="btn btn-dark" href="https://quotes-from-queens-frontend.now.sh/" target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image gq" src={require('../images/GQ-01.png')} alt="green queens"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Green Queens</h2>
                        <p className="Paragraph">Green Queens is a website which highlights the impact of the fast fashion industry on the environment.
                        This was a group project for which I took on the role of team leader.
                        I took responsibility for the carbon calculator which was created using a React form, which passes the submitted information into a JavaScript function.
                        I also did all of the styling for the website using CSS and assisted with the API integration.</p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/green-queens/" target="_blank" rel="noopener noreferrer">View Source</a>
                            <a className="btn btn-dark" href="https://green-queens.now.sh/" target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box music">
                    <img className="Projects_image" src={require('../images/music-01.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Music Library API</h2>
                        <p className="Paragraph">This CRUD REST API stores information about artists, albums and songs and interacts with a MongoDB database using Express.
                        I used Mongoose to write the MongoDB validation in the form of schemas and models, I also used Test Driven Development and wrote tests using Mocha and Chai.
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/music-library-api" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box estate">
                    <img className="Projects_image" src={require('../images/surreal-01.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Surreal Estate</h2>
                        <p className="Paragraph">A property search engine created with React. Properties come from a web API. The homepage allows you to add a property and the view properties page allows you to view all properties which have been created.
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/surreal-estate-api" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box  weather">
                    <img className="Projects_image" src={require('../images/weather-01.png')} alt="weather app"></img>
                    <div className="Project-info weather-info">
                        <h2 className="Subtitle">Weather Forecast</h2>
                        <p className="Paragraph">A 5 day weather forecasting app built with React with the data coming from a Web API. You can search to see the weather at any UK destination. The styling was done using CSS.</p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/weather-app" target="_blank" rel="noopener noreferrer">View Source</a>
                            <a className="btn btn-dark" href="https://weather-app.jasmineamberja.now.sh/" target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box pet">
                    <img className="Projects_image" src={require('../images/virtual-pet-01.png')} alt="cat"></img>
                    <div className="Project-info pet-info">
                        <h2 className="Subtitle">Virtual Pet</h2>
                        <p className="Paragraph">I built my own JavaScript pet.
                    This pet has all the following features:
                    It can get older, as it gets older, it gets hungrier and less fit.
                    You can walk it to increase it's fitness.
                    You can feed it to decrease it's hunger.
                    You can talk to it to see if it needs feeding or walking.
                    If it gets too hungry or unfit, it will DIE.
                    If it gets to 30 days old it will DIE.
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/surreal-estate-api" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Projects;