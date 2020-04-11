import React, { Component } from "react";

const ButtonRandom = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-${props.passRandomActive} m-2`}
      onClick={() => props.onHandleRandom()}
    >
      Random
    </button>
  );
};

export default ButtonRandom;
