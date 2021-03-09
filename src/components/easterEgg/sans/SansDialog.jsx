import React, { useEffect, useState } from 'react';

import './SansDialog.css';

import Typical from "react-typical";
import { useHistory } from 'react-router-dom';

// custom components
import { useWindowDimensions } from "../../hooks/WindoDimensionsHook";
import Sans from "./Sans";

const routes = {
    1: "/terminal",
}

function SansDialog({ level, open, handleClose }) {
    const { windowWidth, windowHeight } = useWindowDimensions();
    const history = useHistory();

    const setSansMessage = () => {
        switch (level) {
            case 1:
                return "You should have listened to the website...";
            case 2:
                return "Okay...you know how to code...want a cookie...?";
            case 3:
                return "You know a little too much about Sam don't you think...?";
        }
    }

    const handleChallenge = () => {
        history.push(routes[level]);
    }

    return(
        <div className="dialog" hidden={!open}>
            <div className="dialog-content" style={windowWidth > 560 ? {transform: `translateY(${windowHeight / 2 - 70}px)`} : null}>
                <button onClick={handleClose} className="close-dialog">exit</button>
                <Sans saying={false} />
                <div className="dialog-actions">
                    {open ?
                        <Typical
                            steps={[setSansMessage()]}
                            wrapper="p"
                            loop={1}
                        />
                        : null
                    }
                    <button onClick={handleChallenge} className="challenge-btn">Next challenge...</button>
                </div>
            </div>
        </div>
    )
}

export default SansDialog;