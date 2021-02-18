import React from 'react';

// css
import './Portfolio.css';

// custom components
import ExperienceCard from "../components/experience/ExperienceCard";

function Portfolio() {

    return(
        <div className="portfolio">
            <div className="container">
                <ExperienceCard
                    title={"SWE Intern, Autonomous Vehicles"}
                    description={"test description this is lo"}
                />
            </div>
        </div>
    )

}

export default Portfolio;