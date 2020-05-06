import React, { Component } from "react";

import SearchPanel from "./searchPanel";
import ArticlePanel from "./articlePanel";
import EditPanel from "./editPanel";

//import fetch from "fetch";

class MainPanel extends Component {
  state = {
    articles: null,
    loading: false,
  };

  handleSearch = async (link, method, params, body) => {
    this.setState({ loading: true });
    console.log(
      `${method} req to ${link} with parms ${params} and body ${body}`
    );
    try {
      let data = await fetch(link, {
        method,
      });
      data = await data.json();
      const articles = data.message.articles;
      console.log(articles);
      this.setState({ articles, loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container-fluid no-padding">
        <div className="row">
          <SearchPanel onSearch={this.handleSearch} />
          <ArticlePanel
            articles={this.state.articles}
            loading={this.state.loading}
          />
          <EditPanel />
        </div>
      </div>
    );
  }
}

export default MainPanel;
