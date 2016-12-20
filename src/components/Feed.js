import React, { Component } from 'react';
import Tweet from './Tweet'
import {reactiveComponent} from 'omnistream'
import {closeStream} from '../actions/actions'
import TweetInfo from './TweetInfo';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.closeStream = this.closeStream.bind(this);
  }

  closeStream() {
    console.log("trying to close stream with", this.props.keyword)
    this.props.dispatch(closeStream(this.props.keyword));
  }

  render() {
    return (
      <div className='feed'>
        <h2 className='feed-title'>{this.props.keyword}</h2>
        <button onClick={this.closeStream} className='delete'>Pause</button>
        <TweetInfo rate={this.props.rate} count={this.props.count} />
      </div>
    )
  }
}

export default reactiveComponent(Feed, 'tweetState$')
