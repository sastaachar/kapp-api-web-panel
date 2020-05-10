import React, { Component } from "react";

import SmallInfoItem from "./smallInfoItem";

class SmallInfo extends Component {
  state = {};
  render() {
    const { articleCount, authorCount, tagCount } = this.props;
    return (
      <div className="smallInfo">
        <SmallInfoItem
          count={articleCount}
          item="Articles"
          info="awdwadawd"
          color="#a687e0"
          iconClass="cIcon fa fa-address-card-o fa-2x"
        />
        <SmallInfoItem
          count={authorCount}
          item="Authors"
          info="awdwadawd"
          color="#10C4AE"
          iconClass="cIcon fa fa-user fa-2x"
        />
        <SmallInfoItem
          count={tagCount}
          item="Tags"
          info="awdwadawd"
          color="#FDC003"
          iconClass="cIcon fa fa-tags fa-2x"
        />
      </div>
    );
  }
}

export default SmallInfo;
