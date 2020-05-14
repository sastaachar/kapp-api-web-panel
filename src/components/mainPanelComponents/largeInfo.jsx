import React, { Component } from "react";

import "../../css/largeInfo.css";
import ArticleFreqChart from "./articleFreqChart";
class LargeInfo extends Component {
  state = {};
  render() {
    return (
      <div className="charts-container">
        <ArticleFreqChart
          loading={this.props.loading}
          series={this.props.articleFreqSeries}
        />
      </div>
    );
  }
}

export default LargeInfo;
