import React from 'react';

function Home () {
    return (
        <div className="Home">
            <img className="Home_Background" src={require('../images/pink.jpg')} alt="background"></img>
            <h1 className="Home_Title">Jasmine Amber Patel</h1>
            <br/>
            <h2 className="Home_Title Subtitle">Software Engineer</h2>
        </div>
    )
};


export default Home;