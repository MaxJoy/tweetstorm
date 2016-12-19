import React, { Component } from 'react';
import Title from './Title'
require('../style/style.css');

class App extends Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

export default App




// const ws = new WebSocket('ws://localhost:3000');

// ws.onopen = () => {
//   ws.send('location');
// };

// ws.onmessage = (message) => {
//   console.log(JSON.parse(message.data).text);
// };
