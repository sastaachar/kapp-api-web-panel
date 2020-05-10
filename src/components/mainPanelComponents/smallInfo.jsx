import React, { Component } from "react";

import SmallInfoItem from "./smallInfoItem";

class SmallInfo extends Component {
  state = {};
  render() {
    const { articleCount, authorCount, tagCount } = this.props;
    return (
      <div className="smallInfo">
        <SmallInfoItem count={articleCount} item="Articles" info="awdwadawd" />
        <SmallInfoItem count={authorCount} item="Authors" info="awdwadawd" />
        <SmallInfoItem count={tagCount} item="Tags" info="awdwadawd" />
      </div>
    );
  }
}

export default SmallInfo;
