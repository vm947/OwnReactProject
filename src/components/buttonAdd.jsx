import React, { Component } from "react";

const ButtonAdd = (props) => {
  return (
    <button 
    type="button" 
    className={props.passNum % 2 === 0 ? `btn btn-${props.passActive} m-2` : `btn btn-${props.passActive} m-2`}
    onClick = {() => props.onHandleIncrement()}
    >
      Add
    </button>
  );
};

export default ButtonAdd;
