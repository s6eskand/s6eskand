import React from 'react';

// css
import './Portfolio.css';

// custom components
import ExperienceCard from "../components/experience/ExperienceCard";

// constants
import {
    WORK,
    PROJECTS
} from "../components/experience/experience";

function Portfolio() {

    return(
        <div className="portfolio">
            <div className="container">
                <mark className="title-text">Work Experience</mark> <br/> <br/>
                {WORK.map(work => (
                    <ExperienceCard
                        title={work.title}
                        description={work.description}
                        image={work.image}
                    />
                ))}
                <mark className="title-text">Personal Projects</mark> <br/> <br/>
            </div>
        </div>
    )

}

export default Portfolio;