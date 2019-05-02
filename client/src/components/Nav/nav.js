import React, { Component } from "react";
import logo from './images/logo.jpg'
import './style.css';

class Navbar extends Component {


    render() {
        return (

                <nav className="navbar  navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
                <ul className="nav justify-content-center">
                    <li className="nav-item ">
                        <a className="nav-link nav-icon" href="/"> <i className="far fa-map"></i> Map</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-icon" href="./Sale"> <i className="fas fa-th-list"></i> List</a>
                    </li>

                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./login">Login Member</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./search">Search Garage Sales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./add">Add Garage</a>
                    </li>
  
                    </ul>

                </div>
                </nav>





        )
    }
}

export default Navbar;