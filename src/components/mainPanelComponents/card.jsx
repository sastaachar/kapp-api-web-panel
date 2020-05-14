import React from "react";
import moment from "moment";

import "../../css/card.css";

const Card = (props) => {
  const { title, time, description, author, tags, _id } = props.article;

  return (
    <div className="card ">
      <div className="card-body">
        <p className="cardTitle">{title}</p>
        <p className="cardTime">
          {moment(time).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <p className="cardDescp"> {description}</p>
        <p className="cardAuthor">- {author}</p>
        {tags.map((tag, index) => (
          <span className="tagPill" key={index}>
            {tag}
          </span>
        ))}
        <br></br>
        <p className="cardID">{_id}</p>
      </div>
    </div>
  );
};

export default Card;
