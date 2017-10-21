import React, { Component } from 'react';

//this component was built because I needed to isolate the display of the image
//for debugging purposes.  Since it was already broken out and working, I decided to
//leave it here.

export default (props) => {
return (
    <img className="campus-image" src={`${props.url}`} />
)

}