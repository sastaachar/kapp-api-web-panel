import React, { Component } from "react";

class SmallInfoItem extends Component {
  state = {};
  render() {
    const { count, item, info } = this.props;
    return (
      <div className="smallInfoItem">
        <div className="circleSmallInfo"></div>
        <div className="countInfo">
          <span className="font1">{count}</span>
          <span className="font2"> {item}</span>
        </div>
        <span className="font3">{info}</span>
      </div>
    );
  }
}

export default SmallInfoItem;
