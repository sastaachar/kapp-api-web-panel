import React, { Component } from "react";
class ArrayInput extends Component {
  state = {};

  render() {
    return (
      <div>
        <label htmlFor="ele">Tags</label>
        <input type="text" id="ele" />
        <button
          onClick={() => {
            this.props.addEle(document.getElementById("ele").value);
            document.getElementById("ele").value = "";
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default ArrayInput;
