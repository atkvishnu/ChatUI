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


const firebase = require("firebase");
require("firebase/firestore");
  
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID
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
