import React, { Component } from "react";

import Card from "./card";

class ArticleDisplay extends Component {
  state = {};
  render() {
    const { articles } = this.props;
    return (
      <div className="articleDisplay">
        {articles && articles.length !== 0 ? (
          articles.map((article) => (
            <Card key={article._id} article={article} />
          ))
        ) : (
          <p>No articles</p>
        )}
      </div>
    );
  }
}

export default ArticleDisplay;
