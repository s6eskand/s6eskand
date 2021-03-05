import React, { useEffect, useState } from 'react';

import './SansDialog.css';

import Typical from "react-typical";

// custom components
import { useWindowDimensions } from "../../hooks/WindoDimensionsHook";
import Sans from "./Sans";

function SansDialog({ level, open, handleClose }) {
    const { width, height } = useWindowDimensions();

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

    return(
        <div className="dialog" hidden={!open}>
            <div className="dialog-content" style={width > 560 ? {transform: `translateY(${height / 2 - 70}px)`} : null}>
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
                    <button className="challenge-btn">Next challenge...</button>
                </div>
            </div>
        </div>
    )
}

export default SansDialog;