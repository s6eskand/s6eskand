import React from 'react';

import './SansDialog.css';

import Typical from "react-typical";
import { useHistory } from 'react-router-dom';

// custom components
import { useWindowDimensions } from "../../hooks/WindoDimensionsHook";
import Sans from "./Sans";

function DefeatedSans({ open }) {
    const { windowWidth, windowHeight } = useWindowDimensions();
    const history = useHistory();

    const collectReward = () => {
        history.push("/reward");
    }

    return(
        <div className="dialog" hidden={!open}>
            <div className="dialog-content" style={windowWidth > 560 ? {transform: `translateY(${windowHeight / 2 - 70}px)`} : null}>
                <Sans saying={false} />
                <div className="dialog-actions">
                    {open ?
                        <Typical
                            steps={["You made your way to the forbidden button and foiled my plan...How dare you...Collect your CuriousCat token and leave..."]}
                            wrapper="p"
                            loop={1}
                        />
                        : null
                    }
                    <button onClick={collectReward} className="challenge-btn">Collect Reward...</button>
                </div>
            </div>
        </div>
    )
}

export default DefeatedSans;
