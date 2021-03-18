import React from 'react';
import Typical from 'react-typical';

// css
import './Home.css'

// media
import header from '../media/images/header-resize.gif';
import Footer from "../components/footer/Footer";
import { useWindowDimensions } from "../components/hooks/WindoDimensionsHook";

function Home() {
    const { height } = useWindowDimensions();

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
    const current = 'Currently an Autonomous Vehicles SWE @ Ford Motor Company, and Manager of Sensor Interfacing @ WATonomous';
    const workingOn = 'Working on Full Stack development of simulation tools and systems for Autonomous Vehicles, and converting a regular Chevy Bolt to a level 4 Autonomous Vehicle'
    const prev = 'Previously a Software Developer at Exponet Canada, Full Stack Developer at Make.';

    return (
        <>
        <div className="home">
            <div className="container">
                <div className="home-content">
                    <p className="home-content-text">                    
                        <mark className="title-text">Sam Eskandar</mark> <br/> <br/>
                        <span id="moving-text"><Typical steps={steps} loop={Infinity} /></span>
                        {current} <br/> <br/> {workingOn} <br/> <br/> {prev}
                    </p>
                    <div className="home-img" />
                    <img className="home-img-mobile" src={header} alt=""/>
                </div>
            </div>
        </div>
        <div style={ height < 800 ? {position: 'fixed', bottom: '0', width: '100%'} : null }>
            <Footer />
        </div>
        </>
    )

}

export default Home;