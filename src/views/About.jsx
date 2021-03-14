import React from "react";

// css
import './About.css';

// media
import profile from '../media/images/rsz_sam_smile_sunglasses.jpg';

import Footer from "../components/footer/Footer";

function About() {

    return(
        <>
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-content-text">
                        <p>
                            <mark className="title-text">About Me</mark> <br/> <br/>
                            Hello there! I am an Engineering student at the University of Waterloo, passionate about
                            learning new and emerging technologies, all the while building cool and impactful projects.
                            <br/> <br/>
                            When I am not coding or spinning up a new EC2 instance to play around on, I play soccer (waterloo
                            intramural champ not to brag), trumpet, and can be found listening to obscure Jazz, and Horn
                            Concertos. Fun fact, I spent the summer before University touring Ontario playing trumpet in
                            a Semi-Professional Jazz Band!
                            <br/> <br/>
                            Venture further to see some of my latest projects and work experiences!
                        </p>
                    </div>
                    <div className="about-img" />
                    <img className="about-img-mobile" src={profile} alt="picture of me"/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )

}

export default About;