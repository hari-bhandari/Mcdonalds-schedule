import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";
import About from "./components/About";
import Home from "./components/Pages/Home";
import ScheduleState from "./context/bootcamps/ScheduleState";

function App() {
    return (
        <ScheduleState>
            <div className="App">
                <Router>
                    <Navbar/> {/*Navbar*/}
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/login'} component={Login}/>
                        <Route exact path={'/about'} component={About}/>

                    </Switch>
                </Router>
            </div>
        </ScheduleState>
    );
}

export default App;
