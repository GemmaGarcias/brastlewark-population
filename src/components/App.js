import React, { Component } from 'react';
import Index from './gnome-list/Index';
import Header from './common/header/Header';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Index/>
      </div>
    );
  }
}

export default App;
