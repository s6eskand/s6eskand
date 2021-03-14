import React from 'react';

import { useHistory } from 'react-router-dom';

import './EndScreen.css';

function EndScreen({ correct, handleReset }) {
    const history = useHistory();

    const getMessage = () => {
        if (correct === 0) {
            return "You tried and that's all that matters."
        } else if (correct >= 1 && correct <= 5) {
            return "Better than 0 that's for sure"
        } else if (correct > 5 && correct < 9) {
            return "I guess you know more than the average person about Sam?"
        } else if (correct === 9) {
            return "You couldn't get just one more?"
        } else {
            return "Wow...you know quite a bit about Sam huh..."
        }
    }

    const handleNext = () => {
        try {
            const data = JSON.parse(localStorage.getItem("game"));
            data.level = 3;
            localStorage.setItem("game", JSON.stringify(data));
        } catch (e) {
            const data = {
                wins: 0,
                codeSolution: "// add your solution here",
                level: 1
            }
            localStorage.setItem("game", JSON.stringify(data))
        }
        history.push("/")
    }

    const handleQuit = () => {
        localStorage.removeItem("crash");
        if (localStorage.getItem("skipped")) {
            localStorage.removeItem("skipped")
        }
        history.push("/");
        window.location.reload();
    }

    return (
        <div>
            <p className="endscreen-text">
                You answered {correct} out of 10 questions correct! <br/><br/>
                {getMessage()} <br/>
            </p>
            {correct !== 10 ?
                <div className="endscreen-buttons">
                    <button className="endscreen-button" onClick={handleQuit}>Quit Game</button>
                    <button className="endscreen-button" onClick={handleReset}>Try Again</button>
                </div>
                :
                <button className="endscreen-button" onClick={handleNext}>Next Challenge!</button>
            }
        </div>
    )
}

export default EndScreen;