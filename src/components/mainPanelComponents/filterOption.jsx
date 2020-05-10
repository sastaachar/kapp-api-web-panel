import React, { Component } from "react";

import InputField from "./inputField";

import "../../css/filterOption.css";

class FilterOption extends Component {
  state = {
    tags: [],
  };

  makeQuery = (link) => {
    let author = document.getElementById("author").value,
      title = document.getElementById("title").value,
      fromDate = document.getElementById("fromDate").value,
      toDate = document.getElementById("toDate").value,
      tags = this.state.tags;

    tags.forEach((ele) => {
      link += `&tags[]=${ele}`;
    });
    //change time of toDate to 23 59 59 999
    if (author) link += `&author=${author}`;
    if (title) link += `&author=${title}`;
    if (fromDate) link += `&fromDate=${fromDate}`;
    if (toDate) link += `&toDate=${toDate}`;
    return link;
  };

  render() {
    return (
      <div className="filter-grid-container">
        <div className="filter-top">Top</div>
        <InputField text="Author" id="author" className="filter-search1" />
        <InputField text="Title" id="title" className="filter-search2" />

        <button
          className="btn filter-search "
          onClick={() =>
            this.props.onSearch(
              this.makeQuery(
                "https://khacksappapi01011999.herokuapp.com/articles?metaTags=true&metaAuthors=true"
              ),
              "GET",
              {},
              {}
            )
          }
        >
          GET
        </button>

        <InputField
          text="From Date"
          type="date"
          id="fromDate"
          className="filter-search3"
        />
        <InputField
          text="To Date"
          type="date"
          id="toDate"
          className="filter-search4"
        />

        <div className="filter-tag">tags</div>
        <div className="filter-splOption">splOption</div>
      </div>
    );
  }
}

export default FilterOption;
