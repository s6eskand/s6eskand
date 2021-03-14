import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";

// media
import home from '../../media/images/home.png';

// css
import './Navbar.css';

const expandedStyles = {
    transform: "translateX(-150px)",
    filter: "drop-shadow(0 0 #000)",
}

const closedStyles = {
    transform: "translateX(200px)",
}

function Navbar() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = (value) => () => {
        setExpanded(value)
    }

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/"><img onClick={handleExpand(false)} src={home} alt="computer icon"/></Link>
                    <div className="filler" />
                    <div className="menu-icon" onClick={handleExpand(!expanded)}>
                        <BiMenuAltRight size={50} />
                    </div>
                    <div className="nav-items-list">
                        <ul className="nav-list">
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/portfolio">portfolio</Link></li>
                            <li><a href="https://samtechblog.com">blog</a></li>
                            <li style={{paddingRight: 0}}><Link to="/curious">curiosity</Link></li>
                        </ul>
                        <ul className="nav-list-mobile" style={expanded ? expandedStyles : closedStyles}>
                            <li onClick={handleExpand(false)}><Link to="/about">about</Link></li>
                            <li onClick={handleExpand(false)}><Link to="/portfolio">portfolio</Link></li>
                            <li onClick={handleExpand(false)}><a href="https://samtechblog.com">blog</a></li>
                            <li onClick={handleExpand(false)}><Link to="/curious">curiosity</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;