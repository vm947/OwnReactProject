import React, { Component } from "react";

const ButtonAdd = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-${props.passAddActive} m-2`}
      onClick={() => props.onHandleIncrement()}
    >
      Add
    </button>
  );
};

export default ButtonAdd;
