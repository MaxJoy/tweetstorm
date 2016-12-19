import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className='title'>
        <h1>TweetStorm</h1>  
        <input type='text' placeholder='type keyword here' />
        <button className='add-column'>Add Column</button>
      </div>  
    )
  }
}

export default Title

