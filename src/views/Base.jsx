import React from 'react';
import { Route } from 'react-router-dom';

// custom components
import Home from "./Home";
import About from '../views/About';
import Portfolio from "./Portfolio";
import Curios from "../components/easterEgg/curiosity/Curios";

function Base() {

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/curious" component={Curios} />
        </>
    )

}

export default Base;