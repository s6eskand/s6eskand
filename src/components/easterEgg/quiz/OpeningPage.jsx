import React from 'react';

import './OpeningPage.css';

function OpeningPage({ setPage }) {
    const { level } = JSON.parse(localStorage.getItem("game"));

    const handleChange = () => {
        if (level === 2) {
            setPage(prevPage => prevPage + 1);
        }
    }

    const getGreetingMessage = () => {
        switch (level) {
            case 1:
                return "Too early my friend, too early"
            case 2:
                return "The super-duper fun quiz about...you guessed it, Sam!"
            case 3:
                return "Yes. Yes you do. Now go finish the last challenge"
        }
    }

    return (
        <div className="opening-page">
            <p>
                <span style={{ fontSize: 72 }}>Do You Know Sam?</span> <br/> <br/>
                {getGreetingMessage()}
            </p>
            <button
                disabled={level !== 2}
                className="opening-page-button"
                onClick={handleChange}
            >
                Continue to quiz!
            </button>
        </div>
    )
}

export default OpeningPage;