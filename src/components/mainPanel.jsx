import React, { Component } from "react";

import SearchPanel from "./searchPanel";
import ArticlePanel from "./articlePanel";
//import fetch from "fetch";

class MainPanel extends Component {
  state = {
    articles: [
      {
        title: "hola",
        description: "hola amigo",
        time: "123",
        author: "123",
        tags: ["ataag1", "aaatag2", "aawd"],
        _id: "1233",
      },
      {
        title: "hola 2",
        description: "hola amigo 2 2",
        time: "34512323",
        author: "456112312323",
        tags: ["bbtag1", "bbtag2", "bbawd"],
        _id: "1123",
      },
      {
        title: "hola 3",
        description: "hola amigo 3 3",
        time: "33",
        author: "3 23 323",
        tags: ["ccbtag1", "ccacg2", "cccbawd"],
        _id: "5123",
      },
    ],
  };

  handleSearch = async (link, method, params, body) => {
    console.log(
      `${method} req to ${link} with parms ${params} and body ${body}`
    );
    const articles = await fetch(
      "https://khacksappapi01011999.herokuapp.com/articles/",
      {
        method: "GET",
      }
    );
    console.table(articles);
  };

  render() {
    return (
      <div className="row">
        <SearchPanel onSearch={this.handleSearch} />
        <ArticlePanel articles={this.state.articles} />
      </div>
    );
  }
}

export default MainPanel;
