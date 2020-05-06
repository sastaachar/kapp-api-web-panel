import React, { Component } from "react";
class SearchPanel extends Component {
  makeQuery = (link) => {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    return `${link}author=${author}&title=${title}`;
  };
  render() {
    return (
      <div className="panel" style={{ backgroundColor: "#D71076" }}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input type="text" id="author" />
        </div>
        <button
          style={{ backgroundColor: "#FF7546" }}
          onClick={() =>
            this.props.onSearch(
              this.makeQuery(
                "https://khacksappapi01011999.herokuapp.com/articles?"
              ),
              "GET",
              {},
              {}
            )
          }
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchPanel;
