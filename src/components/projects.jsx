import React from 'react';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <br />
            <h2 className="Subtitle">Projects</h2> 
            <br/>
            <div className="Projects_container">
                <div className="Projects_box">
                    <img className="Projects_image gq" src={require('../images/gq-cover.png')} alt="green queens"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Green Queens</h2>
                        <p className="Paragraph">Green Queens is a website which highlights the impact of the fast fashion industry on the environment.
                        This was a group project for which i took on the role of team leader.
                        I took responsibility for the carbon calculator which was created using a React form, which passes the submitted information into a JavaScript function.
                        I also did all of the styling for the website using CSS and assisted with the API integration.</p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/green-queens/" target="_blank">View Source</a>
                            <a className="btn btn-dark" href="https://green-queens.now.sh/" target="_blank">View Website</a>
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
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens" target="_blank">View Backend</a>
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens-Frontend" target="_blank">View Frontend</a>
                            <a className="btn btn-dark" href="https://quotes-from-queens-frontend.now.sh/" target="_blank">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box  weather">
                <img className="Projects_image" src={require('../images/weather.png')} alt="weather app"></img>
                    <div className="Project-info weather-info">
                        <h2 className="Subtitle">Weather Forecast</h2>
                        <p className="Paragraph">A 5 day weather forecasting app built with React with the data coming from a Web API. You can search to see the weather at any UK destination. The styling was done using CSS.</p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/weather-app" target="_blank">View Source</a>
                            <a className="btn btn-dark" href="https://weather-app.jasmineamberja.now.sh/" target="_blank">View Website</a>
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
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/Golden-Shoe" target="_blank">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box music">
                <img className="Projects_image" src={require('../images/music.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Music Library API</h2>
                        <p className="Paragraph">This CRUD REST API stores information about artists, albums and songs and interacts with a MongoDB database using Express.
                        I used Mongoose to write the MongoDB validation in the form of schemas and models, I also used Test Driven Development and wrote tests using Mocha and Chai.
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/music-library-api" target="_blank">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box estate">
                <img className="Projects_image" src={require('../images/property.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Surreal Estate</h2>
                        <p className="Paragraph">A property search engine created with react. Properties come from a web API. The homepage allows you to add a property and the view properties page allows you to view all properties which have been created. 
                        </p>
                        <div className="buttons">
                            <a className="btn btn-dark" href="https://github.com/JasmineAmberPatel/surreal-estate-api" target="_blank">View Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Projects;