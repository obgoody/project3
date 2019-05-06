import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./assets/css/splash.css"

function Splash() {
    return (
        <div class="container">
            <div className="row">
                <div class="jumbotron jumbotron-fluid">

                    <h1 class="display-4">Welcome to Market Street</h1>
                    <p class="lead">check out some local sales or add your own to the most popular repository of garage sales</p>
                    <p><i class="fas fa-star-of-life"></i>sign up or login in to get started, or just have a look at some local sales<i class="fas fa-star-of-life"></i></p>
                </div>
            </div>
            <div className="row splashInfo">
                <h1 className="splashh2"> we offer the best, simplest, and free-est home sale listing site on the face of the earth </h1>
                <h2 className="splashh2"> dig a little deeper and check out our sales listed or get your own hosted within minutes! </h2>
            </div>
        
        </div>

    )
}

export default Splash;