import React, { useState } from 'react';

import OpeningPage from "./OpeningPage";

import './Quiz.css';
import QuizQuestions from "./QuizQuestions";
import EndScreen from "./EndScreen";

function Quiz() {
    const [page, setPage] = useState(0);
    const [correct, setCorrect] = useState(0);

    const handleReset = () => {
        setPage(1);
        setCorrect(0);
    }

    const renderPage = () => {
        switch (page) {
            case 0:
                return <OpeningPage setPage={setPage} />
            case 1:
                return <QuizQuestions correct={correct} setCorrect={setCorrect} setPage={setPage} />
            case 2:
                return <EndScreen correct={correct} handleReset={handleReset} />
        }
    }

    return (
        <div className="quiz">
            <div className="container">
                {renderPage()}
            </div>
        </div>
    )

}

export default Quiz;