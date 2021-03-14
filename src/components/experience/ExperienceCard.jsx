import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FaGithub } from "react-icons/fa";

// css
import './ExperienceCard.css';

function ExperienceCard({ image, title, description, github, website, subtitle, link, isProject }) {
    const [main, secondary] = subtitle.split("|")

    return(
        <div className="card">
            <div className="card-text">
                <p className="card-company">
                    {main} &middot; {isProject ?
                        <>
                            <a href={github}><FaGithub /></a> {website ? <a href={website}><MdComputer /></a> : null}
                        </>
                        :
                        secondary
                    }
                </p>
                <p className="card-text-title">{title}</p>
                {description}
            </div>
            <a href={link}><img className="card-image" src={image} alt={title}/></a>
        </div>
    )

}

export default ExperienceCard;