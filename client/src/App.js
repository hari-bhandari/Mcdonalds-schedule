import React, {Fragment, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Redirect} from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import BootcampState from "./context/bootcamps/BootcampState";
import AlertState from "./context/alert/alertState";
import ReviewState from "./context/reviews/ReviewState";

import Alerts from "./Components/layouts/Alerts";
import './App.css';
import Navbar from './Components/layouts/Navbar'
import Home from './Components/pages/Home'
import Login from './Components/auth/Login'
import Register from "./Components/auth/Register";
import setAuthToken from "./utils/setAuthToken";
import BootcampsPage from "./Components/Bootcamps/Pages/BootcampsPage";
import ManageAccount from "./Components/auth/ManageAccount";
import BootcampPage from "./Components/Bootcamps/Pages/BootcampPage";
import Page404 from "./Components/404/Page404";
import 'bootstrap/dist/css/bootstrap.min.css'
import ManageBootcamp from "./Components/Bootcamps/Pages/ManageBootcamp";

if(localStorage.token){
    setAuthToken(localStorage.token)
}


const App = () => {

    return (
        <AuthState>
            <BootcampState>
            <AlertState>
                <ReviewState>
                <Router>
                    <Fragment>
                        <Navbar/>
                        <Alerts/>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/bootcamps'} component={BootcampsPage}/>
                            <Route exact path={'/bootcamps'} component={BootcampsPage}/>
                            <Route exact path={'/manage-account'} component={ManageAccount}/>
                            <Route exact path={'/bootcamps/:id'} component={BootcampPage}/>
                            <Route exact path={'/bootcamps/edit/:id'} component={ManageBootcamp}/>
                            <Route exact path={'/404'} component={Page404}/>
                            <Redirect to="/404" />
                        </Switch>
                    </Fragment>
                </Router>
                </ReviewState>
            </AlertState>
            </BootcampState>
        </AuthState>
    );
};

export default App;
