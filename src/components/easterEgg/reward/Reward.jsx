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
        data.wins += 1;
        localStorage.setItem("game", JSON.stringify(data));
        localStorage.removeItem("crash");
        history.push("/");
        window.location.reload();
    }

    useEffect(() => {
        const { level } = JSON.parse(localStorage.getItem("game"));
        if (level !== 3) {
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