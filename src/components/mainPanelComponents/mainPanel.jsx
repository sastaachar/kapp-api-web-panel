import React, { Component } from "react";

import "../../css/mainPanel.css";
import "../../css/loaderAnim.css";

import SmallInfo from "./smallInfo";
import ArticleDisplay from "./articleDisplay";
import FilterOption from "./filterOption";
import LargeIno from "./smallInfo";

class MainPanel extends Component {
  state = {
    articles: null,
    loading: false,
    articleCount: 0,
    authorCount: 0,
    tagCount: 0,
  };

  //To get all the required articles
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
      const articleCount = data.message.articles.length;
      const authorCount = data.message.authors.length;
      const tagCount = data.message.tags.length;
      console.log(data.message);
      this.setState({
        articles,
        articleCount,
        authorCount,
        tagCount,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { articleCount, authorCount, tagCount, articles } = this.state;
    return (
      <React.Fragment>
        {this.state.loading ? <div className="loader"></div> : null}
        <div className="mainPanelContainer">
          <div className="main-panel">
            <SmallInfo
              articleCount={articleCount}
              authorCount={authorCount}
              tagCount={tagCount}
            />
            <ArticleDisplay articles={articles} />
            <FilterOption onSearch={this.handleSearch} />
            <LargeIno />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPanel;
