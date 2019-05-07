import React from 'react';
// import { Link } from 'react-router-dom';
import "./assets/css/splash.css"

function Splash() {
    return (
        <div className="container">
            <h1 className="display-4 splashh2 home-header header">Welcome to Market Street <i className="fas fa-warehouse"></i></h1>
            <p className="lead splashh2 header">Where garage sales find you.</p>
            <hr />
            <h3 className="splashh2 header"> The best, simplest, and free-est garage sale listing site on the face of the Earth.</h3>
            <hr />
        </div>

    )
}

export default Splash;