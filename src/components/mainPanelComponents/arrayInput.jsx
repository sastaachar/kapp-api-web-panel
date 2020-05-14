import React from "react";

import InputField from "./inputField";

const ArrayInput = ({ onAddEle, tags }) => {
  return (
    <React.Fragment>
      <InputField text="Tag" id="tag" className="inputTags" />
      <button
        className="inputTags addBtn "
        onClick={() => {
          let tag = document.getElementById("tag");
          if (tag.value) onAddEle(tag.value);
          tag.value = "";
        }}
      ></button>
      <div className="filter-tags ">
        {tags.map((tag, index) => (
          <span key={index} className="tagPill">
            {tag}
          </span>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ArrayInput;
