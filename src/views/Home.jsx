import React from 'react';
import Typical from 'react-typical';

// css
import './Home.css'

function Home() {

    const steps = [
        'Software Developer',
        2000,
        'Designer',
        2000,
        'AV Enthusiast',
        2000,
        'Coffee Drinker',
        2000,
        'Colleague',
        1000,
        'Friend',
        1000,
    ]

    // populate constants as needed
    const incoming = '';
    const current = 'Currently an Autonomous Vehicles SWE @ Ford Motor Company working on Full Stack development of simulation tools and systems for Autonomous Vehicles as well as fleet management, and Manager of Sensor Interfacing @ WATonomous working on converting a regular Chevy Bolt to a level 4 Autonomous Vehicle.';
    const prev = 'Previously a Software Developer at Exponet Canada, Full Stack Developer at Make';

    return (
        <div className="home">
            <div className="container">
                <div className="home-content">
                    <p className="home-content-text">                    
                        <mark id="my-name">Sam Eskandar</mark> <br/> <br/>
                        <span id="moving-text"><Typical steps={steps} loop={Infinity} /></span>
                        {current} <br/> <br/> {prev}
                    </p>
                    <div className="home-img" />
                    {/* <img className="home-img" src={header} alt="my dev setup"/> */}
                </div>
            </div>
        </div>
    )

}

export default Home;