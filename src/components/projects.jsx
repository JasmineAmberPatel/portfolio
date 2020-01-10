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
                        This was a group project.
                        I built the calculator functionality using a React form, the form passes the submitted information into a JavaScript function which then calculates the volume of CO2 and Water and outputs the message to the user.
                        I also did all of the styling for the website using CSS.</p>
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
                <div className="Projects_box music">
                <img className="Projects_image" src={require('../images/music.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Music Library API</h2>
                        <p className="Paragraph">This CRUD REST API stores information about artists, albums and songs and interacts with a MongoDB database using Express. I used Mongoose to write the MongoDB validation in the form of schemas and models. This project taught me about: Databases Database Design NoSQL MongoDb Database Querying and CRUD operations Models and schemas I also used Test Driven Development and wrote tests using Mocha and Chai.
                        </p>
                        <div className="buttons">
                            <button className="btn btn-dark">View Source</button>
                        </div>
                    </div>
                </div>
                <div className="Projects_box estate">
                <img className="Projects_image" src={require('../images/property.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Surreal Estate</h2>
                        <p className="Paragraph">A property search engine created with react. Properties come from a web api. The homepage allows you to add a property and the view properties page allows you to view all available properties. 
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