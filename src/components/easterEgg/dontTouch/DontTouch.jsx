import React, { useState } from 'react';

import './DontTouch.css';

import DefeatedSans from "../sans/DefeatedSans";
import Coin from "../reward/Coin";

const message = {
    0: "Whatever you do. DONT click this button",
    1: "Do you not hear me???? DONT CLICK IT",
    2: "What do you think you get out of ignoring my warnings?",
    3: "Okay now this is just rude. Please stop",
    4: "Can you stop? Please? This is getting so annoying.",
    5: "Fine. You want to be curious? Click it one more time",
    6: "HA! See, it does nothing. Now go away."
}

function DontTouch() {
    const [clicked, setClicked] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (clicked === 6) {
            setOpen(true);
        } else {
            setClicked(prevClicked => prevClicked + 1);
        }
    }

    return (
        <>
            <div className="dont-touch">
                <div className="container">
                    <p className="dont-touch-message">{message[clicked]}</p>
                    <button className="dont-touch-button" onClick={handleClick}>CLICK ME</button>
                </div>
            </div>
            <DefeatedSans handleClose={() => setOpen(false)} open={open} />
        </>
    )
}

export default DontTouch;