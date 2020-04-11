import React, { Component } from "react";

const ButtonSubtract = (props) => {
  return (
    <button
      type="button"
      className={
        props.passNum % 2 === 0 ? "btn btn-success" : "btn btn-warning"
      }
      onClick={() => props.onHandleDecrement()}
    >
      Subtract
    </button>
  );
};

export default ButtonSubtract;
