import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import './Reward.css';

import Coin from "./Coin";

function Reward() {
    const history = useHistory();

    const handleCollect = () => {
        let data = JSON.parse(localStorage.getItem("game"));
        data.level = 1;
        data.codeSolution = "// add your solution here";
        if (!localStorage.getItem("skipped")) {
            data.wins += 1;
        } else {
            localStorage.removeItem("skipped");
        }
        localStorage.setItem("game", JSON.stringify(data));
        localStorage.removeItem("crash");
        history.push("/");
        window.location.reload();
    }

    useEffect(() => {
        try {
            const {level} = JSON.parse(localStorage.getItem("game"));
            if (level !== 3) {
                history.push("/")
            }
        } catch (e) {
            const data = {
                wins: 0,
                codeSolution: "// add your solution here",
                level: 1
            }
            localStorage.setItem("game", JSON.stringify(data))
            history.push("/")
        }
    }, [])

    return (
        <div className="reward">
            <Coin handleCollect={handleCollect} />
        </div>
    )

}

export default Reward;