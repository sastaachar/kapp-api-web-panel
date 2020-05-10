import React, { Component } from "react";

import "../../css/sideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sideBar">
        <span>SideBar</span>
        <div className="sidebar-item">Iaaaaaaaaaaatem 1</div>
        <div className="sidebar-item">Item 2</div>
        <div className="sidebar-item">Item 3</div>
        <div className="sidebar-item">Item 4</div>
        <br></br>
        <span>Lorem, ipsum.</span>
        <div className="sidebar-item">Item 1</div>
        <div className="sidebar-item">Item 2</div>
        <div className="sidebar-item">Item 3</div>
        <div className="sidebar-item">Item 4</div>
        <br></br>
      </div>
    );
  }
}

export default SideBar;
