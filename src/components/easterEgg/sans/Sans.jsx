import React, { useEffect, useState } from 'react';

import './Sans.css';

import Typical from "react-typical";

const randomSayings = [
    "heya.\n" +
    "you've been busy, huh?",
    "so, i've got a question for ya.\n" +
    "do you think even the worst person can change...?\n" +
    "that everyone can be a good person, if they just try?\n" +
    "heh heh heh heh",
    "do you wanna have a bad time?\n" +
    "cause if you take another step forward...\n" +
    "you are REALLY not going to like what happens next.",
    "welp.\n" +
    "sorry, old lady.\n" +
    "this is why i never make promises.",
    "it's a beautiful day outside. birds are singing...\n" +
    "anyway, as i was saying, it's a nice day out. why not relax and take a load off?",
    "our reports showed a massive anomaly in the timespace continuum. timelines jumping left and right, stopping and starting...",
    "to be blunt... it makes it kind of hard to give it my all.\n" +
    "... or is that just a poor excuse for being lazy...? hell if i know.\n" +
    "all i know is... seeing what comes next... i can't afford not to care anymore."
]

function Sans() {
    const [message, setMessage] = useState([])

    const index = () => Math.floor(Math.random() * randomSayings.length);

    useEffect(() => {
        const randomMessage = randomSayings[index()];
        setMessage([randomMessage])
    }, [])

    return(
        <div className="sans">
            <Typical
                steps={message}
                wrapper={"p"}
                loop={1}
            />
            <div>
                <div className="head" />
                <div className="torso" />
                <div className="legs" />
            </div>
        </div>
    )
}

export default Sans;