import React from "react";
import moment from "moment";
const Card = (props) => {
  const { title, time, description, author, tags, _id } = props.article;
  return (
    <div className="card m-2">
      <div className="card-body" style={{ alignContent: "right" }}>
        <h4 key="title" className="card-title text-center">
          {title}
        </h4>
        <p className="card-subtitle mb-2 text-muted text-center">
          {moment.utc(time).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <h6 className="card-tex text-center"> {description}</h6>
        <p className="card-tex text-right">- {author}</p>
        {tags.map((tag, index) => (
          <span key={index} className="badge badge-pill badge-primary m-1 p-1">
            {tag}
          </span>
        ))}
        <br></br>
        <p className="badge badge-pill badge-warning">{_id}</p>
      </div>
    </div>
  );
};

export default Card;
