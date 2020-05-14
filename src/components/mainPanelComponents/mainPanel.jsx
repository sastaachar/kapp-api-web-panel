import React, { Component } from "react";

import "../../css/mainPanel.css";
import "../../css/loaderAnim.css";

import SmallInfo from "./smallInfo";
import ArticleDisplay from "./articleDisplay";
import FilterOption from "./filterOption";
import LargeInfo from "./largeInfo";

class MainPanel extends Component {
  state = {
    articles: null,
    loading: false,
    articleCount: 0,
    authorCount: 0,
    tagCount: 0,
    articleFreqSeries: [
      {
        name: "Articles",
        data: [],
      },
    ],
  };

  //reset day
  resetDay = (date) => {
    date.setUTCHours(0);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(1);
    return date;
  };

  //fill the dates,freq data
  fillArticleData = (articles) => {
    let data = {};
    articles.forEach((article) => {
      //console.log(this.resetDay(new Date(article.time)));
      const tempDate = this.resetDay(new Date(article.time));
      if (!data[tempDate]) data[tempDate] = 1;
      else data[tempDate] += 1;
    });

    return Object.entries(data);
  };

  //To get all the required articles
  handleSearch = async (link, method, params, body) => {
    this.setState({ loading: true });
    console.log(
      `${method} req to ${link} with parms ${params} and body ${body}`
    );
    try {
      let msgData = await fetch(link, {
        method,
      });
      msgData = await msgData.json();
      const articles = msgData.message.articles;
      const articleCount = msgData.message.articles.length;
      const authorCount = msgData.message.authors.length;
      const tagCount = msgData.message.tags.length;
      const articleFreqSeries = [
        {
          name: "Article",
          data: this.fillArticleData(articles),
        },
      ];
      this.setState({
        articles,
        articleCount,
        authorCount,
        tagCount,
        articleFreqSeries,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      articleCount,
      authorCount,
      tagCount,
      articles,
      loading,
    } = this.state;
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
            <LargeInfo
              loading={loading}
              articleFreqSeries={this.state.articleFreqSeries}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPanel;
