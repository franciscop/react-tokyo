import React, { Component } from 'react';

export default (props) => (
  <ul>
    {props.data.map(img => (
      <img src={img} />
    ))}
    <li>I work!</li>
  </ul>
);
