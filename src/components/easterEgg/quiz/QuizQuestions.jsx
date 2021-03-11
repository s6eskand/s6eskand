import React, { useState } from 'react';

import {
    QUESTIONS,
    OPTIONS
} from "./keys";

import './QuizQuestions.css';

const Question = ({ index, option, question, setQuestion, setCorrect }) => {

    const handleClick = () => {
        const { answer } = QUESTIONS[question];
        if (answer === index) {
            setCorrect(prevCorrect => prevCorrect + 1);
        }
        setQuestion(prevQuestion => prevQuestion + 1)
    }

    return (
        <div className="question-card" onClick={handleClick}>
            <p className="question-card-number">{index}</p>
            <p className="question-card-content">{option}</p>
        </div>
    )
}

function QuizQuestions({  }) {
    const [question, setQuestion] = useState(1);
    const [correct, setCorrect] = useState(0);

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
                />
            ))}
        </div>
    )
}

export default QuizQuestions;