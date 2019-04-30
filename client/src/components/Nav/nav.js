import React, { Component } from "react";
import logo from './images/logo.jpg'
import './style.css';

class Navbar extends Component {


    render() {
        return (

                <nav className="navbar  navbar-light bg-light">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link " href="#">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">List</a>
                    </li>

                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login Member</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Add Garage</a>
                    </li>
  
                    </ul>

                </div>
                </nav>





        )
    }
}

export default Navbar;