import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div className='Tweet'>
        <p>{this.props.tweet}</p>
      </div>
    )
  }
}

export default Tweet
