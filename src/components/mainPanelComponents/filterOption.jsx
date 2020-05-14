import React, { Component } from "react";

import InputField from "./inputField";
import ArrayInput from "./arrayInput";

import "../../css/filterOption.css";

class FilterOption extends Component {
  state = {
    tags: [],
  };

  handleAddTag = (tag) => {
    const tags = [...this.state.tags, tag];
    this.setState({ tags });
  };

  makeQuery = (link) => {
    let author = document.getElementById("author").value,
      title = document.getElementById("title").value,
      fromDate = document.getElementById("fromDate").value,
      toDate = document.getElementById("toDate").value,
      orderBy = document.getElementById("orderBy").value,
      sortBy = document.getElementById("sortBy").value,
      tags = this.state.tags;

    if (!document.getElementById("authorRegex").checked)
      link += "&noRegxAuthor=true";
    if (!document.getElementById("titleRegex").checked)
      link += "&noRegxTitle=true";
    if (!document.getElementById("tagRegex").checked)
      link += "&noRegxTags=true";

    tags.forEach((ele) => {
      link += `&tags[]=${ele}`;
    });
    //change time of toDate to 23 59 59 999
    if (author) link += `&author=${author}`;
    if (title) link += `&title=${title}`;
    if (fromDate) link += `&fromDate=${fromDate}`;
    if (toDate) link += `&toDate=${toDate}`;
    link += `&orderBy=${orderBy}&sortBy=${sortBy}`;
    return link;
  };

  handleReset = () => {
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("toDate").value = "";
    document.getElementById("tag").value = "";
    document.getElementById("orderBy").value = "desc";
    document.getElementById("sortBy").value = "time";
    this.setState({ tags: [] });
  };
  render() {
    return (
      <div className="filter-grid-container">
        <div className="filter-top">
          <i className="fa fa-filter fa-2x"></i>
          <span className="filterHeading"> Filter </span>
          <span style={{ fontSize: "20px" }}> and </span>
          <span className="filterHeading"> Search </span>
          <span style={{ fontSize: "20px" }}> options </span>
          <button className="resetBtn" onClick={this.handleReset}>
            Reset
          </button>
        </div>
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
        <div className="filter-search5">
          <label htmlFor="cars">Sort </label>
          <select id="sortBy">
            <option value="time">Time</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="tags">Tags</option>
          </select>
          <span style={{ position: "relative", left: "23px" }}>in a</span>
        </div>
        <div className="filter-search6">
          <select id="orderBy">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <label htmlFor="cars">Order </label>
        </div>
        <ArrayInput onAddEle={this.handleAddTag} tags={this.state.tags} />{" "}
      </div>
    );
  }
}

export default FilterOption;
