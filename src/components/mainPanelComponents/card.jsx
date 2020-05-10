import React from "react";
import moment from "moment";
const Card = (props) => {
  const { title, time, description, author, tags, _id } = props.article;
  return (
    <div className="card ">
      <div className="card-body">
        <h4 key="title">{title}</h4>
        <p>{moment(time).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <h6> {description}</h6>
        <p>- {author}</p>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
        <br></br>
        <span>{_id}</span>
      </div>
    </div>
  );
};

export default Card;
