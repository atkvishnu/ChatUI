import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';
import LoginComponent from './components/login/login';
import SignupComponent from './components/signup/signup';
import DashboardComponent from './components/dashboard/dashboard';


// const firebase = require("firebase");
require("firebase/firestore");
  
firebase.initializeApp({
    apiKey: "AIzaSyBQqnPIhInZas7Q9a0Yo4XylGj8f4mFOME",
    authDomain: "chatui-c159b.firebaseapp.com",
    databaseURL: "https://chatui-c159b.firebaseio.com",
    projectId: "chatui-c159b",
    storageBucket: "chatui-c159b.appspot.com",
    messagingSenderId: "733539814991",
    appId: "1:733539814991:web:9702379421480f5c60243a",
    measurementId: "G-7WDPDMNW2D"
});

// firebase.analytics();

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
