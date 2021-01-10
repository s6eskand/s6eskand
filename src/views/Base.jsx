import React from 'react';
import { Route } from 'react-router-dom';

// custom components
import About from '../views/About';

function Base() {

    return(
        <>
            <Route exact path="/about" component={About} />
        </>
    )

}

export default Base;