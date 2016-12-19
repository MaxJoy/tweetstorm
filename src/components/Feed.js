import React, { Component } from 'react';
import Tweet from './Tweet'


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [1, 2]
    }
  }

  componentDidMount() {
    // this.props.dispatchObservableFn(getTweets);
  }

  render() {
    const tweets = this.state.tweets.map(tweet => {
      
      
      return <Tweet tweet={tweet} />
    })
    return (
      <div className='feed'>
        {tweets}
        <button className='delete'>delete</button>
      </div>
    )
  }
}

export default Feed
