import React from "react";

import "../../css/inputField.css";

const InputField = (props) => {
  const { text, id, className, type } = props;
  const inputClass = "inputBox form__group field " + className;
  return (
    <div className={inputClass}>
      <input
        type={type}
        className="form__field"
        placeholder={text}
        name={id}
        id={id}
        required
      />
      <label htmlFor={id} className="form__label">
        {text}
      </label>
      <input type="checkbox" defaultChecked={true} />
      <label className="regexOpt" id={id + "Regex"}>
        Use regex
      </label>
    </div>
  );
};

export default InputField;