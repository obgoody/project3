import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Home from './pages/home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Nav';
import Geocode from './components/Map/Gecoder';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Sale from './pages/Sale';
import Splash from './pages/Splash';

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Splash} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/add" component={Sale} />
            <Footer />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
