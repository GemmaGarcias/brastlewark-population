import React, { Component } from 'react';
import Header from './header/Header';
import Home from './home/Home';
import Main from './main/Main';
import firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      });
    })
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res => console.log(res.user.email, 'ha iniciado sesión'))
    .catch(error => console.log(`Error ${error.code}. ${error.message}`))
  }

  handleLogout(){
    firebase.auth().signOut()
    .then(res => console.log(res.user.email, 'ha salido'))
    .catch(error => console.log(`Error ${error.code}. ${error.message}`))
  }

  renderLonginButton(){
    if (this.state.user) {
      return(
        <div>
          <img width='50' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>{this.state.user.displayName}</p>
          <button onClick = {this.handleLogout}>Salir</button>
          <Header />
          <Main />
        </div>
      );
    }else{
      return(
      <button onClick={this.handleAuth}>Login con Google</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Home />
        {this.renderLonginButton()}
      </div>
    );
  }
}

export default App;
