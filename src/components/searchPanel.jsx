import React, { Component } from "react";

import ArrayInput from "./arrayInput";
import TextInput from "./textInput";
import DateInput from "./dateInput";

class SearchPanel extends Component {
  state = { tags: [] };

  makeQuery = (link) => {
    let author = document.getElementById("author").value,
      title = document.getElementById("title").value,
      fromDate = document.getElementById("fromDate").value,
      toDate = document.getElementById("toDate").value,
      sortBy = document.getElementById("sortBy").value,
      tags = this.state.tags;

    tags.forEach((ele) => {
      link += `&tags[]=${ele}`;
    });
    if (title) link += `&title=${title}`;
    if (author) link += `&author=${author}`;
    if (fromDate) link += `&fromDate=${fromDate}`;
    if (toDate) {
      let endOfDay = new Date(toDate);
      endOfDay.setUTCHours(23, 59, 59, 999);
      link += `&toDate=${endOfDay.toISOString()}`;
    }
    if (sortBy) link += `&sortBy=${sortBy}&orderBy=asc`;
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
      <div className="panel-side" style={{ backgroundColor: "#D71076" }}>
        <TextInput name="title" />
        <TextInput name="author" />
        <DateInput name="toDate" />
        <DateInput name="fromDate" />
        <TextInput name="sortBy" />
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
