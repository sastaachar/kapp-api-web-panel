import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import ArticleMainPanel from "./components/articleMainPanel";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ArticleMainPanel />
      </React.Fragment>
    );
  }
}

export default App;
