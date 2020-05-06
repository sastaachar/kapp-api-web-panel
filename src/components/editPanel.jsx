import React, { Component } from "react";
class EditPanel extends Component {
  state = {};
  render() {
    return (
      <div className="panel" style={{ backgroundColor: "#D71076" }}>
        EDItttttttttttt
        <input type="text" />
        <button
          onClick={() =>
            this.props.onSearch(
              "https://khacksappapi01011999.herokuapp.com/articles/",
              "GET",
              {},
              {}
            )
          }
          style={{ backgroundColor: "#FF7546" }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default EditPanel;
