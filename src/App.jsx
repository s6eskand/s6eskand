import React, { useEffect } from 'react';
import './App.css';
import './media/themes/prism.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// custom components
import Base from './views/Base';
import Navbar from './components/navigation/Navbar';
import Terminal from "./views/Terminal";
import Solution from "./components/easterEgg/codeEditor/Solution";
import Crash from "./views/Crash";
import Quiz from "./components/easterEgg/quiz/Quiz";
import DontTouch from "./components/easterEgg/dontTouch/DontTouch";
import Reward from "./components/easterEgg/reward/Reward";

function App() {

    useEffect(() => {
        if (!localStorage.getItem("visited")) {
            localStorage.setItem("visited", 0)
        }
        if (!localStorage.getItem("game")) {
            const gameData = {
                wins: 0,
                codeSolution: "// your solution here",
                level: 1
            }
            localStorage.setItem("game", JSON.stringify(gameData))
        }
    }, [])

    if (localStorage.getItem("crash")) {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Crash} />
                        <Route exact path="/terminal" component={Terminal} />
                        <Route exact path="/solution" component={Solution} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/dont-touch" component={DontTouch} />
                        <Route exact path="/reward" component={Reward} />
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Base/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
