import React from 'react';

// css
import './ExperienceCard.css';

function ExperienceCard({ image, title, description, github, website, company }) {

    return(
        <div className="card">
            <div className="card-text">
                <p className="card-company">{company}</p>
                <p className="card-text-title">{title}</p>
                {description}
            </div>
            <img className="card-image" src={image} alt={title}/>
        </div>
    )

}

export default ExperienceCard;