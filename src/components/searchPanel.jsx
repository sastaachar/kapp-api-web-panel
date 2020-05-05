import React, { Component } from "react";
class SearchPanel extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4" style={{ backgroundColor: "#D71076" }}>
        Panel
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

export default SearchPanel;
