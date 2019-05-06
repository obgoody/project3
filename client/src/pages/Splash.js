import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./assets/css/splash.css"

function Splash() {
    return (
        <div class="container">
            <div className="row">
                <div class="jumbotron jumbotron-fluid">

                    <h1 class="display-4"><i class="fas fa-home"></i>Welcome to GSF :3</h1>
                    <p class="lead">check out some local sales or add your own to the most popular repository of garage sales</p>
                    <p>sign up or login in to get started, or just have a look at some local sales</p>
                </div>
            </div>
            <div className="row splashInfo">
                <h1 className="splashh1"> we offer the best, simplest, and free-est home sale listing site on the face of the earth </h1>
                <h2 className="splashh2"> dig a little deeper and check out our sales listed or get your own hosted within minutes! </h2>
            </div>
            <div className="row">
                <div class="card" >
                    <img src="https://moneycrashers-sparkchargemedia.netdna-ssl.com/wp-content/uploads/2012/05/garage-sale-american-weekend-on-yard-1068x600.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">This line explains how awesome and beautiful our site is</p>
                    </div>
                </div>
                <div class="card" >
                    <img src="https://moneycrashers-sparkchargemedia.netdna-ssl.com/wp-content/uploads/2011/08/garage-sale-sign-on-shady-lawn-1068x600.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">this line explains how our site is easier and cheaper than the rest *free atm lmao*</p>
                    </div>
                </div>
                <div class="card" >
                    <img src="https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2017/08/1140-must-grab-items-at-garage-sales.imgcache.reveaaca8585099b2f3310a9492dbc0793d.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">this card is like check out our awesome features and do some things</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Splash;