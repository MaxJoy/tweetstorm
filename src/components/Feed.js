import React, { Component } from 'react';
import Tweet from './Tweet'


class Feed extends Component {
  constructor(props) {
    super(props);
   }

  componentDidMount() { 
    this.props.dispatchObservableFn(getTweets);
  }
  
  render() {
    const tweets = this.props.tweets.map(tweet => {
      <Tweet tweet={tweet}/>
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
