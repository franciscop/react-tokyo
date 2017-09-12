import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav.js';
import Feed from './Feed.js';

const data = [
  'https://api.adorable.io/avatars/200/1@adorable.png',
  'https://api.adorable.io/avatars/200/2@adorable.png',
  'https://api.adorable.io/avatars/200/3@adorable.png',
  'https://api.adorable.io/avatars/200/4@adorable.png',
  'https://api.adorable.io/avatars/200/5@adorable.png',
  'https://api.adorable.io/avatars/200/6@adorable.png',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Feed data={data} />
      </div>
    );
  }
}

export default App;
