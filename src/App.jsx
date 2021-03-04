import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// custom components
import Base from './views/Base';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Terminal from "./views/Terminal";
import CodeEditor from "./components/easterEgg/commands/CodeEditor";

function App() {

    useEffect(() => {
        if (!localStorage.getItem("visited")) {
            localStorage.setItem("visited", 0)
        }
    }, [])

    return (
        <div>
            <Router>
                {/*<Terminal />*/}
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Base/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
