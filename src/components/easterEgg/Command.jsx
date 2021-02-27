import React, { useEffect, useState, useCallback } from 'react';

// css
import './Command.css';

// custom components
import User from "./User";

function Command() {

    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;
        if (keyCode === 13) {
            console.log('TEST')
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return(
        <div className="command">
            <User path="~" />
            <input autoFocus className="command-input" type="text"/>
        </div>
    )
}

export default Command;