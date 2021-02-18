import React, { useState } from 'react';

// css
import './ExperienceCard.css';

function ExperienceCard({ image, isProject, title, description, github, website, icon }) {
    const [hoverContent, setHoverContent] = useState("test");

    const handleHover = () => {
        setHoverContent("This is some test content")
    }

    const handleLeave = () => {
        setHoverContent("test")
    }

    return(
        <div className="card">
            <img className="card-image" src={"https://i2.wp.com/www.geoawesomeness.com/wp-content/uploads/2017/09/Coding-Geospatial.jpg?resize=1152%2C768&ssl=1"} alt={title}/>
            <button className="card-fab"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                {hoverContent}
            </button>
            <div className="card-text">
                <p className="card-text-title">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default ExperienceCard;