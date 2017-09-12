import React, { Component } from 'react';

import Icon from './Icon.js';

export default (props) => (
  <ul>
    {props.data.map(img => (
      <li>
        <Icon src={img} />
      </li>
    ))}
  </ul>
);

// export default (props) => (
//   <ul>
//     {props.data.map(img => (
//       <img src={img} />
//     ))}
//     <li>I work!</li>
//   </ul>
// );
