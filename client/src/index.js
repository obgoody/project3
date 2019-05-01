import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import SideNav from './components/SideNav'
import Sale from './pages/Sale';



// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>

            <Navbar />
            <SideNav />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} /> 
            <Route exact path="/sale" component={Sale} />
            <Footer />         
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
