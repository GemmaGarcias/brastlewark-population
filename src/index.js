import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

firebase.initializeApp({
  apiKey: "AIzaSyB1qDARnsz2FG8BwsATrVKlKT-7ZVEhaKM",
  authDomain: "trip-sf.firebaseapp.com",
  databaseURL: "https://trip-sf.firebaseio.com",
  projectId: "trip-sf",
  storageBucket: "trip-sf.appspot.com",
  messagingSenderId: "518147829210"
});

ReactDOM.render(
   <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
