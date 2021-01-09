import React from 'react';

// custom components
import Navbar from '../components/navigation/Navbar';
import Home from './Home';

function Base() {

    return(
        <div>
            <Navbar />
            <Home />
        </div>
    )

}

export default Base;