import React, { Component } from 'react';

const HelloWorld = props => {
    return ( 
        <div>
            <p>I say {props.passNum}</p>
        </div>
     );
}
 
export default HelloWorld;