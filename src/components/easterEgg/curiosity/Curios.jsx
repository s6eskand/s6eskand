import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

// css
import './Curios.css';

import Typical from "react-typical";

const getOpeningMessage = () => {
    const visited = parseInt(localStorage.getItem("visited"));
    if (visited <= 0) {
        return ["Who are you...?", 2000, "That's nice but I don't care, move along now.", 2000, "This isn't a place for curios folk, just go back where you came."]
    } else if (visited > 0 && visited <= 5) {
        return ["Oh...you again...", 2000, "Didn't I already tell you to leave...", 2000, "I liked you better the first time...when you left."]
    } else {
        return ["You are one persistent person huh...", 2000, "Well I'll let you in on a secret...", 2000, "Nothing will change...just leave..."]
    }
}

const messages = [
    getOpeningMessage(),
    [
        "You really don't know what you're doing huh...", 2000, "Don't be rude...just leave this page...", 2000, "It's in your best interest to listen..."
    ],
    [
        "What are you doing...!?!?", 2000, "You have no idea what you're getting yourself into...", 2000, "Please listen...."
    ]
]

function Curios() {
    const [display, setDisplay] = useState([
        <Typical
            steps={getOpeningMessage()}
            wrapper={"p"}
            loop={1}
        />
    ]);
    const [step, setStep] = useState(0);
    const history = useHistory();

    useEffect(() => {
        let visited = parseInt(localStorage.getItem("visited"));
        visited++;
        localStorage.setItem("visited", visited.toString());
    }, [])

    const crashSite = () => {
        localStorage.setItem("crash", true);
        history.push('/')
        window.location.reload();
    }

    const onNext = () => {
        let newDisplay = [...display];
        newDisplay[step] = <p>{messages[step].join("").replaceAll("2000", " ")}</p>
        newDisplay = [...newDisplay, <Typical
            steps={messages[step + 1]}
            wrapper={"p"}
            loop={1}
        />];
        setDisplay([
            ...newDisplay
        ])
        setStep(prevStep => prevStep + 1)
    }

    return(
        <div className="curios">
            <div className="container">
                {
                    display.map(element => (
                        <>{element}</>
                    ))
                }
                {
                    step === 3 ?
                        <div>
                            <p>You better not...</p>
                            <button onClick={crashSite} className="warning-btn">CRASH</button>
                        </div> :
                        <button onClick={onNext} className="curios-btn">Continue...</button>
                }
            </div>
        </div>
    )
}

export default Curios;