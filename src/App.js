import React, { Component } from 'react';
import logo from '../src/Images/AAS_logo-01.svg';
import './App.css';
import AASAppBar from './Components/AppBar/AppBar.js'
// import ClubRegForm from './Components/clubRegForm/ClubRegForm.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Appendix A Scoring</h1>
          <AASAppBar></AASAppBar>
        </header>
        <ul>
          <h3>This project aims to provide:</h3>   
          <li>Consistent and correct results</li>
          <li>A more user friendly interface</li>
          <li>The ability to score in multiple handicaps</li>
          <li>The ability to have multiple points systems</li>
          <li>The ability to break 3+ way ties in overall results</li>
        </ul>
        <ul>
          <h3>Future aims of this project:</h3>
          <li>A mobile component to get scoring started while you're on the water</li>
          <li>To incorporate voice recognition into scoring information</li>
          <li>To incorporate image recognition into scoring information</li>
        </ul>

        {/* <div className="ClubRegForm">
          <ClubRegForm></ClubRegForm>
        </div> */}

        <form>
          <p className="App-intro">
            To get started, please login:
          </p>
          <label>
            User Name:
            <input type = 'text' name = 'userName'/>
          </label>
          <label>
            Password:
            <input type = 'text' name = 'password' />
          </label>
            <input type = 'submit' value = 'submit' />
        </form>
        <p>
          Not a user yet? Head over here to sign up
        </p>
        <button>sign up</button>
      </div>
    );
  }
}

export default App;
