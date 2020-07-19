import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";
import About from "./components/About";
import Home from "./components/Pages/Home";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
if(localStorage.token){
    setAuthToken(localStorage.token)
}

function App() {
    return (
        <AuthState>
            <div className="App">
                <Router>
                    <Navbar/> {/*Navbar*/}
                    <Switch>
                        <Route exact path={'/schedule'} component={Home}/>
                        <Route exact path={'/'} component={Login}/>
                        <Route exact path={'/about'} component={About}/>

                    </Switch>
                </Router>
            </div>
        </AuthState>
    );
}

export default App;
