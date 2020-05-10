import React, { Component } from "react";

import "./App.css";

import SideBar from "./components/sideBarComponents/sideBar";
import TopBar from "./components/topBarComponents/topBar";
import MainPanel from "./components/mainPanelComponents/mainPanel";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="main-app">
        <SideBar />
        <TopBar />
        <MainPanel />
      </div>
    );
  }
}

export default App;
