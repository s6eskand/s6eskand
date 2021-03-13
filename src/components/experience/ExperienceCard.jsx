import React from 'react';

// css
import './ExperienceCard.css';

function ExperienceCard({ image, title, description, github, website, subtitle, link }) {
    const [main, secondary] = subtitle.split("|")

    return(
        <div className="card">
            <div className="card-text">
                <p className="card-company">{main} &middot; {secondary}</p>
                <p className="card-text-title">{title}</p>
                {description}
            </div>
            <a href={link}><img className="card-image" src={image} alt={title}/></a>
        </div>
    )

}

export default ExperienceCard;