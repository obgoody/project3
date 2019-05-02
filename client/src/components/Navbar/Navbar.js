import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import "./style.css";


class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/search"><i class="fas fa-search"></i>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add"><i class="fas fa-plus"></i>Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile"><i class="fas fa-male"></i>Profile</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" href="/login" onClick={() => this.Auth.logout()}><i class="fas fa-sign-out-alt"></i>Logout</a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup"><i class="fas fa-user-plus"></i>Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><i class="fas fa-sign-in-alt"></i>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search"><i class="fas fa-search"></i>Search</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/search">Garage Sale Finder</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;