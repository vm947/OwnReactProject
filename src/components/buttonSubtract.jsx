import React, { Component } from "react";

const ButtonSubtract = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-${props.passSubActive}`}
      onClick={() => props.onHandleDecrement()}
    >
      Subtract
    </button>
  );
};

export default ButtonSubtract;
