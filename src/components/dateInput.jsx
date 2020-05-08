import React from "react";

const DateInput = (props) => {
  let { name } = props;
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="date" id={name} />
    </div>
  );
};

export default DateInput;
