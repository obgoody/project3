import React, { Component } from "react";
import logo from './images/logo2.png'
import './style.css';
// import { Link } from 'react-router-dom';
import AuthService from '../AuthService';


class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add">Add Sale</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Add Sale</a>
                    </li>
                </ul>
            );

        }
    };
    render() {
        return (

            <nav className="navbar  navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    {this.showNavigation()}

                </div>
            </nav>





        )
    }
}

export default Navbar;