import React, { useEffect, useState, useCallback } from 'react';

// css
import './Command.css';

import { useHistory } from 'react-router-dom';

// custom components
import User from "./User";
import Help from "./commands/Help";
import Sans from "./sans/Sans";
import Readme from "./commands/Readme";
import Directory from "./commands/Directory";

function Command() {
    const [display, setDisplay] = useState([
        <div className="command-base">
            <User path="~" />
            <input autoFocus className="command-input" type="text"/>
        </div>
    ])
    const history = useHistory();

    const displayCommand = (value) => {
        const splitString = value?.includes(" ") ? value.split(" ") : [value, ""];
        switch (splitString[0]) {
            case "help":
                return <Help />
            case "ls":
                return <Directory />
            case "cat":
                if (splitString[1] === "readme.txt") {
                    return <Readme />
                } else if (splitString[1] === "solution.js") {
                    return <Readme />
                } else {
                    return <>
                        <p>The file {splitString[1]} does not exist</p>
                        <Help />
                    </>
                }
            case "sans":
                return <Sans saying />
            case "code":
                history.push("/solution")
                break;
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