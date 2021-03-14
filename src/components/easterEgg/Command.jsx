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
import Verify from "./commands/Verify";
import PrintSolution from "./commands/PrintSolution";

function Command() {
    const [display, setDisplay] = useState([
        <Readme />,
        <div className="command-base">
            <User path="~" />
            <input autoFocus className="command-input" type="text"/>
        </div>
    ])
    const history = useHistory();

    const displayCommand = (value) => {
        let currLevel = 1;
        try {
            const { level } = JSON.parse(localStorage.getItem("game"));
            currLevel = level
        } catch (e) {
            const data = {
                wins: 0,
                codeSolution: "// add your solution here",
                level: 1
            }
            localStorage.setItem("game", JSON.stringify(data))
        }
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
                    return <PrintSolution />
                } else {
                    return <>
                        <p>The file {splitString[1]} does not exist</p>
                        <Help />
                    </>
                }
            case "quit":
                localStorage.removeItem("crash");
                if (localStorage.getItem("skipped")) {
                    localStorage.removeItem("skipped")
                }
                history.push("/")
                window.location.reload();
                break;
            case "sans":
                return <Sans saying />
            case "code":
                if (currLevel !== 1) {
                    return <p>You already completed the coding challenge!</p>
                }
                history.push("/solution")
                break;
            case "verify":
                if (currLevel !== 1) {
                    return <p>You already completed the coding challenge!</p>
                }
                return <Verify />
            case "skip":
                localStorage.setItem("skipped", true);
                let data = JSON.parse(localStorage.getItem("game"));
                data.level = 2;
                localStorage.setItem("game", JSON.stringify(data));
                history.push("/");
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

        if (!localStorage.getItem("game")) {
            const data = {
                wins: 0,
                codeSolution: "// add your solution here",
                level: 1
            }
            localStorage.setItem("game", JSON.stringify(data))
        }

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