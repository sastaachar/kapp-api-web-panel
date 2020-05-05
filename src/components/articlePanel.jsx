import React, { Component } from "react";

import Card from "./card";

class ArticlePanel extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4" style={{ backgroundColor: "#46469E" }}>
        {this.props.articles.map((article) => (
          <Card key={article._id} article={article} />
        ))}
      </div>
    );
  }
}

export default ArticlePanel;
//#6F2D86#D71076
