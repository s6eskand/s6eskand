import React, { useState } from 'react';

import {
    QUESTIONS,
    OPTIONS
} from "./keys";

import './QuizQuestions.css';

const Question = ({ index, option, question, setQuestion, setCorrect, setPage }) => {

    const handleClick = () => {
        if (question === 10) {
            setPage(prevPage => prevPage + 1);
        } else {
            setQuestion(prevQuestion => prevQuestion + 1)
        }
        const {answer} = QUESTIONS[question];
        if (answer === index) {
            setCorrect(prevCorrect => prevCorrect + 1);
        }
    }

    return (
        <div className="question-card" onClick={handleClick}>
            <p className="question-card-number">{index}</p>
            <p className="question-card-content">{option}</p>
        </div>
    )
}

function QuizQuestions({ correct, setCorrect, setPage }) {
    const [question, setQuestion] = useState(1);

    return (
        <div className="questions-content">
            <p className="questions-question">{QUESTIONS[question].question}</p>
            <div className="questions-hud">
                <div className="progress">
                    <div className="progress-text">
                        <p style={{ paddingRight: 10 }}>{(question - 1) * 10}%</p>
                        <p>Score: {correct}/10</p>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-full" style={{ width: (question - 1) * 20 }} />
                    </div>
                </div>
            </div>
            {OPTIONS[question].map((option, index) => (
                <Question
                    index={index}
                    option={option}
                    question={question}
                    setQuestion={setQuestion}
                    setCorrect={setCorrect}
                    setPage={setPage}
                />
            ))}
        </div>
    )
}

export default QuizQuestions;