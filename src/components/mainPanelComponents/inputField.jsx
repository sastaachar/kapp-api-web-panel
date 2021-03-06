import React from "react";

import "../../css/inputField.css";

const InputField = (props) => {
  const { text, id, className, type } = props;
  const inputClass = "inputBox form__group form_field " + className;
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
      <button
        className="cancelBtn"
        onClick={() => {
          const ele = document.getElementById(id);
          ele.value = "";
        }}
      ></button>

      {type !== "date" ? (
        <React.Fragment>
          <input type="checkbox" id={id + "Regex"} defaultChecked={true} />
          <label className="regexOpt">Use regex</label>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default InputField;
