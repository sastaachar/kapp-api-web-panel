import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import MainPanel from "./components/mainPanel";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainPanel />
      </React.Fragment>
    );
  }
}

export default App;
