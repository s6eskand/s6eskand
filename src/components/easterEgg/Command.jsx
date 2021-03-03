import React, { useEffect, useState, useCallback } from 'react';

// css
import './Command.css';

// custom components
import User from "./User";
import Help from "./commands/Help";
import Sans from "./sans/Sans";

function Command() {
    const [display, setDisplay] = useState([
        <div className="command-base">
            <User path="~" />
            <input autoFocus className="command-input" type="text"/>
        </div>
    ])

    const displayCommand = (value) => {
        const splitString = value?.includes(" ") ? value.split(" ") : [value, ""];
        switch (splitString[0]) {
            case "help":
                return <Help />
            case "sans":
                return <Sans />
            default:
                return(
                    <>
                        <p>The command you entered was either incorrect or not supported</p>
                        <Help />
                    </>
                )
        }
    }

    const render = (value) => {
        const toAdd = <>
            {displayCommand(value)}
            <div className="command-base">
                <User path="~" />
                <input autoFocus className="command-input" type="text"/>
            </div>
        </>
        setDisplay([
            ...display,
            toAdd
        ])
    }

    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;
        if (keyCode === 13) {
            render(event.target.value);
        }
    }, [render])

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    return(
        <div className="command">
            {display?.map(element => (
                <>
                    {element}
                </>
            ))}
        </div>
    )
}

export default Command;