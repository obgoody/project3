import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/index.css';
// import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Home from './pages/home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Nav';

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
