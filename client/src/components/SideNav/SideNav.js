import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import './style.css';

const openSideNavStyles = {
    width: '250px',
    marginLeft: '0px'
}

const closedSideNavStyles = {
    width: '0px',
    marginLeft: '0px'
}


class SideNav extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }
    state = {
        sideNavStyles: closedSideNavStyles
    }

    closeNav = () => {
        this.setState({
            sideNavStyles: closedSideNavStyles
        })
    }
    openNav = () => {
        this.setState({
            sideNavStyles: openSideNavStyles
        })
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav" style={this.state.sideNavStyles}>
                    <button className="closebtn" onClick={this.closeNav}>X</button>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                    </ul>
                </div>
                <div>
                    <button onClick={this.openNav}>|||</button>
                </div>
            </div>
        )
    }
}



export default SideNav;