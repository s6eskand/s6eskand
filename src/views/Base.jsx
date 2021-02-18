import React from 'react';
import { Route } from 'react-router-dom';

// custom components
import About from '../views/About';
import Portfolio from "./Portfolio";

function Base() {

    return(
        <>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
        </>
    )

}

export default Base;