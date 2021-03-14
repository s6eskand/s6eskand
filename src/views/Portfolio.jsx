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

import Footer from "../components/footer/Footer";

function Portfolio() {

    return(
        <>
        <div className="portfolio">
            <div className="container">
                <mark className="title-text">Work Experience</mark> <br/> <br/>
                <div className="portfolio-work">
                    {WORK.map(work => (
                        <ExperienceCard
                            title={work.title}
                            subtitle={work.subtitle}
                            description={work.description}
                            image={work.image}
                            link={work.link}
                        />
                    ))}
                </div>
                <mark className="title-text">Personal Projects</mark> <br/> <br/>
                <div className="portfolio-work">
                    {PROJECTS.map(project => (
                        <ExperienceCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            image={project.image}
                            isProject={project.isProject}
                            github={project.github}
                            website={project.website}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
        <Footer />
        </>
    )

}

export default Portfolio;