import React, { Component } from "react";

import ArrayInput from "./arrayInput";

class SearchPanel extends Component {
  state = { tags: [] };
  makeQuery = (link) => {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let tags = this.state.tags;
    tags.forEach((ele) => {
      link += `&tags[]=${ele}`;
    });
    if (author) link += `&author=${author}`;
    if (title) link += `&author=${title}`;
    return link;
  };

  handleAddEle = (ele) => {
    this.state.tags.push(ele);
    this.setState({ tags: this.state.tags });
  };

  onReset = () => {
    this.setState({ tags: [] });
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
        <ArrayInput addEle={this.handleAddEle} />
        {this.state.tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
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
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default SearchPanel;
