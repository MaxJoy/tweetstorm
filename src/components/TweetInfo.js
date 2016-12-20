import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div className='tweet'>
        <p>{this.props.count} total tweets</p>
        <p>{this.props.rate} tweets per second</p>
      </div>
    )
  }
}

export default Tweet
