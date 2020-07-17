import React from 'react';
import Logo from './logo.svg'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#38b2ac'}}>
            <a className="navbar-brand" href="/#" style={{fontSize:'35px'}}>
                <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt=""/>
                    Schedule
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto" style={{fontSize:'24px'}}>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;