import React from "react";

const TextInput = (props) => {
  let { name } = props;
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} />
    </div>
  );
};

export default TextInput;
