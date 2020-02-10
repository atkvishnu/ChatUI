import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';
import LoginComponent from './components/login/login';
import SignupComponent from './components/signup/signup';
import DashboardComponent from './components/dashboard/dashboard';
import MainPageComponent from './components/mainpage/mainpage'


// const firebase = require("firebase");
require("firebase/firestore");
  
firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

// firebase.analytics();

const routing = (
    <Router>
        <div id='routing-container'>
            <Route exact path='/' component={MainPageComponent}></Route>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
