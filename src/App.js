import React, { Component } from "react";
import logo from "../src/Images/AAS_logo-01.svg";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import "./App.css";

import CRF from "./Components/clubRegForm/ClubRegForm.js";
import URF from "./Components/UserRegForm/UserRegForm";
import SSF from "./Components/SeasonSetupForm/SeasonSetupForm";
import LF from "./Components/LoginForm/LoginForm";
import FRF from "./Components/FleetRegForm/FleetRegForm";

class App extends Component {
  render() {
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

        <div className="LF">
          <Route exact path="/" component={LF}/>
          {/* <LF /> */}
        </div>

        <div className="URF">
        <Route path="/URF" component={URF} />
          {/* <URF /> */}
        </div>

        <div className="CRF">
          <Route path="/CRF" component={URF} />
          {/* <CRF /> */}
        </div>

        <div className="SSF">
          <Route path="/SSF" component={SSF} />
          {/* <SSF /> */}
        </div>

        <div className="FRF">
        <Route path="/FRF" component={FRF} />
          {/* <FRF /> */}
        </div>
      </div>
    );
  }
}

export default App;
