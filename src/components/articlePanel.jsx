import React, { Component } from "react";

import Card from "./card";

class ArticlePanel extends Component {
  state = {};
  render() {
    const { loading, articles } = this.props;
    return (
      <div className="panel" style={{ backgroundColor: "#46469E" }}>
        {loading ? <p>Loding...</p> : null}
        {articles && !loading ? (
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

export default ArticlePanel;
//#6F2D86#D71076
