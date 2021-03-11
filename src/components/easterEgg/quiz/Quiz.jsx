import React, { useState } from 'react';

import OpeningPage from "./OpeningPage";

import './Quiz.css';
import QuizQuestions from "./QuizQuestions";

function Quiz() {
    const [page, setPage] = useState(0)

    const renderPage = () => {
        switch (page) {
            case 0:
                return <OpeningPage setPage={setPage} />
            case 1:
                return <QuizQuestions />
            case 2:
                return <div></div>
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