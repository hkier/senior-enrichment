import React, { Component } from 'react';

export default (props) => {
let url = props.url;
return (
    <img className="campus-image" src={`${props.url}`} />
)

}