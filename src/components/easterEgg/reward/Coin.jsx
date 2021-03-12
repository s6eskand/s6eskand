import React, { useState, useEffect } from 'react';

import './Coin.css';

function Coin({ handleCollect }) {
    const [frame, setFrame] = useState(1);

    const flip = () => {
        if (frame + 1 > 8) {
            setFrame(1);
        } else {
            setFrame(prevFrame => prevFrame + 1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            flip();
        }, 100)
    }, [frame])

    return (
        <div id="coinBox" onClick={handleCollect}>
            <div id="coin" className={"coinBoxFrame" + frame.toString()}>
            </div>
        </div>
    )
}

export default Coin;