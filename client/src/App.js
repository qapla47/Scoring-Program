import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import * as Components from './Components';
import logo from "../src/Images/AAS_logo-01.svg";
import "./App.css";



class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
    };
  }

  componentWillMount() {
    if (localStorage.getItem('uuID')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  doLogout() {
    localStorage.setItem('uuID', '');
    wondow.location = '/';
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Appendix A Scoring</h1>
          {/* <AASAppBar></AASAppBar> */}
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
          <li>
            A mobile component to get scoring started while you're on the water
          </li>
          <li>To incorporate voice recognition into scoring information</li>
          <li>To incorporate image recognition into scoring information</li>
        </ul>

        {/* {<div className="ClubRegForm">
          <ClubRegForm></ClubRegForm>
        </div> */}

        <Route exact path="/" component={Components.LF}></Route>
        <Route path="/new-user" component={Components.URF}></Route>
        <Route path="/new-club" component={Components.URF}></Route>
        <Route path="/new-season" component={Components.SSF}></Route>
        {/* <Route path="/new-day" component={Components.DRF}></Route> */}
        {/* <Route path="/new-series" component={Components.SRRF}></Route> */}
        <Route path="/new-fleet" component={Components.FRF}></Route>
        {/* <Route path="/new-boat" component={Components.BRF}></Route> */}
        {/* <Route path="/new-race" component={Components.RDF}></Route> */}

      </div>
    );
  }
}

export default App;
