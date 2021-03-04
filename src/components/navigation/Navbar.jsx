import React from 'react';
import { Link } from 'react-router-dom';

// media
import home from '../../media/images/home.png';

// css
import './Navbar.css'

function Navbar() {

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/"><img src={home} alt="computer icon"/></Link>
                    <div className="filler" />
                    <div className="nav-items-list">
                        <ul className="nav-list">
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/portfolio">portfolio</Link></li>
                            <li><a href="https://samtechblog.com">blog</a></li>
                            <li style={{paddingRight: 0}}><Link to="/curios">curiosity</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;