import React, { Component } from 'react';

import './Icon.css';

export default class Icon extends Component {
  constructor (props) {
    super(props);

    this.state = {
      liked: false
    };
  }
  render () {
    const liked = () => {
      this.setState({
        liked: !this.state.liked
      });
    };

    return (
      <img
        className={this.state.liked ? "icon liked" : "icon"}
        onClick={liked}
        src={this.props.src}
        />
    );
  }
}

//
// if (a) {
//   alert('Hello');
// } else {
//   alert('World');
// }
//
// a ? alert('Hello') : alert('World');
//
//
// alert(a ? 'Hello' : 'World');



// export default (props) => {
//   const liked = () => {
//     alert('Liked!')
//   };
//   return (
//     <img className="icon" onClick={liked} src={props.src} />
//   );
// };
