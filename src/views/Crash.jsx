import React, { useEffect, useState } from 'react';

import SansDialog from "../components/easterEgg/sans/SansDialog";

function Crash() {
    const [open, setOpen] = useState(false);
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("game"));
        setLevel(data.level);
    }, [])

    const levelMessage = () => {
        switch (level) {
            case 1:
                return "Due to a curious user, this webpage has transformed into a teapot and no further content can be viewed.";
            case 2:
                return "This webpage is still a teapot, but at least you solved the leetcode problem. Still no content";
            case 3:
                return "Wow...you know a disturbing amount about Sam...That's cool...Still a teapot btw"
        }
    }

    return(
        <>
            <div className="container">
                <h1>418 Error! This webpage is now a teapot</h1>
                <h2>{levelMessage()}</h2>
                <h3>&#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749; &#9749;</h3>
                <a onClick={() => setOpen(true)}>Help!</a>
            </div>
            <SansDialog level={level} handleClose={() => setOpen(false)} open={open} />
        </>
    )
}

export default Crash;