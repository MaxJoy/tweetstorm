import React, { Component } from 'react';
import Title from './Title'
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
      < Feed />
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
