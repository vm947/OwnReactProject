import React, { Component } from 'react';

const HelloWorld = props => {
    return ( 
        <div>
            <p>{props.passPhrase} {props.passNum}</p>
        </div>
     );
}
 
export default HelloWorld;