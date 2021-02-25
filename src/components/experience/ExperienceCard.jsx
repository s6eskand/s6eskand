import React, { useState } from 'react';

// css
import './ExperienceCard.css';

function ExperienceCard({ image, title, description, github, website, company }) {

    return(
        <div className="card">
            <img className="card-image" src={image} alt={title}/>
            <div className="card-text">
                <p className="card-text-title">{title}</p>
                {description}
            </div>
        </div>
    )

}

export default ExperienceCard;