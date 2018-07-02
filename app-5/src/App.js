import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './components/Image'

class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
          <Image newImage={'http://via.placeholder.com/350x150'}/>
      </div>
    );
  }
}

export default App;
