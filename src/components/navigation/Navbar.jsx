import React from 'react';

// media
import home from '../../media/images/home.png';

// css
import './Navbar.css'

function Navbar() {

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <img src={home} alt="computer icon"/>
                    <div className="filler" />
                    <div className="nav-items-list">
                        <ul className="nav-list">
                            <li>about</li>
                            <li>portfolio</li>
                            <li style={{paddingRight: 0}}><a href="https://samtechblog.com">blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;